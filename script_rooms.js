// JSON data
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
  
//select the HTML element
const cardContainer = document.querySelector(".card-container");

// Function to create cards elements
function createCard(cardData, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add(`card-${index}`); // Add class based on index
  
  //Taking the first image of the array for the background
  const cardPhotos = cardData.photos[0];

  //Create the HTML for the card
  card.innerHTML = `
    <div class="card-photos">
      <div class="card__content">
        <ul class="difficulty-icons">
          <li><i class="fa-solid fa-lock"></i></li>
          <li><i class="fa-solid fa-lock"></i></li>
          <li><i class="fa-solid fa-lock"></i></li>
          <li><i class="fa-solid fa-lock"></i></li>
          <li><i class="fa-solid fa-lock"></i></li>
        </ul>
        <h2>${cardData.name}</h2>
        <ul>
          <li><p><i class="fa-solid fa-user-group"></i> ${cardData.players[0]}-${cardData.players[1]}</p></li>
          <li><p><i class="fa-regular fa-clock"></i> ${cardData.minutes} minutes</p></li>
          <li><p><i class="fa-solid fa-location-dot"></i> ${cardData.location}</p></li>
        </ul>
      </div>
    </div>
  `;

  //style of the card background
    const cardPhotosContainer = card.querySelector(".card-photos");
    cardPhotosContainer.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${cardPhotos})`;
    cardPhotosContainer.style.backgroundRepeat = "no-repeat";
    cardPhotosContainer.style.backgroundSize = "cover";
    cardPhotosContainer.style.backgroundPosition = "center";

  
  //More style but for the text now
  const cardContent = card.querySelector(".card__content");
  cardContent.style.padding = "35px";
  cardContent.style.paddingTop = "250px";

  //Loop for displaying padlocks with difficulty visibility 
  const difficultyIcons = card.querySelectorAll(".difficulty-icons li");
  const difficulty = cardData.difficulty;

  for (let i = 0; i < difficultyIcons.length; i++) {
    const padlockIcon = difficultyIcons[i].querySelector("i.fa-solid.fa-lock");
    if (i < difficulty) {
      padlockIcon.style.color = "red";
    } else {
      padlockIcon.style.color = "gray";
    }
  }
  
// Open new HTML page with object information [unfinished]
  card.addEventListener("click", () => {
    window.location.href = `room.html?index=${index}`;
  });
  
  

  return card;
}

// Display the card
jsonData.forEach((data, index) => {
  const card = createCard(data, index);
  cardContainer.appendChild(card);
});

// Function to filter and display cards based on the difficulty level
function filterCards(difficultyLevel) {
  const cardContainer = document.querySelector(".card-container");
  const cards = cardContainer.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardDifficulty = jsonData[parseInt(card.classList[1].split("-")[1])].difficulty;

    // Show all cards if "All" is clicked
    if (difficultyLevel === "all") {
      card.style.display = "block";
    }
    // Show cards with difficulty level = 2 if "Easy" is clicked
    else if (difficultyLevel === "easy") {
      card.style.display = cardDifficulty === 2 ? "block" : "none";
    }
    // Show cards with difficulty level = 3 if "Normal" is clicked
    else if (difficultyLevel === "normal") {
      card.style.display = cardDifficulty === 3 ? "block" : "none";
    }
    // Show cards with difficulty level >= 4 if "Hard" is clicked
    else if (difficultyLevel === "hard") {
      card.style.display = cardDifficulty >= 4 ? "block" : "none";
    }
  });
}

