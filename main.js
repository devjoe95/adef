let darkMode = localStorage.getItem('darkMode');
const darkBtnToggle = document.querySelector('#mode-switch');

const enableDark = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    darkBtnToggle.children[0].innerText = 'light_mode';
}
const disableDark = () => {
    document.body.classList.remove('dark-mode');
    darkBtnToggle.children[0].innerText = 'dark_mode';
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

// window.onscroll = () => {
//     this.scrollY >= 800 ? scrollTop.classList.add('show-btn') : scrollTop.classList.remove('show-btn')
// };

window.onscroll = () => {
    if(this.scrollY >= 800) {
        scrollTop.style.visibility = 'visible';  
        scrollTop.style.bottom = '20px';  
    } else {
        scrollTop.style.visibility = 'hidden';  
        scrollTop.style.bottom = '-50px';  
    };
};

scrollTop.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
});