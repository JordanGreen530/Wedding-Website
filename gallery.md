---
layout: default
title: Gallery
permalink: /gallery/
---

<section class="section">
  <div class="container gallery-page">
    <header class="album-intro">
      <p class="album-kicker">Our Photo Album</p>
      <h1 class="h1">Gallery</h1>
      <p class="lead">A peek into us, our people, and the places we love. Tap any photo to view it larger.</p>

      <p class="subtle">Flip to a chapter:</p>
      <nav class="gallery-jump" aria-label="Gallery categories">
        <a href="#engagement">Engagement</a>
        <a href="#our-story">Our Story</a>
        <a href="#venue">Venue</a>
        <a href="#wedding-week">Wedding Week</a>
        <a href="#family-friends">Family &amp; Friends</a>
        <a href="#pets-fun">Pets &amp; Fun</a>
      </nav>
    </header>

    <section id="engagement" class="gallery-category">
      <div class="category-header">
        <h2>Engagement</h2>
        <p class="subtle">Our engagement portraits and favorite moments from this season.</p>
      </div>
      <div class="album-grid">
        <figure class="photo-card sr">
          <a href="{{ '/assets/photos/Engagement.jpg' | relative_url }}">
            <img src="{{ '/assets/photos/Engagement.jpg' | relative_url }}" alt="Engagement photo of Austin and Jordan" loading="lazy">
          </a>
        </figure>
      </div>
    </section>

    <section id="our-story" class="gallery-category">
      <div class="category-header">
        <h2>Our Story</h2>
        <p class="subtle">Snapshots from over the years — trips, cozy weekends, and everything in between.</p>
      </div>
      <div class="album-grid">
        <!-- Add through-the-years photos here -->
      </div>
      <p class="gallery-note">Album ideas: <strong>Travel Adventures</strong>, <strong>Date Nights</strong>, <strong>Holiday Traditions</strong>.</p>
    </section>

    <section id="venue" class="gallery-category">
      <div class="category-header">
        <h2>Venue</h2>
        <p class="subtle">Scenes from Cedar Oaks Farm and the surrounding beauty.</p>
      </div>
      <div class="album-grid">
        <figure class="photo-card sr">
          <a href="{{ '/assets/photos/Vineyard.jpg' | relative_url }}">
            <img src="{{ '/assets/photos/Vineyard.jpg' | relative_url }}" alt="Vineyard and mountain views near the venue" loading="lazy">
          </a>
        </figure>
      </div>
    </section>

    <section id="wedding-week" class="gallery-category">
      <div class="category-header">
        <h2>Wedding Week</h2>
        <p class="subtle">Showers, rehearsal dinner, getting-ready moments, and celebration details.</p>
      </div>
      <div class="album-grid">
        <!-- Add wedding week photos here -->
      </div>
      <p class="gallery-note">Album ideas: <strong>Bridal Shower</strong>, <strong>Rehearsal Dinner</strong>, <strong>Behind the Scenes</strong>.</p>
    </section>

    <section id="family-friends" class="gallery-category">
      <div class="category-header">
        <h2>Family &amp; Friends</h2>
        <p class="subtle">The people who helped shape our story.</p>
      </div>
      <div class="album-grid">
        <!-- Add family and friends photos here -->
      </div>
      <p class="gallery-note">Album ideas: <strong>Childhood Throwbacks</strong>, <strong>Best Friends</strong>, <strong>Family Celebrations</strong>.</p>
    </section>

    <section id="pets-fun" class="gallery-category">
      <div class="category-header">
        <h2>Pets &amp; Fun</h2>
        <p class="subtle">The furry family + playful outtakes we love.</p>
      </div>
      <div class="album-grid">
        <figure class="photo-card sr">
          <a href="{{ '/assets/photos/Pretzel.jpg' | relative_url }}">
            <img src="{{ '/assets/photos/Pretzel.jpg' | relative_url }}" alt="Pretzel the Bernadoodle being adorable" loading="lazy">
          </a>
        </figure>
        <figure class="photo-card sr tilt-right">
          <a href="{{ '/assets/photos/Stormy.jpg' | relative_url }}">
            <img src="{{ '/assets/photos/Stormy.jpg' | relative_url }}" alt="Stormy striking a pose" loading="lazy">
          </a>
        </figure>
      </div>
      <p class="gallery-note">Album ideas: <strong>Pet Portraits</strong>, <strong>Blooper Reel</strong>, <strong>Weekend Adventures</strong>.</p>
    </section>
  </div>
</section>
