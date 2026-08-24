// Professional Timeline: lightbox + scroll-reveal

document.addEventListener('DOMContentLoaded', () => {
    // ── Scroll-reveal ──────────────────────────────────────────────
    const items = document.querySelectorAll('.prof-timeline-item');

    if (items.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, i * 60);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        items.forEach(el => observer.observe(el));
    }

    // ── Lightbox with prev/next ────────────────────────────────────
    const imgs = Array.from(document.querySelectorAll('.prof-timeline-img'));
    if (!imgs.length) return;

    const lb     = document.getElementById('timeline-lightbox');
    const lbImg  = lb.querySelector('img');
    const lbCap  = lb.querySelector('.lightbox-caption');
    const btnPrev = lb.querySelector('.lightbox-prev');
    const btnNext = lb.querySelector('.lightbox-next');

    let current = 0;

    function show(index) {
        current = (index + imgs.length) % imgs.length;
        lbImg.src = imgs[current].src;
        lbImg.alt = imgs[current].alt;
        lbCap.textContent = imgs[current].alt;
        btnPrev.style.display = imgs.length > 1 ? '' : 'none';
        btnNext.style.display = imgs.length > 1 ? '' : 'none';
    }

    function openLb(index) {
        show(index);
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLb() {
        lb.classList.remove('active');
        document.body.style.overflow = '';
    }

    imgs.forEach((img, i) => img.addEventListener('click', () => openLb(i)));

    btnPrev.addEventListener('click', (e) => { e.stopPropagation(); show(current - 1); });
    btnNext.addEventListener('click', (e) => { e.stopPropagation(); show(current + 1); });
    lb.querySelector('.lightbox-close').addEventListener('click', closeLb);
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => {
        if (!lb.classList.contains('active')) return;
        if (e.key === 'Escape')     closeLb();
        if (e.key === 'ArrowLeft')  show(current - 1);
        if (e.key === 'ArrowRight') show(current + 1);
    });
});
