const appsbtn = document.querySelector('.appsbtn')
const apps = document.querySelector('.apps')
const profilebtn = document.querySelector('.profilebtn')
const profilesection = document.querySelector('.profilesection')
const x = document.querySelector('.x')

appsbtn.addEventListener('click', () => {
    if(apps.classList.contains('showapps'))
        apps.classList.remove('showapps')
    else
        apps.classList.add('showapps')

    if(profilesection.classList.contains('showprofilesection'))
        profilesection.classList.remove('showprofilesection')
})

profilebtn.addEventListener('click', () => {
    if(profilesection.classList.contains('showprofilesection'))
        profilesection.classList.remove('showprofilesection')
    else
        profilesection.classList.add('showprofilesection')

    if(apps.classList.contains('showapps'))
        apps.classList.remove('showapps')
})
x.addEventListener('click', () => {
    if(profilesection.classList.contains('showprofilesection'))
        profilesection.classList.remove('showprofilesection')    
        else
    profilesection.classList.add('showprofilesection')    
})