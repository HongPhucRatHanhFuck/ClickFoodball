let num = document.getElementById("num");
function inputValue(value){
    num.value += value;
}
function result(){
    let result = eval(view.value);
    num.value = result;
}
function xoa(){
    num.value="";
}