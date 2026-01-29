function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const container = document.getElementById('lightbox-container');
    const modalViews = document.getElementById('modal-views');
    
    modalViews.innerText = element.querySelector('.views-info').innerText;
    container.innerHTML = ''; 
    const media = element.querySelector('img, video');
    const clone = media.cloneNode(true);
    
    if (clone.tagName === 'VIDEO') {
        clone.setAttribute('controls', '');
        clone.muted = false;
        clone.play();
    }
    container.appendChild(clone);
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const video = document.querySelector('#lightbox-container video');
    if (video) video.pause();
    document.getElementById('lightbox').style.display = 'none';
}