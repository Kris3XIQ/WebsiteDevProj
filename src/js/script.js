const modePreference = () => {
    const body = document.querySelector('body');
    const themeToggler = document.getElementById('theme-toggle-container');
    const userPreferenceDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPreferenceLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if(userPreferenceDarkMode){
        console.log("User prefers a dark interface");
        body.classList = "dark";
    }
    if(userPreferenceLightMode){
        console.log("User prefers a light interface");
        body.classList = "light";
    }
    themeToggler.addEventListener('click', (e) => {
        toggleTheme();
    })
    const toggleTheme = () => {
        if (body.classList.contains("dark")) {
            body.classList.toggle("dark");
            body.classList.toggle("light");
        } else if (body.classList.contains("light")) {
            body.classList.toggle("light");
            body.classList.toggle("dark");
        }
    }
}

modePreference();