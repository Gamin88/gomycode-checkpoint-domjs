
//Manipulation article 1
let price=document.querySelector(".prix1").children[0]
let prixTotal=document.querySelector(".prix1").children[1]
prixTotal.innerHTML=price.innerHTML;

let btnplus = document.querySelector('.plus');

btnplus.addEventListener('click', increaseQuantity);


let btnminus = document.querySelector('.minus');

btnminus.addEventListener('click', decreaseQuantity);





function increaseQuantity(){

    document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) + 1;
    sousTotal()
}

function decreaseQuantity(){
    if(parseInt(document.querySelector('.qty').value)>0){

        document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) - 1;
        sousTotal()
    }
}
 function sousTotal(){
     let qty=document.querySelector(".qty").value
     let price=document.querySelector(".prix1").children[0]
     let prixTotal=document.querySelector(".prix1").children[1]
     prixTotal.innerHTML=parseInt(qty)*parseInt(price.innerHTML)
 }


