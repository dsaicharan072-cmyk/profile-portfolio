
let input=document.getElementById("search")
let addbtn=document.getElementById("btn")

let ul=document.querySelector("ul")
let task;
input.addEventListener("change",(e)=>{
     task=e.target.value;
})
addbtn.addEventListener("click",()=>{
    task=task.trim();
    if(task!=""){
        addtask(task);
        input.value="";

    }
})

ul.addEventListener("click",(e)=>{
    let target=(e.target);
    let li=target.parentElement;

    if(target.innerText=="🗑"){
        ul.removeChild(li);
    }

    else if(target.innerText=="⬆"){
        let prev=li.previousElementSibling;
        if(prev){
            ul.insertBefore(li,prev);
        }
    }

    else if(target.innerText=="⬇"){
        let next=li.nextElementSibling;

        if(next){
            ul.insertBefore(next,li);
        }
    }
    else if(target.innerText==="🫠"){
        document.querySelector(".editbox").style.display="block";
        let editinput=document.getElementById("input");
        editinput.value=li.innertext;
        let addedit=document.getElementById("addtask");

        addedit.addEventListener("click",()=>{
            li.innerText=editinput.value;
            document.querySelector(".editbox").style.display="none";
            addbtns(li);
        })
        
    }
    
})
function addtask(){
    let li=document.createElement("li")
    li.innerText=task;

  addbtns(li);
     

    ul.appendChild(li)
}

function addbtns(li){
    let rembtn=document.createElement("button")
     rembtn.innerText="🗑"
     let downbtn=document.createElement("button")
     downbtn.innerText="⬇"
      let upbtn=document.createElement("button")
     upbtn.innerText="⬆"
      let updatebtn=document.createElement("button")
     updatebtn.innerText="🫠"

     li.appendChild(rembtn)
     li.appendChild(downbtn)
     li.appendChild(upbtn)
     li.appendChild(updatebtn)
}
