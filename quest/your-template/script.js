// Tulis JS DOM manipulation kamu di sini!

// === Quest 1 ===

// 1. Ambil tombol login
const loginBtn = document.querySelector('.btn-login');

// 2. Klik tombol → alert
loginBtn.addEventListener('click', () => {
    alert('Selamat datang!');
});

// 3. Ambil teks logo → console.log
const logo = document.querySelector('.logo').textContent;
console.log(logo);


// === Quest 2 ===

// 4. Ambil semua kartu
const cards = document.querySelectorAll('.card');

// 5. Klik kartu → alert nama kartu
cards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Kamu pilih: ' + card.textContent);
    });
});

// 6. Ambil semua nama kartu → console.log
const names = [];
cards.forEach(card => names.push(card.textContent));
console.log(names);
