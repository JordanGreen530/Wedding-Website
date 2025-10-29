---
layout: default
title: Welcome
description: Our wedding details, schedule, travel info, and registry — all in one place.
permalink: /
---

<section class="hero"
  style="background:
    linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)),
    url('{{ '/assets/photos/Frontpage.jpg' | relative_url }}') center/cover no-repeat;
    color:#fff; border-bottom:1px solid var(--border);">
  <div class="container inner" style="position:relative; z-index:1;">
    <span class="kicker" style="color:#fff;">You're invited</span>
    <h1 class="h1" style="color:#fff;">Austin &amp; Jordan Green</h1>
    <p class="h2 subtle" style="color:#f3f3f3;">May 30, 2026 · Cedar Oaks Farm · Bedford, VA</p>
    <div class="hero-ctas">
      <a class="btn" href="{{ '/contact/#rsvp' | relative_url }}">RSVP</a>
      <a class="btn ghost" href="#highlights" style="border-color:#fff; color:#fff;">Explore</a>
    </div>
  </div>
</section>

<section class="section" id="highlights">
  <div class="container">
    <h2 class="sr">All the Essentials</h2>
    <p class="lead sr">Key details for the wedding weekend, in one place.</p>
    <div class="cards" style="margin-top:1rem">
      <article class="card sr">
        <h3>Registry</h3>
        <p>We’re grateful for your love—gifts are optional. If you wish, contribute to our first home or honeymoon.</p>
        <a class="btn" href="{{ '/registry/' | relative_url }}">Registry</a>
      </article>
      <article class="card sr">
        <h3>Schedule</h3>
        <p>Weekend timeline at a glance: arrivals, ceremony, reception, and send-off.</p>
        <a class="btn" href="{{ '/schedule/' | relative_url }}">See schedule</a>
      </article>
      <article class="card sr">
        <h3>Lodging</h3>
        <p>Hand-picked stays near the venue—hotels, cabins, and cozy B&amp;Bs.</p>
        <a class="btn" href="{{ '/lodging/' | relative_url }}">Where to stay</a>
      </article>
      <article class="card sr">
        <h3>Directions</h3>
        <p>Maps, parking, and day-of tips for smooth travels to Cedar Oaks Farm.</p>
        <a class="btn" href="{{ '/directions/' | relative_url }}">Get directions</a>
      </article>
      <article class="card sr">
        <h3>Gallery</h3>
        <p>Photos of us and the place we love. More coming soon after the big day!</p>
        <a class="btn" href="{{ '/gallery/' | relative_url }}">See photos</a>
      </article>
      <article class="card sr">
        <h3>FAQs</h3>
        <p>Dress code, weather, plus all the little things you’re wondering about.</p>
        <a class="btn" href="{{ '/faqs/' | relative_url }}">Read FAQs</a>
      </article>
    </div>
  </div>
</section>
