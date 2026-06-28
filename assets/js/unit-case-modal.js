const unitCaseModal = document.querySelector('#unit-case-modal');
const unitCaseTitle = document.querySelector('#unit-case-title');
const unitCaseButtons = document.querySelectorAll('[data-unit-case]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const unitCasePhotoContainer = document.querySelector('#unit-case-photo-container');
const unitCasePhoto = document.querySelector('#unit-case-photo');

const closeUnitCaseModal = () => {
    unitCaseModal.close();
};

unitCaseButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const { building, unit } = button.dataset;
        const buildingNumber = building.replace('號棟', '');
        const unitParts = unit.match(/^(\d+)F(?:-(\d+))?$/);
        const floor = unitParts[1];
        const doorSuffix = unitParts[2];
        const doorNumber = doorSuffix ? `${buildingNumber}-${doorSuffix}號` : `${buildingNumber}號`;
        const caseTitle = `${doorNumber}${floor}樓住戶外開門於安全梯間影響樓梯迴轉半徑`;
        const imageSuffix = doorSuffix ? `-${doorSuffix}` : '';

        unitCaseTitle.textContent = caseTitle;
        unitCasePhotoContainer.hidden = false;
        unitCasePhoto.alt = `${caseTitle}缺失照片`;

        unitCasePhoto.src = `assets/img/${buildingNumber}-${floor}${imageSuffix}.jpg`;

        unitCaseModal.showModal();
        document.body.classList.add('modal-open');
    });
});

unitCasePhoto.addEventListener('load', () => {
    unitCasePhotoContainer.hidden = false;
});

unitCasePhoto.addEventListener('error', () => {
    unitCasePhotoContainer.hidden = true;
});

modalCloseButtons.forEach((button) => {
    button.addEventListener('click', closeUnitCaseModal);
});

unitCaseModal.addEventListener('click', (event) => {
    if (event.target === unitCaseModal) {
        closeUnitCaseModal();
    }
});

unitCaseModal.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    unitCasePhoto.removeAttribute('src');
    unitCasePhotoContainer.hidden = true;
});
