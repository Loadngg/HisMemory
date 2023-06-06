// Form logic
const form_block = document.getElementById("review")
const form = document.getElementById("review__form")
const contactUsLink = document.getElementById("contactus-link");
contactUsLink.onclick = () => {
    showForm()
}

function showForm() {
    form_block.classList.remove('hidden')
    setTimeout(() => {
        form_block.classList.remove('transparent')
    }, 200)
}

function closeForm() {
    form_block.classList.add('transparent')
    setTimeout(() => {
        form_block.classList.add('hidden')
    }, 200)
}

function sendForm() {
    form.reset();
    closeForm();
}

