import React, { useState, useEffect } from 'react';
import './fireworks.scss';
import { ToastContainer, toast } from 'react-toastify';
import './register.global.css';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    collegeName: '',
    phoneNumber: '',
    mailId: '',
    photo: null,
  });

  const [step, setStep] = useState(1); // Manage the current step
  const [photoPreview, setPhotoPreview] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Optional effect for step transition animation
  }, [step]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1); // Move to the next step
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file,
      });
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      setFormSubmitted(true);
      toast.success('Thank you for registering!');
    }, 1500);
  };

  return (
    <div className="register-container">
      <ToastContainer />
      {formSubmitted && (
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
      )}
      <h1 className="register-heading">Register Now for the AI Fest</h1>
      {formSubmitted ? (
        <div className="payment-card">
          <h2>Payment Options</h2>
          <div className="qr-code">
            <img src="..\img\sayees_.jpg" alt="QR Code for Payment" />
          </div>
          <p className="deposit-address">Deposit Address: 0x1234567890abcdef1234567890abcdef12345678</p>
          <p className="phone-number">Phone: +1 (234) 567-8901</p>
          <p className="success-message">Thank you for registering!</p>
        </div>
      ) : (
        <div className="register-card">
          {step === 1 && (
            <div className="input-group">
              <label>Student Name</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 2 && (
            <div className="input-group">
              <label>College Name</label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                required
              />
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 3 && (
            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 4 && (
            <div className="input-group">
              <label>Email ID</label>
              <input
                type="email"
                name="mailId"
                value={formData.mailId}
                onChange={handleChange}
                required
              />
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 5 && (
            <div className="input-group">
              <label>Upload Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                required
              />
              {photoPreview && <img src={photoPreview} alt="Preview" className="photo-preview" />}
              <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Register;
