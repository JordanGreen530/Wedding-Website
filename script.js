
/* ===============================
   Minimal interactivity for elegance
   =============================== */
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

// Mobile nav toggle
const toggle = $('.nav-toggle');
const links = $('.nav-links');
if (toggle && links){
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('show');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth scroll enhancement for internal anchors
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', '#'+id);
      if (links) links.classList.remove('show');
    }
  });
});

// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){ entry.target.classList.add('show'); }
  });
}, { threshold: .15 });
$$('.sr').forEach((el)=> io.observe(el));

// Accordion
$$('.ac-header').forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    const item = btn.closest('.ac-item');
    item.classList.toggle('open');
    const open = item.classList.contains('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

// Simple lightbox for gallery (progressive enhancement)
$$('.masonry a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const src = a.getAttribute('href');
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:center;justify-content:center;z-index:9999;padding:2rem;';
    overlay.addEventListener('click', ()=> overlay.remove());
    const img = document.createElement('img');
    img.src = src;
    img.alt = a.querySelector('img')?.alt || '';
    img.style.cssText = 'max-width:min(1200px,90vw);max-height:90vh;border-radius:14px;box-shadow:0 20px 50px rgba(0,0,0,.35)';
    overlay.appendChild(img);
    document.body.appendChild(overlay);
  });
});
