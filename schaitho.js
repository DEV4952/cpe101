    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){  
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var modalImages = document.getElementsByClassName("myImg");
var modals = document.getElementsByClassName("modal");
var modalImgs = document.getElementsByClassName("modal-content");
var overlayTexts = document.getElementsByClassName("overlay-text");


for (var i = 0; i < modalImages.length; i++) {
  modalImages[i].addEventListener("click", function(event) {
    var modalIndex = Array.from(modalImages).indexOf(this);
    modals[modalIndex].style.display = "block";
    modalImgs[modalIndex].src = this.src;
    overlayTexts[modalIndex].innerHTML = document.getElementById("text0" + (modalIndex + 1)).innerHTML;
    
    // Prevent the default behavior of the anchor (prevent immediate redirect)
    event.preventDefault();
  });
}

// Close the modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  for (var i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = "none";
    }
  }
});

// Prevent clicks inside the modal content from closing the modal
for (var i = 0; i < modalImgs.length; i++) {
  modalImgs[i].addEventListener("click", function(event) {
    event.stopPropagation();
  });
}

var modalContents = document.getElementsByClassName("modal-content");

// Add a click event listener to each modal content
for (var i = 0; i < modalContents.length; i++) {
  modalContents[i].addEventListener("click", function() {
    // Redirect the user to the "Rick Roll" URL when the modal content is clicked
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  });
}

const box = document.querySelector('.scroll-box');
        const content = document.querySelector('.content');
        const blackText = document.querySelector('#blackText');



        // Function to create glitch squares with varying sizes and speeds
        function createGlitchSquare() {
            const square = document.createElement('div');
            square.classList.add('glitch-square');
            square.style.width = random(10, 40) + 'px';
            square.style.height = random(10, 40) + 'px';
            square.style.left = random(0, content.clientWidth) + 'px';
            square.style.top = random(0, content.clientHeight) + 'px';
            content.appendChild(square);

            // Randomize opacity and animation duration
            const opacity = Math.random() * 0.5 + 0.1;
            square.style.opacity = opacity;
            const duration = Math.random() * 1 + 0.5;

            // Add glitch animation with random speed
            square.style.animation = `glitch ${duration}s linear infinite`;

            // Remove the square after the animation is completed
            square.addEventListener('animationiteration', () => {
                square.remove();
            });
        }

        // Create glitch squares at random intervals
        const interval = 0.1; // Adjust the interval as needed (in milliseconds)
        setInterval(createGlitchSquare, interval);


        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

 const messages = [

            'you cant cilck this?',
            'why no',
            'bro stop',
            'no you cant'

        ];

        let messageIndex = 0; // Index to keep track of the current message

        blackText.addEventListener('click', () => {
            // Change the text to the next message
            blackText.textContent = messages[messageIndex];
            messageIndex = (messageIndex + 1) % messages.length; // Cycle through message
        });


var passwordInput = document.getElementById("password-input");
var attempts = 0;
var errorMessage = document.getElementById("error-message");
var laptopScreen = document.querySelector(".laptop-screen");
var closeButton = document.querySelector(".close-button");
var laptopScreen = document.querySelector(".laptop-screen");
var closeButton = document.querySelector(".close-button");
var laptopScreen = document.querySelector(".laptop-screen");
var audio = document.getElementById("myAudio");

var laptopScreenVisible = false; 
document.getElementById("showCodeButton").addEventListener("click", function() {
  // Toggle the visibility of the laptop screen code
  if (!laptopScreenVisible) {
    // Toggle the visibility of the laptop screen code
    laptopScreen.style.display = "flex";
    laptopScreenVisible = true; // Set the laptop screen as visible
  }
});

function checkPassword(event) {
  if (event.key === "Enter") {
    var password = passwordInput.value;
    attempts++;

    if (password === "incorrect") {
      document.getElementById("password-screen").style.display = "none";
      document.getElementById("image-container").style.display = "flex";
      laptopScreen.style.display = "none";
      document.getElementById("hiddenTextContainer").style.display = "block";

    } else {
      if (attempts === 1) {
        errorMessage.textContent = "Your password is incorrect. 3 attempts remaining :)";
      } else if (attempts === 2) {
        errorMessage.textContent = "I will say it again: your password is incorrect. 2 attempts remaining :/";
      } else if (attempts === 3) {
        errorMessage.textContent = 'Okay, you\'re just messing with me. Your password is "incorrect". I\'ll say it again: incorrect incorrect incorrect. I\'ve said "incorrect" so much that it doesn\'t even look like a word now. You better get it this time, as it\'s your last attempt >:(';
      } else if (attempts === 4) {
        errorMessage.textContent = 'You have reached the maximum number of attempts. The text bar is now disabled. "You didn\'t get it? Well, that\'s fine... as you can\'t type anymore, lol."';
        passwordInput.disabled = true;
        passwordInput.classList.add("glitch-effect1");
        return; // Exit the function to keep the animation playing forever
      }
      
      // Add the glitch effect class
      passwordInput.classList.add("glitch-effect1");
      
      // Remove the glitch effect class after 3 seconds
      setTimeout(function() {
        passwordInput.classList.remove("glitch-effect1");
      }, 3000);
    }
  }
}
closeButton.addEventListener("click", function() {
  laptopScreen.style.display = "none";
   laptopScreen.classList.add("closed");
   audio.play();
});

function closeWhiteBox() {
  var hiddenTextContainer = document.getElementById("hiddenTextContainer");
  hiddenTextContainer.style.display = "none";
}


passwordInput.addEventListener("keydown", checkPassword);

