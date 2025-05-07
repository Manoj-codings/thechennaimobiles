const CONFIG = {
    brands: ['mi', 'apple', 'samsung', 'hp'],
    financeProviders: ['BAJAJ', 'HDB', 'IDFC', 'HDFC', 'TVS', 'HMC', 'ICICI', 'KOTAK', 'BENOW'],
    keralaCities: ['PALAKKAD', 'EDAPPAL', 'VADAKKANCHERRY', 'PATTAMBI', 'OTTAPALAM'],
    mappingFormats: {
        BAJAJ: {
            headers: [
                'Manufacturer', 'Retailer Name', 'Dealer Code', 'Retailer ID', 'Dist ID',
                'Dealer type (Direct/Indirect)', 'Dealer category (LFR/Regional Retailer/Brand store/Others)',
                'City', 'State', 'OEM Branch'
            ],
            headerClass: 'th-bajaj',
            rowGenerator: (store) => {
                const city = store.CITY || '-';
                const state = inferState(city);
                const storeName = store.STORE || '';
                const storeCode = storeName.match(/^(\S+)/)?.[1] || storeName || '-';
                const dealerCode = store.BAJAJ || '-';
                return [
                    '1627', 'THE CHENNAI MOBILES', dealerCode, '304278', '-',
                    '-', '-', city, state, storeCode
                ];
            },
            excelColor: '1E3A8A'
        },
        HDB: {
            headers: ['Retailer ID', 'Retailer Name', 'Distributor ID', 'Distributor Name', 'City', 'State', 'Sales Code (HDB Finance Code)'],
            headerClass: 'th-hdb',
            rowGenerator: (store) => {
                const city = store.CITY || '-';
                const state = inferState(city);
                const hdbCode = store.HDB || '-';
                return ['304278', 'THE CHENNAI MOBILES', hdbCode, 'THE CHENNAI MOBILES', city, state, hdbCode];
            },
            excelColor: '15803D'
        },
        HDFC: {
            headers: ['HDFC Bank store ID', 'Retailer Name', 'City', 'Retailer ID'],
            headerClass: 'th-hdfc',
            rowGenerator: (store) => {
                const city = store.CITY || '-';
                const hdfcCode = store.HDFC || '-';
                return [hdfcCode, 'THE CHENNAI MOBILES', city, '304278'];
            },
            excelColor: 'EA580C'
        },
        IDFC: {
            headers: ['Retailer ID', 'Retailer Name', 'Distributor ID', 'Distributor Name', 'City', 'State', 'IDFC Code', 'IDFC Supplier ID'],
            headerClass: 'th-idfc',
            rowGenerator: (store) => {
                const city = store.CITY || '-';
                const state = inferState(city);
                const idfcCode = store['IDFC SALESPOINT ID'] || '-';
                const idfcSupplierId = store['IDFC SUPPLIER ID'] || '-';
                return ['304278', 'THE CHENNAI MOBILES', '304278', 'THE CHENNAI MOBILES', city, state, idfcCode, idfcSupplierId];
            },
            excelColor: '6B21A8'
        },
        TVS: {
            headers: ['DMS Code', 'TVS Code', 'Outlets Name', 'Retailer ID'],
            headerClass: 'th-tvs',
            rowGenerator: (store) => {
                const tvsCode = store.TVS || '-';
                return ['304278', tvsCode, 'THE CHENNAI MOBILES', '304278'];
            },
            excelColor: 'DC2626'
        },
        KOTAK: {
            headers: ['RETAILER ID', 'RETAILER NAME', 'DISTRIBUTOR ID', 'DISTRIBUTOR NAME', 'CITY', 'STATE', 'KOTAK DEALER CODE'],
            headerClass: 'th-kotak',
            rowGenerator: (store) => {
                const city = store.CITY || '-';
                const state = inferState(city);
                const kotakCode = store.KOTAK || '-';
                return ['304278', 'THE CHENNAI MOBILES', '196674', 'THE CHENNAI MOBILES', city, state, kotakCode];
            },
            excelColor: '0D9488'
        },
        ICICI: {
            headers: ['Retailer ID', 'Retailer Name', 'City', 'State', 'ICICI Dealer Code'],
            headerClass: 'th-default',
            rowGenerator: (store) => {
                const city = store.CITY || '-';
                const state = inferState(city);
                const iciciCode = store.ICICI || '-';
                return ['304278', 'THE CHENNAI MOBILES', city, state, iciciCode];
            },
            excelColor: '4F46E5'
        },
        BENOW: {
            headers: ['Retailer ID', 'Retailer Name', 'City', 'State', 'BENOW Partner ID', 'BENOW Outlet ID'],
            headerClass: 'th-default',
            rowGenerator: (store) => {
                const city = store.CITY || '-';
                const state = inferState(city);
                const benowPartnerId = store['BENOW PARTNER ID'] || '-';
                const benowOutletId = store['BENOW OUTLET ID'] || '-';
                return ['304278', 'THE CHENNAI MOBILES', city, state, benowPartnerId, benowOutletId];
            },
            excelColor: '4F46E5'
        },
        HMC: {
            headers: ['Manufacturer', 'Retailer Name', 'Retailer ID', 'City', 'State', 'OEM Branch'],
            headerClass: 'th-default',
            rowGenerator: (store) => {
                const city = store.CITY || '-';
                const state = inferState(city);
                const storeName = store.STORE || '';
                const storeCode = storeName.match(/^(\S+)/)?.[1] || storeName || '-';
                return ['1627', 'THE CHENNAI MOBILES', '304278', city, state, storeCode];
            },
            excelColor: '4F46E5'
        }
    },
    emailDetails: {
        BAJAJ: {
            to: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
            cc: [],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | Bajaj Finance - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Ravindra,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        },
        HDB: {
            to: ['tarique.anwar@hdbfs.com'],
            cc: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | HDB Finance - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        },
        HDFC: {
            to: ['mayuresh.yadav@hdfcbank.com', 'kushagra.chaturvedi@hdfcbank.com', 'Hdfc.brandmapping@hdfcbank.com'],
            cc: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | HDFC Finance - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        },
        IDFC: {
            to: ['hemant.kumar_buz@idfcbank.com', 'shivanshi.sharma@idfcfirstbank.com'],
            cc: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | IDFC FIRST Bank - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        },
        ICICI: {
            to: ['probir.bose@icicibank.com', 'subhendu.panda@icicibank.com', 'swaraj.baderao@icicibank.com'],
            cc: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | ICICI Finance - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        },
        TVS: {
            to: ['OEM.Support@tvscredit.com'],
            cc: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | TVS Finance - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        },
        BENOW: {
            to: ['suhail.ahmed@benow.in', 'hello@benow.in', 'suresh.jella@benow.in'],
            cc: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | Benow - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        },
        KOTAK: {
            to: ['prithvi.raj1@kotak.com', 'shipra.soni@kotak.com'],
            cc: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | Kotak Finance - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        },
        HMC: {
            to: [],
            cc: ['ravindra@xiaomi.com', 'ashraf@xiaomi.com'],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | HMC - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@ravindra@xiaomi.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        }
    },
    financeDisplayNames: {
        BAJAJ: 'Bajaj Finserv',
        HDB: 'HDBFS',
        HDFC: 'HDFC Bank',
        IDFC: 'IDFC FIRST Bank',
        TVS: 'TVS Credit',
        KOTAK: 'Kotak Mahindra Bank',
        ICICI: 'ICICI Bank',
        BENOW: 'Benow',
        HMC: 'HMC',
    }
};

const appState = {
    storeData: [],
    sheet2Data: [],
    loadedFileName: '',
    selectedStores: [],
    selectedType: '',
    selectedFinance: '',
    activeBrand: 'mi',
    tomSelectInstance: null,
    miState: {  // Added to store MI-specific state
        selectedStores: [],
        selectedType: '',
        selectedFinance: '',
        loadedFileName: '',
        storeData: [],
        sheet2Data: [],
    }
};

const elements = {
    excelFile: document.getElementById('excelFile'),
    fileNameDisplay: document.getElementById('fileNameDisplay'),
    typeSelect: document.getElementById('typeSelect'),
    storeSelect: document.getElementById('storeSelect'),
    storeSelectDiv: document.getElementById('storeSelectDiv'),
    financeSelect: document.getElementById('financeSelect'),
    financeSelectDiv: document.getElementById('financeSelectDiv'),
    outputDiv: document.getElementById('outputDiv'),
    emailInfoSection: document.getElementById('emailInfoSection'),
    emailTo: document.getElementById('emailTo'),
    emailCC: document.getElementById('emailCC'),
    emailSubject: document.getElementById('emailSubject'),
    emailBody: document.getElementById('emailBody'),
    copyEmailBodyBtn: document.getElementById('copyEmailBodyBtn'),
    noFormatMessage: document.getElementById('noFormatMessage'),
    mappingTable: document.getElementById('mappingTable'),
    tableHead: document.getElementById('tableHead'),
    mappingBody: document.getElementById('mappingBody'),
    exportButton: document.getElementById('exportButton'),
    loadingMessage: document.getElementById('loadingMessage'),
    brandNav: document.querySelector('.brand-nav')
};

const inferState = (city) => {
    if (!city) return '-';
    return CONFIG.keralaCities.includes(city.toUpperCase().trim()) ? 'Kerala' : 'TamilNadu';
};

const getStoreLabel = (stores) => {
    if (!stores?.length) return 'No Stores Selected';
    if (stores.length === 1) {
        const storeCodeMatch = stores[0].match(/^(\S+)/);
        return storeCodeMatch ? storeCodeMatch[1] : stores[0];
    }
    const shortNames = stores.map(store => store.match(/^(\S+)/)?.[1] || store).filter(Boolean);
    return shortNames.length ? shortNames.join(', ') : 'Multiple Stores';
};

const getFinanceDisplayName = (financeKey) => CONFIG.financeDisplayNames[financeKey] || financeKey || 'Finance Provider';

const resetMiInteractionState = () => {
    appState.selectedStores = [];
    appState.selectedType = '';
    appState.selectedFinance = '';

    if (appState.tomSelectInstance) {
        appState.tomSelectInstance.destroy();
        appState.tomSelectInstance = null;
    }
    if (elements.storeSelect) elements.storeSelect.innerHTML = '';
    elements.storeSelectDiv.classList.add('hidden');
    elements.typeSelect.value = '';
    elements.financeSelectDiv.classList.add('hidden');
    elements.financeSelect.value = '';

    elements.outputDiv.classList.add('hidden');
    elements.emailInfoSection.classList.add('hidden');
    elements.noFormatMessage.classList.add('hidden');
    elements.mappingTable.classList.add('hidden');
    elements.exportButton.classList.add('hidden');
    elements.emailTo.textContent = '-';
    elements.emailCC.textContent = '-';
    elements.emailSubject.textContent = '-';
    elements.emailBody.value = '';
};

const showError = (message) => {
    elements.noFormatMessage.textContent = message;
    elements.noFormatMessage.classList.remove('hidden');
    elements.outputDiv.classList.remove('hidden');
    elements.mappingTable.classList.add('hidden');
    elements.exportButton.classList.add('hidden');
    elements.emailInfoSection.classList.add('hidden');
};

const readExcelFile = async (file) => {
    if (!file) return;
    try {
        const arrayBuffer = await file.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheet1Name = workbook.SheetNames[0];
        const sheet2Name = workbook.SheetNames[1] || 'Sheet2';
        const worksheet1 = workbook.Sheets[sheet1Name];
        const worksheet2 = workbook.Sheets[sheet2Name];
        const data1 = XLSX.utils.sheet_to_json(worksheet1);
        const data2 = worksheet2 ? XLSX.utils.sheet_to_json(worksheet2) : [];
        if (!data1?.length) throw new Error('No data found in the first sheet of the Excel file.');
        return { sheet1Data: data1, sheet2Data: data2 };
    } catch (error) {
        throw new Error(`Error reading Excel file: ${error.message}`);
    }
};

const populateStoreDropdown = (stores) => {
    const options = stores
        .map(store => {
            const storeName = store.STORE || '';
            return storeName ? { value: storeName, text: storeName } : null;
        })
        .filter(Boolean);

    if (appState.tomSelectInstance) appState.tomSelectInstance.destroy();
    elements.storeSelect.innerHTML = '';

    if (!options.length) {
        showError("No store data found in the Excel file's 'STORE' column.");
        elements.storeSelectDiv.classList.add('hidden');
        return;
    }

    appState.tomSelectInstance = new TomSelect(elements.storeSelect, {
        plugins: ['remove_button'],
        options,
        create: false,
        sortField: { field: 'text', direction: 'asc' },
        placeholder: 'Select one or more stores...',
        maxItems: null
    });

    appState.tomSelectInstance.on('change', (values) => {
        appState.selectedStores = values;
        if (appState.selectedType && appState.selectedStores.length) {
            if (appState.selectedType === 'Finance' && appState.selectedFinance) {
                generateMapping();
            } else if (appState.selectedType === 'Pinelabs') {
                generateMapping();
            } else if (appState.selectedType === 'Finance' && !appState.selectedFinance) {
                showError('Please select a Finance Provider.');
            } else {
                elements.outputDiv.classList.add('hidden');
            }
        } else {
            elements.outputDiv.classList.add('hidden');
            if (appState.selectedType && !appState.selectedStores.length) {
                showError('Please select at least one store.');
            }
        }

        // Save the selected stores to miState
        if (appState.activeBrand === 'mi') {
            appState.miState.selectedStores = [...appState.selectedStores];
        }
    });

    // Restore selected stores if any
    if (appState.activeBrand === 'mi' && appState.miState.selectedStores.length) {
        appState.tomSelectInstance.setValue(appState.miState.selectedStores);
    }

    elements.storeSelectDiv.classList.remove('hidden');
};

const generateMapping = () => {
    elements.noFormatMessage.classList.add('hidden');

    if (appState.activeBrand !== 'mi') return;

    if (!appState.storeData.length || !appState.selectedStores.length || !appState.selectedType) {
        showError('Please ensure a file is uploaded, a type is selected, and at least one store is selected.');
        return;
    }

    if (appState.selectedType === 'Pinelabs') {
        if (typeof window.pinelabsGenerateMapping === 'function') {
            window.pinelabsGenerateMapping(appState.storeData, appState.sheet2Data, appState.selectedStores);
        } else {
            showError('Pinelabs functionality is not loaded correctly.');
        }
        return;
    }

    if (appState.selectedType === 'Finance') {
        if (!appState.selectedFinance) {
            showError('Please select a Finance Provider.');
            return;
        }

        const formatKey = appState.selectedFinance;
        const format = CONFIG.mappingFormats[formatKey];
        const stores = appState.storeData.filter(s => appState.selectedStores.includes(s.STORE));
        const storeLabel = getStoreLabel(appState.selectedStores);
        const financeDisplayName = getFinanceDisplayName(formatKey);

        elements.tableHead.innerHTML = '';
        elements.mappingBody.innerHTML = '';
        elements.mappingTable.classList.add('hidden');
        elements.exportButton.classList.add('hidden');
        elements.emailInfoSection.classList.add('hidden');
        elements.emailTo.textContent = '-';
        elements.emailCC.textContent = '-';
        elements.emailSubject.textContent = '-';
        elements.emailBody.value = '';

        if (!stores.length) {
            showError('No data found for the selected stores in the uploaded file.');
            return;
        }
        if (!format) {
            showError(`No mapping format defined for ${financeDisplayName}.`);
            return;
        }

        const headerHtml = `<tr>${format.headers.map(h => `<th class="${format.headerClass || 'th-default'}">${h}</th>`).join('')}</tr>`;
        const bodyRowsHtml = stores.map(store => {
            const rowData = format.rowGenerator(store);
            return `<tr>${rowData.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
        }).join('');

        elements.tableHead.innerHTML = headerHtml;
        elements.mappingBody.innerHTML = bodyRowsHtml;
        elements.mappingTable.classList.remove('hidden');
        elements.exportButton.classList.remove('hidden');

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
            elements.emailInfoSection.classList.add('hidden');
            const noFormatDiv = elements.noFormatMessage;
            noFormatDiv.textContent = `Mapping generated for ${financeDisplayName}, but email details are missing.`;
            noFormatDiv.classList.remove('hidden');
        }
        elements.outputDiv.classList.remove('hidden');
    }
};

const exportToExcel = () => {
    if (appState.activeBrand !== 'mi') return;

    if (appState.selectedType === 'Pinelabs' && typeof window.pinelabsExportToExcel === 'function') {
        window.pinelabsExportToExcel();
        return;
    }

    if (appState.selectedType === 'Finance' && appState.selectedFinance) {
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

        const formatKey = appState.selectedFinance;
        const bgColor = CONFIG.mappingFormats[formatKey]?.excelColor || '4F46E5';
        const borderStyle = {
            top: { style: 'thin', color: { rgb: 'D1D5DB' } },
            bottom: { style: 'thin', color: { rgb: 'D1D5DB' } },
            left: { style: 'thin', color: { rgb: 'D1D5DB' } },
            right: { style: 'thin', color: { rgb: 'D1D5DB' } }
        };

        for (let r = 0; r < wsData.length; r++) {
            for (let c = 0; c < headers.length; c++) {
                const cellAddress = XLSX.utils.encode_cell({ r, c });
                if (!ws[cellAddress]) ws[cellAddress] = { t: 's', v: (wsData[r][c] || '').toString() };
                ws[cellAddress].s = { border: borderStyle };
                if (r === 0) {
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
        const financeName = getFinanceDisplayName(appState.selectedFinance) || 'Finance';
        const storeLabel = getStoreLabel(appState.selectedStores);
        const fileName = `TCM X MI Brand Mapping - ${dateStr} - ${storeLabel} - ${financeName}.xlsx`;
        XLSX.writeFile(wb, fileName);
    } else {
        alert('Cannot export. Please ensure a Finance provider is selected and mapping is generated.');
    }
};

const copyEmailBody = async () => {
    if (appState.activeBrand !== 'mi') return;

    if (appState.selectedType === 'Pinelabs' && typeof window.pinelabsCopyEmailBody === 'function') {
        window.pinelabsCopyEmailBody();
        return;
    }
    if (appState.selectedType === 'Finance' && appState.selectedFinance) {
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
        } catch (err) {
            elements.emailBody.select();
            elements.emailBody.setSelectionRange(0, 99999);
            document.execCommand('copy');
            elements.copyEmailBodyBtn.textContent = 'Copied!';
            elements.copyEmailBodyBtn.disabled = true;
        }
        setTimeout(() => {
            elements.copyEmailBodyBtn.textContent = 'Copy';
            elements.copyEmailBodyBtn.disabled = false;
        }, 2000);
    }
};

const switchBrand = (brandId) => {
    if (!CONFIG.brands.includes(brandId)) return;

    // Save MI state if we're switching away from MI
    if (appState.activeBrand === 'mi') {
        appState.miState = {
            selectedStores: [...appState.selectedStores],
            selectedType: appState.selectedType,
            selectedFinance: appState.selectedFinance,
            loadedFileName: appState.loadedFileName,
            storeData: [...appState.storeData],
            sheet2Data: [...appState.sheet2Data],
        };
    }

    appState.activeBrand = brandId;

    document.querySelectorAll('.brand-section').forEach(section => {
        section.classList.toggle('hidden', section.id !== `brand-section-${brandId}`);
    });
    document.querySelectorAll('.brand-nav-button').forEach(button => {
        button.classList.toggle('active', button.dataset.targetBrand === brandId);
    });

    resetMiInteractionState();

    elements.typeSelect.disabled = true;
    if (elements.fileNameDisplay) elements.fileNameDisplay.textContent = '';

    // Restore MI state if returning to MI
    if (appState.activeBrand === 'mi') {
        // Restore the state
        appState.selectedStores = [...appState.miState.selectedStores];
        appState.selectedType = appState.miState.selectedType;
        appState.selectedFinance = appState.miState.selectedFinance;
        appState.loadedFileName = appState.miState.loadedFileName;
        appState.storeData = [...appState.miState.storeData];
        appState.sheet2Data = [...appState.miState.sheet2Data];

        if (appState.storeData.length > 0) {
            elements.typeSelect.disabled = false;
            populateStoreDropdown(appState.storeData);
            if (elements.fileNameDisplay) {
                elements.fileNameDisplay.textContent = appState.loadedFileName;
            }

            // Restore selections in the UI
            elements.typeSelect.value = appState.selectedType;
            if (appState.selectedType === 'Finance') {
                elements.financeSelectDiv.classList.remove('hidden');
                elements.financeSelect.value = appState.selectedFinance;
            }

            // Regenerate the mapping if all selections are present
            if (appState.selectedStores.length && appState.selectedType) {
                if (appState.selectedType === 'Finance' && appState.selectedFinance) {
                    generateMapping();
                } else if (appState.selectedType === 'Pinelabs') {
                    generateMapping();
                }
            }
        }
    }
};

const initializeEventListeners = () => {
    elements.excelFile.addEventListener('change', async (event) => {
        const file = event.target.files[0];

        resetMiInteractionState();
        elements.typeSelect.disabled = true;

        // Reset miState when a new file is uploaded
        appState.miState = {
            selectedStores: [],
            selectedType: '',
            selectedFinance: '',
            loadedFileName: '',
            storeData: [],
            sheet2Data: [],
        };

        if (!file) {
            appState.storeData = [];
            appState.sheet2Data = [];
            appState.loadedFileName = '';
            if (elements.fileNameDisplay) elements.fileNameDisplay.textContent = '';
            elements.excelFile.value = null;
            return;
        }

        appState.storeData = [];
        appState.sheet2Data = [];

        appState.loadedFileName = file.name;
        if (elements.fileNameDisplay) elements.fileNameDisplay.textContent = appState.loadedFileName;
        elements.loadingMessage.classList.remove('hidden');

        try {
            const { sheet1Data, sheet2Data } = await readExcelFile(file);
            appState.storeData = sheet1Data;
            appState.sheet2Data = sheet2Data;

            if (appState.activeBrand === 'mi') {
                if (appState.storeData.length > 0) {
                    populateStoreDropdown(appState.storeData);
                    elements.typeSelect.disabled = false;
                } else {
                    appState.loadedFileName = '';
                    if (elements.fileNameDisplay) elements.fileNameDisplay.textContent = '';
                    elements.excelFile.value = null;
                }
            }
        } catch (error) {
            alert(error.message);
            appState.storeData = [];
            appState.sheet2Data = [];
            appState.loadedFileName = '';
            if (elements.fileNameDisplay) elements.fileNameDisplay.textContent = '';
            elements.excelFile.value = null;
        } finally {
            elements.loadingMessage.classList.add('hidden');
        }
    });

    elements.typeSelect.addEventListener('change', (event) => {
        if (appState.activeBrand !== 'mi') return;
        appState.selectedType = event.target.value;
        elements.financeSelectDiv.classList.toggle('hidden', appState.selectedType !== 'Finance');
        elements.financeSelect.value = '';
        appState.selectedFinance = '';
        elements.outputDiv.classList.add('hidden');

        if (appState.selectedType && appState.selectedStores.length) {
            if (appState.selectedType === 'Finance') {
                showError('Please select a Finance Provider.');
            } else {
                generateMapping();
            }
        } else if (appState.selectedType && !appState.selectedStores.length) {
            showError('Please select at least one store.');
        }

        // Save the selected type to miState
        if (appState.activeBrand === 'mi') {
            appState.miState.selectedType = appState.selectedType;
        }
    });

    elements.financeSelect.addEventListener('change', (event) => {
        if (appState.activeBrand !== 'mi') return;
        appState.selectedFinance = event.target.value;
        elements.outputDiv.classList.add('hidden');

        if (appState.selectedStores.length && appState.selectedFinance) {
            generateMapping();
        } else if (appState.selectedFinance && !appState.selectedStores.length) {
            showError('Please select at least one store.');
        } else if (!appState.selectedFinance && appState.selectedType === 'Finance') {
            showError('Please select a Finance Provider.');
        }

        // Save the selected finance provider to miState
        if (appState.activeBrand === 'mi') {
            appState.miState.selectedFinance = appState.selectedFinance;
        }
    });

    elements.exportButton.addEventListener('click', exportToExcel);
    elements.copyEmailBodyBtn.addEventListener('click', copyEmailBody);

    elements.brandNav.addEventListener('click', (event) => {
        const button = event.target.closest('.brand-nav-button');
        if (button) {
            const targetBrand = button.dataset.targetBrand;
            if (targetBrand !== appState.activeBrand) {
                switchBrand(targetBrand);
            }
        }
    });
};

const initializeApp = () => {
    const initialActiveButton = document.querySelector('.brand-nav-button.active');
    const initialBrandId = initialActiveButton ? initialActiveButton.dataset.targetBrand : (CONFIG.brands.length > 0 ? CONFIG.brands[0] : null);

    if (initialBrandId) {
        switchBrand(initialBrandId);
    } else {
        console.error("No initial brand button found or configured.");
        if (elements.fileNameDisplay) elements.fileNameDisplay.textContent = '';
        elements.typeSelect.disabled = true;
    }

    initializeEventListeners();
};

document.addEventListener('DOMContentLoaded', initializeApp);