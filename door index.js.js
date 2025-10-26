// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll spy (Bootstrap needs body attrs; we’ll just enable active link update)
const scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#mainNav', offset: 80 });

// Optional: small “fade-up” reveal for hero text (can reuse later)
document.querySelectorAll('#hero .badge, #hero h1, #hero .lead, #hero .tagline, #hero .btn, #hero .text-white-50')
  .forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(14px)';
    setTimeout(() => {
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      el.style.opacity = 1;
      el.style.transform = 'none';
    }, 200 + i * 120);
  });
// Lead form submission (demo only)
const form = document.getElementById('leadForm');
const formMsg = document.getElementById('formMsg');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.email) {
      formMsg.textContent = '❗ Please fill in required fields.';
      return;
    }

    // Save locally (placeholder) — replace with API later
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    leads.push({...data, ts: Date.now()});
    localStorage.setItem('leads', JSON.stringify(leads));

    form.reset();
    formMsg.textContent = '✅ You’re in! We’ll notify you about your free access.';
  });
}
