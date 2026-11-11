# Mr. Bengkel — Landing Page UMKM

Proyek UAS kelompok: HTML5, CSS3, JavaScript, Bootstrap 5.3.3, tanpa database.
Website promosi bengkel sepeda motor dan sepeda listrik di CitraRaya Tangerang.

## Mulai

1. Ekstrak ZIP (jangan membuka HTML dari dalam ZIP).
2. Buka folder `mr-bengkel` lalu klik dua kali `index.html` di Chrome atau Edge.
3. Untuk mengedit: VS Code → File → Open Folder → pilih folder `mr-bengkel`.
4. Buka `PANDUAN_UAS.html` untuk panduan lengkap. Bisa dibaca dengan browser atau dicetak.
5. Opsional: gunakan Live Server di VS Code untuk melihat perubahan saat mengedit.

Bootstrap disertakan secara lokal. Tampilan, gambar, navigasi, form, dan galeri tidak memerlukan instalasi atau database. Internet diperlukan untuk Google Maps, WhatsApp, Instagram, Linktree, serta publikasi.

## Struktur berkas

| Berkas/folder | Fungsi |
|---|---|
| index.html | Struktur, konten, 6 layanan, 6 testimoni, kontak dan tim |
| css/style.css | Warna oranye/biru, tata letak, breakpoint HP, hover |
| js/script.js | Menu HP, validasi form, penyusunan pesan WA, galeri, tahun otomatis |
| images/ | Logo dan foto asli usaha, dioptimalkan untuk web |
| vendor/bootstrap.min.css | Bootstrap 5.3.3 untuk dasar gaya dan komponen form |
| vendor/LICENSE-bootstrap.txt | Lisensi Bootstrap |
| PANDUAN_UAS.html | Langkah praktik, GitHub, pemeriksaan, dan alur video |
| README.md | Dokumentasi proyek |

Bootstrap CSS dimuat sebelum CSS khusus. Tidak menggunakan Bootstrap JS karena interaksi dibuat dalam JavaScript sendiri. Tidak ada npm, build, backend, akun pelanggan, pembayaran, atau penyimpanan data.

## Fitur

- Navbar responsif dengan tautan bagian halaman.
- Hero, profil sejak Maret 2022, enam kartu produk/jasa dengan foto.
- Keunggulan dan kedai: makanan/minuman berbayar; Aqua gratis.
- Empat foto galeri yang dapat diperbesar, ditutup dengan tombol atau Escape.
- Enam testimoni asli yang disalin dari tangkapan layar pengguna, bukan API Google dan tidak diperbarui otomatis.
- Maps embed sesuai kode yang diberikan pemilik; tombol profil dan petunjuk arah.
- Form konsultasi dengan validasi wajib dan penolakan input hanya spasi.
- Tautan WhatsApp dengan pesan ter-encode; pengguna sendiri mengirim pesannya.
- Tidak mengklaim booking telah berhasil. Admin mengonfirmasi jadwal dan biaya.
- Nomor WhatsApp: 628119057800.

## Mengubah konten

Cari teks yang akan diubah di index.html dengan Ctrl+F. Warna utama di :root pada css/style.css. Gambar pengganti disimpan dalam images; samakan nama berkas dan ekstensi atau ubah atribut src. Gunakan nama file huruf kecil tanpa spasi. Untuk mengganti nomor WA, ubah seluruh kemunculan 628119057800 di index.html dan js/script.js.

Foto oli memakai rak oli khusus, foto aki memakai etalase produk/aki, dan profil memakai sudut interior baru. Foto tampak depan bangunan tetap menjadi hero. Seluruh foto yang ditampilkan di halaman utama berbeda. Enam ulasan tersusun dalam dua baris pada desktop; ulasan panjang memiliki tombol Baca selengkapnya.

## Anggota dan usulan pembagian kerja

| Nama | NIM | Bagian |
|---|---|---|
| Dwi Pangesti Mayangsari | 24612010171 | HTML dan struktur |
| Isna Novianti | 24612010004 | CSS dan responsivitas |
| Resti Febriyani | 24612010121 | JavaScript dan pengujian |
| Diyan Alifah Febriyanti | 24612010408 | Konten, gambar, koordinasi publikasi |

Pembagian ini adalah usulan, bukan catatan kontribusi yang telah dilakukan. Setiap anggota harus memahami seluruh proyek, mengerjakan perubahan nyata, serta melakukan commit melalui akun masing-masing. Jangan menganggap upload ZIP oleh satu orang sebagai bukti kontribusi semua anggota.

## GitHub Pages

Buat satu repository kelompok. Letakkan index.html langsung pada root repository, bersama folder css, js, images, vendor, dan berkas dokumentasi; jangan mengunggah ZIP sebagai satu-satunya berkas. Setelah semua perubahan kelompok digabung, buka Settings → Pages → Build and deployment → Source: Deploy from a branch → main → /(root) → Save. Tunggu deployment berhasil dan gunakan alamat yang ditampilkan GitHub.

Panduan resmi: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Pemeriksaan yang telah dilakukan

- Sintaks JavaScript: lolos `node --check`.
- Pemeriksaan tautan internal dan semua aset lokal: lolos.
- Pemeriksaan tampilan desktop dan pratinjau lebar HP 390 px: dilakukan.
- Menu HP: terbuka dan menutup setelah memilih Layanan.
- Form kosong: ditolak. Form valid: menghasilkan tautan WA dengan nama, kendaraan, layanan, dan keluhan yang sesuai; karakter & ter-encode.
- Galeri: foto membesar dan dapat ditutup.
- Maps embed termuat dalam browser pengujian.

Pesan WA tidak dikirim saat pengujian. Website belum diunggah ke repository kelompok atau GitHub Pages. Uji kembali tautan eksternal, seluruh ukuran layar, dan perangkat nyata sebelum presentasi.

## Sumber dan hak penggunaan

Logo, foto, profil, kontak dan testimoni berasal dari materi pemilik yang disediakan untuk proyek ini. Bootstrap 5.3.3 berlisensi MIT; lisensinya disertakan. Jangan menghapus atribusi Bootstrap. Gunakan materi bisnis ini untuk proyek Mr. Bengkel.
