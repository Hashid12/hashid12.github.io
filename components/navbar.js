class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                nav {
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 1rem 2rem;
                }
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                }
                .logo-text {
                    font-size: 1.75rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .logo-icon {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    font-size: 1.2rem;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-link {
                    color: #4a5568;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    position: relative;
                }
                .nav-link:hover {
                    color: #667eea;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    transition: width 0.3s ease;
                }
                .nav-actions {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #4a5568;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    nav {
                        padding: 1rem;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        background: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(20px);
                        flex-direction: column;
                        padding: 2rem;
                        gap: 1.5rem;
                        transform: translateY(-100%);
                        opacity: 0;
                        transition: all 0.4s ease;
                        pointer-events: none;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                    }
                    .nav-links.active {
                        transform: translateY(0);
                        opacity: 1;
                        pointer-events: all;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="/" class="logo">
                        <div class="logo-icon">DS</div>
                        <span class="logo-text">DomainSphere</span>
                    </a>
                    <div class="nav-links" id="navLinks">
                        <a href="/" class="nav-link">Home</a>
                        <a href="/domains.html" class="nav-link">Domains</a>
                        <a href="#how-it-works" class="nav-link">How It Works</a>
                        <a href="/about.html" class="nav-link">About</a>
                        <a href="/contact.html" class="nav-link">Contact</a>
                    </div>
<div class="nav-actions">
                        <a href="/login.html" class="nav-link">
                            <i data-feather="log-in"></i>
                        </a>
                        <button class="mobile-menu-btn" id="mobileMenuBtn">
                            <i data-feather="menu"></i>
                        </button>
                    </div>
                </div>
            </nav>
        `;

        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }

        // Mobile menu toggle
        const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
        const navLinks = this.shadowRoot.getElementById('navLinks');
        
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.setAttribute('data-feather', 'x');
                } else {
                    icon.setAttribute('data-feather', 'menu');
                }
                feather.replace();
            });
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);