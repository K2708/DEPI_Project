import Navbar from "./Navbar"
import Footer from  "./Footer"
import "./Contact.css"
  import React, { useState } from "react";
import Swal from "sweetalert2";





export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
  e.preventDefault();

  Swal.fire({
    title: "Message Sent!",
    text: "We’ll get back to you soon ✨",
    icon: "success",
    confirmButtonColor: "#d4af37",
    background: "#1a1a1a",
    color: "#f8f8f8",
  });

  setForm({ name: "", email: "", message: "" });
};


  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="contact-header">
          <h1>Contact Us ✨</h1>
          <p>We’re here to make your travel dreams come true.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Let’s design your perfect getaway experience together.
              Reach us anytime — we’d love to assist you.
            </p>

            <div className="info-item">
              <span>📞</span> +20 123 456 789
            </div>
            <div className="info-item">
              <span>📧</span> info@luxtravel.com
            </div>
            <div className="info-item">
              <span>📍</span> Cairo, Egypt
            </div>

            <div className="floating-icons">
               
                <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
             <i className="fa-brands fa-facebook"></i>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>

            {sent && <p className="success">✅ Message sent successfully!</p>}
          </form>
        </div>

        <div className="map-container">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=cairo&t=&z=12&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
}
