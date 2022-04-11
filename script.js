function ChangeColor(){
  document.body.style.backgroundColor=genRandomColor();
}

function genRandomColor(){
  let r=0,g=0,b=0;
  r=Math.round(Math.random()*255);
  g=Math.round(Math.random()*255);
  b=Math.round(Math.random()*255);
  console.log("rgb("+r+","+g+","+b+")")
    return "rgb("+r+","+g+","+b+")";
  
}