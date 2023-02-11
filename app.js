const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
        [...document.querySelectorAll(".control")].forEach(button => {
            button.addEventListener("click", function() {
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                document.getElementById(button.dataset.id).classList.add("active");
            })
        })
        

    // allSections.addEventListener('click', (e) =>{
    //     const id = e.target.dataset.id;
    //     if(id){
    //         sectBtns.forEach((btn) =>{
    //             btn.classList.remove('active')
    //         })
    //         e.target.classList.add('active')

    //         sections.forEach((section)=>{
    //             section.classList.remove('active')
    //         })

    //         const element = document.getElementById(id);
    //         element.classList.add('active');
    //     }
    // })

    const themeBtn = document.querySelector('.theme-button');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}



PageTransitions();
