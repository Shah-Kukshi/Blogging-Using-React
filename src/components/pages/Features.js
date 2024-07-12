import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../assets/css/style.css";

import recent1 from "../assets/images/recent-1.jpg";
// import recent2 from "../assets/images/recent-2.jpg";
// import recent3 from "../assets/images/recent-3.jpg";
// import recent4 from "../assets/images/recent-4.jpg";
// import recent5 from "../assets/images/recent-5.jpg";
// import recent6 from "../assets/images/recent-6.jpg";
// import author1 from "../assets/images/author-1.jpg";
// import author2 from "../assets/images/author-2.jpg";
import author3 from "../assets/images/author-2.jpg";
// import author4 from "../assets/images/author-3.jpg";
import author5 from "../assets/images/author-4.jpg";
// import author6 from "../assets/images/author-5.jpg";
function Features() {
  return (
    <section className="section features">
      <div className="container">
        <div className="upcomingEvents">
        <h2 class="h2 section-title">
              Our Upcoming <strong class="strong">Events</strong>
            </h2>
          <ul className="grid-list">
            <li>
              <div class="blog-card">
                <figure
                  class="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500 }}
                >
                  <img
                    src={recent1}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Hacks to get Off-Campus Placements"
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
                  </ul>
                </figure>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li>
                      <Link to="#" class="card-tag">
                        hacks
                      </Link>
                    </li>

                    <li>
                      <Link to="#" class="card-tag">
                        Placements
                      </Link>
                    </li>
                  </ul>

                  <h3 class="h4">
                    <Link to="#" class="card-title hover:underline">
                      Hacks to get Off-Campus Placements
                    </Link>
                  </h3>

                  <p class="card-text">
                    With lakhs of students taking the JEE Mains and JEE Advanced
                    every year, and the number being on a constant rise, the
                    competition is fierce. Each one of us take
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="blog-card">
                <figure
                  class="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500 }}
                >
                  <img
                    src={recent1}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Hacks to get Off-Campus Placements"
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
                  </ul>
                </figure>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li>
                      <Link to="#" class="card-tag">
                        hacks
                      </Link>
                    </li>

                    <li>
                      <Link to="#" class="card-tag">
                        Placements
                      </Link>
                    </li>
                  </ul>

                  <h3 class="h4">
                    <Link to="#" class="card-title hover:underline">
                      Hacks to get Off-Campus Placements
                    </Link>
                  </h3>

                  <p class="card-text">
                    With lakhs of students taking the JEE Mains and JEE Advanced
                    every year, and the number being on a constant rise, the
                    competition is fierce. Each one of us take
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="blog-card">
                <figure
                  class="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500 }}
                >
                  <img
                    src={recent1}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Hacks to get Off-Campus Placements"
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
                  </ul>
                </figure>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li>
                      <Link to="#" class="card-tag">
                        hacks
                      </Link>
                    </li>

                    <li>
                      <Link to="#" class="card-tag">
                        Placements
                      </Link>
                    </li>
                  </ul>

                  <h3 class="h4">
                    <Link to="#" class="card-title hover:underline">
                      Hacks to get Off-Campus Placements
                    </Link>
                  </h3>

                  <p class="card-text">
                    With lakhs of students taking the JEE Mains and JEE Advanced
                    every year, and the number being on a constant rise, the
                    competition is fierce. Each one of us take
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
