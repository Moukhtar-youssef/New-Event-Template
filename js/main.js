// changing the style of the navbar when start scrolling
let navbar = document.getElementById("navbar");
let navcont = document.getElementById("nav-cont")
window.addEventListener("scroll",() =>
{ 
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        navbar.style.cssText ="background-color: #101010;"
        navcont.style.cssText = "height:60px;"
    }
    else{
        navbar.style.cssText = "background-color: transparent;"
        navcont.style.cssText = "height:120px;"
    }
}
)
// add increasing number when up to specefic offset
let section = document.getElementById('event-second');
let nums = document.querySelectorAll('.nums .num');
let started = false;
window.addEventListener("scroll", ()=>{
    if(window.scrollY > section.offsetTop - 200){
        if(!started){
            nums.forEach((num) => startcount(num))
        }
        started = true;
    }
})
function startcount(ele){
    let goal = ele.dataset.goal;
    let counting = setInterval(() =>{
    ele.innerHTML++;
    if(ele.innerHTML == goal){
        clearInterval(counting)
    }
    },2000/goal)
}
//activating the menu when clicked on icons
let icons = document.getElementById("icons")
let ul = document.getElementById("menu-ul")
icons.addEventListener("click", ()=>{
    ul.classList.toggle("show");
})
//activating scroll to top
let scroll_to_top = document.getElementById("scroll-to-top");
window.addEventListener("scroll" , ()=>{
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scroll_to_top.style.cssText = "display:block;"
    }
    else{
        scroll_to_top.style.cssText = "display:none;"
    }
})
// changing the button you click on in the filter section
let buttons = document.querySelectorAll('#flt_btn');
let buttonsArray = Array.from(buttons);
buttonsArray.forEach((buttons) =>{
    buttons.addEventListener("click", ()=>{
        buttonsArray.forEach((buttons) =>{
            buttons.classList.remove("active")
        })
        buttons.classList.add("active")
        filterFunction(buttons);
    })
})
buttonsArray.forEach((buttons) => {
    buttons.addEventListener("click", function (e) {
        if (e.target.tagName === "a") {
        buttons.classList.add("active");
        filterFunction(buttons);
    } else {
        filterFunction(buttons);
    }
});
});
let cards = document.querySelectorAll('#card');
let cards_array = Array.from(cards);
function filterFunction (buttons) {
    cards_array.forEach((cards) => {
        if (cards.dataset.category === buttons.dataset.filter) {
            cards.style.cssText = "display:flex;";
        } else {
            cards.style.cssText = `display:none;`;
        }
    });
};
// unfolding the question card
let foldables = document.querySelectorAll('.foldablecard');
let content = document.querySelectorAll('.qus-content');
foldables.forEach((foldablecard) =>{
    foldablecard.addEventListener("click", ()=>{
        foldablecard.classList.toggle("active");
    })
})
let indecation = document.querySelectorAll(' .indecation');
indecation.forEach((indecation) =>{
    indecation.parentElement.addEventListener("click", ()=>{
    if(indecation.innerHTML == "+"){
        indecation.innerHTML = "-"
    }
    else{
        indecation.innerHTML = "+"
    }
    })
})
// animation function
function animate(parent, ...childs){
window.addEventListener("scroll",  () => {
    if (window.scrollY >= parent.offsetTop - 100) {
        childs.forEach((element) => {
            let childarray = Array.from(element);
            if (childarray.length === 0) {
                element.style.cssText = "opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);";
            } else {
                childarray.forEach((e) => {
                    e.style.cssText = "opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);";
            });
            }
        });
        }
    });

}
// overview section animation 
let overview = document.querySelector('.overview');
let left_section = document.querySelector('.overview .first-part .left-section');
let right_section = document.querySelector('.overview .first-part .right-section');
let participants = document.querySelector('.overview .second-part');
animate( overview,left_section,right_section,participants)
