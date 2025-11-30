// Main 3D Scene
function init3DScene() {
    const container = document.getElementById('3d-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x4f46e5, 2, 10);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Add cyber grid
    const gridHelper = new THREE.GridHelper(20, 20, 0x4f46e5, 0x4f46e5);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // Add floating cubes
    const cubes = [];
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x6366f1,
        emissive: 0x4f46e5,
        emissiveIntensity: 0.5,
        specular: 0xffffff,
        shininess: 30,
        transparent: true,
        opacity: 0.8
    });

    for (let i = 0; i < 10; i++) {
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.x = (Math.random() - 0.5) * 10;
        cube.position.y = (Math.random() - 0.5) * 5;
        cube.position.z = (Math.random() - 0.5) * 10;
        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;
        cubes.push(cube);
        scene.add(cube);
    }

    // Add floating spheres
    const spheres = [];
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x8b5cf6,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.7,
        specular: 0xffffff,
        shininess: 50,
        transparent: true,
        opacity: 0.9
    });

    for (let i = 0; i < 15; i++) {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = (Math.random() - 0.5) * 15;
        sphere.position.y = (Math.random() - 0.5) * 8;
        sphere.position.z = (Math.random() - 0.5) * 15;
        spheres.push(sphere);
        scene.add(sphere);
    }

    // Add cyber lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x4f46e5 });
    for (let i = 0; i < 20; i++) {
        const points = [];
        points.push(new THREE.Vector3(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 20
        ));
        points.push(new THREE.Vector3(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 20
        ));
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
    }

    camera.position.z = 10;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        cubes.forEach(cube => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            cube.position.y = Math.sin(Date.now() * 0.001 + cube.position.x) * 0.5;
        });

        spheres.forEach(sphere => {
            sphere.position.x += Math.sin(Date.now() * 0.001 + sphere.position.z) * 0.01;
            sphere.position.z += Math.cos(Date.now() * 0.001 + sphere.position.x) * 0.01;
        });

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Vulnerability Visualization Scene
function initVulnerabilityVisualization() {
    const container = document.getElementById('vulnerability-visualization');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x4f46e5, 0.5);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);

    // Create a network structure
    const createNode = (x, y, z, color, size = 1) => {
        const geometry = new THREE.SphereGeometry(size, 16, 16);
        const material = new THREE.MeshPhongMaterial({ color, emissive: color, emissiveIntensity: 0.3 });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(x, y, z);
        return sphere;
    };

    const createConnection = (start, end, color) => {
        const points = [start, end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color, linewidth: 2 });
        return new THREE.Line(geometry, material);
    };

    // Main server node
    const serverNode = createNode(0, 0, 0, 0x4f46e5, 1.5);
    scene.add(serverNode);

    // Database node
    const dbNode = createNode(-3, -2, 0, 0x10b981, 1.2);
    scene.add(dbNode);
    scene.add(createConnection(serverNode.position, dbNode.position, 0x10b981));

    // API nodes
    const apiNodes = [];
    for (let i = 0; i < 3; i++) {
        const x = 2 + Math.random() * 2;
        const y = (Math.random() - 0.5) * 3;
        const z = (Math.random() - 0.5) * 2;
        const node = createNode(x, y, z, 0x3b82f6);
        apiNodes.push(node);
        scene.add(node);
        scene.add(createConnection(serverNode.position, node.position, 0x3b82f6));
    }

    // Client nodes
    const clientNodes = [];
    for (let i = 0; i < 5; i++) {
        const x = -2 - Math.random() * 3;
        const y = 2 + Math.random() * 2;
        const z = (Math.random() - 0.5) * 4;
        const node = createNode(x, y, z, 0x8b5cf6, 0.8);
        clientNodes.push(node);
        scene.add(node);
        scene.add(createConnection(serverNode.position, node.position, 0x8b5cf6));
    }

    // Add vulnerability indicators
    const vulnerabilityMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xef4444,
        emissive: 0xef4444,
        emissiveIntensity: 0.7,
        transparent: true,
        opacity: 0.9
    });

    // Add some vulnerabilities
    const vulnerability1 = createNode(-2.8, -2.2, 0.5, 0xef4444, 0.6);
    vulnerability1.material = vulnerabilityMaterial;
    scene.add(vulnerability1);

    const vulnerability2 = createNode(3.5, 0.8, -0.3, 0xef4444, 0.6);
    vulnerability2.material = vulnerabilityMaterial;
    scene.add(vulnerability2);

    const vulnerability3 = createNode(-3.2, 3.5, 0.2, 0xef4444, 0.6);
    vulnerability3.material = vulnerabilityMaterial;
    scene.add(vulnerability3);

    // Add pulsing animation to vulnerabilities
    const vulnerabilities = [vulnerability1, vulnerability2, vulnerability3];
    
    // Camera position and controls
    camera.position.set(0, 0, 10);
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate the server node slightly
        serverNode.rotation.y += 0.005;
        
        // Pulsing effect for vulnerabilities
        const time = Date.now() * 0.001;
        vulnerabilities.forEach(vuln => {
            vuln.scale.x = vuln.scale.y = vuln.scale.z = 0.8 + Math.sin(time * 3) * 0.2;
        });
        
        controls.update();
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init3DScene();
    initVulnerabilityVisualization();
    
    // Add hover effects to feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('transform', 'transition-all', 'duration-300');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('transform', 'transition-all', 'duration-300');
        });
    });
});
