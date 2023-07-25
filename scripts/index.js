const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__button');
const popupCloseButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form') 
let cardName = document.querySelector('.profile__title');
let cardJob = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');

const closePopup = function () {
    popup.classList.remove('popup_opened');
}

const popupAdd = function () {
    popup.classList.add('popup_opened');
    nameInput.value = cardName.textContent;
    jobInput.value = cardJob.textContent;
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    cardName.textContent = nameValue;
    cardJob.textContent = jobValue;
    closePopup ();
}


popupOpenButton.addEventListener('click', popupAdd);


popupCloseButton.addEventListener('click', closePopup);


formElement.addEventListener('submit', handleFormSubmit);