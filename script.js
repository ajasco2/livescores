const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
function UpdateDate(){
    const Weeks = ["Sunday", "Monday", "Tue", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date()
    const dayIndex = currentDate.toDateString();
    // date.toDateString()
    currentDayOfTheWeek.textContent =` ${[dayIndex]} `;
    // console.log(currentDayOfTheWeek);
}
UpdateDate();
// function updateUTCTime() {
//     const currentUTCTimeValue = Date.now();
//     currentUTCTime.textContent = `Current UTC Time: ${currentUTCTimeValue} milliseconds`;
// }
const nav_tabs =document.querySelectorAll(".nav_active");
const linked_tabs = document.querySelectorAll(".semi_option");
function RedActive(){
linked_tabs.forEach((tab) => {
    tab.addEventListener("click", function(event){
        event.preventDefault();
        linked_tabs.forEach((linked) => {
            linked.style.backgroundColor = "";
        });
        this.style.backgroundColor = "red";
    });
});
nav_tabs.forEach((nav) =>{
    nav.addEventListener("click", function(action){
        action.preventDefault();
        nav_tabs.forEach((active) =>{
            active.style.color = "";
        });
        this.style.color = "red";
    });
});
}
RedActive()

const toggleButton = document.getElementById("leagues")
const elementToToggle = document.getElementById("showDem")
function ShowHiddenContent(){
    toggleButton.addEventListener("click", function() { 
        if(elementToToggle.style.display == 'none' ){
            elementToToggle.style.diplay = 'block';
        }
        if(elementToToggle.style.display=="block"){
            elementToToggle.style.display = 'none';
        }else{
            elementToToggle.style.display = 'block';
        }
    });

}
ShowHiddenContent();
const menu = document.querySelector(".hammer")
const competition = document.getElementById("competitions")
function ShowCompetitions(){
    menu.addEventListener("click", function() {
        if(competition.style.display == "none"){
            competition.style.display = "block";
        }
        else if(competition.style.display == "block"){
            competition.style.display = "none";
        }else{
            competition.style.display = "none";
        }
    });
}
ShowCompetitions();
