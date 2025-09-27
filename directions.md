---
layout: default
title: Directions
permalink: /directions/
---

<section class="section">
  <div class="container">
    <h1 class="h1">Directions &amp; Parking</h1>
    <p class="lead">We recommend arriving 30 minutes early to enjoy the property (and avoid the last-minute rush).</p>

    <div class="grid-2 gap-lg" style="margin-top:1rem">
      <!-- LEFT: Map -->
      <div class="sr">
        <div class="embed map-embed" style="border:1px solid var(--border); border-radius:16px; overflow:hidden; box-shadow:var(--shadow)">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.983907769781!2d-79.4711048236842!3d37.35591173617693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d2d5a16c33e45%3A0xec2f1fb612bcddaa!2sCedar%20Oaks%20Farm!5e1!3m2!1sen!2sus!4v1757470017115!5m2!1sen!2sus"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <!-- RIGHT: Sidebar cards -->
      <aside class="stack sr">
        <!-- Address card -->
        <article class="card">
          <h2 class="h3" style="margin:.25rem 0 .5rem">Address</h2>
          <p style="margin:0 0 .75rem">
            <strong>Cedar Oaks Farm</strong><br>
            4671 Forest Rd, Bedford, VA 24523
          </p>
          <button class="btn ghost" type="button" id="copyAddressBtn">Copy Address</button>
          <p id="copyMsg" class="subtle" style="margin:.5rem 0 0; display:none;">📋 Address copied!</p>
        </article>

        <!-- Navigation links -->
        <article class="card">
          <h2 class="h3" style="margin:.25rem 0 .5rem">Navigation</h2>
          <div class="btn-row">
            <a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=37.3559117,-79.4711048" target="_blank" rel="noopener">Open in Google Maps</a>
            <a class="btn ghost" href="https://maps.apple.com/?ll=37.3559117,-79.4711048&amp;q=Cedar+Oaks+Farm" target="_blank" rel="noopener">Apple Maps</a>
          </div>
          <p class="subtle" style="margin:.75rem 0 0;">
            Tip: Search for “Cedar Oaks Farm, Bedford VA” if coordinates don’t load.
          </p>
        </article>

        <!-- Day-of notes -->
        <article class="card">
          <h2 class="h3" style="margin:.25rem 0 .5rem">Day-of Notes</h2>
          <ul style="margin:.25rem 0 0; padding-left:1rem; color:var(--muted)">
            <li>Parking is on site; follow signs for guest parking.</li>
            <li>Accessibility drop-off at the main entrance.</li>
            <li>Country roads—please drive slowly and watch for wildlife.</li>
          </ul>
        </article>
      </aside>
    </div>
  </div>
</section>

<script>
  const copyBtn = document.getElementById('copyAddressBtn');
  const copyMsg = document.getElementById('copyMsg');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText("Cedar Oaks Farm, Bedford, VA");
        copyMsg.style.display = 'block';
        setTimeout(()=> copyMsg.style.display = 'none', 2000);
      } catch (err) {
        alert("Unable to copy address, please copy manually.");
      }
    });
  }
</script>
