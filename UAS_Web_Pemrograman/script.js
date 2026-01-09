function tampilWaktu() {
    const now = new Date();
    const jam = now.getHours().toString().padStart(2, '0');
    const menit = now.getMinutes().toString().padStart(2, '0');
    const detik = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("waktu").innerHTML =
        jam + ":" + menit + ":" + detik;
}
setInterval(tampilWaktu, 1000);
