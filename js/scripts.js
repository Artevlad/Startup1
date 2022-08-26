let bgHeader = document.querySelector(".bg-header"),
    bgDoYouLike = document.querySelector(".do-you-like"),
    popup = document.querySelector(".popup"),
    activePopup,
    activeAuditPopup,
    registration = document.querySelector(".registration"),
    code = document.querySelector(".code"),
    tripleClick = onclick + ondblclick,
    firstStrong = document.querySelector(".first-strong"),
    secondStrong = document.querySelector(".second-strong"),
    thirdStrong = document.querySelector(".third-strong"),
    fourthStrong = document.querySelector(".fourth-strong"),
    fifthStrong = document.querySelector(".fifth-strong"),
    sixthStrong = document.querySelector(".sixth-strong"),
    photoFirst = document.querySelector(".photo-first"),
    photoSecond = document.querySelector(".photo-second"),
    photoThird = document.querySelector(".photo-third"),
    photoFouth = document.querySelector(".photo-fouth"),
    photoFifth = document.querySelector(".photo-fifth"),
    photoSixth = document.querySelector(".photo-sixth"),
    photoSeventh = document.querySelector(".photo-seventh"),
    photoEighth = document.querySelector(".photo-eighth"),
    photoNinth = document.querySelector(".photo-ninth"),
    menuHome = document.querySelector(".menu-home"),
    menuServices = document.querySelector(".menu-services"),
    firstPopup = document.querySelector(".first-popup"),
    secondPopup = document.querySelector(".second-popup"),
    left = document.querySelector(".arrow-left"),
	right = document.querySelector(".arrow-right"),
    greenColorFirst = document.querySelector(".green-color-first"),
    redColorFirst = document.querySelector(".red-color-first"),
    blueColorFirst = document.querySelector(".blue-color-first"),
    brownColorFirst = document.querySelector(".brown-color-first"),
    greenColorSecond = document.querySelector(".green-color-second"),
    redColorSecond = document.querySelector(".red-color-second"),
    blueColorSecond = document.querySelector(".blue-color-second"),
    brownColorSecond = document.querySelector(".brown-color-second"),
    popupLoad = document.querySelector(".popup-load"),
    popupFormLoad = document.querySelector(".popup-form-load"),
    nameUser = document.querySelector(".input-name"),
    email = document.querySelector(".input-email"),
    companyName = document.querySelector(".input-company-name"),
    auditPopup = document.querySelector(".audit-register"),
    registerSubmit = document.querySelector(".register-submit"),
    colorRed = document.querySelector(".color-red"),
    yourName = document.querySelector(".your-name"),
    yourEmail = document.querySelector(".your-email"),
    yourPassword = document.querySelector(".your-password"),
    scrollService = document.getElementById("services"),
    scrollAboutUs = document.getElementById("about-us"),
    scrollLatestWorks = document.getElementById("latest-works"),
    scrollDoYouLike = document.getElementById("do-you-like"),
    scrollToBlog = document.getElementById("blog"),
    scrollGetInTouch = document.getElementById("get-in-touch"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message"),
    cite = document.querySelectorAll(".cite"),
    slideButton = document.querySelectorAll(".slide-button"),
    timer,
	peopleSlider = document.querySelector(".people-line"),
	peoples = document.querySelectorAll(".people"),
	peopleWidth = peoples[0].getBoundingClientRect().width,
	peopleSliderWidth = Math.round(peopleSlider.getBoundingClientRect().width),
    animLeft = document.querySelectorAll(".animation-left"),
	animRight = document.querySelectorAll(".animation-right"),
	animBottom = document.querySelectorAll(".animation-bottom"),
	animation = document.querySelectorAll(".animation"),
	startAnim = window.innerHeight - 10 * window.innerHeight / 100

greenColorFirst.dataset.color = "green",
redColorFirst.dataset.color = "red",
blueColorFirst.dataset.color = "blue",
brownColorFirst.dataset.color = "brown",
greenColorSecond.dataset.color ="green",
redColorSecond.dataset.color = "red",
blueColorSecond.dataset.color = "blue",
brownColorSecond.dataset.color = "brown"

document.addEventListener("scroll", function(){
    bgHeader.style.backgroundSize = (100 + (window.pageYOffset / 5) + "%") + "auto";
    bgHeader.style.transition = "all 4s ease";
} )

document.addEventListener("mouseenter", function(){
    bgDoYouLike.style.backgroundSize = 115 + "%" + "100" + "%";
    bgDoYouLike.style.transition = "all 5s ease";
} )

document.addEventListener("mouseleave", function(){
    bgDoYouLike.style.backgroundSize = 100 + "%" + "100" + "%";
    bgDoYouLike.style.transition = "all 5s ease";
} )

function popupOpen() {
    popup.style.display = "block",
    popup.classList.add("active-popup"), 
    activePopup = document.querySelector(".active-popup")
}

function firstPopupOpen() {
    firstPopup.style.display = "block",
    firstPopup.classList.add("active-popup"), 
    activePopup = document.querySelector(".active-popup")
}

function secondPopupOpen() {
    secondPopup.style.display = "block",
    secondPopup.classList.add("active-popup"), 
    activePopup = document.querySelector(".active-popup")
}

function popupLoadOpen() {
    if(nameUser.value != '' && email.value != '' && companyName.value != '' && message.value != '' && subject.value != ''){
        popupLoad.style.display = "block",
        popupLoad.classList.add("active-popup"), 
        activePopup = document.querySelector(".active-popup")
    } else {
        alert("Ви не заповнили всі дані")
    }
}

function auditPopupOpen() {
    if(yourName.value != '' && yourEmail.value!= '' && yourPassword.value != ''){
        auditPopup.style.display = "block",
        auditPopup.classList.add("active-audit-popup"), 
        activeAuditPopup = document.querySelector(".active-audit-popup")
    } else {
        alert("Ви не заповнили всі дані")
    }
}

registration.onclick = popupOpen

function closePopup() {
	activePopup.style.display = "none";
    activePopup.classList.remove("active-popup");
}

function closeAuditPopup() {
    activeAuditPopup.style.display = "none";
    activeAuditPopup.classList.remove("active-audit-popup");
}

function trpClk() {
    firstStrong.style.display = "none",
    firstStrong.style.color = "red",
    secondStrong.style.display = "none",
    secondStrong.style.color = "red",
    thirdStrong.style.display = "none",
    thirdStrong.style.color = "red",
    fourthStrong.style.display = "block",
    fourthStrong.style.color = "red",
    fifthStrong.style.display = "block",
    fifthStrong.style.color = "red",
    sixthStrong.style.display = "block",
    sixthStrong.style.color = "red"
}

code.addEventListener('click', (event) => {
    if(event.detail == '3'){
        code = trpClk();
    }
});

function allOpen() {
    photoFirst.style.display = "block",
    photoSecond.style.display = "block",
    photoThird.style.display = "block",
    photoFouth.style.display = "block",
    photoFifth.style.display = "block",
    photoSixth.style.display = "block",
    photoSeventh.style.display = "block",
    photoEighth.style.display = "block",
    photoNinth.style.display = "block",
    localStorage.setItem("PInfo", "All")
}

function brandingOpen() {
    photoFirst.style.display = "block",
    photoSecond.style.display = "block",
    photoThird.style.display = "block",
    photoFouth.style.display = "none",
    photoFifth.style.display = "none",
    photoSixth.style.display = "none",
    photoSeventh.style.display = "none",
    photoEighth.style.display = "none",
    photoNinth.style.display = "none",
    localStorage.setItem("PInfo", "branding")
}

function designOpen() {
    photoFouth.style.display = "block",
    photoFifth.style.display = "block",
    photoSixth.style.display = "block",
    photoFirst.style.display = "none",
    photoSecond.style.display = "none",
    photoThird.style.display = "none",
    photoSeventh.style.display = "none",
    photoEighth.style.display = "none",
    photoNinth.style.display = "none",
    localStorage.setItem("PInfo", "design")
}

function developmentOpen() {
    photoSeventh.style.display = "block",
    photoEighth.style.display = "block",
    photoNinth.style.display = "block",
    photoFirst.style.display = "none",
    photoSecond.style.display = "none",
    photoThird.style.display = "none",
    photoFouth.style.display = "none",
    photoFifth.style.display = "none",
    photoSixth.style.display = "none",
    localStorage.setItem("PInfo", "development")
}

function strategyOpen() {
    photoThird.style.display = "block",
    photoFifth.style.display = "block",
    photoSixth.style.display = "block",
    photoFirst.style.display = "none",
    photoSecond.style.display = "none",
    photoFouth.style.display = "none",
    photoSeventh.style.display = "none",
    photoEighth.style.display = "none",
    photoNinth.style.display = "none",
    localStorage.setItem("PInfo", "strategy")
}

if(localStorage.PInfo == 'All' || localStorage.PInfo === null){
    allOpen()
} else if(localStorage.PInfo == 'branding'){
    brandingOpen()
} else if(localStorage.PInfo == 'design'){
    designOpen()
} else if(localStorage.PInfo == 'development'){
    developmentOpen()
} else if(localStorage.PInfo == 'strategy'){
    strategyOpen()
}

function scrollServices(){
    scrollService.scrollIntoView({block: "start", behavior: "smooth"})
}

function scrollAbout(){
    scrollAboutUs.scrollIntoView({block: "start", behavior: "smooth"})
}

function scrollWorks(){
    scrollLatestWorks.scrollIntoView({block: "start", behavior: "smooth"})
}

function scrollBlog(){
    scrollToBlog.scrollIntoView({block: "start", behavior: "smooth"})
}

function scrollClients(){
    scrollDoYouLike.scrollIntoView({block: "start", behavior: "smooth"})
}

function scrollContact(){
    scrollGetInTouch.scrollIntoView({block: "start", behavior: "smooth"})
}

function podia(e){
    e.preventDefault()
}

let finishDrop = document.querySelectorAll(".finishDrop")

const dragAndDrop = () => {
    let nowBlock
    const greenBlock = document.querySelector(".green-color-first")
    const redBlock = document.querySelector(".red-color-first")
    const blueBlock = document.querySelector(".blue-color-first")
    const brownBlock = document.querySelector(".brown-color-first")

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide')
        }, 0)
        nowBlock = this
    }
    const dragEnd = function () {
        this.classList.remove('hide')
    }

    const dragOver = function (event) {
        event.preventDefault()
    }

    const dragEnter = function (event) {
        event.preventDefault()
        this.classList.add('hovered')
    }
    
    const dragLeave = function () {
        this.classList.remove('hovered')
    }
    
    const dragDrop = function () {
        this.append(nowBlock)
        nowBlock.classList.add('end-styles')
        this.classList.remove('hovered')
        greenColorFirst.style.border = "none";
        redColorFirst.style.border = "none";
        blueColorFirst.style.border = "none";
        brownColorFirst.style.border = "none";
    }

    finishDrop.forEach((cell) => {
        cell.addEventListener('dragover', dragOver)
        cell.addEventListener('dragenter', dragEnter)
        cell.addEventListener('dragleave', dragLeave)
        cell.addEventListener('drop', dragDrop)
    })

    greenBlock.addEventListener('dragstart', dragStart)
    greenBlock.addEventListener('dragend', dragEnd)
    redBlock.addEventListener('dragstart', dragStart)
    redBlock.addEventListener('dragend', dragEnd)
    blueBlock.addEventListener('dragstart', dragStart)
    blueBlock.addEventListener('dragend', dragEnd)
    brownBlock.addEventListener('dragstart', dragStart)
    brownBlock.addEventListener('dragend', dragEnd)
}

function audit() {
    finishDrop.forEach((cell) => {
        if(cell.getAttribute("data-color") == cell.children[0].getAttribute("data-color")){
            alert("Вхід успішний")
            closeAuditPopup(),
            closePopup(),
            registration.innerText = "Привіт Влад"
        }else{
            alert("Колір блоку не відповідає кольору рамки, спробуйте ще раз!")
            closeAuditPopup()
        }
    }) 
}

dragAndDrop()

function loadInformation(nameUser, email, companyName) {
    localStorage.setItem('UserName', nameUser.value)
    localStorage.setItem('Email', email.value)
    localStorage.setItem('CompanyName', companyName.value)
}

function loadInfo(nameUser, email, companyName){
    if(localStorage.UserName != null){
        nameUser.value = localStorage.getItem('UserName');
        console.log(nameUser.value)
    }
    if(localStorage.Email != null){
        email.value = localStorage.getItem('Email');
        console.log(email.value)
    }
    if(localStorage.CompanyName != null){
        companyName.value = localStorage.getItem('CompanyName');
        console.log(companyName.value)
    }
}
loadInfo(nameUser, email, companyName)


function registrationText(yourName, yourEmail) {
    localStorage.setItem('YourName', yourName)
    localStorage.setItem('YourEmail', yourEmail)
}

function loadRegistrationText(yourName, yourEmail){
    if(localStorage.YourName != null){
        yourName.value = localStorage.getItem('YourName');
        console.log(yourName.value)
    }
    if(localStorage.YourEmail != null){
        yourEmail.value = localStorage.getItem('YourEmail');
        console.log(yourEmail.value)
    }
}

loadRegistrationText(yourName, yourEmail)

registerSubmit.addEventListener("click", function(event){
    event.preventDefault()
    registrationText(yourName.value, yourEmail.value)
    auditPopupOpen()
})

function peopleLeft() {
	peopleSliderWidth = Math.floor(peopleSliderWidth), 
	0 == peopleSlider.scrollLeft ? peopleSlider.scroll(peopleSlider.scrollWidth, 0) : peopleSlider.scroll(peopleSlider.scrollLeft - peopleWidth, 0)
}

function peopleRight() {
	peopleSliderWidth = Math.floor(peopleSliderWidth), 1
	Math.round(peopleSlider.scrollLeft) - 10 <= peopleSlider.scrollWidth - peopleSliderWidth && Math.round(peopleSlider.scrollLeft) + 10 >= peopleSlider.scrollWidth - peopleSliderWidth ? peopleSlider.scroll(0, 0) : peopleSlider.scroll(peopleSlider.scrollLeft += peopleWidth, 0)
}

function peopleFalse() {
    return !1
}

left.onclick = peopleLeft, 
right.onclick = peopleRight, 
left.ondblclick = peopleFalse, 
right.ondblclick = peopleFalse

function autoSlider(){
    cite[0].classList.add('showed-cite'),
    slideButton[0].style.backgroundColor = "#c0301c", 
    cite[0].style.height = cite[0].getBoundingClientRect().height + "px";
    for (let i = 0; i < cite.length; i++){
        cite[i].dataset.number = i, 
        slideButton[i].dataset.digit = i;
    } 
    timer = setInterval(() => {
        for(let e = 0; e < cite.length; e++){
            console.log(cite[e].getAttribute("data-number"))
            if(cite[e].getAttribute("data-number") == e){
                cite[e].classList.add('showed-cite'),
                slideButton[e].style.backgroundColor = "#c0301c"
                if(e == 1){
                    cite[e - 1].classList.remove('showed-cite')
                    slideButton[e - 1].style.backgroundColor = "#ddd"
                }
                if(e == 2){
                    cite[e - 1].classList.remove('showed-cite')
                    slideButton[e - 1].style.backgroundColor = "#ddd"
                }
                if(e == 0){
                    cite[2].classList.remove('showed-cite')
                    slideButton[2].style.backgroundColor = "#ddd"
                    clearInterval(timer)
                }
            }
        }
    }, 100)
}

autoSlider()

function checkScroll() {
	animLeft.forEach(e => {
		window.pageYOffset + startAnim >= e.offsetTop && window.pageYOffset <= e.offsetTop && e.classList.remove("animation-left")
	}), animRight.forEach(e => {
		window.pageYOffset + startAnim >= e.offsetTop && window.pageYOffset <= e.offsetTop && e.classList.remove("animation-right")
	}), animBottom.forEach(e => {
		window.pageYOffset + startAnim >= e.offsetTop && window.pageYOffset <= e.offsetTop && e.classList.remove("animation-bottom")
	}), animation.forEach(e => {
		window.pageYOffset + startAnim >= e.offsetTop && window.pageYOffset <= e.offsetTop && e.classList.remove("animation")
	})
}
window.onwheel = checkScroll
window.onscroll = checkScroll