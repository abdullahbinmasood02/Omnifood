
//set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent=currentYear;

//mobile navigation

const buttonNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('header');

buttonNavEl.addEventListener('click',()=>{

    headerEl.classList.toggle('nav-open');

})

// STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver((entries)=>{

    const ent = entries[0];
    
    if(ent.isIntersecting == false)
        document.querySelector('body').classList.add("sticky")

    else{

        document.querySelector('body').classList.remove("sticky")
    }

},{
    root:null,
    threshold: 0,
    rootMargin: '-80px'
})

observer.observe(sectionHeroEl);





