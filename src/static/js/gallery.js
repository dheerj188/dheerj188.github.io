// Image Gallery with Lightbox

class ImageGallery {
    constructor(galleryElement) {
        this.gallery = galleryElement;
        this.images = Array.from(this.gallery.querySelectorAll('.gallery-item'));
        this.currentIndex = 0;
        this.lightbox = null;
        this.initLightbox();
    }

    initLightbox() {
        // Create lightbox overlay
        this.lightbox = document.createElement('div');
        this.lightbox.className = 'lightbox';
        this.lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <button class="lightbox-prev" aria-label="Previous image">&lsaquo;</button>
            <button class="lightbox-next" aria-label="Next image">&rsaquo;</button>
            <div class="lightbox-content">
                <img src="" alt="">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(this.lightbox);

        // Add click handlers to gallery items
        this.images.forEach((item, index) => {
            item.addEventListener('click', () => this.open(index));
            item.style.cursor = 'pointer';
        });

        // Lightbox controls
        this.lightbox.querySelector('.lightbox-close')
            .addEventListener('click', () => this.close());
        this.lightbox.querySelector('.lightbox-prev')
            .addEventListener('click', () => this.prev());
        this.lightbox.querySelector('.lightbox-next')
            .addEventListener('click', () => this.next());

        // Close on background click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.close();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            switch(e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowLeft':
                    this.prev();
                    break;
                case 'ArrowRight':
                    this.next();
                    break;
            }
        });
    }

    open(index) {
        this.currentIndex = index;
        this.updateLightbox();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateLightbox();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateLightbox();
    }

    updateLightbox() {
        const item = this.images[this.currentIndex];
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');

        const lightboxImg = this.lightbox.querySelector('img');
        const lightboxCaption = this.lightbox.querySelector('.lightbox-caption');

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        if (caption) {
            lightboxCaption.innerHTML = caption.innerHTML;
        } else {
            lightboxCaption.textContent = '';
        }

        // Update button visibility
        const prevBtn = this.lightbox.querySelector('.lightbox-prev');
        const nextBtn = this.lightbox.querySelector('.lightbox-next');

        if (this.images.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    }
}

// Initialize galleries when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.image-gallery');

    galleries.forEach(gallery => {
        new ImageGallery(gallery);
    });
});
