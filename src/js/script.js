// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
    } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
    }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
    }
});

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
    if (darkToggle.checked) {
        html.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
    }
});

// pindahkan toggle sesuai mode
if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// Cek Harga Servis
// function cekHarga() {
//     const merek = document.getElementById('merk').value;
//     const kerusakan = document.getElementById('kerusakan').value;
//     const hasil = document.getElementById('hasil');
//     const output = document.getElementById('hargaOutput');

//     let harga = "Estimasi belum tersedia";

//     if (merk && kerusakan) {
//         switch (kerusakan) {
//             case "bootloop":
//                 harga = "Rp80.000 - Rp150.000";
//                 break;
//             case "flash":
//                 harga = "Rp70.000 - Rp120.000";
//                 break;
//             case "bypass-password":
//                 harga = "Rp100.000 - Rp180.000";
//                 break;
//             case "bypass-google-akun":
//                 harga = "Rp150.000 - Rp300.000";
//                 break;
//             case "bypass-mi-akun":
//                 harga = "Rp120.000 - Rp200.000";
//                 break;
//             case "bypass-samsung-akun":
//                 harga = "Rp300.000 - Rp600.000";
//                 break;
//             case "bypass-icloud":
//                 harga = "Rp90.000 - Rp160.000";
//                 break;
//             case "root-jailbreak": 
//                 harga = "Rp90.000 - Rp160.000";
//                 break;
//             case "custom-rom": 
//                 harga = "Rp90.000 - Rp160.000";
//                 break;
//             case "unlock-imei": 
//                 harga = "Rp90.000 - Rp160.000";
//                 break;
//             case "lainnya":
//                 harga = "Silakan konsultasikan langsung untuk estimasi lebih akurat.";
//                 break;
//             default:
//                 harga = "Estimasi belum tersedia";
//         }

//     hasil.classList.remove("hidden");
//     output.textContent = harga;
//     } else {
//     hasil.classList.add("hidden");
//     alert("Silakan pilih merek dan jenis kerusakan.");
// }
// }

// Pastikan DOM sudah siap
document.addEventListener("DOMContentLoaded", function () {

  // Form Contact WhatsApp
  const formWa = document.getElementById("formWa");
  if (formWa) {
    formWa.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      const teks = `Halo Admin Royan FixTech!\n` +
        `Nama: ${name}\n` +
        `No. Telepon: ${phone}\n` +
        `Pesan: ${message}`;

      const nomorAdmin = "6287715970798";

      window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(teks)}`, "_blank");
    });
  }

  // Form Booking WhatsApp
  const formBooking = document.getElementById("formBooking");
  if (formBooking) {
    formBooking.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const alamat = document.getElementById("address").value;
      const merk = document.getElementById("merk").value;
      const keluhan = document.getElementById("keluhan").value;
      const kronologi = document.getElementById("kronologi").value;

      const pesan = `Halo Admin Royan FixTech!\n` +
        `Saya ingin booking servis HP dengan data berikut:\n\n` +
        `*Nama:* ${nama}\n` +
        `*No. WhatsApp:* ${phone}\n` +
        `*Alamat:* ${alamat}\n` +
        `*Merk & Tipe HP:* ${merk}\n` +
        `*Keluhan:* ${keluhan}\n` +
        `*Kronologi Sebelum Rusak:* ${kronologi}\n\n` +
        `Saya akan mengirimkan *foto HP* di chat ini. Terima kasih.`;

      const nomorTujuan = "6287715970798";

      window.open(`https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`, "_blank");
    });
  }

});


