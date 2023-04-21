const chartsBlock = document.getElementById("charts");
const children = chartsBlock.children;

const button = document.getElementById("expand-button");

button.onclick = () => {
    button.classList.toggle("expanded");

    for (let i = 5; i < children.length; i++) {
        children[i].classList.toggle("hidden");
    }


    button.classList.contains("expanded")
        ? button.innerHTML = "Свернуть"
        : button.innerHTML = "Развернуть"
}
