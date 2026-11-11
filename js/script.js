'use strict';
// Menu HP: aria-expanded menjaga informasi tombol bagi pembaca layar.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-menu');
menuButton.addEventListener('click', () => {
  const opened = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#tahun').textContent = new Date().getFullYear();
// Form hanya menyusun pesan. Tidak menyimpan data atau mengirim pesan otomatis.
const form = document.querySelector('#consult-form');
const result = document.querySelector('#wa-result');
const status = document.querySelector('#form-status');
form.addEventListener('input', () => {
  result.hidden = true;
  result.removeAttribute('href');
  status.textContent = '';
  form.querySelectorAll('input, textarea').forEach(field => field.setCustomValidity(''));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  const fields = [...form.querySelectorAll('input, textarea')];
  fields.forEach(field => field.setCustomValidity(field.value.trim() ? '' : 'Mohon isi kolom ini.'));
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = `Halo Mr. Bengkel, saya ingin konsultasi.\n\nNama: ${data.get('nama').trim()}\nKendaraan: ${data.get('kendaraan').trim()}\nLayanan: ${data.get('layanan')}\nKeluhan: ${data.get('keluhan').trim()}\n\nMohon informasi jadwal dan estimasi biaya. Terima kasih.`;
  result.href = `https://wa.me/628119057800?text=${encodeURIComponent(message)}`;
  result.hidden = false;
  status.textContent = 'Pesan siap. Klik tombol di bawah, lalu kirim melalui WhatsApp. Jadwal menunggu konfirmasi admin.';
  result.focus();
});
// Galeri menggunakan dialog bawaan browser: Escape dan navigasi keyboard tersedia.
const dialog = document.querySelector('#photo-dialog');
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#large-photo').src = button.dataset.photo;
  document.querySelector('#large-photo').alt = button.dataset.caption;
  document.querySelector('#photo-caption').textContent = button.dataset.caption;
  dialog.showModal();
}));
document.querySelector('#close-photo').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

// Membuka teks lengkap ulasan panjang tanpa berpindah halaman.
document.querySelectorAll('.review-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const text = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = text.classList.toggle('expanded');
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Tampilkan lebih sedikit' : 'Baca selengkapnya';
  });
});

