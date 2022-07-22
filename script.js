var count=0;
function clearr(){
document.getElementById("ans").value=""
}
function dissplay(p){
    if(count!==1){
    document.getElementById("ans").value+=p 
    }
}
function results(){
    let x=document.getElementById("ans").value
    document.getElementById("ans").value=eval(x);
}
function incre(){
    count=1;
}
function dissplayy(p){
    document.getElementById("ans").value+=p 
    count=0;
}