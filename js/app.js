/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


/**
 * Define Global Variables
 * 
*/

const nav = document.getElementsByClassName('navbar__menu');
const nav_list = document.getElementById('navbar__list');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

let allSections = document.querySelectorAll("section")

const lander = document.getElementById("land")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function landingPage () {
    lander.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuilder = () => {

    let navUI = '';

    allSections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" id="alpha${sectionID}"href="#${sectionID}">${sectionDataNav}</a></li>`
    });

    //append all elements the navigation
    nav_list.innerHTML = navUI;
};

navBuilder()


// Add class 'active' to section when near top of viewport

for (var i=0; i<100; i++) {
    function sectionInViewPort(allsections) {
        let sPosition = allsections.getBoundingClientRect();
        return sPosition.top >= -400 &&  sPosition.top <= 150;
    }
    
    
    document.addEventListener("scroll", function setActiveState() {
        for (let i = 0; i < allSections.length; i++) {
          if (sectionInViewPort(allSections[i])) {
            if (!allSections[i].classList.contains("active")) {
              allSections[i].classList.add("active");
            }
          } else {
            allSections[i].classList.remove("active");
          }
        }
    })
}

// Scroll to anchor ID using scrollTO event

const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

/**
 * End Main Functions
 * Begin Events
 * 
*/


//scroll to top

var goToTopElement = document.getElementById("top")

goToTopElement.addEventListener("click", landingPage)


//**activeNavBar

function activeNavBar () {
    if (section1.classList.contains("active")) {
        alphasection1.classList.add("menu__active");
        alphasection2.classList.remove("menu__active");
        alphasection3.classList.remove("menu__active");
        alphasection4.classList.remove("menu__active");
    } else if (section2.classList.contains("active")) {
        alphasection2.classList.add("menu__active");
        alphasection1.classList.remove("menu__active");
        alphasection3.classList.remove("menu__active");
        alphasection4.classList.remove("menu__active");
    } else if (section3.classList.contains("active")) {
        alphasection3.classList.add("menu__active");
        alphasection1.classList.remove("menu__active");
        alphasection2.classList.remove("menu__active");
        alphasection4.classList.remove("menu__active");
    } else if (section4.classList.contains("active")) {
        alphasection4.classList.add("menu__active");
        alphasection2.classList.remove("menu__active");
        alphasection3.classList.remove("menu__active");
        alphasection1.classList.remove("menu__active");
    }
}

window.addEventListener("scroll", activeNavBar)