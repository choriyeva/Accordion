const accordionContent=document.querySelectorAll(".accordion-content")

accordionContent.forEach((item, index) => {
   let header=item.querySelector("header");
   header.addEventListener("click", ()=>{
       item.classList.toggle("open");
       
       let food=item.querySelector(".food");
       if(item.classList.contains("open")){
           
           food.style.height=`${food.scrollHeight}px`  
           item.querySelector("i").classList.replace("bi-chevron-down","bi-chevron-up");
        } else{
            food.style.height="0px";
            item.querySelector("i").classList.replace("bi-chevron-up","bi-chevron-down");
        }
        removeOpen(index);
    })
});

function removeOpen(index1){
    accordionContent.forEach((item2, index2)=>{
        if(index1!=index2){
            item2.classList.remove("open");
            
            let foo =item2.querySelector(".food");
            foo.style.height="0px";
            item2.querySelector("i").classList.replace("bi-chevron-up","bi-chevron-down");
            
        }
    })
}


//    let title=item3.querySelector(".title");
//    if(item3.classList.contains("open")){
//     title.style.font_size="16px";
//    }



