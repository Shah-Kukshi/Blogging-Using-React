import React from "react";
import "../assets/css/style.css";
import FeaturedSection from "../assets/Posts/FeaturedSection";
import RecentPost from "../assets/Posts/RecentPost";
import Recommended from "../assets/Posts/Recommended";
import AboutUs from "./AboutUs";
function Home() {
  return (
    <main>
      <article>
        <section className="section hero" aria-label="home">
          <div className="container">
            <h2 className="h1 hero-title">
              <strong className="strong">Hey, we're Blogy.</strong> See our
              thoughts, stories and ideas.
            </h2>

            <div className="wrapper">
              <form className="newsletter-form">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email address"
                  className="email-field"
                />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </form>

              <p className="newsletter-text">
                Get the email newsletter and unlock access to members-only
                content and updates
              </p>
            </div>
          </div>
        </section>
        <FeaturedSection />
        <RecentPost />
        <Recommended />

        <section class="section newsletter">

<h2 class="h2 section-title">
  Subscribe to <strong class="strong">Join</strong>
</h2>

<form action="" class="newsletter-form">
  <input type="email" name="email_address" placeholder="Your email address" required class="email-field" />

  <button type="submit" class="btn">Subscribe</button>
</form>

</section>
      </article>
    </main>
  );
}

export default Home;
