let boxes=document.querySelectorAll(".inbox");

let total=document.querySelector("body");

let button=document.querySelector(".btn");


button.addEventListener("click",()=>{
    total.classList.toggle("dark");
})


let chance=0;

let ar=new Array(9).fill(null);

const wins=[
[0,1,2], // top row 
[3,4,5], // middle row 
[6,7,8], // bottom row 
[0,3,6], // left col 
[1,4,7], // middle col 
[2,5,8], // right col 
[0,4,8], // diagonal 
[2,4,6] // other diagonal 
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       let i=box.id;
       console.log("click",box.id)
       if(ar[i]===null){
       ar[i]=chance%2===0?"X":"O";
       box.innerText=ar[i];
       box.style.backgroundColor= chance%2===0?"#f44336":"#2196f3"
       }
       if(checkwin()==true){
        alert(`${ar[i]} wins `)
        reset();
       }
        chance++;
       if(chance==9){
        alert("draw")
        reset();
       }
       });
});


function reset(){
    ar.fill(null);
    chance=0;
    boxes.forEach((box)=>{
        box.innerText="";
        box.style.backgroundColor=null;
    });
    
}


function checkwin(){
    for(let [a,b,c] of wins){
        if(ar[a]!=null && ar[a]===ar[b] && ar[b]===ar[c]&& ar[a]===ar[c]){
            return true;
        }
    }
    return false;
}