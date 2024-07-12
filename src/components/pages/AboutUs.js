import "../assets/css/style.css";
import pic from "../assets/images/Designer.jpeg";
import person from "../assets/images/person.jpg";
function AboutUs() {
  return (
    <div>
    <section className="section mission">
     
      <div className="container">
      <h2 class="h2 section-title ">
        Our <strong className="strong">Mission</strong>
      </h2>
        <div className="OurMission">
          <img src={pic} alt="" />
          <div className="content">
            <p className="missionText">
              At <strong className="strong">Bloggy</strong>, we are passionate
              about <strong className="strong">coding and technology</strong>,
              sharing practical insights, tutorials, and tips. Our mission is to{" "}
              <strong className="strong">educate and inspire</strong> our
              readers through in-depth articles,{" "}
              <strong className="strong">hands-on tutorials,</strong> and
              engaging discussions. Whether you're{" "}
              <strong className="strong">learning to code</strong>, refining
              your skills, or simply curious about the tech world, we aim to
              provide <strong className="strong">valuable content</strong> that
              enhances your coding journey and enriches your understanding of
              technology.
            </p>
          </div>
        </div>
        </div>
</section>

  <section className="section Team">
  <div className="container">
        <h2 class="h2 section-title">
          Meet Our <strong className="strong">Team</strong>
        </h2>
        <ul>
          <li>
            <img src={person} alt="" />

            <div className="content">
              <p className="missionText">
                Hello! I'm <strong className="strong">John Smith</strong>, the
                founder of Bloggy. With a background in{" "}
                <strong className="strong">software development</strong> and a
                passion for teaching, I started this blog to simplify coding
                concepts and empower aspiring developers. My journey in
                technology began with a curiosity for how things work, and I've
                since dedicated myself to sharing that knowledge with a global
                audience. Alongside me, we have a talented team of four
                contributors, each bringing unique perspectives and
                expertise—from front-end design to database management.
                Together, we strive to make Bloggy a go-to resource for anyone
                looking to expand their coding skills and explore the
                ever-evolving world of technology.
              </p>
            </div>
          </li>

          <li>
            <img src={person} alt="" />

            <div className="content">
              <p className="missionText">
                Hello! I'm <strong className="strong">John Smith</strong>, the
                founder of Bloggy. With a background in{" "}
                <strong className="strong">software development</strong> and a
                passion for teaching, I started this blog to simplify coding
                concepts and empower aspiring developers. My journey in
                technology began with a curiosity for how things work, and I've
                since dedicated myself to sharing that knowledge with a global
                audience. Alongside me, we have a talented team of four
                contributors, each bringing unique perspectives and
                expertise—from front-end design to database management.
                Together, we strive to make Bloggy a go-to resource for anyone
                looking to expand their coding skills and explore the
                ever-evolving world of technology.
              </p>
            </div>
          </li>

          
        </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
