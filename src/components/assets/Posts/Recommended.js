import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../css/style.css";

import recommended1 from "../images/recommended-1.jpg";
import recommended2 from "../images/recommended-2.jpg";
import recommended3 from "../images/recommended-3.jpg";
import recommended4 from "../images/recommended-4.jpg";
import recommended5 from "../images/recommended-5.jpg";
import recommended6 from "../images/recommended-6.jpg";

import author1 from "../images/author-1.jpg";
import author2 from "../images/author-2.jpg";
import author3 from "../images/author-3.jpg";
import author4 from "../images/author-4.jpg";
import author5 from "../images/author-5.jpg";
import author6 from "../images/author-6.jpg";
function Recommended() {
  return (
    <section class="section recommended" aria-label="recommended post">
      <div class="container">
        <p class="section-subtitle">
          <strong class="strong">Recommended</strong>
        </p>

        <ul class="grid-list">
          <li>
            <div class="blog-card">
              <figure
                class="card-banner img-holder"
                 style={{ "--width": 300, "--height": 360 }}
              >
                <img
                  src={recommended1}
                  width="300"
                  height="360"
                  loading="lazy"
                  alt="The trick to getting more done is to have the freedom to roam around "
                  class="img-cover"
                />

                <ul class="avatar-list absolute">
                  <li class="avatar-item">
                    <Link
                      to="#"
                      class="avatar img-holder"
                       style={{ "--width": 100, "--height": 100 }}
                    >
                      <img
                        src={author5}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        class="img-cover"
                      />
                    </Link>
                  </li>

                  <li class="avatar-item">
                    <Link
                      to="#"
                      class="avatar img-holder"
                       style={{ "--width": 100, "--height": 100 }}
                    >
                      <img
                        src={author2}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        class="img-cover"
                      />
                    </Link>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <h3 class="h5">
                  <Link to="#" class="card-title hover:underline">
                    The trick to getting more done is to have the freedom to
                    roam around
                  </Link>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div class="blog-card">
              <figure
                class="card-banner img-holder"
                 style={{ "--width": 300, "--height": 360 }}
              >
                <img
                  src={recommended2}
                  width="300"
                  height="360"
                  loading="lazy"
                  alt="Every day, in every city and town across the country "
                  class="img-cover"
                />

                <ul class="avatar-list absolute">
                  <li class="avatar-item">
                    <Link
                      to="#"
                      class="avatar img-holder"
                       style={{ "--width": 100, "--height": 100 }}
                    >
                      <img
                        src={author3}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        class="img-cover"
                      />
                    </Link>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <h3 class="h5">
                  <Link to="#" class="card-title hover:underline">
                    Every day, in every city and town across the country
                  </Link>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div class="blog-card">
              <figure
                class="card-banner img-holder"
                 style={{ "--width": 300, "--height": 360 }}
              >
                <img
                  src={recommended3}
                  width="300"
                  height="360"
                  loading="lazy"
                  alt="I work best when my space is filled with inspiration "
                  class="img-cover"
                />

                <ul class="avatar-list absolute">
                  <li class="avatar-item">
                    <Link
                      to="#"
                      class="avatar img-holder"
                       style={{ "--width": 100, "--height": 100 }}
                    >
                      <img
                        src={author1}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        class="img-cover"
                      />
                    </Link>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <h3 class="h5">
                  <Link to="#" class="card-title hover:underline">
                    I work best when my space is filled with inspiration
                  </Link>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div class="blog-card">
              <figure
                class="card-banner img-holder"
                 style={{ "--width": 300, "--height": 360 }}
              >
                <img
                  src={recommended4}
                  width="300"
                  height="360"
                  loading="lazy"
                  alt="I have my own definition of minimalism "
                  class="img-cover"
                />

                <ul class="avatar-list absolute">
                  <li class="avatar-item">
                    <Link
                      to="#"
                      class="avatar img-holder"
                       style={{ "--width": 100, "--height": 100 }}
                    >
                      <img
                        src={author4}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        class="img-cover"
                      />
                    </Link>
                  </li>

                  <li class="avatar-item">
                    <Link
                      to="#"
                      class="avatar img-holder"
                       style={{ "--width": 100, "--height": 100 }}
                    >
                      <img
                        src={author3}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        class="img-cover"
                      />
                    </Link>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <h3 class="h5">
                  <Link to="#" class="card-title hover:underline">
                    I have my own definition of minimalism
                  </Link>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div class="blog-card">
              <figure
                class="card-banner img-holder"
                 style={{ "--width": 300, "--height": 360 }}
              >
                <img
                  src={recommended5}
                  width="300"
                  height="360"
                  loading="lazy"
                  alt="Change your look and your attitude "
                  class="img-cover"
                />

                <ul class="avatar-list absolute">
                  <li class="avatar-item">
                    <Link
                      to="#"
                      class="avatar img-holder"
                       style={{ "--width": 100, "--height": 100 }}
                    >
                      <img
                        src={author6}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        class="img-cover"
                      />
                    </Link>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <h3 class="h5">
                  <Link to="#" class="card-title hover:underline">
                    Change your look and your attitude
                  </Link>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div class="blog-card">
              <figure
                class="card-banner img-holder"
                 style={{ "--width": 300, "--height": 360 }}
              >
                <img
                  src={recommended6}
                  width="300"
                  height="360"
                  loading="lazy"
                  alt="The difference is quality "
                  class="img-cover"
                />

                <ul class="avatar-list absolute">
                  <li class="avatar-item">
                    <Link
                      to="#"
                      class="avatar img-holder"
                       style={{ "--width": 100, "--height": 100 }}
                    >
                      <img
                        src={author3}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="Author"
                        class="img-cover"
                      />
                    </Link>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <h3 class="h5">
                  <Link to="#" class="card-title hover:underline">
                    The difference is quality
                  </Link>
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Recommended;
