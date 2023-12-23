const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const telp = document.getElementById('telp').value;
    const topik = document.getElementById('topik').value;
    if (nama && telp && topik) {
        alert(`Terima kasih ${nama} atas topik ${topik} yang anda berikan. no. telp ${telp} akan kami hubungi.`)
    }else{
        alert(`Harap mengisi semua form yang tersedia.`)
    }
})