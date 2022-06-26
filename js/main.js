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
    
