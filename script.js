function tampilkanLaporan() {
  const laporanSection = document.getElementById("laporan-admin");
  const laporanList = document.getElementById("laporan-list");

  // Tampilkan section laporan
  laporanSection.style.display = "block";

  // Ambil data dari localStorage
  const data = JSON.parse(localStorage.getItem("orders")) || [];

  // Tampilkan datanya
  if (data.length === 0) {
    laporanList.innerHTML = "<p>Tidak ada pemesanan.</p>";
    return;
  }

  laporanList.innerHTML = "";
  data.forEach((order, index) => {
    laporanList.innerHTML += `
      <div style="background:#7b2ff7cc; padding:10px; margin-bottom:10px; border-radius:10px; box-shadow:0 0 10px #f107a3aa;">
        <strong>${index + 1}.</strong> Nama: ${order.nama}<br>
        Nomor HP: ${order.hp}<br>
        Pesan: ${order.pesan}
      </div>
    `;
  });
}
// Simpan data dari form pemesanan
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = form.elements[0].value;
  const hp = form.elements[1].value;
  const pesan = form.elements[2].value;

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({ nama, hp, pesan });
  localStorage.setItem("orders", JSON.stringify(orders));

  form.reset();
  document.getElementById("thank-you-message").style.display = "block";
})
