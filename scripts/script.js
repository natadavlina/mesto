let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__info-btn');
let popupForm = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__info-name');
let profileAbout = document.querySelector('.profile__info-description');
let nameInput = popup.querySelector('#name')
let aboutInput = popup.querySelector('#about');
let popupClose = document.querySelector('.popup__close-btn');

function openPopup() {
    popup.classList.add('popup_visible');
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

function closePopup() {
    popup.classList.remove('popup_visible');
}
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;

    closePopup()
}
popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);