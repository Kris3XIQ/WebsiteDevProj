'use strict';

const modeDarkLight = () => {
    const body = document.querySelector('body');
    const modeChanger = document.getElementById('theme-toggle');
    const userPreferenceDark = window.matchMedia && window.matchMedia('prefer-color-scheme: dark').matches;
    const userPreferenceLight = window.matchMedia && window.matchMedia('preference-color-scheme: light').matches;

    if (userPreferenceDark) {
        console.log("User prefer dark mode");
        body.classList = 'dark';
    }
    if (userPreferenceLight) {
        console.log("User prefer light mode");
        body.classList = 'light';
    }
    
    modeChanger.addEventListener('click', (e) => {
        console.log(body.classList);
        changeTheme();
    })

    const changeTheme = () => {
        if (body.classList.contains('dark')) {
            body.classList.toggle('dark');
            body.classList.toggle('light');
        } else if (body.classList.contains('light')) {
            body.classList.toggle('light');
            body.classList.toggle('dark');
        }
    }
}

modeDarkLight();