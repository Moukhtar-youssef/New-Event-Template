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
//changing the color of the link according to the position
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".navbar ul li a");
let menu_links = document.querySelectorAll(".menu ul li a")
window.addEventListener("scroll",()=>{
    let user_position = document.documentElement.scrollTop;
    sections.forEach((section)=>{
        if(
            user_position >= section.offsetTop - 50
            &&
            user_position <= section.offsetHeight + section.offsetTop
        ){
            links.forEach((link)=>{
                if(section.id === link.textContent.toLocaleLowerCase()){
                    removeactive(links);
                    setactive(link)
                }
            })
            menu_links.forEach((link)=>{
                if(section.id === link.textContent.toLocaleLowerCase()){
                    removeactive(menu_links)
                    setactive(link)
                }
            })
        }
    })
})
function removeactive(links){
    links.forEach((element)=>{
        element.classList.remove("active");
    })
}
function setactive(link){
    link.classList.add("active")
}
//activating the menu when clicked on icons
let icons = document.getElementById("icons")
let ul = document.getElementById("menu-ul")
icons.addEventListener("click", ()=>{
    ul.classList.toggle("show");
})
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
                element.style.cssText = "opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform: scale(1);-webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);";
            } else {
                childarray.forEach((e) => {
                    e.style.cssText = "opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform: scale(1);-webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);";
            });
            }
        });
        }
    });

}
// adding animation to all the website
let overview = document.querySelector('.overview');
let left_section = document.querySelector('.overview .first-part .left-section');
let right_section = document.querySelector('.overview .first-part .right-section');
let second_part = document.querySelector('.overview .second-part');
let third_part_left_section = document.querySelector(".overview .third-part .container .left-section");
let third_part_right_section = document.querySelector(".overview .third-part .container .right-section");
animate( overview,left_section,right_section,second_part,third_part_left_section,third_part_right_section);
let speakers = document.querySelector('.speakers');
let speakers_header = document.querySelector('.speakers .heading')
let slide = document.querySelector(".speakers .slider");
animate(speakers,slide, speakers_header);
let programs = document.querySelector('.programs');
let programs_header = document.querySelector('.programs .heading');
let filter_btn = document.querySelector('.programs .filter-btn');
let filter_content = document.querySelector('.programs .filter-content');
animate(programs,programs_header,filter_btn,filter_content);
let register = document.querySelector('.register');
let register_content = document.querySelector('.register .content');
animate(register,register_content);
let question = document.querySelector('.question');
let question_header = document.querySelector('.question .heading');
let question_cards = document.querySelector('.question .cards');
animate(question,question_header,question_cards);
let venue = document.querySelector('.venue');
let venue_header = document.querySelector('.venue .heading');
let venue_content = document.querySelector('.venue .content');
animate(venue,venue_header,venue_content);
let sponsors = document.querySelector('.sponsors');
let sponsors_header = document.querySelector('.sponsors .heading');
let sponsors_cards = document.querySelector('.sponsors .names');
animate(sponsors,sponsors_cards,sponsors_header);
let contact = document.querySelector('.contact');
let contact_content = document.querySelector('.contact .content');
animate(contact,contact_content)

