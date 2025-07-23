let skill = document.querySelector("#skills");
let exprience = document.querySelector("#expriences");
let education = document.querySelector("#education");
let tab_links = document.querySelectorAll(".tab-links");
let tab_content = document.querySelectorAll(".tab-content");
let skills_content = document.querySelector("#skills-content");
let expriences_content = document.querySelector("#expriences-content");
let education_content = document.querySelector("#education-content");
let menu =document.querySelector("#menu");
let cross =document.querySelector("#cross");
let ul = document.querySelector(".ul");
let submit_btn = document.querySelector("#submit-btn");
let submit_btnz = document.querySelectorAll(".submit_btnz");


tab_links.forEach(link =>{
    link.addEventListener("click", (e)=>{
       skill.classList.remove("active-links");
        exprience.classList.remove("active-links");
         education.classList.remove("active-links");
          skills_content.classList.remove("active-tabs");
          expriences_content.classList.remove("active-tabs");
          education_content.classList.remove("active-tabs");
         let targetelement = e.target.id;
          console.log(targetelement);
           document.querySelector(`#${targetelement}`).classList.add("active-links");

           if(targetelement==="skills"){
            skills_content.classList.add("active-tabs");
           }
            else if(targetelement==="expriences"){
            expriences_content.classList.add("active-tabs");
           }
            else if(targetelement==="education"){
            education_content.classList.add("active-tabs");
           }


    } )
})

menu.addEventListener("click", ()=>{
ul.style.display="block"
} )
cross.addEventListener("click", ()=>{
ul.style.display="none"
} )

submit_btn.addEventListener("click", ()=>{
    submit_btnz.forEach(btnz =>{
       btnz.value="";
    })
} )