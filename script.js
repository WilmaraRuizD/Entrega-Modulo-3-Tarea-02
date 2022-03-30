
let intercambiolet
let sumarValor=document.getElementById("sumarValor");
let valoresIguales=document.getElementById("valoresIguales");
let menorQue=document.getElementById("menorQue");

///para validar si es mayo o menor 

menorQue.addEventListener("click", (e)=> {
    e.preventDefault()
let n1= document.getElementById("input1").value;
let n2= document.getElementById("input2").value;


if (n1 >0 && n2>0){
let resultado =Math.min(n1,n2);

document.getElementById("modal").style.display = "block".display="flex";
document.getElementById("h2").innerHTML = `Es ${resultado} el numero menor`;

}

else{
    alert("no son valores validos");
   }

})
//intercambiar variables 

intercambio.addEventListener("click", (e)=> {
        e.preventDefault()
     let n1= document.getElementById("input1").value;
     let n2= document.getElementById("input2").value;
       if (n1 >0 && n2>0){
            n1=parseInt(n1) + parseInt(n2)
            n2=n1-n2;
            n1=n1-n2;
   
     document.getElementById("modal").style.display = "block".display="flex";
     document.getElementById("h2").innerHTML = `n1 =${n1} y n2 =${n2}`;         
   }
    else {
        alert(`Valide N1 y N2 deben ser valores ENTEROS POSITIVOS `)
     }
  })

// //----------------Sumar:

sumarValor.addEventListener("click", (e)=> {
    e.preventDefault()
 let n1= document.getElementById("input1").value;
 let n2= document.getElementById("input2").value;
   
    if (n1 >0 && n2>0){

     resultado=n1-(-n2);
     document.getElementById("modal").style.display = "block".display="flex";
    document.getElementById("h2").innerHTML = `La suma de ${n1} y ${n2} = ${resultado}`;
    }
    else {
        alert(`Valide N1 y N2 deben ser valores ENTEROS POSITIVOS `)
     }
  })
// validar si son valores iguales 

valoresIguales.addEventListener("click", (e)=> {
    e.preventDefault()
 let n1= document.getElementById("input1").value;
 let n2= document.getElementById("input2").value;

 if (n1 >0 && n2>0){
    if(n1/n2 != n2/n1) {
    
    document.getElementById("modal").style.display = "block".display="flex";
    document.getElementById("h2").innerHTML = `n1 =${n1} es diferente de n2 =${n2}`;    
   }
   else{
 
      document.getElementById("modal").style.display = "block".display="flex";
      document.getElementById("h2").innerHTML = `n1 =${n1} y n2 =${n2} son iguales`;    
   }
 }
   else{
    alert("no son valores validos");
   }
})






