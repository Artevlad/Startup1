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
    name = document.querySelector(".input-name"),
    email = document.querySelector(".input-email"),
    companyName = document.querySelector(".input-company-name"),
    popupClose = document.querySelector(".close-popup"),
    auditPopup = document.querySelector(".audit-register"),
    registerSubmit = document.querySelector(".register-submit")

document.addEventListener("scroll", function(){
    bgHeader.style.backgroundSize = (100 + (window.pageYOffset / 5) + "%") + "auto";
    bgHeader.style.transition = "all 2s ease";
    bgDoYouLike.style.backgroundSize = (100 + ((window.pageYOffset - bgDoYouLike.getBoundingClientRect().y) / 5) + "%") + "auto";
    bgDoYouLike.style.transition = "all 2s ease";
} )

function popupOpen() {
    popup.style.display = "block",
    popup.classList.add("active-popup"), 
    activePopup = document.querySelector(".active-popup"), 
    popupClose.onclick = closePopup;
}

function firstPopupOpen() {
    firstPopup.style.display = "block",
    firstPopup.classList.add("active-popup"), 
    activePopup = document.querySelector(".active-popup"), 
    popupClose.onclick = closePopup;
}

function secondPopupOpen() {
    secondPopup.style.display = "block",
    secondPopup.classList.add("active-popup"), 
    activePopup = document.querySelector(".active-popup"), 
    popupClose.onclick = closePopup;
}

function popupLoadOpen() {
    popupLoad.style.display = "block",
    popupLoad.classList.add("active-popup"), 
    activePopup = document.querySelector(".active-popup"), 
    popupClose.onclick = closePopup;
}

function auditPopupOpen() {
    auditPopup.style.display = "block",
    auditPopup.classList.add("active-audit-popup"), 
    activeAuditPopup = document.querySelector(".active-audit-popup"), 
    popupClose.onclick = closeAuditPopup;
}

registerSubmit.onclick = auditPopupOpen
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
    window.scrollTo(0 , (window.pageYOffset + 650))
}

function scrollAbout(){
    window.scrollTo(0, (window.pageYOffset + 1260))
}

function scrollWorks(){
    window.scrollTo(0, (window.pageYOffset + 2150))
}

function scrollBlog(){
    window.scrollTo(0, (window.pageYOffset + 3965))
}

function scrollClients(){
    window.scrollTo(0, (window.pageYOffset + 5140))
}

function scrollContact(){
    window.scrollTo(0, (window.pageYOffset + 5650))
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
    
    const dragDrop = function (event) {
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
    cells.forEach((cell) => {
        if(cell.getAttribute("data-color") != cell.children[0].getAttribute("data-color")){
            alert("Колір блоку не відповідає кольору рамки, спробуйте ще раз!")
        }else{
            alert("Вхід успішний")
            popupHidden()
        }
    }) 
}

dragAndDrop()

function loadInformation(name, email, companyName) {
    localStorage.setItem('UserName', name.value)
    localStorage.setItem('Email', email.value)
    localStorage.setItem('CompanyName', companyName.value)
}

function loadInfo(name, email, companyName){
    if(localStorage.UserName != null){
        name.value = localStorage.getItem('Name');
        console.log(name.value)
    }
    if(localStorage.Email != null){
        email.value = localStorage.getItem('Email');
        console.log(email.value)
    }
    if(localStorage.CompanyName != null){
        companyName = localStorage.getItem('CompanyName');
        console.log(companyName.value)
    }
}
loadInfo()