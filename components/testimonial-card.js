class TestimonialCard extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'role', 'content', 'avatar', 'delay'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const name = this.getAttribute('name') || 'John Doe';
        const role = this.getAttribute('role') || 'CEO, Example Inc';
        const content = this.getAttribute('content') || 'Excellent service!';
        const avatar = this.getAttribute('avatar') || 'http://static.photos/people/200x200/4';
        const delay = this.getAttribute('delay') || '0';

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    animation: fadeIn 1s ease-out ${delay}ms forwards;
                    opacity: 0;
                }
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                .testimonial-card {
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 20px;
                    padding: 2rem;
                    transition: all 0.4s ease;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }
                .testimonial-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }
                .testimonial-card::before {
                    content: '"';
                    position: absolute;
                    top: 1rem;
                    right: 1.5rem;
                    font-size: 6rem;
                    color: rgba(102, 126, 234, 0.1);
                    font-family: Georgia, serif;
                    line-height: 1;
                }
                .testimonial-content {
                    color: #4a5568;
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 2rem;
                    font-style: italic;
                    position: relative;
                    z-index: 1;
                }
                .testimonial-author {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .author-avatar {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 3px solid rgba(102, 126, 234, 0.3);
                }
                .author-info {
                    flex: 1;
                }
                .author-name {
                    font-weight: 700;
                    color: #2d3748;
                    font-size: 1.1rem;
                }
                .author-role {
                    color: #718096;
                    font-size: 0.875rem;
                }
                .rating {
                    display: flex;
                    gap: 0.25rem;
                    margin-top: 0.5rem;
                }
                .star {
                    color: #fbbf24;
                }
                .star-empty {
                    color: #e5e7eb;
                }
            </style>
            <div class="testimonial-card">
                <p class="testimonial-content">${content}</p>
                
                <div class="testimonial-author">
                    <img src="${avatar}" alt="${name}" class="author-avatar">
                    <div class="author-info">
                        <div class="author-name">${name}</div>
                        <div class="author-role">${role}</div>
                        <div class="rating">
                            <i data-feather="star" class="star"></i>
                            <i data-feather="star" class="star"></i>
                            <i data-feather="star" class="star"></i>
                            <i data-feather="star" class="star"></i>
                            <i data-feather="star" class="star"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('testimonial-card', TestimonialCard);