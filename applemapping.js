const APPLE_PINELABS_CONFIG = {
    mappingFormats: {
        Pinelabs: {
            headers: [
                'Apple ID', 'Category of Store', 'National Distributor', 'Store Name',
                'Address', 'City', 'Pin Code', 'State', 'Contact Person', 'Contact No.',
                'Email Address', 'RFSM', 'ASM', 'Bank Name', 'POS ID', 'Plutus TID',
                'Request Date', 'Apple ID'
            ],
            headerClass: 'th-pinelabs',
            rowGenerator: (store, sheet2Data, contactInfo, requestDate) => {
                const storeName = store.STORE || '-';
                const address = store.ADDRESS || '-';
                const city = store.CITY || '-';
                const pinCode = store.PINCODE || '-';
                const state = store.STATE || '-';
                const appleId = store.APPLE || '-';
                const matchingMachines = sheet2Data.filter(s => s.STORE === storeName);
                if (!matchingMachines.length) {
                    return [[
                        appleId, 'Non TEP', 'Redington', storeName,
                        address, city, pinCode, state,
                        contactInfo.person, contactInfo.number, contactInfo.email,
                        'Shankar Narayan', 'Vamsi', 'HDFC', '-', '-',
                        requestDate, appleId
                    ]];
                }
                return matchingMachines.map(machine => [
                    appleId, 'Non TEP', 'Redington', storeName,
                    address, city, pinCode, state,
                    contactInfo.person, contactInfo.number, contactInfo.email,
                    'Shankar Narayan', 'Vamsi', 'HDFC',
                    machine['POS ID'] || '-', machine['TID'] || '-',
                    requestDate, appleId
                ]);
            },
            excelColor: '4F46E5'
        }
    },
    emailDetails: {
        Pinelabs: {
            to: ['neeraj.saini01@pinelabs.com', 'ejaj.ahmed@pinelabs.com'],
            cc: [
                'sairam_v@apple.com',
                'thechennaimobiles.riyas@gmail.com',
                'thechennaimobiles.fazilunes@gmail.com',
                'azhar@thechennaimobiles.com'
            ],
            subject: (dateStr, storeLabel) => `The Chennai Mobiles (TCM) Daily Mapping | Pinelabs - ${dateStr} | ${storeLabel}`,
            body: (financeName, storeLabel) => `Dear Team,\n\nPlease find the attached file containing the brand mapping details for ${financeName}, for the following store(s): ${storeLabel}.\n\n@sairam_v@apple.com Kindly review and approve the mapping at your earliest convenience.\n\nThank you for your support.`
        }
    },
    financeDisplayNames: {
        Pinelabs: 'Pinelabs'
    }
};

const applePinelabsGenerateMappingForExport = (storeData, sheet2Data, selectedStores, contactInfo) => {
    const formatKey = 'Pinelabs';
    const format = APPLE_PINELABS_CONFIG.mappingFormats[formatKey];
    const stores = storeData.filter(s => selectedStores.includes(s.STORE));

    if (!stores.length || !formatKey || !format) {
        return null;
    }

    const today = new Date();
    const requestDate = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;

    const headers = format.headers;
    const rows = stores.flatMap(store => {
        const rowsData = format.rowGenerator(store, sheet2Data, contactInfo, requestDate);
        return rowsData;
    });

    return {
        headers,
        rows,
        headerClass: format.headerClass,
        excelColor: format.excelColor
    };
};

// Expose the function globally
window.applePinelabsGenerateMappingForExport = applePinelabsGenerateMappingForExport;

// Expose APPLE_PINELABS_CONFIG for email details
window.APPLE_PINELABS_CONFIG = APPLE_PINELABS_CONFIG;