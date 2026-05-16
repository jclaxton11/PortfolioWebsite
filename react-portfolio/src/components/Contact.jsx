import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    if (document.querySelector('script[src="https://web3forms.com/client/script.js"]')) return;
    const script = document.createElement('script');
    script.src = 'https://web3forms.com/client/script.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact">
      <div className="section-heading reveal">
        <span className="mono-label">06 — Contact</span>
        <h2>Get in touch.</h2>
      </div>

      <div className="contact-layout">
        <div className="contact-info reveal">
          <h3>Let's talk.</h3>
          <p>
            Based in Lincoln, Nebraska. Open to project collaborations,
            freelance work, and good conversations about software.
          </p>
          <div className="contact-links">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/jeffrey-claxton-0aab4621a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ LinkedIn
            </a>
          </div>
        </div>

        <form
          className="contact-form reveal delay-1"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input type="hidden" name="access_key" value="14909654-469c-40e0-87d9-6546172e3000" />

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
            <textarea name="message" rows="4" placeholder="What's on your mind?" required />
          </label>

          <div className="h-captcha" data-captcha="true" />
          <button className="btn-primary" type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}
