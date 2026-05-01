let keys=document.querySelectorAll(".no");
let display=document.querySelector(".dis");
let string="";
keys.forEach((v)=>{
        v.addEventListener("click",()=>{ 
            let e=v.innerText;
            if(e!='='){
             string+=e
             display.innerText+=e;
            }
           else{
            let ans=eval(string);
            display.innerText=ans;
           }
           if(e=='AC'){
            display.innerText="";
            string="";
           }
      })
    
})
