let darkMode = localStorage.getItem('darkMode');
const darkBtnToggle = document.querySelector('#mode-switch');

const enableDark = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}
const disableDark = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled'){
    enableDark();
}

darkBtnToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled'){
        enableDark();
    } else {
        disableDark();
    }
});