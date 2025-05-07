// mipinelabs.js
 CONFIG.mappingFormats.Pinelabs = {
    headers: [
        'Retailer ID', 'Retailer Name', 'Distributor ID', 'Distributor Name',
        'City', 'State', 'TID (8 Digit)', 'POS_ID (4 to 6 Digit)'
    ],
    headerClass: 'th-default',
    rowGenerator: (store, sheet2Data) => {
        const city = store.CITY || '-';
        const state = store.STATE || inferState(city);
        const storeName = store.STORE || 'THE CHENNAI MOBILES';
        // Find all matching Pinelabs machines for this store
        const matchingMachines = sheet2Data.filter(s => s.STORE === storeName);
        if (!matchingMachines.length) {
            // If no machines found, return a single row with default values
            return [[
                '304278', 'THE CHENNAI MOBILES', '', '',
                city, state, '-', '-'
            ]];
        }
        // Generate a row for each Pinelabs machine
        return matchingMachines.map(machine => [
            '304278', 'THE CHENNAI MOBILES', '', '',
            city, state, machine.TID || '-', machine['POS ID'] || '-'
        ]);
    },
    excelColor: '4F46E5'
};

CONFIG.emailDetails.Pinelabs = {
    to: ['neeraj.saini01@pinelabs.com', 'ejaj.ahmed@pinelabs.com'],
    cc: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
    subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | Pinelabs - ${dateStr} | ${storeLabel}`,
    body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
};

CONFIG.financeDisplayNames.Pinelabs = 'Pinelabs';

// Pinelabs-specific generateMapping function
const pinelabsGenerateMapping = (storeData, sheet2Data, selectedStores) => {
    const formatKey = 'Pinelabs';
    const format = CONFIG.mappingFormats[formatKey];
    const stores = storeData.filter(s => selectedStores.includes(s.STORE));
    const storeLabel = getStoreLabel(selectedStores);
    const financeDisplayName = getFinanceDisplayName(formatKey);

    // Reset UI elements
    elements.tableHead.innerHTML = '';
    elements.mappingBody.innerHTML = '';
    elements.noFormatMessage.classList.add('hidden');
    elements.mappingTable.classList.add('hidden');
    elements.exportButton.classList.add('hidden');
    elements.emailInfoSection.classList.add('hidden');
    elements.emailTo.textContent = '-';
    elements.emailCC.textContent = '-';
    elements.emailSubject.textContent = '-';
    elements.emailBody.value = '';

    if (!stores.length) {
        showError('No data found for the selected stores.');
        return;
    }

    if (!formatKey || !format) {
        showError(`No mapping format defined for the selected provider: ${financeDisplayName}.`);
        return;
    }

    // Generate table headers
    const headerHtml = `<tr>${format.headers.map(h => `<th class="${format.headerClass}">${h}</th>`).join('')}</tr>`;
    // Generate table rows, handling multiple TIDs/POS IDs per store
    const bodyRows = stores.flatMap(store => {
        const rowsData = format.rowGenerator(store, sheet2Data);
        return rowsData.map(rowData => `<tr>${rowData.map(cell => `<td>${cell}</td>`).join('')}</tr>`);
    });
    const bodyRowsHtml = bodyRows.join('');

    // Update table
    elements.tableHead.innerHTML = headerHtml;
    elements.mappingBody.innerHTML = bodyRowsHtml;
    elements.mappingTable.classList.remove('hidden');
    elements.exportButton.classList.remove('hidden');

    // Populate email section
    const emailDetails = CONFIG.emailDetails[formatKey];
    if (emailDetails) {
        const today = new Date();
        const dateStr = `${today.getDate().toString().padStart(2, '0')}_${(today.getMonth() + 1).toString().padStart(2, '0')}_${today.getFullYear()}`;
        elements.emailTo.textContent = emailDetails.to?.length ? emailDetails.to.join(', ') : '-';
        elements.emailCC.textContent = emailDetails.cc?.length ? emailDetails.cc.join(', ') : '-';
        elements.emailSubject.textContent = emailDetails.subject(dateStr, storeLabel);
        elements.emailBody.value = emailDetails.body(financeDisplayName, storeLabel);
        elements.emailInfoSection.classList.remove('hidden');
    } else {
        showError(`Mapping generated, but email details are missing for ${financeDisplayName}.`);
    }

    elements.outputDiv.classList.remove('hidden');
};

// Pinelabs-specific exportToExcel function
const pinelabsExportToExcel = () => {
    if (elements.mappingTable.classList.contains('hidden')) {
        alert('No data table is generated. Cannot export.');
        return;
    }

    const headers = Array.from(elements.tableHead.querySelectorAll('th')).map(th => th.textContent.trim());
    const rows = Array.from(elements.mappingBody.querySelectorAll('tr')).map(row =>
        Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim())
    );

    const wb = XLSX.utils.book_new();
    const wsData = [headers, ...rows];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    const formatKey = 'Pinelabs';
    const bgColor = CONFIG.mappingFormats[formatKey]?.excelColor || '4F46E5';

    const borderStyle = {
        top: { style: 'thin', color: { rgb: 'D1D5DB' } },
        bottom: { style: 'thin', color: { rgb: 'D1D5DB' } },
        left: { style: 'thin', color: { rgb: 'D1D5DB' } },
        right: { style: 'thin', color: { rgb: 'D1D5DB' } }
    };

    for (let row = 0; row < wsData.length; row++) {
        for (let col = 0; col < headers.length; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
            if (!ws[cellAddress]) ws[cellAddress] = { t: 's', v: (wsData[row][col] || '').toString() };
            ws[cellAddress].s = { border: borderStyle };
            if (row === 0) {
                ws[cellAddress].s.fill = { patternType: 'solid', fgColor: { rgb: bgColor } };
                ws[cellAddress].s.font = { color: { rgb: 'FFFFFF' }, bold: true };
            } else {
                ws[cellAddress].s.font = { color: { rgb: '000000' } };
            }
        }
    }

    if (wsData.length > 1) {
        ws['!autofilter'] = { ref: XLSX.utils.encode_range(XLSX.utils.decode_range(ws['!ref']).s, XLSX.utils.decode_range(ws['!ref']).e) };
    }

    ws['!cols'] = headers.map((header, i) => {
        const dataMax = Math.max(header.length, ...rows.map(row => (row[i] || '').toString().length));
        return { wch: dataMax + 4 };
    });

    XLSX.utils.book_append_sheet(wb, ws, 'MI Brand Mapping');

    const today = new Date();
    const dateStr = `${today.getDate().toString().padStart(2, '0')}_${(today.getMonth() + 1).toString().padStart(2, '0')}_${today.getFullYear()}`;
    const financeName = getFinanceDisplayName('Pinelabs');
    const storeLabel = getStoreLabel(appState.selectedStores);
    const fileName = `TCM X MI Brand Mapping - ${dateStr} - ${storeLabel} - ${financeName}.xlsx`;

    XLSX.writeFile(wb, fileName);
};

// Pinelabs-specific copyEmailBody function
const pinelabsCopyEmailBody = async () => {
    const textToCopy = elements.emailBody.value.trim();
    if (!textToCopy) {
        elements.copyEmailBodyBtn.textContent = 'Empty!';
        elements.copyEmailBodyBtn.disabled = true;
        setTimeout(() => {
            elements.copyEmailBodyBtn.textContent = 'Copy';
            elements.copyEmailBodyBtn.disabled = false;
        }, 1500);
        return;
    }

    try {
        await navigator.clipboard.writeText(textToCopy);
        elements.copyEmailBodyBtn.textContent = 'Copied!';
        elements.copyEmailBodyBtn.disabled = true;
        setTimeout(() => {
            elements.copyEmailBodyBtn.textContent = 'Copy';
            elements.copyEmailBodyBtn.disabled = false;
        }, 2000);
    } catch (err) {
        try {
            elements.emailBody.select();
            elements.emailBody.setSelectionRange(0, 99999);
            document.execCommand('copy');
            elements.copyEmailBodyBtn.textContent = 'Copied (Fallback)!';
            elements.copyEmailBodyBtn.disabled = true;
            setTimeout(() => {
                elements.copyEmailBodyBtn.textContent = 'Copy';
                elements.copyEmailBodyBtn.disabled = false;
            }, 2000);
        } catch (fallbackError) {
            alert('Failed to copy email body. Please copy it manually.');
            console.error('Copy failed:', fallbackError);
        }
    }
};

// Expose Pinelabs functions to the global scope for script.js to use
window.pinelabsGenerateMapping = pinelabsGenerateMapping;
window.pinelabsExportToExcel = pinelabsExportToExcel;
window.pinelabsCopyEmailBody = pinelabsCopyEmailBody;