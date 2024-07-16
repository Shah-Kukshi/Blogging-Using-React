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
      id: 1,
      imgSrc: featured1,
      imgAuthor: [author1, author2],
      cardTag: ["Machine Learning", "Deep Learning", "Big Data"],
      cardTitle:
        " What are Data Science, Machine Learning, AI, Deep Learning, and Big Data?",
      cardText:
        "With the internet boom and the exponential rise of various businesses in the form of start-ups; Data has become an inextricable part of business growth. Today, Data is King! Thus, mattis vulputate. Duis et lorem in odio ultricies porttitor.",
    },
    {
      id: 2,
      imgSrc: featured2,
      imgAuthor: [author1],
      cardTag: ["Data Science"],
      cardTitle: "Rising Demand for Data Science Professionals in India",
      cardText:
        "Technology has sustained to be the fastest driver of hottest jobs in India. Data Science, being one of them, has become the soul of every organization dealing with a large",
    },
    {
      id: 3,
      imgSrc: featured3,
      imgAuthor: [author4],
      cardTag: ["ML", "LLM", "Product"],
      cardTitle: "Large Language Model (LLM)",
      cardText:
        " Are you ready to showcase your engineering prowess and compete against the best minds in the country? Look no further than Flipkart GRiD 5.0, India's most prestigious Engineering Campus",
    },

    {
      id: 4,
      imgSrc: featured4,
      imgAuthor: [author3 , author1],
      cardTag: ["Coding", "Technology"],
      cardTitle: "The Importance of Algorithms in Web Development",
      cardText:
        "Hey Folks! Welcome to the fascinating world of web development, where algorithms serve as the backbone of every digital innovation. In this comprehensive exploration of the importance of algorithms in",
    },
    {
      id: 5,
      imgSrc: featured5,
      imgAuthor: [author5 , author2],
      cardTag: ["DSA", "Devlopment"],
      cardTitle: "How to Manage Both DSA and Development Together?",
      cardText:
        " In today's tech-driven world, mastering Data Structures and Algorithms (DSA) is fundamental for every aspiring developer. However, navigating the demands of DSA preparation alongside real-world development projects can be a",
    },
    {
      id: 6 ,
      imgSrc: featured6,
      imgAuthor: [author6],
      cardTag: ["Git", " Git Hub"],
      cardTitle: "Git & GitHub - A Coder's Guide to Programming",
      cardText:
        "In the world of accelerating technological advancements, all companies, big-wigs as well as start-ups, rely heavily on programming; and professionals who know the skill of programming. Engineering students work hard",
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
          {arrayFeaturedSection.map((value) => (
            
             
                <li key={value.id} className="blog-card">
                  <div className="blog-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 700, "--height": 500 }}
                    >
                      <img
                        src={value.imgSrc}
                        width="700"
                        height="500"
                        loading="lazy"
                        alt={value.cardTitle}
                        className="img-cover"
                      />

                      <ul className="avatar-list absolute">
                        {value.imgAuthor.map((author, index) => (
                          <li key={index} className="avatar-item">
                            <Link to="/">
                              <div
                                className="avatar img-holder"
                                style={{ "--width": 100, "--height": 100 }}
                              >
                                <img
                                  src={author}
                                  width="100"
                                  height="100"
                                  loading="lazy"
                                  alt="Author"
                                  className="img-cover"
                                />
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </figure>

                    <div className="card-content">
                      <ul className="card-meta-list">
                        {value.cardTag.map((tag, index) => (
                          <li key={index}>
                            <Link to="/" className="card-tag">
                              {tag}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <h3 className="h4">
                        <Link to="/" className="card-title hover:underline">
                          {value.cardTitle}
                        </Link>
                      </h3>

                      <p className="card-text">{value.cardText}</p>
                    </div>
                  </div>
                </li>
             
            
          ))}
          </ul>
         
        </div>
      </section>
    </div>
  );
}

export default FeaturedSection;
