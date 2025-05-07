const servicesCarousel = document.getElementById('services');

// Sample card data with navigation URLs
const servicesCardData = [
    {
        title: "Mountain Adventure",
        description: "Explore the breathtaking views of the Alps.",
        price: "$199.99",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        url: "https://example.com/mountain-adventure"
    },
    {
        title: "Beach Getaway",
        description: "Relax on the sandy shores of the Caribbean.",
        price: "$249.99",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        url: "https://example.com/beach-getaway"
    },
    {
        title: "City Tour",
        description: "Discover the vibrant streets of Tokyo.",
        price: "$179.99",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        url: "https://example.com/city-tour"
    },
    {
        title: "Forest Retreat",
        description: "Unwind in the serene wilderness.",
        price: "$159.99",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
        url: "https://example.com/forest-retreat"
    },
    {
        title: "Desert Safari",
        description: "Experience the thrill of the Sahara.",
        price: "$229.99",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
        url: "https://example.com/desert-safari"
    }
];

// Duplicate card data to ensure seamless looping
const doubledServicesCardData = [...servicesCardData, ...servicesCardData];

// Generate cards
const servicesCarouselContainer = document.createElement('div');
servicesCarouselContainer.className = 'carousel-container';
const servicesCarouselInner = document.createElement('div');
servicesCarouselInner.className = 'carousel';
servicesCarouselContainer.appendChild(servicesCarouselInner);
servicesCarousel.appendChild(servicesCarouselContainer);

doubledServicesCardData.forEach(data => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${data.image}" alt="${data.title}">
        <div class="card-content">
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <p class="price">${data.price}</p>
        </div>
    `;
    // Add click/touch event for navigation
    card.addEventListener('click', () => {
        window.location.href = data.url;
    });
    servicesCarouselInner.appendChild(card);
});

// Ensure carousel width accommodates all cards
servicesCarouselInner.style.width = `${300 * doubledServicesCardData.length + 20 * (doubledServicesCardData.length - 1)}px`;

// Touch event handlers
servicesCarouselInner.addEventListener('touchstart', () => {
    servicesCarouselInner.classList.add('paused');
});

servicesCarouselInner.addEventListener('touchend', () => {
    servicesCarouselInner.classList.remove('paused');
});