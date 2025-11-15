function getAllDishes() {
    return Object.values(personalityDishes);
}

// Display all dishes in a grid
function displayAllDishes() {
    const dishesGrid = document.getElementById('dishes-grid');
    const dishes = getAllDishes();
    
    dishesGrid.innerHTML = '';
    
    dishes.forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.addEventListener('click', () => showDishProfile(dish));
        
        const img = createDishIllustration(dish.name);
        img.className = 'dish-card-image';
        
        const dishName = document.createElement('h3');
        dishName.textContent = dish.name;
        dishName.className = 'dish-card-name';
        
        dishCard.appendChild(img);
        dishCard.appendChild(dishName);
        dishesGrid.appendChild(dishCard);
    });
}

// Show dish profile in modal
function showDishProfile(dish) {
    const profileModal = document.getElementById('dish-profile');
    const profileContent = document.getElementById('profile-content');
    
    profileContent.innerHTML = `
        <div class="profile-dish-illustration-container">
            <div id="profile-dish-illustration"></div>
        </div>
        <h2>${dish.name}</h2>
        <p class="tagline">${dish.tagline}</p>
        <p class="dish-description">${dish.description}</p>
        
        <div class="strengths-weaknesses">
            <div class="strengths">
                <h3>Strengths</h3>
                <ul>
                    ${dish.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            <div class="weaknesses">
                <h3>Weaknesses</h3>
                <ul>
                    ${dish.weaknesses.map(w => `<li>${w}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="compatible-section">
            <h3>Most Compatible With</h3>
            <div class="compatible-dishes">
                ${dish.compatible.map((comp, index) => {
                    return `<div class="compatible-item" id="profile-compatible-${index}">
                        <span class="compatible-illustration"></span>
                        <span class="compatible-name">${comp}</span>
                    </div>`;
                }).join('')}
            </div>
        </div>
    `;
    
    // Add main dish illustration
    const mainContainer = document.getElementById('profile-dish-illustration');
    if (mainContainer) {
        const img = createDishIllustration(dish.name);
        mainContainer.appendChild(img);
    }
    
    // Add compatible dish illustrations
    dish.compatible.forEach((comp, index) => {
        const compContainer = document.querySelector(`#profile-compatible-${index} .compatible-illustration`);
        if (compContainer) {
            const compImg = createDishIllustration(comp);
            compImg.classList.add('compatible-dish-img');
            compContainer.appendChild(compImg);
        }
    });
    
    profileModal.classList.remove('hidden');
}

// Close profile modal
function closeProfile() {
    const profileModal = document.getElementById('dish-profile');
    profileModal.classList.add('hidden');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayAllDishes();
    
    const closeBtn = document.getElementById('close-profile-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProfile);
    }
    
    // Close on background click
    const profileModal = document.getElementById('dish-profile');
    if (profileModal) {
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) {
                closeProfile();
            }
        });
    }
});

