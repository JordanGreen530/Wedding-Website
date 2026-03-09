---
layout: default
title: Lodging
permalink: /lodging/
---

<style>
  .lodging-page {
    text-align: center;
  }

  .lodging-intro {
    max-width: 760px;
    margin: 0 auto;
  }

  .lodging-choices {
    max-width: 900px;
    margin: 1.5rem auto 0;
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    flex-wrap: wrap;
  }

  .lodging-choice {
    width: 100%;
    max-width: 300px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem 1.1rem;
    box-shadow: var(--shadow);
    text-align: center;
  }

  .lodging-choice h3 {
    margin: 0 0 .35rem;
    font-size: 1.15rem;
  }

  .lodging-choice .meta {
    font-size: .95rem;
    color: var(--muted);
    margin: 0 0 .75rem;
  }

  .lodging-choice p {
    color: var(--muted);
    margin: 0 auto;
    max-width: 230px;
  }

  .lodging-choice .btn-wrap {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .lodging-choice .btn {
    min-width: 140px;
    justify-content: center;
  }

  .lodging-shuttle {
    margin: 1.5rem auto 0;
    padding: 1.5rem 1.25rem;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: linear-gradient(180deg, #f8fbf9 0%, #fff 100%);
    box-shadow: var(--shadow);
    max-width: 900px;
    text-align: center;
  }

  .lodging-shuttle-copy {
    max-width: 760px;
    margin: 0 auto;
  }

  .lodging-info-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: .9rem;
    margin: 1.25rem auto 0;
    max-width: 850px;
  }

  .lodging-info-card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 1rem;
  }

  .lodging-info-card h3 {
    margin: 0 0 .4rem;
    font-size: 1.05rem;
  }

  .lodging-info-card p {
    margin: 0;
    color: var(--muted);
  }

  .lodging-schedule {
    margin: 1.25rem auto 0;
    max-width: 760px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.1rem;
  }

  .lodging-schedule-grid {
    display: grid;
    gap: .75rem;
  }

  .lodging-schedule-item {
    padding: .85rem;
    border-radius: 12px;
    background: #faf8f6;
  }

  .lodging-schedule-item p {
    margin: 0;
  }

  .lodging-note {
    margin-top: 2rem;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 820px) {
    .lodging-info-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 700px) {
    .lodging-choices {
      flex-direction: column;
      align-items: center;
    }

    .lodging-choice {
      max-width: 360px;
    }
  }
</style>

<section class="section">
  <div class="container lodging-page">
    <h1 class="h1">Lodging</h1>

    <p class="lead lodging-intro">
      We’ve included a few nearby lodging options for different budgets and group sizes.
      If you’d like the easiest wedding-day plan, we recommend staying at our hotel block
      to enjoy the discounted rate and convenient shuttle access.
    </p>

<!-- BOOKING OPTIONS -->
<div class="lodging-choices">

  <!-- HOTEL OPTION -->
  <article class="lodging-choice sr">

    <h3>Hotel Block</h3>
    <p class="meta">Residence Inn by Marriott Lynchburg</p>

    <p>
      Discounted rate, breakfast included, and priority access to shuttle seating.
    </p>

    <div class="btn-wrap">
      <a
        class="btn"
        href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1769709759033&key=GRP&app=resvlink"
        target="_blank"
        rel="noopener"
      >
        Book Hotel
      </a>
    </div>

  </article>

  <!-- AIRBNB OPTION -->
  <article class="lodging-choice sr">

    <!-- invisible placeholder so alignment matches -->
    <p
      class="lodging-label"
      style="
        margin:0 0 .3rem;
        font-size:.82rem;
        font-weight:700;
        letter-spacing:.06em;
        text-transform:uppercase;
        color:transparent;
      "
      aria-hidden="true"
    >
      Recommended
    </p>

    <h3>Cabins &amp; Airbnbs</h3>
    
    <p>
      Great for families or groups. Guests staying elsewhere may still reserve a shuttle seat if space is available.
    </p>

    <div class="btn-wrap">
      <a
        class="btn"
        href="https://www.airbnb.com"
        target="_blank"
        rel="noopener"
      >
        Browse Airbnbs
      </a>
    </div>

  </article>

</div>

    <!-- SHUTTLE DETAILS -->
    <div class="lodging-shuttle sr">
      <p
        style="
          margin:0 0 .45rem;
          font-size:.9rem;
          font-weight:700;
          letter-spacing:.08em;
          text-transform:uppercase;
          color:var(--brand-600);
        "
      >
        Shuttle Details
      </p>

      <div class="lodging-shuttle-copy">
        <h2
          style="
            margin:0 auto .75rem;
            font-size:clamp(1.4rem, 3.8vw, 2.1rem);
            line-height:1.2;
            font-family:ui-serif, Georgia, serif;
            max-width:760px;
          "
        >
          Safe, easy transportation to and from the venue
        </h2>

        <p style="margin:.35rem auto .9rem; max-width:760px; font-size:1.05rem;">
          We’ve reserved <strong>one 56-person shuttle</strong> for wedding-day transportation
          so guests can have a safe and easy ride to and from the venue.
        </p>

        <p style="margin:0 auto 1rem; max-width:760px; color:var(--muted);">
          Guests staying at the <strong>Residence Inn by Marriott Lynchburg</strong> will receive
          <strong>priority access</strong> to shuttle seating. Guests staying elsewhere are still welcome
          to <strong>reserve a seat</strong>, pending availability.
        </p>
      </div>

      <div class="lodging-info-grid">
        <div class="lodging-info-card">
          <h3>Shuttle Seat Reservation</h3>
          <p>
            To help us reserve seats fairly, we’re asking for a
            <strong>$10 per guest to reserve a shuttle seat</strong>.
          </p>
        </div>

        <div class="lodging-info-card">
          <h3>Payment Options</h3>
          <p>
            Payment can be sent by <strong>Venmo or PayPal</strong>.
            We’ll add those links here soon.
          </p>
        </div>

        <div class="lodging-info-card">
          <h3>Please Be Timely</h3>
          <p>
            The shuttle will run on a set schedule, so please arrive a little early
            for pickup times.
          </p>
        </div>
      </div>

      <div class="lodging-schedule">
        <h3 style="margin:0 0 .75rem; font-size:1.15rem;">Shuttle Schedule</h3>

        <div class="lodging-schedule-grid">
          <div class="lodging-schedule-item">
            <p style="font-weight:700;">To the Venue</p>
            <p style="margin-top:.3rem; color:var(--muted);">
              <strong>Hotel pickup:</strong> 2:30 PM<br>
              <strong>Venue drop-off:</strong> 3:15 PM
            </p>
          </div>

          <div class="lodging-schedule-item">
            <p style="font-weight:700;">Back to the Hotel</p>
            <p style="margin-top:.3rem; color:var(--muted);">
              <strong>Venue pickup:</strong> 10:00 PM<br>
              <strong>Hotel drop-off:</strong> 10:30 PM
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
