const UI = {
    BASKET_BTN: document.querySelectorAll('.basket-btn'),
    BUY_BTN: document.querySelectorAll(".buy-btn"),
    SIZE_BTN: document.querySelectorAll(".size-container__size-block"),
    SALE_NAV_BTN: document.querySelectorAll('.sales__nav-btn'),
    ICON_FAVORITE_BTN: document.querySelectorAll(".icon-favorite"),
}

function toggleClass(event, className,) {
   event.currentTarget.classList.toggle(className);
}

function  pressBtn(nameBtn, className) {
    nameBtn.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            toggleClass(e, className);
        })
    })
}



pressBtn(UI.BASKET_BTN, 'btn-pressed');
pressBtn(UI.BUY_BTN, 'btn-pressed');
pressBtn(UI.SIZE_BTN, 'btn-pressed');
pressBtn(UI.SALE_NAV_BTN, 'btn-pressed');
pressBtn(UI.ICON_FAVORITE_BTN, 'press-favorite');



