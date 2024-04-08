// header
document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.querySelector('header ul li a[href="#home"]');
    
    homeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah perilaku default dari tautan
        
        const targetElement = document.getElementById("home");
        const offset = targetElement.getBoundingClientRect().top; // Mendapatkan jarak dari atas layar
        
        // Menyusun animasi smooth scroll dengan menggunakan window.scrollTo
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.querySelector('header ul li a[href="#produk"]');

    homeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah perilaku default dari tautan

        const targetElement = document.getElementById("produk");
        const offset = targetElement.getBoundingClientRect().top; // Mendapatkan jarak dari atas layar

        // Menyusun animasi smooth scroll dengan menggunakan window.scrollTo
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// carousel vid
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const videos = document.querySelectorAll('video');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let counter = 0;
    const width = slides[0].clientWidth;
    const videoDurations = [21, 10]; // Durasi masing-masing video dalam detik

    // Function untuk autoplay video
    function autoplayVideo() {
        videos[counter].currentTime = 0; // Set ulang waktu video ke 0
        videos[counter].play();
        videos[counter].addEventListener('timeupdate', checkVideoProgress); // Pantau progres video
    }

    // Function untuk memeriksa progres video
    function checkVideoProgress() {
        if (videos[counter].currentTime >= videoDurations[counter]) {
            nextSlide(); // Jika progres mencapai durasi video, lanjut ke slide berikutnya
        }
    }

    // Function untuk beralih ke slide berikutnya
    function nextSlide() {
        counter++;
        if (counter >= slides.length) {
            counter = 0; // Kembali ke slide pertama jika sudah mencapai slide terakhir
        }
        carousel.style.transform = `translateX(${-counter * width}px)`;
        autoplayVideo(); // Mulai autoplay video pada slide berikutnya
    }

    // Function untuk memulai autoplay carousel
    function startCarousel() {
        autoplayVideo();
        setInterval(checkVideoProgress, 1000); // Periksa progres video setiap detik
    }

    // Mulai autoplay carousel
    startCarousel();

    // Tambahkan event listener untuk tombol prev dan next
    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = slides.length - 1; // Kembali ke slide terakhir jika sudah pada slide pertama
        }
        carousel.style.transform = `translateX(${-counter * width}px)`;
        autoplayVideo(); // Mulai autoplay video pada slide sebelumnya
    });

    nextBtn.addEventListener('click', () => {
        nextSlide(); // Lanjut ke slide berikutnya
    });
});

// carousel produk
function scrollSlide(direction) {
    const carouselInner = document.querySelector('.carousel-item');
    const scrollAmount = direction * (265 + 20); 
    carouselInner.scrollLeft += scrollAmount;
}

// Mendapatkan elemen kartu
const youtubeCard = document.querySelector('.youtube');
const instagramCard = document.querySelector('.instagram');

// Menambahkan event listener untuk klik
youtubeCard.addEventListener('click', () => {
    window.open('https://www.youtube.com/@VaskinGlow', '_blank');
});

instagramCard.addEventListener('click', () => {
    window.open('https://www.instagram.com/vaskinglow/', '_blank');
});

// Mendapatkan elemen kartu
const shopeeCard = document.querySelector('.shopee');
const tokopediaCard = document.querySelector('.tokopedia');

// Menambahkan event listener untuk klik
shopeeCard.addEventListener('click', () => {
    window.open('https://shopee.co.id/vaskinglow?categoryId=100630&entryPoint=ShopByPDP&itemId=19769587237', '_blank');
});

tokopediaCard.addEventListener('click', () => {
    window.open('https://www.tokopedia.com/vaskinglowofficial', '_blank');
});

// hamburger
$(document).ready(function() {
    $(".hamburger-menu").click(function() {
        $("header ul").slideToggle(); // Toggle the navigation menu
    });
});