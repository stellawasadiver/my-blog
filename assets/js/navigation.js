const navButton = document.querySelector('.nav-button')
const iconMenuSmall = document.querySelector('.icon-menu-small')
const iconMenuLarge = document.querySelector('.icon-menu-large')
const iconMenuClose = document.querySelector('.icon-menu-close')
const menuMain = document.querySelector('.menu-main')
const menuSocial = document.querySelector('.menu-social')

// Display social menu when main menu is showing and viewport is large.
const socialMenuDisplay = () => {  
    let ViewportWidth = window.innerWidth     

    // If the main menu is visible, display the social menu.
    if (menuMain.classList.contains('menu-show')) {
        menuSocial.classList.remove('menu-hide')
        menuSocial.classList.add('menu-show')         
    } 
    // If the viewport is small, hide the social menu.
    else if (ViewportWidth < 992) {
        menuSocial.classList.remove('menu-show')
        menuSocial.classList.add('menu-hide')

        // Ensure correct icon is displayed
        iconMenuSmall.style.display = 'block'
        iconMenuLarge.style.display = 'none'
    } 
    // The viewport is large, display the social menu.
    else {
        menuSocial.classList.remove('menu-hide')
        menuSocial.classList.add('menu-show')

        // Ensure correct icon is displayed
        iconMenuSmall.style.display = 'none'
        iconMenuLarge.style.display = 'block'
    }
}

socialMenuDisplay()

window.addEventListener('resize', socialMenuDisplay)


// Toggle main menu and nav button icons.
const toggleMenu = () => {
    let currentIcon = document.querySelector('.nav-button svg:not([style*="display: none"])')
    let ViewportWidth = window.innerWidth      
    // Remove focus styles from button.
    navButton.blur() 
    
    // Hide small screen menu icon and display close menu icon.
    if (currentIcon.classList.contains('icon-menu-small')) {        
        iconMenuSmall.style.display = 'none'
        iconMenuLarge.style.display = 'none'
        iconMenuClose.style.display = 'block' 
        // Display main menu.
        menuMain.classList.remove('menu-hide')
        menuMain.classList.add('menu-show') 
    } 
    // Hide large screen menu icon and display close menu icon
    else if (currentIcon.classList.contains('icon-menu-large')) {
        iconMenuSmall.style.display = 'none'
        iconMenuLarge.style.display = 'none'
        iconMenuClose.style.display = 'block'
        // Display main menu.
        menuMain.classList.remove('menu-hide')
        menuMain.classList.add('menu-show')  
    }
    // Hide close button and display correct menu icon.
    else {
        iconMenuClose.style.display = 'none'
        if (ViewportWidth < 992) {
            iconMenuSmall.style.display = 'block'
        } else {
        iconMenuLarge.style.display = 'block'
        }         
        // Hide main menu.
        menuMain.classList.remove('menu-show')
        menuMain.classList.add('menu-hide')        
    }   

    socialMenuDisplay() 
}

navButton.addEventListener('click', toggleMenu)