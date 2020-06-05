/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


let jogar = false;
do {

   if(confirm("pergunta de sim ou não")) {
      //o que fazer se o usuário clicar "OK"
      jogar = true;
   } else {
      // o que fazer se o usuário clicar "cancelar"
      jogar = false;
   }

if("Iniciar o jogo BlackJack"){
   carta1 = comprarCarta();
   carta2 = comprarCarta();
   carta3 = comprarCarta();
   carta4 = comprarCarta();

   

   console.log("Usuário - cartas:", carta1.texto, carta2.texto, "Pontuação: ", carta1.valor + carta2.valor );
   console.log("computador - cartas: ", carta3.texto, carta4.texto, "Pontuação: ", carta3.valor + carta4.valor);


   if((carta1.valor) + (carta2.valor) === (carta3.valor) + (carta4.valor)){
      console.log("EMPATE!");   

   }else if((carta1.valor) + (carta2.valor) > (carta3.valor) + (carta4.valor)){
      console.log("O usuário Ganhou");
   }else if((carta1.valor) + (carta2.valor) < (carta3.valor) + (carta4.valor)){
      console.log("O computador Ganhou :(" );
   }

   
}
else{
   console.log("O jogo acabou!");
}

}while(jogar != false);