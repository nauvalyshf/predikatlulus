document.getElementById('nilaiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nilai = parseInt(document.getElementById('nilai').value);
    const hasil = document.getElementById('hasil');

    if (nilai >= 75) {
        hasil.textContent = 'Lulus';
        hasil.style.color = 'green';
    } else {
        hasil.textContent = 'Tidak Lulus';
        hasil.style.color = 'red';
    }
});
