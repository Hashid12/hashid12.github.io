// Main JavaScript for DomainSphere Nexus

// Initialize Particles.js Background
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#667eea" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#764ba2",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

// Initialize 3D Globe
function initGlobe() {
    const container = document.getElementById('globe-container');
    if (!container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create a glowing sphere
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: 0x667eea,
        transparent: true,
        opacity: 0.7,
        shininess: 100,
        emissive: 0x220066,
        emissiveIntensity: 0.3
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add wireframe
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe);
    line.material.color.set(0xffffff);
    line.material.transparent = true;
    line.material.opacity = 0.3;
    sphere.add(line);

    // Add floating points around globe
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsCount = 200;
    const positions = new Float32Array(pointsCount * 3);
    
    for (let i = 0; i < pointsCount * 3; i += 3) {
        const radius = 7 + Math.random() * 3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i + 2] = radius * Math.cos(phi);
    }
    
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
        color: 0x764ba2,
        size: 0.1,
        transparent: true
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 15;

    // Orbit Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.002;
        points.rotation.y += 0.001;
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// Load Featured Domains
async function loadFeaturedDomains() {
    const container = document.querySelector('#domains .grid');
    if (!container) return;

    // Mock domain data - in production, this would come from an API
    const domains = [
        { name: "InnovateHub.com", price: "$25,000", category: "Tech", description: "Perfect for innovation startups", extension: ".com", featured: true },
        { name: "NovaSphere.ai", price: "$18,500", category: "AI", description: "Ideal for AI companies", extension: ".ai", featured: true },
        { name: "EcoVerse.org", price: "$12,000", category: "Green", description: "For sustainable initiatives", extension: ".org", featured: true },
        { name: "MetaVerse.io", price: "$45,000", category: "Web3", description: "Prime for metaverse projects", extension: ".io", featured: true },
        { name: "ZenSpace.xyz", price: "$8,500", category: "Wellness", description: "Mindfulness and wellness brand", extension: ".xyz", featured: true },
        { name: "QuantumLabs.dev", price: "$22,000", category: "Science", description: "Advanced tech research", extension: ".dev", featured: true }
    ];

    domains.forEach((domain, index) => {
        const domainCard = document.createElement('domain-card');
        domainCard.setAttribute('name', domain.name);
        domainCard.setAttribute('price', domain.price);
        domainCard.setAttribute('category', domain.category);
        domainCard.setAttribute('description', domain.description);
        domainCard.setAttribute('extension', domain.extension);
        domainCard.setAttribute('delay', (index * 100).toString());
        
        container.appendChild(domainCard);
    });
}

// Load Testimonials
async function loadTestimonials() {
    const container = document.querySelector('#how-it-works + section .grid');
    if (!container) return;

    const testimonials = [
        { name: "Alex Chen", role: "CEO, TechFlow", content: "DomainSphere transformed our digital identity. The domain we acquired perfectly represents our vision.", avatar: "http://static.photos/people/200x200/1" },
        { name: "Samantha Reed", role: "Founder, GreenSoul", content: "Smooth transaction and exceptional support. Our .org domain has boosted our credibility tremendously.", avatar: "http://static.photos/people/200x200/2" },
        { name: "Marcus Johnson", role: "CTO, QuantumLeap", content: "The AI domain we purchased has become our most valuable digital asset. Worth every penny.", avatar: "http://static.photos/people/200x200/3" }
    ];

    testimonials.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('testimonial-card');
        testimonialCard.setAttribute('name', testimonial.name);
        testimonialCard.setAttribute('role', testimonial.role);
        testimonialCard.setAttribute('content', testimonial.content);
        testimonialCard.setAttribute('avatar', testimonial.avatar);
        testimonialCard.setAttribute('delay', (index * 150).toString());
        
        container.appendChild(testimonialCard);
    });
}

// Animated Counters
function initCounters() {
    const counters = document.querySelectorAll('.animate-count');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                setTimeout(updateCounter, 16);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        // Start counter when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

// Parallax effect for glass cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glass-card');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach(card => {
        const speed = 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
});

// Reset transform on mouse leave
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });
});