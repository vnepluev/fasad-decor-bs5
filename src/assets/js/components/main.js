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
