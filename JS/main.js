
// Selecionando os elementos do HTML com base em seus IDs

const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal")
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

// Definindo função para alternar a exibição do modal e do fade

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};



// Adicionando evento de clique a cada elemento selecionado

[openModal, closeModal, fade].forEach((el) => {

    el.addEventListener("click", () => toggleModal());

});