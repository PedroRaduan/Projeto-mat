var nome1 = localStorage.getItem('jogador1');
var nome2 = localStorage.getItem('jogador2');
var resultado = 48;
var turno = 2;
var pontos1 = 0;
var pontos2 = 0;
var pessoa = 1;
var numero1 = 0;
var numero2 = 0;
function carregar(){
    document.getElementById("nome_jogador1").innerHTML = nome1;
    document.getElementById("nome_jogador2").innerHTML = nome2;
    document.getElementById("turno").innerHTML =  "Turno de " + nome1;
}

function enviar(){
    if(document.getElementById("conta").value == ""){
        console.log('');
     }
     else{
        if(3 > turno > 0){

        if (turno == 1){
                document.getElementById("turno").innerHTML = "Turno de " + nome1;
                turno = turno + 1;  
                pessoa = 1;
            }
        else{
                document.getElementById("turno").innerHTML = "Turno de " + nome2; 
                turno = turno - 1; 
                pessoa = 2;
            }
              }
        if(document.getElementById("conta").value == resultado){
            if(pessoa == 1){
                pontos1 = pontos1 + 1;
                console.log(pontos1);
                document.getElementById('pontos1').innerHTML = pontos1;

            }
            else{
                pontos2 = pontos2 + 1;
                console.log(pontos2)
                document.getElementById('pontos2').innerHTML = pontos2; 
            }
            
        }
        else{
            console.log('')
        }
        if(document.getElementById('numero1').value == "" && document.getElementById('numero2').value == ""){
            console.log("")
        }
        else{
            numero1 = document.getElementById('numero1').value;
            numero2 = document.getElementById("numero2").value;
            document.getElementById('conta').innerHTML = numero1 + " X " + numero2;
            resultado = numero1 * numero2;
        }
    }
    document.getElementById('conta').innerHTML = '';
    document.getElementById('numero1').innerHTML = '';
    document.getElementById('numero2').innerHTML = '';
    
    
    

}