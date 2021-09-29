const nav = document.querySelector("nav");
const logoText = document.querySelectorAll("h5");
const historyLink = document.getElementById("history");
const teamLink = document.getElementById("team");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const schedule1 = document.getElementById("schedule1");
const schedule2 = document.getElementById("schedule2");
const section4 = document.getElementById("section4");
const homeBtn = document.getElementById("homeBtn");


document.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
        historyLink.style.color = "rgb(22, 45, 110)";
        teamLink.style.color = "rgb(22, 45, 110)";
        nav.classList.add("whitebg")
        logoText.forEach(text => text.classList.remove("hidden"))
    } else {
        historyLink.style.color = "white";
        teamLink.style.color = "white";
        nav.classList.remove("whitebg")
        logoText.forEach(text => text.classList.add("hidden"))
    }

})

tab1.addEventListener("click", () => {
    if (tab1.classList.contains("activeTab")) return;
    else {
        tab2.classList.remove("activeTab");
        tab1.classList.add("activeTab");
        schedule2.classList.add("hidden")
        schedule1.classList.remove("hidden")
        section4.style.backgroundImage = `url("./assets/tab1bg.png")`
    }
})
tab2.addEventListener("click", () => {
    if (tab2.classList.contains("activeTab")) return;
    else {
        tab1.classList.remove("activeTab");
        tab2.classList.add("activeTab");
        schedule1.classList.add("hidden");
        schedule2.classList.remove("hidden");
        section4.style.backgroundImage = `url("./assets/tab2bg.png")`
    }
})

homeBtn.addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})