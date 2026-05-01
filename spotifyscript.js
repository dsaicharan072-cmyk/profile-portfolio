const email=document.getElementById("mail");
const btn=document.querySelector("button");
let EnteredEmail="";
email.addEventListener('change',(e)=>{
    EnteredEmail=e.target.value;
})
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(EnteredEmail.includes('@') && EnteredEmail.includes('.')){
        alert("Successfully registered");
        window.location.href = "index.html";
    }
    else{
        const h3=document.createElement('h3');
        h3.innerText="Please enter a valid email";
        h3.style.color="yellow";
        
         document.querySelector('body').appendChild(h3);
     }
    
})

