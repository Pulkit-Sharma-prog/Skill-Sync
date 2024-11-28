import React from 'react';
import './AccountSetupPage.css'; // Ensure this file contains the corresponding CSS

function AccountSetupPage() {
  return (
    <div className="account-setup-page flex">
      {/* Left Section */}
      <div className="left-section flex flex-col justify-center items-center">
        <div className='logo'><img src="./assets/logo1.svg"/></div>
        {/* Testimonial Card */}
        <div className="testimonial-card">
          {/* Avatar */}
          <div className="avatar-wrapper">
            <div className="avatar">
              <img src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1732285978~exp=1732289578~hmac=bc19d23b2d49c1d987b3b343debabdefe900b4a618485db04a6ecbcf475b81b3&w=740"/>
            </div>
          </div>

          {/* Star Rating */}
          <div className="stars">
            <br></br>
            <br />
            <br />
            <br />
            {[...Array(5)].map((_, index) => (
              <span key={index} className="star">★</span>
            ))}
          </div>

          {/* Testimonial Content */}
          <p className="testimonial-text">
            I gained competitive skills that impressed top employers!
          </p>
          <h3 className="testimonial-name">Ujjwal Nigam</h3>
          <p className="testimonial-role">Marketing Analyst, KPMG</p>

          {/* KPMG Logo */}
          <div className="kpmg-logo"></div>
          <img src="./assets/KPMG.svg"/>
        </div>

        {/* Navigation Dots */}
        <div className="nav-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        
        <div className="footer-links">
          <button className="back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="back-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to home
          </button>
          <p className="signin-link">Sign In?</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="form-container">
          <h2 className="form-title">Lets setup your Account</h2>

          {/* Account Type Selector */}
          <div className="account-type-selector">
            <button className="account-type active">🧑‍🎓 I'm a Student</button>
            <button className="account-type">🏢 I'm a Company</button>
          </div>

          {/* Form */}
          <form className="form">
            <div className="form-row">
              <input type="text" placeholder="First Name" className="form-input" />
              <input type="text" placeholder="Last Name" className="form-input" />
            </div>
            <input type="email" placeholder="Email" className="form-input full-width" />
            <div className="form-row">
              <select className="form-input">
                <option value="">Country code</option>
                <option value="India">+91</option>
                <option value="Switzerland">+41</option>
                <option value="USA">+1</option>
              </select> 
              <input type="text" placeholder="Phone Number" className="form-input" />
            </div>
            <div className="form-row">
              <input type="date" className="form-input" />
              <select className="form-input">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="State of Residence"
              className="form-input full-width"
            />
            <div className="form-row">
              <input
                type="password"
                placeholder="Password"
                className="form-input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button">
              Next →
            </button>
          </form>
        </div>
      </div>
      


    </div>
  );
}

export default AccountSetupPage;