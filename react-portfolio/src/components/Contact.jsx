import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://web3forms.com/client/script.js"]'
    );
    if (existingScript) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://web3forms.com/client/script.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <h2>Contact</h2>
        <p>Have a project or collaboration in mind? Let’s connect.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Direct</h3>
          <p>Based in Lincoln, Nebraska.</p>
          <p>Open to proposals, freelance projects, and app collaborations.</p>
          <div className="contact-meta">
            <a href="https://www.linkedin.com/in/jeffrey-claxton-0aab4621a/">LinkedIn</a>
          </div>
        </div>
        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="14909654-469c-40e0-87d9-6546172e3000"
          />
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@email.com" required />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your project"
              required
            />
          </label>
          <div className="h-captcha" data-captcha="true"></div>
          <button className="primary-btn" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
