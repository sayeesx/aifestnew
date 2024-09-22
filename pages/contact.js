import React from 'react';
import './contact.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us at contact@aifest.com</p>
      
      <div className="card-grid">
        {/* Instagram */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/myimg/instagram.svg" alt="Instagram Logo" />
              <p className="subheading">Instagram</p>
            </div>
            <div className="card-back">
              <p>Follow us on Instagram @aifest</p>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/myimg/whatsapp.svg" alt="WhatsApp Logo" />
              <p className="subheading">WhatsApp</p>
            </div>
            <div className="card-back">
              <p>Chat with us on WhatsApp: +1234567890</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/myimg/email.svg" alt="Email Logo" />
              <p className="subheading">Email</p>
            </div>
            <div className="card-back">
              <p>Email us at contact@aifest.com</p>
            </div>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/myimg/phone.svg" alt="Phone Logo" />
              <p className="subheading">Phone 1</p>
            </div>
            <div className="card-back">
              <p>Call us at +1234567890</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/myimg/phone.svg" alt="Phone Logo" />
              <p className="subheading">Phone 2</p>
            </div>
            <div className="card-back">
              <p>Call us at +0987654321</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/myimg/phone.svg" alt="Phone Logo" />
              <p className="subheading">Phone 3</p>
            </div>
            <div className="card-back">
              <p>Call us at +1122334455</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
