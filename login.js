function armazenar(){
    nomejogador1 = document.getElementById("jogador1input").value;
    nomejogador2 = document.getElementById("jogador2input").value;


    localStorage.setItem("jogador1", nomejogador1);
    localStorage.setItem("jogador2", nomejogador2);


    window.location = "jogo.html";
    

}