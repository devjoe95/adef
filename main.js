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

// scroll to top 

const scrollTop = document.querySelector('#to-top');

window.onscroll = () => {
    this.scrollY >= 800 ? scrollTop.classList.add('show-btn') : scrollTop.classList.remove('show-btn')
};

scrollTop.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
});