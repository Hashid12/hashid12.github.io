class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background-color: rgba(15, 23, 42, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(to right, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-decoration: none;
        }
        
        .logo-icon {
          margin-right: 0.5rem;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: white;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #8b5cf6, #3b82f6);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-actions {
          display: flex;
          gap: 1rem;
        }
        
        .btn-login {
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .btn-login:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .btn-signup {
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          background: linear-gradient(to right, #8b5cf6, #3b82f6);
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .btn-signup:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links, .nav-actions {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <nav class="navbar-container">
        <a href="/" class="logo">
          <i data-feather="shield" class="logo-icon"></i>
          CyberHunt
        </a>
        
        <div class="nav-links">
          <a href="#" class="nav-link">Platform</a>
          <a href="#" class="nav-link">Programs</a>
          <a href="#" class="nav-link">Bounties</a>
          <a href="#" class="nav-link">Resources</a>
          <a href="#" class="nav-link">Community</a>
        </div>
        
        <div class="nav-actions">
          <a href="#" class="btn-login">Login</a>
          <a href="#" class="btn-signup">Sign Up</a>
        </div>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
