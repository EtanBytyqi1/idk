 var number =  prompt("Shkruani nje numer: ");
 if(number > 0){
     if(number % 2 == 0){
         alert("Numri o cift");
    } else if(number % 2 == 1){
        alert("Numri o tek");
     }

 }
 else{
    console.log("Numri o neg")
 }






var anglisht = prompt("Qysh i ki notat");
var tik = prompt("Qysh i ki notat");
var biologji = prompt("Qysh i ki notat");
var rezultati = (anglisht + tik + biologji) /3;
if(rezultati > 4.5){
    console.log("Keni kaluar shkelqyeshem");
} else if( rezultati > 3.5 && rezultati < 4.5) {
    console.log("Keni sukses shum te mire");
} else if( rezultati > 2.5 && rezultati < 3.5) {
    console.log("Keni sukses te mire");
} else if( rezultati > 2 && rezultati < 2.5) {
    console.log("Suksesi juaj eshte i mjaftushem");
} else if (rezultati == 1) {
    console.log("Paske ngel");
} else {
    console.log("Spot kuptoj qa po me thua");
}