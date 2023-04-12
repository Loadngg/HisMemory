// Form logic
const form_block = document.getElementById("form")
const form_title_button = document.getElementById("form-title-button")
form_title_button.onclick = () => form_block.classList.toggle("hidden")
const form_button = document.getElementById("form-send-button")
form_button.onclick = () => form_block.reset();

const contactUsLink = document.getElementById("contactus-link");
contactUsLink.onclick = () => form_block.classList.remove("hidden")