
function openAndDownloadPDF() {
    const fileUrl = './assets/pdf/SandeepKumarResume.pdf';

    // 1. Open in new tab
    window.open(fileUrl, '_blank');

    // 2. Create a hidden download link and click it
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'SandeepKumarResume.pdf'; // Optional: custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

