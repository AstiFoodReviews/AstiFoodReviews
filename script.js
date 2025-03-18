

// ALL FILTER BUTTONS
const filterWalkableButton = document.getElementById("filterWalkable");
const filterCheapButton = document.getElementById("filterCheap");
const filterModeratelyExpensiveButton = document.getElementById("filterModeratelyExpensive");
const filterShortWaitButton = document.getElementById("filterShortWait");
const filterLongWaitButton = document.getElementById("filterLongWait");


const restaurantList = document.querySelectorAll(".restaurantElement");
var currentTags = [];

//POSSIBLE IMPLEMENTATION OF HOW FILTERS CAN WORK: IF ONE FILTER IS SELECTED, IT'S ADDED TO AN ARRAY OF SELECTED FILTERS AND A FUNCTION WILL CHECK IF RESTAURANTS FULFILL ALL OF THE FILTERS

//IMPLEMENT RECLICKING THE BUTTON TO REMOVE FILTER
// IMPLEMENT RESETTING ALL FILTERS BUTTOn
// FIGURE OUT HAVING MULITPLE FILTERS SELECTED AT ONCE (CREATE NEW ARRAY BASED ON NONE-REMOVED RESTAURANTS AND FILTER BASED ON THAT ARRAY, AND IF THAT ARRAY IS EMPTY, CHECK restaurantList)

///IMPLEMENT DIFFERENT COLORS FOR GOOD OR BAD TAGS



restaurantList.forEach(restaurant => {
  var restaurantTags = restaurant.getAttribute("filterTags");
  var restaurantTagsSplit = restaurantTags.split(",");
  const restaurantID = restaurant.getAttribute("id");
  const restaurantTagListID = restaurant.getAttribute(restaurant + "tagListID");
  var tagList = document.querySelector(".tagList");
  restaurant.getElementsByClassName("restaurantTextContainer").innerHTML += "<h4 class='tag'>adsada</h4>";
  restaurantTagsSplit.forEach(tag => {
    restaurant.getElementsByClassName("tagList")[0].innerHTML += "<h4 class='tag'>"+ tag + "</h4>";
  })
})



filterWalkableButton.addEventListener("click", () => {
  if (currentTags.includes("Walkable") == false) {
    filterWalkableButton.className = "filterButtonSelected";
    currentTags.push("Walkable");
    restaurantList.forEach(restaurant => {
      const restaurantTags = restaurant.getAttribute("filterTags");
      const restaurantTagsSplit = restaurantTags.split(",");
      const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
      if (includesAll(restaurantTags, currentTags) == false) {
        restaurant.style.display = "none";
        }
      else {
        restaurant.style.display = "block";
      }
    })
  }
  else if (currentTags.includes("Walkable") == true) {
    filterWalkableButton.className = "filterButton";
    currentTags.splice(currentTags.indexOf("Walkable"), 1);
    restaurantList.forEach(restaurant => {
      const restaurantTags = restaurant.getAttribute("filterTags");
      const restaurantTagsSplit = restaurantTags.split(",");
      const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
      if (includesAll(restaurantTags, currentTags) == false) {
        restaurant.style.display = "none";
        }
      else {
        restaurant.style.display = "block";
      }
    })
  }
})

function infoFunction() {
  var popup = document.getElementById("infoID");
  var background = document.getElementById("popupBackgroundID");
  popup.style.display = "block";
  background.style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function infoCloseFunction() {
  var popup = document.getElementById("infoID");
  var background = document.getElementById("popupBackgroundID");
  popup.style.display = "none";
  background.style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}


filterCheapButton.addEventListener("click", () => {
  if (currentTags.includes("$10-20") == true) {
    filterModeratelyExpensiveButton.className = "filterButton";
    currentTags.splice(currentTags.indexOf("$10-20"), 1);
    restaurantList.forEach(restaurant => {
      const restaurantTags = restaurant.getAttribute("filterTags");
      const restaurantTagsSplit = restaurantTags.split(",");
      const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
      if (includesAll(restaurantTags, currentTags) == false) {
        restaurant.style.display = "none";
        }
      else {
        restaurant.style.display = "block";
        }
      })
    }
  if (currentTags.includes("$5-10") == false) {
    filterCheapButton.className = "filterButtonSelected";
    currentTags.push("$5-10");
    restaurantList.forEach(restaurant => {
      const restaurantTags = restaurant.getAttribute("filterTags");
      const restaurantTagsSplit = restaurantTags.split(",");
      const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
      if (includesAll(restaurantTags, currentTags) == false) {
        restaurant.style.display = "none";
        }
      else {
        restaurant.style.display = "block";
      }
    })
  }
  else if (currentTags.includes("$5-10") == true) {
    filterCheapButton.className = "filterButton";
    currentTags.splice(currentTags.indexOf("$5-10"), 1);
    restaurantList.forEach(restaurant => {
      const restaurantTags = restaurant.getAttribute("filterTags");
      const restaurantTagsSplit = restaurantTags.split(",");
      const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
      if (includesAll(restaurantTags, currentTags) == false) {
        restaurant.style.display = "none";
        }
      else {
        restaurant.style.display = "block";
      }
    })
  }
})


filterModeratelyExpensiveButton.addEventListener("click", () => {
  if (currentTags.includes("$10-20") == false) {
    if (currentTags.includes("$5-10") == true) {
      filterCheapButton.className = "filterButton";
      currentTags.splice(currentTags.indexOf("$5-10"), 1);
      restaurantList.forEach(restaurant => {
        const restaurantTags = restaurant.getAttribute("filterTags");
        const restaurantTagsSplit = restaurantTags.split(",");
        const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
        if (includesAll(restaurantTags, currentTags) == false) {
          restaurant.style.display = "none";
          }
        else {
          restaurant.style.display = "block";
        }
      })
    }
    filterModeratelyExpensiveButton.className = "filterButtonSelected";
    currentTags.push("$10-20");
    restaurantList.forEach(restaurant => {
      const restaurantTags = restaurant.getAttribute("filterTags");
      const restaurantTagsSplit = restaurantTags.split(",");
      const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
      if (includesAll(restaurantTags, currentTags) == false) {
        restaurant.style.display = "none";
        }
      else {
        restaurant.style.display = "block";
      }
    })
  }
  else if (currentTags.includes("$10-20") == true) {
    filterModeratelyExpensiveButton.className = "filterButton";
    currentTags.splice(currentTags.indexOf("$10-20"), 1);
    restaurantList.forEach(restaurant => {
      const restaurantTags = restaurant.getAttribute("filterTags");
      const restaurantTagsSplit = restaurantTags.split(",");
      const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
      if (includesAll(restaurantTags, currentTags) == false) {
        restaurant.style.display = "none";
        }
      else {
        restaurant.style.display = "block";
      }
    })
  }
})


filterShortWaitButton.addEventListener("click", () => {
  if (currentTags.includes("Short Wait") == false) {
    filterShortWaitButton.className = "filterButtonSelected";
    currentTags.push("Short Wait");
    restaurantList.forEach(restaurant => {
      const restaurantTags = restaurant.getAttribute("filterTags");
      const restaurantTagsSplit = restaurantTags.split(",");
      const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
      if (includesAll(restaurantTags, currentTags) == false) {
        restaurant.style.display = "none";
        }
      else {
        restaurant.style.display = "block";
      }
    })
  }
  else if (currentTags.includes("Short Wait") == true) {
    filterShortWaitButton.className = "filterButton";
    currentTags.splice(currentTags.indexOf("Short Wait"), 1);
    restaurantList.forEach(restaurant => {
      const restaurantTags = restaurant.getAttribute("filterTags");
      const restaurantTagsSplit = restaurantTags.split(",");
      const includesAll = (restaurantTags, currentTags) => currentTags.every(v => restaurantTags.includes(v));
      if (includesAll(restaurantTags, currentTags) == false) {
        restaurant.style.display = "none";
        }
      else {
        restaurant.style.display = "block";
      }
    })
  }
})





// Array of image URLs
const images = [
  "https://cdn.glitch.global/74e7e374-665e-4d44-b20e-5fdeda416c19/habit.jpg?v=1741042728821",
  "https://cdn.glitch.global/74e7e374-665e-4d44-b20e-5fdeda416c19/habit2.jpg?v=1741042728821",
  "https://cdn.glitch.global/74e7e374-665e-4d44-b20e-5fdeda416c19/habit3.jpg?v=1741042728821"
  // Add more URLs if you want
];

const carouselImages = document.getElementById('carouselImages');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;

function initCarousel() {
  images.forEach((src, index) => {
    // Add images
    const img = document.createElement('img');
    img.src = src;
    carouselImages.appendChild(img);

    // Add dots
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });

  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

// Arrow events
document.getElementById('nextArrow').addEventListener('click', showNext);
document.getElementById('prevArrow').addEventListener('click', showPrev);

// Swipe events
let startX = 0;
let endX = 0;

carouselImages.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carouselImages.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;
  if (diff > 50) {
    showNext(); // Swipe left
  } else if (diff < -50) {
    showPrev(); // Swipe right
  }
}

// Initialize it all
initCarousel();



/*  SORT BY ALPHABETICAAL
const button_sortAlphabetically = document.getElementById("sortAlphabetically");
const button_sortAlphabeticallyInverse = document.getElementById("sortAlphabeticallyInverse");

function reorderRestaurants(isAscending){
  const container = document.querySelector(".restaurantList");;
  const restaurantElements = Array.from(container.children);
  
};


button_sortAlphabetically.addEventListener("click", function () {
  reorderRestaurants(true);
  
});

button_sortAlphabeticallyInverse.addEventListener("click", function() {
  reorderRestaurants(false); 
});
*/



