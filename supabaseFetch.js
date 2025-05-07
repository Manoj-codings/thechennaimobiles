document.addEventListener('DOMContentLoaded', () => {
    // Initialize Supabase client
    const supabaseUrl = 'https://rzzdvonzuzhrnksounlk.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6emR2b256dXpocm5rc291bmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTc1NzgsImV4cCI6MjA2MjE5MzU3OH0.Nczw3-SIxJvTvW6_UOJxvRigXbSrQUiCrGbkyRnU4Yw';
    const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

    // Function to fetch Excel file from Supabase
    async function fetchExcelFile() {
        try {
            const { data, error } = await supabase.storage
                .from('tcm-goat')
                .download('STORES and FINANCE CODES.xlsx');

            if (error) {
                console.error('Error fetching Excel file:', error);
                document.getElementById('loadingMessage').innerText = `Error: ${error.message || 'Failed to fetch file.'}`;
                document.getElementById('appleLoadingMessage').innerText = `Error: ${error.message || 'Failed to fetch file.'}`;
                return;
            }

            // Create a File object from the Blob
            const file = new File([data], 'STORES and FINANCE CODES.xlsx', {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                lastModified: new Date().getTime()
            });

            // Hide loading messages
            document.getElementById('loadingMessage').classList.add('hidden');
            document.getElementById('appleLoadingMessage').classList.add('hidden');

            // Assign file to MI file input and trigger change event
            const miFileInput = document.getElementById('excelFile');
            const miDataTransfer = new DataTransfer();
            miDataTransfer.items.add(file);
            miFileInput.files = miDataTransfer.files;
            const miChangeEvent = new Event('change', { bubbles: true });
            miFileInput.dispatchEvent(miChangeEvent);

            // Assign file to Apple file input and trigger change event
            const appleFileInput = document.getElementById('appleExcelFile');
            const appleDataTransfer = new DataTransfer();
            appleDataTransfer.items.add(file);
            appleFileInput.files = appleDataTransfer.files;
            const appleChangeEvent = new Event('change', { bubbles: true });
            appleFileInput.dispatchEvent(appleChangeEvent);
        } catch (err) {
            console.error('Unexpected error:', err);
            document.getElementById('loadingMessage').innerText = `Unexpected error: ${err.message || 'Check console for details.'}`;
            document.getElementById('appleLoadingMessage').innerText = `Unexpected error: ${err.message || 'Check console for details.'}`;
        }
    }

    // Execute the fetch function
    fetchExcelFile();
});