const APPLE_CONFIG = {
    financeProviders: ['BAJAJ', 'HDB', 'HDFC', 'IDFC', 'TVS'],
    mappingFormats: {
        BAJAJ: {
            headers: [
                'Partner Name', 'Apple ID', 'Category of Store', 'National Distributor', 'Store Name',
                'Address', 'City', 'Pin Code', 'State', 'Contact Person', 'Contact No.',
                'Email Address', 'RFSM', 'ASM', 'Type of Activation', 'Existing BFL ID', 'Request Date'
            ],
            headerClass: 'th-bajaj',
            rowGenerator: (store, contactInfo, requestDate) => {
                const storeName = store.STORE || '-';
                const address = store.ADDRESS || '-';
                const city = store.CITY || '-';
                const pinCode = store.PINCODE || '-';
                const stateKeys = ['STATE', 'State', 'state'];
                const state = stateKeys.reduce((val, key) => val || store[key], null) || '-';
                const appleId = store.APPLE || '-';
                const bajajCode = store.BAJAJ || '-';
                return [
                    'Bajaj Finance',
                    appleId,
                    'Non TEP',
                    'Redington',
                    storeName,
                    address,
                    city,
                    pinCode,
                    state,
                    contactInfo.person,
                    contactInfo.number,
                    contactInfo.email,
                    'Shankar Narayan',
                    'Vamsi',
                    'New',
                    bajajCode,
                    requestDate
                ];
            },
            excelColor: '1E3A8A'
        },
        HDB: {
            headers: [
                'Partner Name', 'Apple ID', 'Category of Store', 'National Distributor', 'Store Name',
                'Address', 'City', 'Pin Code', 'State', 'Contact Person', 'Contact No.',
                'Email Address', 'RFSM', 'ASM', 'Type of Activation', 'Existing BFL ID', 'Request Date'
            ],
            headerClass: 'th-hdb',
            rowGenerator: (store, contactInfo, requestDate) => {
                const storeName = store.STORE || '-';
                const address = store.ADDRESS || '-';
                const city = store.CITY || '-';
                const pinCode = store.PINCODE || '-';
                const stateKeys = ['STATE', 'State', 'state'];
                const state = stateKeys.reduce((val, key) => val || store[key], null) || '-';
                const appleId = store.APPLE || '-';
                const hdbCode = store.HDB || '-';
                return [
                    'HDB Finance',
                    appleId,
                    'Non TEP',
                    'Redington',
                    storeName,
                    address,
                    city,
                    pinCode,
                    state,
                    contactInfo.person,
                    contactInfo.number,
                    contactInfo.email,
                    'Shankar Narayan',
                    'Vamsi',
                    'New',
                    hdbCode,
                    requestDate
                ];
            },
            excelColor: '15803D'
        },
        HDFC: {
            headers: [
                'Partner Name', 'Apple ID', 'Category of Store', 'National Distributor', 'Store Name',
                'Address', 'City', 'Pin Code', 'State', 'Contact Person', 'Contact No.',
                'Email Address', 'RFSM', 'ASM', 'Type of Activation', 'Existing BFL ID', 'Request Date'
            ],
            headerClass: 'th-hdfc',
            rowGenerator: (store, contactInfo, requestDate) => {
                const storeName = store.STORE || '-';
                const address = store.ADDRESS || '-';
                const city = store.CITY || '-';
                const pinCode = store.PINCODE || '-';
                const stateKeys = ['STATE', 'State', 'state'];
                const state = stateKeys.reduce((val, key) => val || store[key], null) || '-';
                const appleId = store.APPLE || '-';
                const hdfcCode = store.HDFC || '-';
                return [
                    'HDFC',
                    appleId,
                    'Non TEP',
                    'Redington',
                    storeName,
                    address,
                    city,
                    pinCode,
                    state,
                    contactInfo.person,
                    contactInfo.number,
                    contactInfo.email,
                    'Shankar Narayan',
                    'Vamsi',
                    'New',
                    hdfcCode,
                    requestDate
                ];
            },
            excelColor: 'EA580C'
        },
        IDFC: {
            headers: [
                'Partner Name', 'Apple ID', 'Category of Store', 'National Distributor', 'Store Name',
                'Address', 'City', 'Pin Code', 'State', 'Contact Person', 'Contact No.',
                'Email Address', 'RFSM', 'ASM', 'Type of Activation', 'Existing BFL ID', 'Request Date'
            ],
            headerClass: 'th-idfc',
            rowGenerator: (store, contactInfo, requestDate) => {
                const storeName = store.STORE || '-';
                const address = store.ADDRESS || '-';
                const city = store.CITY || '-';
                const pinCode = store.PINCODE || '-';
                const stateKeys = ['STATE', 'State', 'state'];
                const state = stateKeys.reduce((val, key) => val || store[key], null) || '-';
                const appleId = store.APPLE || '-';
                const idfcCode = store['IDFC SALESPOINT ID'] || '-';
                return [
                    'IDFC Finance',
                    appleId,
                    'Non TEP',
                    'Redington',
                    storeName,
                    address,
                    city,
                    pinCode,
                    state,
                    contactInfo.person,
                    contactInfo.number,
                    contactInfo.email,
                    'Shankar Narayan',
                    'Vamsi',
                    'New',
                    idfcCode,
                    requestDate
                ];
            },
            excelColor: '6B21A8'
        },
        TVS: {
            headers: [
                'Partner Name', 'Apple ID', 'Category of Store', 'National Distributor', 'Store Name',
                'Address', 'City', 'Pin Code', 'State', 'Contact Person', 'Contact No.',
                'Email Address', 'RFSM', 'ASM', 'Type of Activation', 'Existing BFL ID', 'Request Date'
            ],
            headerClass: 'th-tvs',
            rowGenerator: (store, contactInfo, requestDate) => {
                const storeName = store.STORE || '-';
                const address = store.ADDRESS || '-';
                const city = store.CITY || '-';
                const pinCode = store.PINCODE || '-';
                const stateKeys = ['STATE', 'State', 'state'];
                const state = stateKeys.reduce((val, key) => val || store[key], null) || '-';
                const appleId = store.APPLE || '-';
                const tvsCode = store.TVS || '-';
                return [
                    'TVS',
                    appleId,
                    'Non TEP',
                    'Redington',
                    storeName,
                    address,
                    city,
                    pinCode,
                    state,
                    contactInfo.person,
                    contactInfo.number,
                    contactInfo.email,
                    'Shankar Narayan',
                    'Vamsi',
                    'New',
                    tvsCode,
                    requestDate
                ];
            },
            excelColor: 'DC2626'
        }
    },
    emailDetails: {
        BAJAJ: {
            to: ['vamsi_krishna@apple.com'],
            cc: [
                'sairam_v@apple.com',
                'thechennaimobiles.riyas@gmail.com',
                'thechennaimobiles.fazilunes@gmail.com',
                'azhar@thechennaimobiles.com'
            ],
            subject: (storeLabel) => `Apple Brand Mapping Request – TCM (${storeLabel})`,
            body: (storeLabel) => `Hi Vamsi,\n\nHope you're doing well.\n\nPlease find attached the details regarding the Apple brand mapping request for TCM stores (${storeLabel}). I kindly request you to review it and proceed with the necessary steps whenever convenient.\n\nIf any additional information is required, please do let me know — happy to support.\n\n--`
        },
        HDB: {
            to: ['vamsi_krishna@apple.com'],
            cc: [
                'sairam_v@apple.com',
                'thechennaimobiles.riyas@gmail.com',
                'thechennaimobiles.fazilunes@gmail.com',
                'azhar@thechennaimobiles.com'
            ],
            subject: (storeLabel) => `Apple Brand Mapping Request – TCM (${storeLabel})`,
            body: (storeLabel) => `Hi Vamsi,\n\nHope you're doing well.\n\nPlease find attached the details regarding the Apple brand mapping request for TCM stores (${storeLabel}). I kindly request you to review it and proceed with the necessary steps whenever convenient.\n\nIf any additional information is required, please do let me know — happy to support.\n\n--`
        },
        HDFC: {
            to: ['vamsi_krishna@apple.com'],
            cc: [
                'sairam_v@apple.com',
                'thechennaimobiles.riyas@gmail.com',
                'thechennaimobiles.fazilunes@gmail.com',
                'azhar@thechennaimobiles.com'
            ],
            subject: (storeLabel) => `Apple Brand Mapping Request – TCM (${storeLabel})`,
            body: (storeLabel) => `Hi Vamsi,\n\nHope you're doing well.\n\nPlease find attached the details regarding the Apple brand mapping request for TCM stores (${storeLabel}). I kindly request you to review it and proceed with the necessary steps whenever convenient.\n\nIf any additional information is required, please do let me know — happy to support.\n\n--`
        },
        IDFC: {
            to: ['vamsi_krishna@apple.com'],
            cc: [
                'sairam_v@apple.com',
                'thechennaimobiles.riyas@gmail.com',
                'thechennaimobiles.fazilunes@gmail.com',
                'azhar@thechennaimobiles.com'
            ],
            subject: (storeLabel) => `Apple Brand Mapping Request – TCM (${storeLabel})`,
            body: (storeLabel) => `Hi Vamsi,\n\nHope you're doing well.\n\nPlease find attached the details regarding the Apple brand mapping request for TCM stores (${storeLabel}). I kindly request you to review it and proceed with the necessary steps whenever convenient.\n\nIf any additional information is required, please do let me know — happy to support.\n\n--`
        },
        TVS: {
            to: ['vamsi_krishna@apple.com'],
            cc: [
                'sairam_v@apple.com',
                'thechennaimobiles.riyas@gmail.com',
                'thechennaimobiles.fazilunes@gmail.com',
                'azhar@thechennaimobiles.com'
            ],
            subject: (storeLabel) => `Apple Brand Mapping Request – TCM (${storeLabel})`,
            body: (storeLabel) => `Hi Vamsi,\n\nHope you're doing well.\n\nPlease find attached the details regarding the Apple brand mapping request for TCM stores (${storeLabel}). I kindly request you to review it and proceed with the necessary steps whenever convenient.\n\nIf any additional information is required, please do let me know — happy to support.\n\n--`
        }
    }
};

const appleState = {
    storeData: [],
    sheet2Data: [],
    loadedFileName: '',
    selectedStores: [],
    selectedTypes: [],
    selectedFinances: [],
    tomSelectInstances: {
        type: null,
        store: null,
        finance: null
    },
    contactInfo: {
        person: '',
        number: '',
        email: ''
    },
    mappings: {}
};

const appleElements = {
    excelFile: document.getElementById('appleExcelFile'),
    fileNameDisplay: document.getElementById('appleFileNameDisplay'),
    typeSelect: document.getElementById('appleTypeSelect'),
    storeSelect: document.getElementById('appleStoreSelect'),
    storeSelectDiv: document.getElementById('appleStoreSelectDiv'),
    financeSelect: document.getElementById('appleFinanceSelect'),
    financeSelectDiv: document.getElementById('appleFinanceSelectDiv'),
    contactSelectDiv: document.getElementById('appleContactSelectDiv'),
    contactPersonSelect: document.getElementById('appleContactPersonSelect'),
    contactNumberSelect: document.getElementById('appleContactNumberSelect'),
    emailAddressSelect: document.getElementById('appleEmailAddressSelect'),
    outputDiv: document.getElementById('appleOutputDiv'),
    emailInfoSection: document.getElementById('appleEmailInfoSection'),
    emailTo: document.getElementById('appleEmailTo'),
    emailCC: document.getElementById('appleEmailCC'),
    emailSubject: document.getElementById('appleEmailSubject'),
    emailBody: document.getElementById('appleEmailBody'),
    copyEmailBodyBtn: document.getElementById('appleCopyEmailBodyBtn'),
    noFormatMessage: document.getElementById('appleNoFormatMessage'),
    mappingTable: document.getElementById('appleMappingTable'),
    tableHead: document.getElementById('appleTableHead'),
    mappingBody: document.getElementById('appleMappingBody'),
    financeTableTitle: document.getElementById('financeTableTitle'),
    pinelabsTable: document.getElementById('applePinelabsTable'),
    pinelabsTableHead: document.getElementById('applePinelabsTableHead'),
    pinelabsTableBody: document.getElementById('applePinelabsTableBody'),
    pinelabsTableTitle: document.getElementById('pinelabsTableTitle'),
    exportButton: document.getElementById('appleExportButton'),
    loadingMessage: document.getElementById('appleLoadingMessage')
};

const getAppleStoreLabel = (stores) => {
    if (!stores?.length) return 'No Stores Selected';
    if (stores.length === 1) {
        const storeCodeMatch = stores[0].match(/^(\S+)/);
        return storeCodeMatch ? storeCodeMatch[1] : stores[0];
    }
    const shortNames = stores.map(store => store.match(/^(\S+)/)?.[1] || store).filter(Boolean);
    return shortNames.length ? shortNames.join(', ') : 'Multiple Stores';
};

const resetAppleInteractionState = () => {
    appleState.selectedStores = [];
    appleState.selectedTypes = [];
    appleState.selectedFinances = [];
    appleState.contactInfo = { person: '', number: '', email: '' };
    appleState.mappings = {};

    Object.values(appleState.tomSelectInstances).forEach(instance => {
        if (instance) instance.destroy();
    });
    appleState.tomSelectInstances = { type: null, store: null, finance: null };

    appleElements.storeSelect.innerHTML = '';
    appleElements.storeSelectDiv.classList.add('hidden');
    appleElements.typeSelect.innerHTML = `
        <option value="Pinelabs">Pinelabs</option>
        <option value="Finance">Finance</option>
    `;
    appleElements.financeSelectDiv.classList.add('hidden');
    appleElements.financeSelect.innerHTML = APPLE_CONFIG.financeProviders.map(provider => `
        <option value="${provider}">${provider}</option>
    `).join('');
    appleElements.contactSelectDiv.classList.add('hidden');
    appleElements.contactPersonSelect.value = '';
    appleElements.contactNumberSelect.value = '';
    appleElements.emailAddressSelect.value = '';

    appleElements.outputDiv.classList.add('hidden');
    appleElements.emailInfoSection.classList.add('hidden');
    appleElements.noFormatMessage.classList.add('hidden');
    appleElements.mappingTable.classList.add('hidden');
    appleElements.financeTableTitle.style.display = 'none';
    appleElements.pinelabsTable.classList.add('hidden');
    appleElements.pinelabsTableTitle.style.display = 'none';
    appleElements.exportButton.classList.add('hidden');
    appleElements.emailTo.textContent = '-';
    appleElements.emailCC.textContent = '-';
    appleElements.emailSubject.textContent = '-';
    appleElements.emailBody.value = '';
};

const showAppleError = (message) => {
    appleElements.noFormatMessage.textContent = message;
    appleElements.noFormatMessage.classList.remove('hidden');
    appleElements.outputDiv.classList.remove('hidden');
    appleElements.mappingTable.classList.add('hidden');
    appleElements.financeTableTitle.style.display = 'none';
    appleElements.pinelabsTable.classList.add('hidden');
    appleElements.pinelabsTableTitle.style.display = 'none';
    appleElements.exportButton.classList.add('hidden');
    appleElements.emailInfoSection.classList.add('hidden');
};

const readAppleExcelFile = async (file) => {
    if (!file) return;
    try {
        const arrayBuffer = await file.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheet1Name = workbook.SheetNames[0];
        const sheet2Name = workbook.SheetNames[1] || 'Sheet2';
        const sheet3Name = workbook.SheetNames[2] || 'Sheet3';
        const worksheet1 = workbook.Sheets[sheet1Name];
        const worksheet2 = workbook.Sheets[sheet2Name];
        const worksheet3 = workbook.Sheets[sheet3Name];
        const data1 = XLSX.utils.sheet_to_json(worksheet1);
        const data2 = worksheet2 ? XLSX.utils.sheet_to_json(worksheet2) : [];
        const data3 = worksheet3 ? XLSX.utils.sheet_to_json(worksheet3) : [];
        if (!data3?.length) throw new Error('No data found in Sheet3 of the Excel file.');

        // Debug column names for Sheet3
        if (data3.length > 0) {
            console.log('Sheet3 (storeData) column names:', Object.keys(data3[0]));
        }

        // Debug column names for Sheet2
        if (data2.length > 0) {
            console.log('Sheet2 (sheet2Data) column names:', Object.keys(data2[0]));
        }

        return { sheet1Data: data1, sheet2Data: data2, sheet3Data: data3 };
    } catch (error) {
        throw new Error(`Error reading Excel file: ${error.message}`);
    }
};

const populateAppleStoreDropdown = (stores) => {
    const options = stores
        .map(store => {
            const storeName = store.STORE || '';
            return storeName ? { value: storeName, text: storeName } : null;
        })
        .filter(Boolean);

    if (appleState.tomSelectInstances.store) {
        appleState.tomSelectInstances.store.destroy();
    }
    appleElements.storeSelect.innerHTML = '';

    if (!options.length) {
        showAppleError("No store data found in the Excel file's 'STORE' column.");
        appleElements.storeSelectDiv.classList.add('hidden');
        return;
    }

    appleState.tomSelectInstances.store = new TomSelect(appleElements.storeSelect, {
        plugins: ['remove_button'],
        options,
        create: false,
        sortField: { field: 'text', direction: 'asc' },
        placeholder: 'Select one or more stores...',
        maxItems: null,
        onChange: (values) => {
            appleState.selectedStores = values;
            updateAppleUIState();
        }
    });

    appleElements.storeSelectDiv.classList.remove('hidden');
};

const populateAppleTypeDropdown = () => {
    const typeSelect = appleElements.typeSelect;
    typeSelect.innerHTML = `
        <option value="Pinelabs">Pinelabs</option>
        <option value="Finance">Finance</option>
    `;

    if (appleState.tomSelectInstances.type) {
        appleState.tomSelectInstances.type.destroy();
    }

    appleState.tomSelectInstances.type = new TomSelect(typeSelect, {
        plugins: ['remove_button'],
        create: false,
        sortField: { field: 'text', direction: 'asc' },
        placeholder: 'Select one or more types...',
        maxItems: null,
        onChange: (values) => {
            appleState.selectedTypes = values;
            appleElements.financeSelectDiv.classList.toggle('hidden', !appleState.selectedTypes.includes('Finance'));
            if (!appleState.selectedTypes.includes('Finance')) {
                appleState.selectedFinances = [];
                if (appleState.tomSelectInstances.finance) {
                    appleState.tomSelectInstances.finance.clear();
                }
            }
            updateAppleUIState();
        }
    });
};

const populateAppleFinanceDropdown = () => {
    const financeSelect = appleElements.financeSelect;
    financeSelect.innerHTML = APPLE_CONFIG.financeProviders.map(provider => `
        <option value="${provider}">${provider}</option>
    `).join('');

    if (appleState.tomSelectInstances.finance) {
        appleState.tomSelectInstances.finance.destroy();
    }

    appleState.tomSelectInstances.finance = new TomSelect(financeSelect, {
        plugins: ['remove_button'],
        create: false,
        sortField: { field: 'text', direction: 'asc' },
        placeholder: 'Select one or more finance providers...',
        maxItems: null,
        onChange: (values) => {
            appleState.selectedFinances = values;
            updateAppleUIState();
        }
    });
};

const updateAppleUIState = () => {
    if (!appleState.selectedTypes.length || !appleState.selectedStores.length) {
        appleElements.contactSelectDiv.classList.add('hidden');
        appleElements.outputDiv.classList.add('hidden');
        if (!appleState.selectedStores.length) {
            showAppleError('Please select at least one store.');
        } else if (!appleState.selectedTypes.length) {
            showAppleError('Please select at least one type.');
        }
        return;
    }

    if (appleState.selectedTypes.includes('Finance') && !appleState.selectedFinances.length) {
        appleElements.contactSelectDiv.classList.add('hidden');
        appleElements.outputDiv.classList.add('hidden');
        showAppleError('Please select at least one finance provider.');
        return;
    }

    appleElements.contactSelectDiv.classList.remove('hidden');

    if (!appleState.contactInfo.person || !appleState.contactInfo.number || !appleState.contactInfo.email) {
        showAppleError('Please select contact person, contact number, and email address.');
        return;
    }

    generateAppleMapping();
};

const generateAppleMapping = () => {
    appleElements.noFormatMessage.classList.add('hidden');
    appleState.mappings = {};

    if (!appleState.storeData.length || !appleState.selectedStores.length || !appleState.selectedTypes.length) {
        showAppleError('Please ensure a file is uploaded, types are selected, and at least one store is selected.');
        return;
    }

    if (appleState.selectedTypes.includes('Finance') && !appleState.selectedFinances.length) {
        showAppleError('Please select at least one finance provider.');
        return;
    }

    if (!appleState.contactInfo.person || !appleState.contactInfo.number || !appleState.contactInfo.email) {
        showAppleError('Please select contact person, contact number, and email address.');
        return;
    }

    const stores = appleState.storeData.filter(s => appleState.selectedStores.includes(s.STORE));
    const storeLabel = getAppleStoreLabel(appleState.selectedStores);

    if (!stores.length) {
        showAppleError('No data found for the selected stores in the uploaded file.');
        return;
    }

    const today = new Date();
    const requestDate = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;

    // Reset UI
    appleElements.tableHead.innerHTML = '';
    appleElements.mappingBody.innerHTML = '';
    appleElements.mappingTable.classList.add('hidden');
    appleElements.financeTableTitle.style.display = 'none';
    appleElements.pinelabsTableHead.innerHTML = '';
    appleElements.pinelabsTableBody.innerHTML = '';
    appleElements.pinelabsTable.classList.add('hidden');
    appleElements.pinelabsTableTitle.style.display = 'none';
    appleElements.exportButton.classList.add('hidden');
    appleElements.emailInfoSection.classList.add('hidden');
    appleElements.emailTo.textContent = '-';
    appleElements.emailCC.textContent = '-';
    appleElements.emailSubject.textContent = '-';
    appleElements.emailBody.value = '';

    let firstProvider = null;

    // Handle Finance mappings
    if (appleState.selectedTypes.includes('Finance') && appleState.selectedFinances.length) {
        appleState.selectedFinances.forEach(formatKey => {
            const format = APPLE_CONFIG.mappingFormats[formatKey];
            if (!format) {
                showAppleError(`No mapping format defined for ${formatKey}.`);
                return;
            }

            const headers = format.headers;
            const rows = stores.map(store => {
                const rowData = format.rowGenerator(store, appleState.contactInfo, requestDate);
                return rowData;
            });

            appleState.mappings[formatKey] = { headers, rows, headerClass: format.headerClass, excelColor: format.excelColor };

            if (!firstProvider) {
                firstProvider = formatKey;
                const headerHtml = `<tr>${headers.map(h => `<th class="${format.headerClass || 'th-default'}">${h}</th>`).join('')}</tr>`;
                const bodyRowsHtml = rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
                appleElements.tableHead.innerHTML = headerHtml;
                appleElements.mappingBody.innerHTML = bodyRowsHtml;
                appleElements.mappingTable.classList.remove('hidden');
                appleElements.financeTableTitle.style.display = 'block';
            }
        });
    }

    // Handle Pinelabs mappings
    if (appleState.selectedTypes.includes('Pinelabs')) {
        const pinelabsData = window.applePinelabsGenerateMappingForExport(appleState.storeData, appleState.sheet2Data, appleState.selectedStores, appleState.contactInfo);
        if (pinelabsData) {
            appleState.mappings['Pinelabs'] = pinelabsData;

            const headers = pinelabsData.headers;
            const rows = pinelabsData.rows;
            const headerHtml = `<tr>${headers.map(h => `<th class="${pinelabsData.headerClass || 'th-default'}">${h}</th>`).join('')}</tr>`;
            const bodyRowsHtml = rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
            appleElements.pinelabsTableHead.innerHTML = headerHtml;
            appleElements.pinelabsTableBody.innerHTML = bodyRowsHtml;
            appleElements.pinelabsTable.classList.remove('hidden');
            appleElements.pinelabsTableTitle.style.display = 'block';

            if (!firstProvider) {
                firstProvider = 'Pinelabs';
            }
        }
    }

    if (!Object.keys(appleState.mappings).length) {
        showAppleError('No mappings generated. Please ensure at least one provider is selected.');
        return;
    }

    // Populate email section for the first provider
    let emailDetails;
    if (firstProvider === 'Pinelabs') {
        emailDetails = APPLE_PINELABS_CONFIG.emailDetails['Pinelabs'];
    } else {
        emailDetails = APPLE_CONFIG.emailDetails[firstProvider];
    }

    if (emailDetails) {
        const todayStr = `${today.getDate().toString().padStart(2, '0')}_${(today.getMonth() + 1).toString().padStart(2, '0')}_${today.getFullYear()}`;
        appleElements.emailTo.textContent = emailDetails.to?.length ? emailDetails.to.join(', ') : '-';
        appleElements.emailCC.textContent = emailDetails.cc?.length ? emailDetails.cc.join(', ') : '-';
        appleElements.emailSubject.textContent = emailDetails.subject(firstProvider === 'Pinelabs' ? todayStr : storeLabel, storeLabel);
        appleElements.emailBody.value = emailDetails.body(firstProvider === 'Pinelabs' ? 'Pinelabs' : firstProvider, storeLabel);
        appleElements.emailInfoSection.classList.remove('hidden');
    } else {
        showAppleError(`Mapping generated, but email details are missing for ${firstProvider}.`);
    }

    appleElements.exportButton.classList.remove('hidden');
    appleElements.outputDiv.classList.remove('hidden');
};

const exportAppleToExcel = () => {
    if (!Object.keys(appleState.mappings).length) {
        alert('No mappings generated. Please generate mappings before exporting.');
        return;
    }

    const wb = XLSX.utils.book_new();
    const borderStyle = {
        top: { style: 'thin', color: { rgb: 'D1D5DB' } },
        bottom: { style: 'thin', color: { rgb: 'D1D5DB' } },
        left: { style: 'thin', color: { rgb: 'D1D5DB' } },
        right: { style: 'thin', color: { rgb: 'D1D5DB' } }
    };

    const sortedProviders = Object.keys(appleState.mappings).sort((a, b) => {
        if (a === 'Pinelabs') return 1;
        if (b === 'Pinelabs') return -1;
        return a.localeCompare(b);
    });

    sortedProviders.forEach(provider => {
        const { headers, rows, excelColor } = appleState.mappings[provider];
        const wsData = [headers, ...rows];
        const ws = XLSX.utils.aoa_to_sheet(wsData);

        for (let r = 0; r < wsData.length; r++) {
            for (let c = 0; c < headers.length; c++) {
                const cellAddress = XLSX.utils.encode_cell({ r, c });
                if (!ws[cellAddress]) ws[cellAddress] = { t: 's', v: (wsData[r][c] || '').toString() };
                ws[cellAddress].s = { border: borderStyle };
                if (r === 0) {
                    ws[cellAddress].s.fill = { patternType: 'solid', fgColor: { rgb: excelColor } };
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

        XLSX.utils.book_append_sheet(wb, ws, `Apple ${provider} Mapping`);
    });

    const today = new Date();
    const dateStr = `${today.getDate().toString().padStart(2, '0')}_${(today.getMonth() + 1).toString().padStart(2, '0')}_${today.getFullYear()}`;
    const storeLabel = getAppleStoreLabel(appleState.selectedStores);
    const fileName = `TCM X Apple Brand Mapping - ${dateStr} - ${storeLabel}.xlsx`;
    XLSX.writeFile(wb, fileName);
};

const copyAppleEmailBody = async () => {
    const textToCopy = appleElements.emailBody.value.trim();
    if (!textToCopy) {
        appleElements.copyEmailBodyBtn.textContent = 'Empty!';
        appleElements.copyEmailBodyBtn.disabled = true;
        setTimeout(() => {
            appleElements.copyEmailBodyBtn.textContent = 'Copy';
            appleElements.copyEmailBodyBtn.disabled = false;
        }, 1500);
        return;
    }
    try {
        await navigator.clipboard.writeText(textToCopy);
        appleElements.copyEmailBodyBtn.textContent = 'Copied!';
        appleElements.copyEmailBodyBtn.disabled = true;
        setTimeout(() => {
            appleElements.copyEmailBodyBtn.textContent = 'Copy';
            appleElements.copyEmailBodyBtn.disabled = false;
        }, 2000);
    } catch (err) {
        try {
            appleElements.emailBody.select();
            appleElements.emailBody.setSelectionRange(0, 99999);
            document.execCommand('copy');
            appleElements.copyEmailBodyBtn.textContent = 'Copied (Fallback)!';
            appleElements.copyEmailBodyBtn.disabled = true;
            setTimeout(() => {
                appleElements.copyEmailBodyBtn.textContent = 'Copy';
                appleElements.copyEmailBodyBtn.disabled = false;
            }, 2000);
        } catch (fallbackError) {
            alert('Failed to copy email body. Please copy it manually.');
            console.error('Copy failed:', fallbackError);
        }
    }
};

const initializeAppleEventListeners = () => {
    appleElements.excelFile.addEventListener('change', async (event) => {
        const file = event.target.files[0];

        resetAppleInteractionState();
        appleElements.typeSelect.disabled = true;

        if (!file) {
            appleState.storeData = [];
            appleState.sheet2Data = [];
            appleState.loadedFileName = '';
            if (appleElements.fileNameDisplay) appleElements.fileNameDisplay.textContent = '';
            appleElements.excelFile.value = null;
            return;
        }

        appleState.storeData = [];
        appleState.sheet2Data = [];

        appleState.loadedFileName = file.name;
        if (appleElements.fileNameDisplay) appleElements.fileNameDisplay.textContent = appleState.loadedFileName;
        appleElements.loadingMessage.classList.remove('hidden');

        try {
            const { sheet1Data, sheet2Data, sheet3Data } = await readAppleExcelFile(file);
            appleState.storeData = sheet3Data;
            appleState.sheet2Data = sheet2Data;

            if (appleState.storeData.length > 0) {
                populateAppleStoreDropdown(appleState.storeData);
                appleElements.typeSelect.disabled = false;
                populateAppleTypeDropdown();
                populateAppleFinanceDropdown();
            } else {
                appleState.loadedFileName = '';
                if (appleElements.fileNameDisplay) appleElements.fileNameDisplay.textContent = '';
                appleElements.excelFile.value = null;
            }
        } catch (error) {
            alert(error.message);
            appleState.storeData = [];
            appleState.sheet2Data = [];
            appleState.loadedFileName = '';
            if (appleElements.fileNameDisplay) appleElements.fileNameDisplay.textContent = '';
            appleElements.excelFile.value = null;
        } finally {
            appleElements.loadingMessage.classList.add('hidden');
        }
    });

    appleElements.contactPersonSelect.addEventListener('change', (event) => {
        appleState.contactInfo.person = event.target.value;
        updateAppleUIState();
    });

    appleElements.contactNumberSelect.addEventListener('change', (event) => {
        appleState.contactInfo.number = event.target.value;
        updateAppleUIState();
    });

    appleElements.emailAddressSelect.addEventListener('change', (event) => {
        appleState.contactInfo.email = event.target.value;
        updateAppleUIState();
    });

    appleElements.exportButton.addEventListener('click', exportAppleToExcel);

    appleElements.copyEmailBodyBtn.addEventListener('click', copyAppleEmailBody);
};

const initializeAppleApp = () => {
    const currentBrand = document.querySelector('.brand-nav-button.active')?.dataset.targetBrand;
    if (currentBrand === 'apple') {
        resetAppleInteractionState();
        if (appleState.storeData.length > 0) {
            appleElements.typeSelect.disabled = false;
            populateAppleStoreDropdown(appleState.storeData);
            populateAppleTypeDropdown();
            populateAppleFinanceDropdown();
            if (appleElements.fileNameDisplay) {
                appleElements.fileNameDisplay.textContent = appleState.loadedFileName;
            }
        }
    }
    initializeAppleEventListeners();
};

document.addEventListener('DOMContentLoaded', initializeAppleApp);