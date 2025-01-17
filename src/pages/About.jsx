import React from 'react';
import './about.css'; // Ensure you have a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-image">
          <img
            src="/public/tingey-injury-law-firm-L4YGuSg0fxs-unsplash.jpg" // Replace with the correct image URL
            alt="Scales of Justice"
          />
        </div>
        <div className="about-content">
          <h1>Your Go-To Top Legal Platform</h1>
          <p>
            At Any Advocates, we understand that navigating the legal landscape can be overwhelming and complex. 
            That is why we are here to offer you a personalized and professional approach to meet your legal needs. 
            With years of commitment and a dedication to excellence, our team of dedicated attorneys is ready to
            advocate for you every step of the way.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h2>Practical, Experienced, and Reliable</h2>
          <p>
            Any Advocates is a modern legal platform that covers a wide range of 
            services, including dispute resolution, business law, intellectual 
            property, and much more. At our firm, we take pride in our expertise in various legal areas. 
            Whether you are facing a personal injury case, need assistance with family law matters, 
            or require guidance in estate planning, our team has the knowledge and skills to handle 
            a wide range of legal areas. Our focus is on delivering top-quality services 
            with unmatched expertise and professionalism.
          </p>
        </div>
        <div className="about-image">
          <img
            src="/public/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg" // Replace with the correct image URL
            alt="Law Books"
          />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="our-values">
        <h2>Our Values</h2>
        <p>We hold the following as critically important to our success: Integrity, Competence, Justice, and Accountability</p>
        <div className="values-cards">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              "To give real service, you must add something which cannot be bought or measured with money, and that is sincerity and integrity." 
              - Donald A. Adams <br />
              Integrity & Ethics are the driving force in all our relationships and operations.
            </p>
          </div>
          <div className="value-card">
            <h3>Competence</h3>
            <p>
              "Performance Competence is the ability to perform tasks to produce outputs to stakeholder requirements." 
              - Anonymous <br />
              We pride ourselves on delivering timely results and progressive legal solutions that exceed expectations.
            </p>
          </div>
          <div className="value-card">
            <h3>Justice</h3>
            <p>
              "Injustice anywhere is a threat to justice everywhere." 
              - Martin Luther King Jr. <br />
              We ensure justice flows like a river, advocating for alternative dispute resolution mechanisms such as mediation and arbitration.
            </p>
          </div>
          <div className="value-card">
            <h3>Accountability</h3>
            <p>
              "Creating a culture of integrity and accountability not only improves effectiveness but also generates a respectful, enjoyable setting." 
              - Tom Hanson <br />
              We remain responsible for our commitments to our core values, people, clients, and stakeholders.
            </p>
          </div>
        </div>
      </div>
      <div className="our-clients">
        <h2>Our Clients</h2>
        <div className="clients-line"></div>
        <div className="clients-grid">
          <div className="client-card">
            <div className="client-icon">
              <i className="fas fa-tools"></i> {/* Replace with appropriate icon */}
            </div>
            <h3>Private and Public Developers</h3>
          </div>
          <div className="client-card">
            <div className="client-icon">
              <i className="fas fa-university"></i> {/* Replace with appropriate icon */}
            </div>
            <h3>Institutional Investors</h3>
          </div>
          <div className="client-card">
            <div className="client-icon">
              <i className="fas fa-money-bill-wave"></i> {/* Replace with appropriate icon */}
            </div>
            <h3>Private Equity & Hedge Funds</h3>
          </div>
          <div className="client-card">
            <div className="client-icon">
              <i className="fas fa-hands-helping"></i> {/* Replace with appropriate icon */}
            </div>
            <h3>Pro Bono</h3>
          </div>
          <div className="client-card">
            <div className="client-icon">
              <i className="fas fa-balance-scale"></i> {/* Replace with appropriate icon */}
            </div>
            <h3>Legal Aid</h3>
          </div>
          <div className="client-card">
            <div className="client-icon">
              <i className="fas fa-road"></i> {/* Replace with appropriate icon */}
            </div>
            <h3>Infrastructure and Projects</h3>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <p>
          Our vision is to become a world-class legal platform, providing seamless 
          access to legal expertise and upholding the highest standards of legal 
          practice globally.
        </p>
      </div>
    </div>
  );
};

export default About;
