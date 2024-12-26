document.getElementById('download-button').addEventListener('click', () => {
    const element = document.querySelector('.container');
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'africas_largest_economies.png';
        link.click();
    });
});




