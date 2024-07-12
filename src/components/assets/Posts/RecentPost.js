import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../css/style.css";

import recent1 from "../images/recent-1.jpg";
import recent2 from "../images/recent-2.jpg";
import recent3 from "../images/recent-3.jpg";
import recent4 from "../images/recent-4.jpg";
import recent5 from "../images/recent-5.jpg";
import recent6 from "../images/recent-6.jpg";
import author1 from "../images/author-1.jpg";
import author2 from "../images/author-2.jpg";
import author3 from "../images/author-3.jpg";
import author4 from "../images/author-4.jpg";
import author5 from "../images/author-5.jpg";
import author6 from "../images/author-6.jpg";
function RecentPost() {
  return (
    <div className="recentPost">
      <section class="section recent" aria-label="recent post">
        <div class="container">
          <div class="title-wrapper">
            <h2 class="h2 section-title">
              See what we've <strong class="strong">written lately</strong>
            </h2>

            <div class="top-author">
              <ul className="avatar-list">
                <li className="avatar-item">
                  <Link
                    to="#"
                    className="avatar large img-holder"
                    style={{ "--width": "100px", "--height": "100px" }}
                  >
                    <img
                      src={author1}
                      width="100"
                      height="100"
                      alt="top author"
                      className="img-cover"
                    />
                  </Link>
                </li>

                <li className="avatar-item">
                  <Link
                    to="#"
                    className="avatar large img-holder"
                    style={{ "--width": "100px", "--height": "100px" }}
                  >
                    <img
                      src={author2}
                      width="100"
                      height="100"
                      alt="top author"
                      className="img-cover"
                    />
                  </Link>
                </li>

                <li className="avatar-item">
                  <Link
                    to="#"
                    className="avatar large img-holder"
                    style={{ "--width": "100px", "--height": "100px" }}
                  >
                    <img
                      src={author3}
                      width="100"
                      height="100"
                      alt="top author"
                      className="img-cover"
                    />
                  </Link>
                </li>

                <li className="avatar-item">
                  <Link
                    to="#"
                    className="avatar large img-holder"
                    style={{ "--width": "100px", "--height": "100px" }}
                  >
                    <img
                      src={author4}
                      width="100"
                      height="100"
                      alt="top author"
                      className="img-cover"
                    />
                  </Link>
                </li>

                <li className="avatar-item">
                  <Link
                    to="#"
                    className="avatar large img-holder"
                    style={{ "--width": "100px", "--height": "100px" }}
                  >
                    <img
                      src={author5}
                      width="100"
                      height="100"
                      alt="top author"
                      className="img-cover"
                    />
                  </Link>
                </li>
              </ul>
              <span class="span">Meet our top authors</span>
            </div>
          </div>

          <ul class="grid-list">
            <li>
              <div class="blog-card">
                <figure
                  class="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500}}
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
                  With lakhs of students taking the JEE Mains and JEE Advanced every year, and the number being on a constant rise, the competition is fierce. Each one of us take
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="blog-card">
                <figure
                  class="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500}}
                >
                  <img
                    src={recent2}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Digitalization - The Future of Marketing"
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
                  </ul>
                </figure>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li>
                      <Link to="#" class="card-tag">
                        Digital Marketing
                      </Link>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <Link to="#" class="card-title hover:underline">
                    Digitalization – The Future of Marketing    
                    </Link>
                  </h3>

                  <p class="card-text">
                  The growth of the web and the development of digital technology as a media group have had various significant and unforeseen impacts on 21st-century life. While everybody expected hi-tech innovations
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="blog-card">
                <figure
                  class="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500}}
                >
                  <img
                    src={recent3}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Top 5 companies for computer science graduates to work for in 2020"
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
                          src={author2}
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
                  <ul class="card-meta-list">
                    <li>
                      <Link to="#" class="card-tag">
                        Computer Science
                      </Link>
                    </li>

                    <li>
                      <Link to="#" class="card-tag">
                       Jobs
                      </Link>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <Link to="#" class="card-title hover:underline">
                    Top 5 companies for computer science graduates to work for in 2020
                    </Link>
                  </h3>

                  <p class="card-text">
                  Do you know that there is an expected rise of 24% in software development jobs by 2025? With intensive research and technological development happening around the world, programming jobs are
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="blog-card">
                <figure
                  class="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500}}
                >
                  <img
                    src={recent4}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Want To Become An Android Developer?d"
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
                  <ul class="card-meta-list">
                    <li>
                      <Link to="#" class="card-tag">
                        Android developer
                      </Link>
                    </li>

                    <li>
                      <Link to="#" class="card-tag">
                        Coding
                      </Link>
                    </li>
                  </ul>

                  <h3 class="h4">
                    <Link to="#" class="card-title hover:underline">
                    Want To Become An Android Developer?
                    </Link>
                  </h3>

                  <p class="card-text">
                  Want to be a successful Android Developer? Welcome !! You are at the right place. This is a very simple guide to get started to your journey of Android Developer 👨‍💻This
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="blog-card">
                <figure
                  class="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500}}
                >
                  <img
                    src={recent5}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Blockchain Technology From Scratch"
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
                  <ul class="card-meta-list">
                    <li>
                      <Link to="#" class="card-tag">
                        Blockchain
                      </Link>
                    </li>

                    <li>
                      <Link to="#" class="card-tag">
                        New Tech
                      </Link>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <Link to="#" class="card-title hover:underline">
                    Blockchain Technology From Scratch
                    </Link>
                  </h3>

                  <p class="card-text">
                  Introduction to BlockchainThis article is for everyone who is curious about this new cutting edge technology but has no idea of what it is. Don’t forget to check out
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="blog-card">
                <figure
                  class="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500}}
                >
                  <img
                    src={recent6}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Contribute to Open Source using Git"
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
                  <ul class="card-meta-list">
                    <li>
                      <Link to="#" class="card-tag">
                        Git
                      </Link>
                    </li>

                    <li>
                      <Link to="#" class="card-tag">
                        Open Source
                      </Link>
                    </li>

                    
                  </ul>

                  <h3 class="h4">
                    <Link to="#" class="card-title hover:underline">
                    Contribute to Open Source using Git
                    </Link>
                  </h3>

                  <p class="card-text">
                  In this tutorial, I will explain how to use Git to contribute to open source projects🎉. Github and Open SourceWhen I started using Github , i was messed up with all
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <button class="btn">Load more</button>
        </div>
      </section>
    </div>
  );
}

export default RecentPost;
