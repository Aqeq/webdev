# Cheat Sheet

> **Panduan referensi untuk Quest: The Broken Dashboard**

---

## HTML Position

```
position: relative  -> parent (untuk referensi child absolut)
position: absolute  -> child (relatif ke parent terdekat)
position: fixed     -> modal/overlay (relatif ke viewport)
```

---

## HTML Flex

```
display: flex           -> aktifkan flexbox
justify-content: center -> tengah secara horizontal
justify-content: space-between -> tersebar merata
align-items: center     -> tengah secara vertikal
flex-wrap: wrap         -> wrap jika melebihi container
gap: 10px              -> jarak antar item
```

---

## CSS Selectors

```
.class                 -> berdasarkan class
#id                    -> berdasarkan id
element                -> berdasarkan tag
.parent .child         -> child dari parent
parent > child         -> direct child
:nth-child(n)          -> urutan ke-n
:hover                 -> saat mouse hover
[data-attr]            -> ada atribut data
[data-attr="value"]    -> atribut data dengan nilai
.active                -> class spesifik
button:active          -> pseudo-class
```

---

## JS DOM Basic

```
document.querySelector('.class')         -> ambil 1 elemen
document.querySelectorAll('.class')      -> ambil semua elemen
document.createElement('div')           -> buat elemen baru
element.appendChild(child)              -> tambahkan child
element.textContent = 'text'            -> isi teks
element.classList.add('class')          -> tambah class
element.classList.remove('class')       -> hapus class
element.classList.toggle('class')       -> toggle class
element.getAttribute('data-x')         -> baca atribut
element.setAttribute('data-x','val')   -> set atribut
element.addEventListener('click', fn)  -> pasang event
event.target                             -> elemen yang diklik
```

---

> **Tips:**
>
> - Selesaikan level 1-4 dulu sebelum ke level 5
> - Buka browser dev tools (F12) untuk debug
> - Gunakan `console.log()` untuk cek nilai
> - Jangan lupa `<!DOCTYPE html>` di awal file!
> - Semua CSS hanya selector — tidak boleh ada properti visual lain!

**[< Kembali ke Level 5](level-5-the-final-boss.md)**
