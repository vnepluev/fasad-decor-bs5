//
// О производстве - по клику на кнопку подробнее
//
    const btnProduction = document.querySelector('.production-hover');
    const btnProductionBtn = document.querySelector('.extremum-click');
    const btnProductionSvg = document.querySelector('.production-button__svg');

btnProductionBtn.onclick = function (e) {
    e.preventDefault();
    if (btnProduction.classList.contains('production-hover--active')) {
        btnProduction.classList.remove('production-hover--active');
        btnProductionSvg.style.transform = 'rotate(0deg)';
    } else {
        btnProduction.classList.add('production-hover--active');
        btnProductionSvg.style.transform = 'rotate(180deg)';
    }
}

//
// Каталог товара - модальное окно e-mail
//
const btnCatalogSubmit = document.querySelector('#catalog-form__btn');
const callMeCat = document.querySelector('#callme-cat');
const callMeCatEmail = document.querySelector('#callme-cat-email');
const catalogEmail = document.querySelector('#catalog-form__email');

btnCatalogSubmit.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    callMeCatEmail.value = catalogEmail.value;
    callMeCat.show;
}

//
// Маска ввода для поля tel (зависит от inputmask.min.js)
//
let inputPhone = document.querySelectorAll('input[type="tel"]');
let inputPhoneMask = new Inputmask('+7 (999) 999-99-99');
inputPhoneMask.mask(inputPhone);

//
// Валидация и отправка форм (зависит от just-validate.min.js)
//
let phpMailPath = 'https://fasad-decor-moscow.ru/php-mail/mail.php';
let validateForms = function (selector, rules, successModal, yaGoal) {
    // selector - класс формы, rules - объект с правилами,
    // successModal - когда успех, yaGoal - цель Я.метрики
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form) {
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Письмо отправлено');
                    }
                }
            }

            xhr.open('POST', phpMailPath, true);
            xhr.send(formData);
            form.reset();
        }
    })
}

// id: popup-form-catalog - форма с запросом каталога
// id: popup-form-tel - форма обратного звонка
validateForms('#popup-form-tel', { email: { required: true, email: true }, tel: { required: true } }, '.thanks-popup', 'send goal');
