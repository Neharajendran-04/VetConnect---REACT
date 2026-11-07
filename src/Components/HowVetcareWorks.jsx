
import React from 'react';
import './HowVetCareWorks.css';

function HowVetcareWorks() {
  return (
    <section className="hiw" id="how-it-works">

      <svg
        className="hiw-paw"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <g fill="currentColor">
          <circle cx="14" cy="26" r="7" />
          <circle cx="27" cy="14" r="7.5" />
          <circle cx="41" cy="14" r="7.5" />
          <circle cx="54" cy="26" r="7" />
          <path d="M32 30C22 30 12 42 14 50C16 58 26 56 32 56C38 56 48 58 50 50C52 42 42 30 32 30Z" />
        </g>
      </svg>

      <div className="hiw-inner">
        <span className="hiw-eyebrow reveal">
          How it works
        </span>

        <h2 className="reveal" style={{ transitionDelay: '.1s' }}>
          Three taps from worried to booked.
        </h2>

        <div className="hiw-steps" id="hiw-steps">

          <svg
            className="hiw-trail"
            viewBox="0 0 1200 70"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <mask
                id="hiw-mask"
                className="hiw-trail-mask"
                maskUnits="userSpaceOnUse"
                x="0"
                y="-20"
                width="1200"
                height="120"
              >
                <path
                  pathLength="1"
                  d="M170 44C330 -4 470 -4 600 38C730 80 880 -2 1030 40"
                />
              </mask>
            </defs>

            <g mask="url(#hiw-mask)">
              <path d="M170 44C330 -4 470 -4 600 38C730 80 880 -2 1030 40" />
            </g>
          </svg>


          <article
            className="hiw-card reveal"
            style={{ transitionDelay: '.15s' }}
          >
            <div className="hiw-num">1</div>

            <div className="hiw-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
            </div>

            <h3>Search nearby</h3>
            <p>
              Enter your location and pet type. See verified vets close to you.
            </p>
          </article>
          <article
            className="hiw-card reveal"
            style={{ transitionDelay: '.3s' }}
          >
            <div className="hiw-num">2</div>

            <div className="hiw-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
              </svg>
            </div>

            <h3>Compare and choose</h3>
            <p>
              Read reviews, check specialties and fees, and pick the vet you trust.
            </p>
          </article>

          <article
            className="hiw-card reveal"
            style={{ transitionDelay: '.45s' }}
          >
            <div className="hiw-num">3</div>

            <div className="hiw-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="5" width="17" height="15" rx="3" />
                <path d="M8 3v4M16 3v4M3.5 10h17M9 15l2 2 4-4" />
              </svg>
            </div>

            <h3>Book in seconds</h3>
            <p>
              Choose a free slot and get an instant confirmation. No phone tag.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

export default HowVetcareWorks;
