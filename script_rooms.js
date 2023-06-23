// script.js
const jsonData = [
    {
      "name": "Magic Imporium",
      "players": [2, 3],
      "minutes": 60,
      "location": "Liége",
      "difficulty": 3,
      "phone": "+1 800 900 1248",
      "email": "SUPPORT@ESCAPIUM.COM",
      "skype": "ESCAPIUM",
      "photos": [
        "./images/gallery/slide-2.jpg",
        "./images/gallery/slide-4.jpg",
        "./images/gallery/room-9.jpg"
      ]
    },
    {
      "name": "The Cure",
      "players": [2, 3],
      "minutes": 60,
      "location": "Hasselt",
      "difficulty": 4,
      "phone": "+1 800 900 1248",
      "email": "SUPPORT@ESCAPIUM.COM",
      "skype": "ESCAPIUM",
      "photos": [
        "./images/gallery/room-2.jpg",
        "./images/gallery/room-7.jpg",
        "./images/gallery/slide-4.jpg",
        "./images/gallery/room-9.jpg"
      ]
    },
    {
      "name": "Burlesque",
      "players": [3, 5],
      "minutes": 60,
      "location": "Namur",
      "difficulty": 2,
      "phone": "+1 800 900 1248",
      "email": "SUPPORT@ESCAPIUM.COM",
      "skype": "ESCAPIUM",
      "photos": [
        "./images/gallery/room-3.jpg",
        "./images/gallery/room-7.jpg",
        "./images/gallery/slide-4.jpg",
        "./images/gallery/room-9.jpg"
      ]
    },
    {
      "name": "The Hospital",
      "players": [2, 3],
      "minutes": 60,
      "location": "Hasselt",
      "difficulty": 2,
      "phone": "+1 800 900 1248",
      "email": "SUPPORT@ESCAPIUM.COM",
      "skype": "ESCAPIUM",
      "photos": [
        "./images/gallery/room-5.jpg",
        "./images/gallery/room-7.jpg",
        "./images/gallery/slide-4.jpg",
        "./images/gallery/room-9.jpg"
      ]
    },
    {
      "name": "Abandoned Factory",
      "players": [6, 8],
      "minutes": 120,
      "location": "Genk",
      "difficulty": 3,
      "phone": "+1 800 900 1248",
      "email": "SUPPORT@ESCAPIUM.COM",
      "skype": "ESCAPIUM",
      "photos": [
        "./images/gallery/gallery-1.jpg",
        "./images/gallery/room-7.jpg",
        "./images/gallery/slide-4.jpg",
        "./images/gallery/room-9.jpg"
      ]
    },
    {
      "name": "Bunker 51",
      "players": [4, 6],
      "minutes": 60,
      "location": "Liége",
      "difficulty": 4,
      "phone": "+1 800 900 1248",
      "email": "SUPPORT@ESCAPIUM.COM",
      "skype": "ESCAPIUM",
      "photos": [
        "./images/gallery/room-7.jpg",
        "./images/gallery/slide-4.jpg",
        "./images/gallery/room-9.jpg"
      ]
    },
    {
      "name": "The Mystical Room",
      "players": [2, 3],
      "minutes": 60,
      "location": "Namur",
      "difficulty": 2,
      "phone": "+1 800 900 1248",
      "email": "SUPPORT@ESCAPIUM.COM",
      "skype": "ESCAPIUM",
      "photos": [
        "./images/gallery/gallery-8.jpg",
        "./images/gallery/slide-4.jpg",
        "./images/gallery/room-9.jpg"
      ]
    },
    {
      "name": "Back to the future",
      "players": [3, 4],
      "minutes": 60,
      "location": "Genk",
      "difficulty": 3,
      "phone": "+1 800 900 1248",
      "email": "SUPPORT@ESCAPIUM.COM",
      "skype": "ESCAPIUM",
      "photos": [
        "./images/gallery/room-9.jpg",
        "./images/gallery/gallery-8.jpg",
        "./images/gallery/slide-4.jpg"
      ]
    }
  ];
  
  function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.classList.add("card-with-background");
  
    card.innerHTML = `
      <h2>${cardData.name}</h2>
      <p><i class="fa-solid fa-user-group"></i> ${cardData.players[0]}-${cardData.players[1]}</p>
      <p><i class="fa-regular fa-clock"></i> ${cardData.minutes} minutes</p>
      <p><i class="fa-solid fa-location-dot"></i>: ${cardData.location}</p>
      <ul class="difficulty-icons">
        <li><i class="fa-solid fa-lock"></i></li>
        <li><i class="fa-solid fa-lock"></i></li>
        <li><i class="fa-solid fa-lock"></i></li>
        <li><i class="fa-solid fa-lock"></i></li>
        <li><i class="fa-solid fa-lock"></i></li>
      </ul>
      <div class="card-background"></div>
    `;
  
    const difficultyIcons = card.querySelectorAll(".difficulty-icons li");
    const difficulty = cardData.difficulty;
  
    for (let i = 0; i < difficulty; i++) {
      difficultyIcons[i].querySelector("i.fa-solid.fa-lock").style.color = "red";
    }
  
    const cardBackground = card.querySelector(".card-background");
    cardBackground.style.backgroundImage = `url(${cardData.photos[0]})`;
  
    return card;
  }
  
  // Générer les cartes à partir des données JSON
  jsonData.forEach(data => {
    const card = createCard(data);
    cardContainer.appendChild(card);
  });