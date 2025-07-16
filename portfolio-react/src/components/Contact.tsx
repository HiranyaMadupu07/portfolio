import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    emailjs.send(
      'service_z4aq5vu',
      'template_th4942b',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'madupuhiranya07@gmail.com',
      },
      'PEzrA6Zdo8Sc6lTqE'
    )
    .then(() => {
      setLoading(false);
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setLoading(false);
      setStatusMessage('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <center><h2>Contact</h2></center>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
        <div className={styles.contactInfo}>
          {/* <p>Email: madupuhiranya07@gmail.com</p> */}
          <center><p>
            <a href="mailto:madupuhiranya07@gmail.com" target="_blank" rel="noopener noreferrer">Email</a> |{' '}
            <a href="https://github.com/HiranyaMadupu07" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href="https://www.linkedin.com/in/hiranya-madupu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p></center>
        </div>
      </div>
    </section>
  );
};

export default Contact;
