// Form logic
const contactUsLink = document.getElementById("contactus-link");
contactUsLink.onclick = () => form_block.classList.remove("hidden")

// Make review
let makeBtn = document.getElementById('make__review');
let form = document.getElementById('review__form');

function showForm() {
    form.classList.remove('hidden')
    setTimeout(() => {
        form.classList.remove('transparent')
    }, 200)
}

function closeForm() {
    form.classList.add('transparent')
    setTimeout(() => {
        form.classList.add('hidden')
    }, 200)
}