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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function mouseOver0 () {
    landy.style.color = "white";
    landy.style.backgroundColor = "#14161c";
}

function mouseOut0 () {
    landy.style.color = "black";
    landy.style.backgroundColor = "white";
}

function mouseOver1 () {
    one.style.color = "white";
    one.style.backgroundColor = "#14161c";
}

function mouseOut1 () {
    one.style.color = "black";
    one.style.backgroundColor = "white";
}

function mouseOver2 () {
    two.style.color = "white";
    two.style.backgroundColor = "#14161c";
}

function mouseOut2 () {
    two.style.color = "black";
    two.style.backgroundColor = "white";
}

function mouseOver3 () {
    three.style.color = "white";
    three.style.backgroundColor = "#14161c";
}

function mouseOut3 () {
    three.style.color = "black";
    three.style.backgroundColor = "white";
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

nav_list.innerHTML = "<li id=landy> Landing Page</li> <li id=one> Section 1</li> <li id=two> Section 2</li> <li id=three> Section 3</li>";
nav_list.style.color = "black";
nav_list.style.fontSize = "20px";
nav_list.style.fontWeight = "bold";
nav_list.style.paddingRight = "20px";

landy.style.paddingRight = "20px";
landy.style.paddingLeft = "20px";
landy.style.paddingTop = "12px";
landy.style.paddingBottom = "12px";
landy.style.cursor = "pointer";
landy.style.float = "left";

one.style.paddingRight = "20px";
one.style.paddingLeft = "20px";
one.style.paddingTop = "12px";
one.style.paddingBottom = "12px";
one.style.cursor = "pointer";


two.style.paddingRight = "20px";
two.style.paddingLeft = "20px";
two.style.paddingTop = "12px";
two.style.paddingBottom = "12px";
two.style.cursor = "pointer";

three.style.paddingRight = "20px";
three.style.paddingLeft = "20px";
three.style.paddingTop = "12px";
three.style.paddingBottom = "12px";
three.style.cursor = "pointer";

// Add class 'active' to section when near top of viewport

function setActiveClass () {
    if (isInViewPort(section2)) {
        section2.classList.add("your-active-class")
    } else { section2.classList.remove("your-active-class")
}
}



// Scroll to anchor ID using scrollTO event

function landingPage () {
    land.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}

function sectionOne () {
    section1.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}
function sectionTwo () {
    section2.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}
function sectionThree () {
    section3.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
landy.addEventListener("mouseenter", mouseOver0)
landy.addEventListener("mouseleave", mouseOut0)

one.addEventListener("mouseenter", mouseOver1)
one.addEventListener("mouseleave", mouseOut1)

two.addEventListener("mouseenter", mouseOver2)
two.addEventListener("mouseleave", mouseOut2)

three.addEventListener("mouseenter", mouseOver3)
three.addEventListener("mouseleave", mouseOut3)

// Build menu 

// Scroll to section on link click

landy.addEventListener("click", landingPage)
one.addEventListener("click", sectionOne)
two.addEventListener("click", sectionTwo)
three.addEventListener("click", sectionThree)

// Set sections as active

section2.addEventListener('scroll', () => {
    if (isInViewPort(section2)) {
        console.log("scrolling")
    }
})