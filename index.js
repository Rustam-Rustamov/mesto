const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__open-popup');
const popupCloseButton = popup.querySelector('.popup__close');

const popupToggle = function () {
    popup.classList.toggle('popup_opened');
}


popupOpenButton.addEventListener('click', popupToggle);


popupCloseButton.addEventListener('click', popupToggle);

let formElement = document.querySelector('.popup__input') 
let nameInput = document.querySelector('input[name="pwd"]');
let jobInput = document.querySelector('input[job="pwd"]'); 


function handleFormSubmit (evt) {
    evt.preventDefault(); 
}

formElement.addEventListener('submit', handleFormSubmit);