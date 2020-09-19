const wesh = document.querySelector(".competences");
const plop = document.querySelectorAll("nav>ul ul");

function navSetUp(){
    for(let i=0;i<plop.length;i++){
        for(let j=0;j<plop[i].children.length;j++){
            plop[i].children[j].style.transform = "translateY("+(-j*40)+"px)"
            plop[i].parentNode.addEventListener('mouseover',function(){
                plop[i].children[j].style.transform = "translateY("+(j*9)+"px)"
            })
            plop[i].parentNode.addEventListener('mouseout',function(){
                plop[i].children[j].style.transform = "translateY("+(-j*40)+"px)"
                
            })
        }
    }
}
navSetUp();


function randomColor(){
        wesh.style.backgroundColor =
            "rgb("+
            Math.floor(Math.random()*255)+","+
            Math.floor(Math.random()*255)+","+
            Math.floor(Math.random()*255)+")";
    ;
}

