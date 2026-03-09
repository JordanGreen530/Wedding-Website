---
layout: default
title: Lodging
permalink: /lodging/
---

<style>
  .lodging-booking-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    width: 100%;
    max-width: 900px;
    margin: 1.5rem auto 0;
    align-items: stretch;
  }

  .lodging-card {
    text-align: center;
    padding: 1.6rem 1.4rem;
    width: 100%;
    max-width: none;
    margin: 0;
  }

  .lodging-card p {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  .lodging-btn-wrap {
    display: flex;
    justify-content: center;
    margin-top: 1.1rem;
  }

  .lodging-btn-wrap .btn {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }

  .lodging-shuttle-box {
    margin: 1.5rem auto 0;
    padding: 1.5rem 1.25rem;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: linear-gradient(180deg, #f8fbf9 0%, #fff 100%);
    box-shadow: var(--shadow);
    max-width: 900px;
    text-align: center;
  }

  .lodging-info-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
    margin: 1.25rem auto 0;
    max-width: 850px;
  }

  .lodging-schedule-box {
    margin: 1.25rem auto 0;
    max-width: 760px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.1rem;
  }

  @media (max-width: 800px) {
    .lodging-booking-grid {
      grid-template-columns: 1fr;
    }

    .lodging-info-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<section class="section">
  <div class="container" style="text-align:center;">
    <h1 class="h1">Lodging</h1>

    <p class="lead" style="max-width:760px; margin:0 auto;">
      We’ve included a few nearby lodging options for different budgets and group sizes.
      If you’d like the easiest wedding-day plan, we recommend staying at our hotel block
      to enjoy the discounted rate and convenient shuttle access.
    </p>

    <!-- BOOKING OPTIONS -->
    <div class="lodging-booking-grid">
      <!-- HOTEL OPTION -->
      <article class="card sr lodging-card">
        <p
          style="
            margin:0 0 .35rem;
            font-size:.82rem;
            font-weight:700;
            letter-spacing:.06em;
            text-transform:uppercase;
            color:var(--brand-600);
          "
        >
          Recommended
        </p>

        <h3 style="font-size:1.4rem; margin-bottom:.45rem;">
          Hotel Block
        </h3>

        <p class="meta" style="justify-content:center;">
          Residence Inn by Marriott Lynchburg
        </p>

        <p style="margin-top:.8rem; margin-bottom:0;">
          Discounted rate, breakfast included, and priority access to shuttle seating.
        </p>

        <div class="lodging-btn-wrap">
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
      <article class="card sr lodging-card">
        <h3 style="font-size:1.4rem; margin-bottom:.45rem;">
          Cabins &amp; Airbnbs
        </h3>

        <p class="meta" style="justify-content:center;">
          Nearby options
        </p>

        <p style="margin-top:.8rem; margin-bottom:0;">
          Great for families or groups. Guests staying elsewhere may still reserve a shuttle seat if space is available.
        </p>

        <div class="lodging-btn-wrap">
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
    <div class="sr lodging-shuttle-box">
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

      <div class="lodging-info-grid">
        <div
          style="
            background:#fff;
            border:1px solid var(--border);
            border-radius:14px;
            padding:1rem;
          "
        >
          <h3 style="margin:0 0 .4rem; font-size:1.05rem;">Shuttle Seat Reservation</h3>
          <p style="margin:0; color:var(--muted);">
            To help us reserve seats fairly, we’re asking for a
            <strong>$10 per guest to reserve a shuttle seat</strong>.
          </p>
        </div>

        <div
          style="
            background:#fff;
            border:1px solid var(--border);
            border-radius:14px;
            padding:1rem;
          "
        >
          <h3 style="margin:0 0 .4rem; font-size:1.05rem;">Payment Options</h3>
          <p style="margin:0; color:var(--muted);">
            Payment can be sent by <strong>Venmo or PayPal</strong>.
            We’ll add those links here soon.
          </p>
        </div>

        <div
          style="
            background:#fff;
            border:1px solid var(--border);
            border-radius:14px;
            padding:1rem;
          "
        >
          <h3 style="margin:0 0 .4rem; font-size:1.05rem;">Please Be Timely</h3>
          <p style="margin:0; color:var(--muted);">
            The shuttle will run on a set schedule, so please arrive a little early
            for pickup times.
          </p>
        </div>
      </div>

      <div class="lodging-schedule-box">
        <h3 style="margin:0 0 .75rem; font-size:1.15rem;">Shuttle Schedule</h3>

        <div style="display:grid; gap:.75rem;">
          <div style="padding:.85rem; border-radius:12px; background:#faf8f6;">
            <p style="margin:0; font-weight:700;">To the Venue</p>
            <p style="margin:.3rem 0 0; color:var(--muted);">
              <strong>Hotel pickup:</strong> 2:30 PM<br>
              <strong>Venue drop-off:</strong> 3:15 PM
            </p>
          </div>

          <div style="padding:.85rem; border-radius:12px; background:#faf8f6;">
            <p style="margin:0; font-weight:700;">Back to the Hotel</p>
            <p style="margin:.3rem 0 0; color:var(--muted);">
              <strong>Venue pickup:</strong> 10:00 PM<br>
              <strong>Hotel drop-off:</strong> 10:30 PM
            </p>
          </div>
        </div>

        <p class="subtle" style="margin:.85rem 0 0;">
          Please be timely so the shuttle can stay on schedule for everyone.
        </p>
      </div>
    </div>

    <p
      class="subtle"
      style="
        margin-top:2rem;
        max-width:760px;
        margin-left:auto;
        margin-right:auto;
      "
    >
      Final transportation details and payment links will be shared closer to the wedding date.
    </p>
  </div>
</section>
