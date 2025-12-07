class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    margin-top: 5rem;
                }
                footer {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(20px);
                    border-top: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 4rem 2rem 2rem;
                }
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                    margin-bottom: 3rem;
                }
                .footer-section h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #2d3748;
                    margin-bottom: 1.5rem;
                    position: relative;
                }
                .footer-section h3::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 40px;
                    height: 3px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 2px;
                }
                .footer-links {
                    list-style: none;
                }
                .footer-links li {
                    margin-bottom: 0.75rem;
                }
                .footer-links a {
                    color: #4a5568;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .footer-links a:hover {
                    color: #667eea;
                    transform: translateX(5px);
                }
                .footer-newsletter p {
                    color: #4a5568;
                    margin-bottom: 1.5rem;
                }
                .newsletter-form {
                    display: flex;
                    gap: 0.5rem;
                }
                .newsletter-input {
                    flex: 1;
                    padding: 0.75rem 1rem;
                    border: 1px solid #cbd5e0;
                    border-radius: 9999px;
                    font-size: 0.875rem;
                    transition: all 0.3s ease;
                }
                .newsletter-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }
                .newsletter-btn {
                    padding: 0.75rem 1.5rem;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    border-radius: 9999px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                .newsletter-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                .social-link {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(102, 126, 234, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #667eea;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .social-link:hover {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    transform: translateY(-3px);
                }
                .footer-bottom {
                    border-top: 1px solid rgba(0, 0, 0, 0.1);
                    padding-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 1rem;
                }
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-decoration: none;
                }
                .copyright {
                    color: #718096;
                    font-size: 0.875rem;
                }
                .footer-legal {
                    display: flex;
                    gap: 2rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .footer-legal a {
                    color: #718096;
                    text-decoration: none;
                    font-size: 0.875rem;
                    transition: color 0.3s ease;
                }
                .footer-legal a:hover {
                    color: #667eea;
                }
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .newsletter-form {
                        flex-direction: column;
                    }
                    .newsletter-input {
                        width: 100%;
                    }
                }
            </style>
            <footer>
                <div class="footer-container">
                    <div class="footer-grid">
                        <div class="footer-section">
                            <h3>DomainSphere Nexus</h3>
                            <p style="color: #4a5568; line-height: 1.6;">
                                Your gateway to premium digital real estate. We connect visionary brands with perfect domains.
                            </p>
                            <div class="social-links">
                                <a href="#" class="social-link">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="linkedin"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="github"></i>
                                </a>
                            </div>
                        </div>
                        <div class="footer-section">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="/"><i data-feather="home"></i> Home</a></li>
                                <li><a href="/domains.html"><i data-feather="globe"></i> Browse Domains</a></li>
                                <li><a href="#how-it-works"><i data-feather="help-circle"></i> How It Works</a></li>
                                <li><a href="/about.html"><i data-feather="info"></i> About Us</a></li>
                                <li><a href="/contact.html"><i data-feather="mail"></i> Contact</a></li>
                            </ul>
                        </div>
<div class="footer-section">
                            <h3>Categories</h3>
                            <ul class="footer-links">
                                <li><a href="#"><i data-feather="code"></i> Technology</a></li>
                                <li><a href="#"><i data-feather="heart"></i> Health & Wellness</a></li>
                                <li><a href="#"><i data-feather="dollar-sign"></i> Finance</a></li>
                                <li><a href="#"><i data-feather="shopping-bag"></i> E-commerce</a></li>
                                <li><a href="#"><i data-feather="cpu"></i> Artificial Intelligence</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section footer-newsletter">
                            <h3>Stay Updated</h3>
                            <p>Get notified about new premium domains and exclusive offers.</p>
                            <form class="newsletter-form">
                                <input type="email" class="newsletter-input" placeholder="Your email address" required>
                                <button type="submit" class="newsletter-btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <a href="/" class="footer-logo">DomainSphere Nexus ✨</a>
                        <div class="copyright">
                            © 2024 DomainSphere Nexus. All rights reserved.
                        </div>
                        <div class="footer-legal">
                            <a href="/privacy.html">Privacy Policy</a>
                            <a href="/terms.html">Terms of Service</a>
                            <a href="/cookies.html">Cookie Policy</a>
                            <a href="/sitemap.html">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;

        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }

        // Newsletter form submission
        const newsletterForm = this.shadowRoot.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('.newsletter-input');
                if (emailInput.value) {
                    alert('Thank you for subscribing to DomainSphere Nexus updates!');
                    emailInput.value = '';
                }
            });
        }
    }
}

customElements.define('custom-footer', CustomFooter);