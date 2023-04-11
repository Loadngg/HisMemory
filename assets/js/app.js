// Scroll Top on reload
window.onbeforeunload = () => window.screenTop();

// Sticky header
let header = document.getElementById('header');
let headerH = header.clientHeight;
let scrollOffset = window.scrollY;

checkPos(scrollOffset);

window.onscroll = function () {
    scrollOffset = window.scrollY;

    checkPos(scrollOffset);
}

function checkPos(scrollOffset) {
    if (scrollOffset >= headerH) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

// Form logic
const form_block = document.getElementById("form")
const form_title_button = document.getElementById("form-title-button")
form_title_button.onclick = () => form_block.classList.toggle("hidden")
const form_button = document.getElementById("form-send-button")
form_button.onclick = () => form_block.reset();

const contactUsLink = document.getElementById("contactus-link");
contactUsLink.onclick = () => form_block.classList.remove("hidden")

// Nav scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(event) {
        event.preventDefault();
        const yOffset = 0;
        const id = smoothLink.getAttribute('href');
        const element = document.querySelector(id)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
    })
}