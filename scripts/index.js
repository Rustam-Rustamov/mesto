const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__button');
const popupCloseButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.popup__input') 
let Name = document.querySelector('.profile__title');
let Job = document.querySelector('.profile__subtitle');
let NameInput = popup.querySelector('.popup__name');
let JobInput = popup.querySelector('.popup__job');


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let NameValue = NameInput.value;
    let JobValue = JobInput.value;
    NameInput.textContent = NameValue;
    JobInput.textContent = JobValue;

}

const popupAdd = function () {
    popup.classList.add('popup__opened');
    NameInput.value = Name.textContent;
    JobInput.value = Job.textContent;
}

const popupRemove = function () {
   popup.classList.remove('popup__opened');
   NameInput.value = Name.textContent;
   JobInput.value = Job.textContent;
}

popupOpenButton.addEventListener('click', popupAdd);


popupCloseButton.addEventListener('click', popupRemove);


formElement.addEventListener('submit', handleFormSubmit);