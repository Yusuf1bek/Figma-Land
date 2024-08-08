// HEADER

let navbarItems = ["Home","Product","About","Contact"]

let elHeader = document.querySelector(".site-header")
let elContainer = document.createElement("div")
let elHeaderInner = document.createElement("div")
let elLogoLink = document.createElement("a")
let elLogoImg = document.createElement("img")

let elHeaderList = document.createElement("ul")
let elLoginBtn = document.createElement("a")


elContainer.classList.add("container")
elHeaderInner.classList.add("header")

elLogoLink.classList.add("header__logo-link")
elLogoLink.href = "/"

elLogoImg.classList.add("header__logo-img")
elLogoImg.src = "./images/site-logo.svg"
elLogoImg.width = "186"
elLogoImg.height = "58"

elHeaderList.classList.add("header__list")

elLoginBtn.classList.add("header__login.btn")
elLoginBtn.href = "/"
elLoginBtn.textContent = "Login"

navbarItems.forEach(item => {
    let elHeaderItem = document.createElement("li")
    let elHeaderItemLink = document.createElement("a")

    elHeaderItem.classList.add("header__item")
    elHeaderItemLink.classList.add("header__item-link")
    elHeaderItemLink.href = "/"
    elHeaderItemLink.textContent = item

    elHeaderList.appendChild(elHeaderItem)
    elHeaderItem.appendChild(elHeaderItemLink)
})

elHeader.appendChild(elContainer)
elContainer.appendChild(elHeaderInner)
elHeaderInner.append(elLogoLink,elHeaderList,elLoginBtn)
elLogoLink.appendChild(elLogoImg)





// HERO
let elMain = document.querySelector(".main")
let elHeroSection = document.createElement("section")
let elContainerHero = document.createElement("div")
let elHero = document.createElement("div")
let elHeroWrapper = document.createElement("div")
let elHeroTitle = document.createElement("h1")
let elHeroText = document.createElement("p")
let elHeroWrapperLink = document.createElement("div")
let elHeroLink = document.createElement("a")
let elHeroLinkSecond = document.createElement("a")

elContainerHero.classList.add("container")
elHero.classList.add("hero")
elHeroSection.classList.add("hero-section")
elHeroWrapper.classList.add("hero__wrapper")
elHeroTitle.classList.add("hero__title")
elHeroTitle.textContent = "Work at the speed of thought"

elHeroText.classList.add("hero__text")
elHeroText.textContent = "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."

elHeroWrapperLink.classList.add("hero__wrapper-link")
elHeroLink.classList.add("hero__link")
elHeroLink.href = "/"
elHeroLink.textContent = "Try For Free"

elHeroLinkSecond.classList.add("hero__link-second")
elHeroLinkSecond.href = "/"
elHeroLinkSecond.textContent = "Learn More"

elMain.appendChild(elHeroSection)
elHeroSection.appendChild(elContainerHero)
elContainerHero.appendChild(elHero)
elHero.appendChild(elHeroWrapper)
elHeroWrapper.append(elHeroTitle,elHeroText)
elHeroText.appendChild(elHeroWrapperLink)
elHeroWrapperLink.append(elHeroLink,elHeroLinkSecond)