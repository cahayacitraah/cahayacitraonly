function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const container = document.getElementById('lightbox-container');
    const modalViews = document.getElementById('modal-views');
    
    // Ambil info views
    modalViews.innerText = element.querySelector('.views-info').innerText;
    
    // Bersihkan container sebelumnya
    container.innerHTML = ''; 
    
    // Ambil media (img atau video)
    const media = element.querySelector('img, video');
    const clone = media.cloneNode(true);
    
    if (clone.tagName === 'VIDEO') {
        clone.setAttribute('controls', ''); // Munculkan kontrol play/pause
        clone.muted = false; // Aktifkan suara
        clone.style.width = '100%';
        clone.style.height = '100%';
        
        // Memaksa video me-load ulang agar tampil di HP
        clone.load(); 
        
        // Coba putar otomatis setelah clone
        const playPromise = clone.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay dihalangi browser, user harus tekan play.");
            });
        }
    }
    
    container.appendChild(clone);
    lightbox.style.display = 'flex';
    
    // Cegah scroll body saat lightbox buka
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const container = document.getElementById('lightbox-container');
    const video = container.querySelector('video');
    
    if (video) {
        video.pause();
    }
    
    lightbox.style.display = 'none';
    container.innerHTML = '';
    
    // Kembalikan scroll body
    document.body.style.overflow = 'auto';
}

// Tutup jika klik area di luar frame video
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});
