function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}
// Get references to the container and button elements
const testimonialContainer = document.getElementById('testimonial__para');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
// Define an array of testimonials
const testimonials = [
  "Super freundlich, kompetent und sehr zu empfehlen. Das weltbeste Tier hat die Behandlung sehr genossen und läuft wieder frei und klar! Dankeschön",
  "Sehr freundlich, schnelle Terminvergabe. Nur weiter zu empfehlen! Mein Pferd hatte jahrelang Rückenschmerzen und durch die kontinuierliche und gute Behandlung kann ich nun endlich wieder ohne Bedenken reiten.",
  "Ich bin sehr zufrieden mit der Pferdetherapie Marburger. Mit ihrem Wissen und ihrer einfühlsamen ruhigen Art, hat sie meiner alten shetty Dame, die Probleme beim Laufen hatte, sehr geholfen. Ich kann die Pferdetherapie Marbuger nur jedem empfehlen."
];

let currentIndex = 0;

// Function to display the next testimonial
function displayNextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonialContainer.textContent = testimonials[currentIndex];
}

// Function to display the previous testimonial
function displayPreviousTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  testimonialContainer.textContent = testimonials[currentIndex];
}

// Add a click event listener to the button
nextButton.addEventListener('click', displayNextTestimonial);
prevButton.addEventListener('click', displayPreviousTestimonial);


var questions = document.getElementsByClassName('question');

        for (var i = 0; i < questions.length; i++) {
            questions[i].addEventListener('click', toggleAnswer);
        }

        function toggleAnswer() {
            var answer = this.nextElementSibling;
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                let chevronDown = this.getElementsByClassName('arrow-down-icon');
                chevronDown[0].classList.add('hide');
                let chevronUp = this.getElementsByClassName('arrow-up-icon');
                chevronUp[0].classList.remove('hide');
            } else {
                answer.style.display = 'none';
                let chevronDown = this.getElementsByClassName('arrow-down-icon');
                chevronDown[0].classList.remove('hide');
                let chevronUp = this.getElementsByClassName('arrow-up-icon');
                chevronUp[0].classList.add('hide');
            }
        }

        var swiper = new Swiper(".slide-content", {
          slidesPerView: 3,
          spaceBetween: 25,
          loop: true,
          centerSlide: 'true',
          fade: 'true',
          grabCursor: 'true',
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      
          breakpoints:{
              0: {
                  slidesPerView: 1,
              },
              520: {
                  slidesPerView: 2,
              },
              950: {
                  slidesPerView: 3,
              },
          },
        });