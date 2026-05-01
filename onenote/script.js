let canva=document.getElementById('canvas');
let colors_pik=document.getElementById('color-pick')
let ctx=canva.getContext('2d')
let del=document.getElementById('clear')
let undo=document.getElementById('undo')
let colors=document.querySelectorAll(".color");
let thick=document.getElementById('thick')
let currentcolor='black'

let redo=document.getElementById('redo');

canva.width=700;
canva.height=500;

let image=[]

image.push(ctx.getImageData(0,0,canva.width,canva.height));

let index=0;

let wid=3;
thick.addEventListener('change',(e)=>{
     wid=e.target.value
     console.log(e.target.value)
})

colors.forEach((e)=>{
    e.addEventListener('click',(e)=>{
        console.log(e.target.id)
        currentcolor=e.target.id
    })
})

colors_pik.addEventListener('change',(e)=>{
    console.log(e.target.value)
    currentcolor=e.target.value
})

let drawing=false;


canva.addEventListener('mousedown',start);
canva.addEventListener('mousemove',draw);
canva.addEventListener('mouseup',stop);

const rect=canva.getBoundingClientRect();

function start(e){
    drawing=true;
    ctx.beginPath();
    console.log(e.clientX,e.clientY);
    ctx.moveTo(e.clientX-rect.left,e.clientY-rect.top);
}
function draw(e){
       if(!drawing)return;
      ctx.lineCap='round'
      ctx.lineJoin='round'
       ctx.lineTo(e.clientX-rect.left,e.clientY-rect.top);
       ctx.lineWidth = wid;
       ctx.strokeStyle=currentcolor;
       ctx.stroke();

}
function stop(){
     drawing=false;
     

     let imagedata=ctx.getImageData(0,0,canva.width,canva.height)
      
     if(imagedata!=undefined)
          image.push(imagedata)
     
     index++;
     

}

del.addEventListener('click',(e)=>{
    ctx.clearRect(0,0,canva.width,canva.height);
})

undo.addEventListener('click',()=>{
    let iii;
    if(index>=0){
         if(image.length<=1){
        iii=image[0]
        index=0
    }
    else{
          index--;
        iii=image[index];
       
        console.log(index)
    }
    ctx.putImageData(iii,0,0)
        
    }
   
})
redo.addEventListener('click',()=>{
       index++;
      let imaging=image[index];
      ctx.putImageData(imaging,0,0)
})