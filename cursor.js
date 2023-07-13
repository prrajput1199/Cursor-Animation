const cursor1=document.querySelector(".cursor")
var timeout;

document.addEventListener("mousemove",(e)=>{
    let x = e.pageX;
    let y = e.pageY;


    //cursor movement
    cursor1.style.top = y +'px';
    cursor1.style.left = x +'px';
    cursor1.style.display='block';
    
    //stop animation
    function mousestop(){
         cursor1.style.display='none';
    }

    //hide
    clearTimeout(timeout);
    timeout=setTimeout(mousestop,5000);
})

document.addEventListener("mouseout",()=>{
    cursor1.style.display='none';
})