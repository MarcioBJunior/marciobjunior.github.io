var button = document.getElementById('flutuante')
var top = document.getElementById('b');
var checkbox = document.getElementById('bt_chk');

addEventListener("scroll", alterStyleButton);
alterStyleButton();

function alterStyleButton(){
    if(top.scrollY < 250 || checkbox.checked == true){
        button.style.visibility = "hidden";
    }else {  
      button.style.visibility = "visible"; 
    }
}

button.onclick = function(){
    document.getElementById('top').click();

}
