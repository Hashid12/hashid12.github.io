class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #0f172a;
          color: #94a3b8;
          padding: 4rem 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(to right, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-decoration: none;
          margin-bottom: 1.5rem;
        }
        
        .footer-logo-icon {
          margin-right: 0.5rem;
        }
        
        .footer-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }
        
        .footer-heading {
          color: white;
          font-weight: 600;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: white;
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 4rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1rem;
        }
        
        .copyright {
          font-size: 0.875rem;
        }
        
        .legal-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .legal-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }
        
        .legal-link:hover {
          color: white;
        }
      </style>
      
      <div class="footer-container">
        <div class="footer-about">
          <a href="/" class="footer-logo">
            <i data-feather="shield" class="footer-logo-icon"></i>
            CyberHunt
          </a>
          <p class="footer-description">
            The premier 3D bug bounty platform connecting security researchers with organizations to make the digital world safer.
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <i data-feather="twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="github"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="linkedin"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="discord"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-heading">Platform</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Features</a>
            <a href="#" class="footer-link">Pricing</a>
            <a href="#" class="footer-link">API</a>
            <a href="#" class="footer-link">Integrations</a>
            <a href="#" class="footer-link">Changelog</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-heading">Resources</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Documentation</a>
            <a href="#" class="footer-link">Guides</a>
            <a href="#" class="footer-link">Blog</a>
            <a href="#" class="footer-link">Webinars</a>
            <a href="#" class="footer-link">Help Center</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-heading">Company</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">About</a>
            <a href="#" class="footer-link">Careers</a>
            <a href="#" class="footer-link">Privacy</a>
            <a href="#" class="footer-link">Terms</a>
            <a href="#" class="footer-link">Contact</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="copyright">
          © ${new Date().getFullYear()} CyberHunt. All rights reserved.
        </div>
        <div class="legal-links">
          <a href="#" class="legal-link">Privacy Policy</a>
          <a href="#" class="legal-link">Terms of Service</a>
          <a href="#" class="legal-link">Cookie Policy</a>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
