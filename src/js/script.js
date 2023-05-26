const modeDarkLight = () => {
    const body = document.querySelector('body');
    const modeChanger = document.getElementById('theme-toggle-container');
    const userPreferenceDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPreferenceLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if(userPreferenceDark){
        console.log("User prefer dark mode");
        console.log(modeChanger);
        body.classList = 'dark';
    }
    if(userPreferenceLight){
        console.log("User prefer light mode");
        body.classList = 'light';
    }
    
    modeChanger.addEventListener('click', (e) => {
        console.log("modeChanger");
        changeTheme();
    })

    const changeTheme = () => {
        if (body.classList.contains('dark')) {
            console.log("dark");
            body.classList.toggle('dark');
            body.classList.toggle('light');
        } else if (body.classList.contains('light')) {
            console.log("light");
            body.classList.toggle('light');
            body.classList.toggle('dark');
        }
    }
}

modeDarkLight();