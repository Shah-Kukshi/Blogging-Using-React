import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../css/style.css";
import featured1 from "../images/featured-1.jpg";
import featured2 from "../images/featured-2.jpg";
import featured3 from "../images/featured-3.png";
import featured4 from "../images/featured-4.png";
import featured5 from "../images/featured-5.png";
import featured6 from "../images/featured-6.jpg";
import author1 from "../images/author-1.jpg";
import author2 from "../images/author-2.jpg";
import author3 from "../images/author-3.jpg";
import author4 from "../images/author-4.jpg";
import author5 from "../images/author-5.jpg";
import author6 from "../images/author-6.jpg";
function FeaturedSection() {
  const arrayFeaturedSection = [
    {
      cardTag: ["Machine Learning","Deep Learning" , "Big Data"],
      cardTtile:" What are Data Science, Machine Learning, AI, Deep Learning, and Big Data?",
      cardText: "With the internet boom and the exponential rise of various businesses in the form of start-ups; Data has become an inextricable part of business growth. Today, Data is King! Thus, mattis vulputate. Duis et lorem in odio ultricies porttitor.",
    },
    {
      cardTag: [ "Data Science"],
      cardTtile:"Rising Demand for Data Science Professionals in India",
      cardText: "Technology has sustained to be the fastest driver of hottest jobs in India. Data Science, being one of them, has become the soul of every organization dealing with a large",
    },
  ];


  return (
    <div className="featuredSection">
      <section className="section featured" aria-label="featured post">
        <div className="container">
          <p className="section-subtitle">
            Get started with our{" "}
            <strong className="strong">best stories</strong>
          </p>

          <ul className="grid-list">
            {/* First blog card */}
            <li className="scrollbar-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500 }}
                >
                  <img
                    src={featured1}
                    width="700"
                    height="500"
                    loading="lazy"
                    alt="What are Data Science, Machine Learning, AI, Deep Learning, and Big Data?"
                    className="img-cover"
                  />

                  <ul className="avatar-list absolute">
                    <li className="avatar-item">
                      <Link to="/">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author1}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                    <li className="avatar-item">
                      <Link to="/">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author2}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    <li>
                      <Link to="/" className="card-tag">
                        Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="card-tag">
                        Deep Learning,
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="card-tag">
                        Big Data
                      </Link>
                    </li>
                  </ul>

                  <h3 className="h4">
                    <Link to="/" className="card-title hover:underline">
                      What are Data Science, Machine Learning, AI, Deep
                      Learning, and Big Data?
                    </Link>
                  </h3>

                  <p className="card-text">
                    With the internet boom and the exponential rise of various
                    businesses in the form of start-ups; Data has become an
                    inextricable part of business growth. Today, Data is King!
                    Thus, mattis vulputate. Duis et lorem in odio ultricies
                    porttitor.
                  </p>
                </div>
              </div>
            </li>

            {/* Second blog card */}
            <li className="scrollbar-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500 }}
                >
                  <img
                    src={featured2}
                    width="700"
                    height="500"
                    loading="lazy"
                    alt="Rising Demand for Data Science Professionals in India"
                    className="img-cover"
                  />

                  <ul className="avatar-list absolute">
                    <li className="avatar-item">
                      <Link to="/">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author3}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    <li>
                      <Link to="/" className="card-tag">
                        Data Science
                      </Link>
                    </li>
                  </ul>

                  <h3 className="h4">
                    <Link to="/" className="card-title hover:underline">
                      Rising Demand for Data Science Professionals in India
                    </Link>
                  </h3>

                  <p className="card-text">
                    Technology has sustained to be the fastest driver of hottest
                    jobs in India. Data Science, being one of them, has become
                    the soul of every organization dealing with a large
                  </p>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500 }}
                >
                  <img
                    src={featured3}
                    width="700"
                    height="500"
                    loading="lazy"
                    alt="Large Language Model (LLM)"
                    className="img-cover"
                  />
                  <ul className="avatar-list absolute">
                    <li className="avatar-item">
                      <Link to="#">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author4}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li>
                      <Link to="/" className="card-tag">
                        ML
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="card-tag">
                        LLM
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="card-tag">
                        Product
                      </Link>
                    </li>
                  </ul>
                  <h3 className="h4">
                    <Link to="#" className="card-title hover:underline">
                      Large Language Model (LLM)
                    </Link>
                  </h3>
                  <p className="card-text">
                    Are you ready to showcase your engineering prowess and
                    compete against the best minds in the country? Look no
                    further than Flipkart GRiD 5.0, India's most prestigious
                    Engineering Campus
                  </p>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500 }}
                >
                  <img
                    src={featured4}
                    width="700"
                    height="500"
                    loading="lazy"
                    alt="The Importance of Algorithms in Web Development"
                    className="img-cover"
                  />
                  <ul className="avatar-list absolute">
                    <li className="avatar-item">
                      <Link to="#">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author3}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                    <li className="avatar-item">
                      <Link to="#">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author1}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li>
                      <Link to="/" className="card-tag">
                        Coding
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="card-tag">
                        Technology
                      </Link>
                    </li>
                  </ul>
                  <h3 className="h4">
                    <Link to="#" className="card-title hover:underline">
                      The Importance of Algorithms in Web Development
                    </Link>
                  </h3>
                  <p className="card-text">
                    Hey Folks! Welcome to the fascinating world of web
                    development, where algorithms serve as the backbone of every
                    digital innovation. In this comprehensive exploration of the
                    importance of algorithms in
                  </p>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500 }}
                >
                  <img
                    src={featured5}
                    width="700"
                    height="500"
                    loading="lazy"
                    alt="How to Manage Both DSA and Development Together?"
                    className="img-cover"
                  />
                  <ul className="avatar-list absolute">
                    <li className="avatar-item">
                      <Link to="#">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author5}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                    <li className="avatar-item">
                      <Link to="#">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author2}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li>
                      <Link to="/" className="card-tag">
                        DSA
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="card-tag">
                        Devlopment
                      </Link>
                    </li>
                  </ul>
                  <h3 className="h4">
                    <Link to="#" className="card-title hover:underline">
                      How to Manage Both DSA and Development Together?
                    </Link>
                  </h3>
                  <p className="card-text">
                    In today's tech-driven world, mastering Data Structures and
                    Algorithms (DSA) is fundamental for every aspiring
                    developer. However, navigating the demands of DSA
                    preparation alongside real-world development projects can be
                    a
                  </p>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 700, "--height": 500 }}
                >
                  <img
                    src={featured6}
                    width="700"
                    height="500"
                    loading="lazy"
                    alt="Git & GitHub - A Coder's Guide to Programming"
                    className="img-cover"
                  />

                  <ul className="avatar-list absolute">
                    <li className="avatar-item">
                      <Link to="/">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author2}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                    <li className="avatar-item">
                      <Link to="/">
                        <div
                          className="avatar img-holder"
                          style={{ "--width": 100, "--height": 100 }}
                        >
                          <img
                            src={author6}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    <li>
                      <Link to="/" className="card-tag">
                        Git
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="card-tag">
                        Git Hub
                      </Link>
                    </li>
                  </ul>

                  <h3 className="h4">
                    <Link to="/" className="card-title hover:underline">
                      Git & GitHub - A Coder's Guide to Programming
                    </Link>
                  </h3>

                  <p className="card-text">
                    In the world of accelerating technological advancements, all
                    companies, big-wigs as well as start-ups, rely heavily on
                    programming; and professionals who know the skill of
                    programming. Engineering students work hard
                  </p>
                </div>
              </div>
            </li>
            {/* Repeat similar structures for other featured posts */}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FeaturedSection;
