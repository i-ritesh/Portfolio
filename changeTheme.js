let buttonThemeChange = document.getElementById('resumeTheme')
function changeTheme(){
    let currTheme = buttonThemeChange.getAttribute('data-theme')
    if(currTheme === 'light'){
        buttonThemeChange.setAttribute('data-theme', 'dark')
        buttonThemeChange.innerText = 'light'
        lightExecution()
        
        
    }else{
        buttonThemeChange.setAttribute('data-theme', 'light')
        buttonThemeChange.innerText = 'dark'
        darkExecution()
    }
}

function darkExecution(){
    document.documentElement.style.setProperty('--nav-bg-theme', '#fff')
        document.documentElement.style.setProperty('--anchor-text-theme', '#1c1e53')
        document.documentElement.style.setProperty('--nav-button-bg', 'transparent')
        document.documentElement.style.setProperty('--nav-button-color', '#000')
        document.documentElement.style.setProperty('--content-bg', '#deebee')
        document.documentElement.style.setProperty('--content-title-c', '#5e3bee')
        document.documentElement.style.setProperty('--main-content-bg', '#fff')
        document.documentElement.style.setProperty('--content-desc-c', '#000')
        document.documentElement.style.setProperty('--content-border-c', '#000')
}

function lightExecution(){
    
    document.documentElement.style.setProperty('--nav-bg-theme', '#292929')
    document.documentElement.style.setProperty('--anchor-text-theme', '#e0e0e1')
    document.documentElement.style.setProperty('--nav-button-bg', '#5e3bee')
    document.documentElement.style.setProperty('--nav-button-color', '#fff')
    document.documentElement.style.setProperty('--content-bg', '#616161')
    document.documentElement.style.setProperty('--content-title-c', '#fff')
    document.documentElement.style.setProperty('--main-content-bg', '#000')
    document.documentElement.style.setProperty('--content-desc-c', '#fff')
    document.documentElement.style.setProperty('--content-border-c', '#fff')
}