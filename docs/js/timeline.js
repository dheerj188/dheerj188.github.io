// Professional Timeline — lightbox + scroll-reveal

document.addEventListener('DOMContentLoaded', () => {
    // ── Scroll-reveal ──────────────────────────────────────────────
    const items = document.querySelectorAll('.prof-timeline-item');

    if (items.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Stagger each card slightly
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, i * 60);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        items.forEach(el => observer.observe(el));
    }

    // ── Lightbox for timeline images ───────────────────────────────
    const imgs = document.querySelectorAll('.prof-timeline-img');
    if (!imgs.length) return;

    const lb  = document.getElementById('timeline-lightbox');
    const lbImg = lb.querySelector('img');
    const lbCap = lb.querySelector('.lightbox-caption');

    function openLb(img) {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbCap.textContent = img.alt;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLb() {
        lb.classList.remove('active');
        document.body.style.overflow = '';
    }

    imgs.forEach(img => img.addEventListener('click', () => openLb(img)));

    lb.querySelector('.lightbox-close').addEventListener('click', closeLb);
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
});
