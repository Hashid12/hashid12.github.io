class DomainCard extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'price', 'category', 'description', 'extension', 'delay'];
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const name = this.getAttribute('name') || 'Example.com';
        const price = this.getAttribute('price') || '$10,000';
        const category = this.getAttribute('category') || 'Premium';
        const description = this.getAttribute('description') || 'A premium domain for your business';
        const extension = this.getAttribute('extension') || '.com';
        const delay = this.getAttribute('delay') || '0';

        const colors = {
            Tech: { bg: 'from-blue-500 to-cyan-500', text: 'text-blue-600' },
            AI: { bg: 'from-purple-500 to-pink-500', text: 'text-purple-600' },
            Green: { bg: 'from-green-500 to-emerald-500', text: 'text-green-600' },
            Web3: { bg: 'from-amber-500 to-orange-500', text: 'text-amber-600' },
            Wellness: { bg: 'from-indigo-500 to-purple-500', text: 'text-indigo-600' },
            Science: { bg: 'from-red-500 to-pink-500', text: 'text-red-600' },
            Premium: { bg: 'from-gray-700 to-gray-900', text: 'text-gray-700' }
        };

        const categoryColor = colors[category] || colors.Premium;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    animation: slideInUp 0.8s ease-out ${delay}ms forwards;
                    opacity: 0;
                }
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .domain-card {
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 20px;
                    padding: 2rem;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .domain-card:hover {
                    transform: translateY(-15px);
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
                    border-color: rgba(255, 255, 255, 0.5);
                }
                .domain-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, var(--gradient-colors));
                    z-index: 1;
                }
                .domain-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                }
                .domain-name {
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #2d3748;
                    line-height: 1.2;
                }
                .domain-extension {
                    color: #667eea;
                    font-weight: 700;
                }
                .domain-price {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: #4c51bf;
                    background: rgba(102, 126, 234, 0.1);
                    padding: 0.5rem 1rem;
                    border-radius: 9999px;
                }
                .domain-category {
                    display: inline-block;
                    padding: 0.35rem 1rem;
                    border-radius: 9999px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: white;
                }
                .domain-description {
                    color: #4a5568;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    flex-grow: 1;
                }
                .domain-features {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                }
                .feature {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.875rem;
                    color: #718096;
                }
                .feature i {
                    color: #667eea;
                }
                .domain-actions {
                    display: flex;
                    gap: 1rem;
                }
                .btn-view {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.75rem;
                    background: rgba(102, 126, 234, 0.1);
                    color: #667eea;
                    border: 1px solid rgba(102, 126, 234, 0.3);
                    border-radius: 10px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                .btn-view:hover {
                    background: #667eea;
                    color: white;
                    transform: translateY(-2px);
                }
                .btn-offer {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.75rem;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    border-radius: 10px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .btn-offer:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
                }
            </style>
            <div class="domain-card" style="--gradient-colors: ${categoryColor.bg}">
                <div class="domain-header">
                    <div>
                        <div class="domain-category" style="background: linear-gradient(135deg, ${categoryColor.bg});">
                            ${category}
                        </div>
                        <h3 class="domain-name">
                            ${name.replace(extension, '')}<span class="domain-extension">${extension}</span>
                        </h3>
                    </div>
                    <div class="domain-price">${price}</div>
                </div>
                
                <p class="domain-description">${description}</p>
                
                <div class="domain-features">
                    <div class="feature">
                        <i data-feather="check-circle"></i>
                        <span>Instant Transfer</span>
                    </div>
                    <div class="feature">
                        <i data-feather="shield"></i>
                        <span>Escrow Protected</span>
                    </div>
                    <div class="feature">
                        <i data-feather="clock"></i>
                        <span>24/7 Support</span>
                    </div>
                </div>
                
                <div class="domain-actions">
                    <a href="/domain-details.html?domain=${encodeURIComponent(name)}" class="btn-view">
                        <i data-feather="eye"></i>
                        <span>View Details</span>
                    </a>
                    <button class="btn-offer">
                        <i data-feather="shopping-cart"></i>
                        <span>Make Offer</span>
                    </button>
                </div>
            </div>
        `;

        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    addEventListeners() {
        // Add event listeners after the component is rendered
        setTimeout(() => {
            const offerBtn = this.shadowRoot.querySelector('.btn-offer');
            if (offerBtn) {
                offerBtn.addEventListener('click', () => {
                    const domainName = this.getAttribute('name');
                    alert(`Initiating offer process for ${domainName}. You'll be redirected to our secure checkout.`);
                    // In production, this would redirect to checkout
                    // window.location.href = `/checkout.html?domain=${encodeURIComponent(domainName)}`;
                });
            }
        }, 100);
    }
}

customElements.define('domain-card', DomainCard);