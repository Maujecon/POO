import prompt from "prompt-sync";

// nome, energia, vida,  ataque, defesa

//classe
class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ){}
}
//objeto
let sansa: Personagem = new Personagem("Sansa Stark", 100, 50, 40, 20);

console.log("Person:>> ", sansa);


let teclado = prompt()
let option: number = 0;
while(option != 9){
    console.log("******Personagem*********");
    console.log("1. Treinar ataque");
    console.log("2. Treinar defesa");
    console.log("3. Imprimir atributos");
    console.log("9. Treinar sair");
    console.log("************************");
    option = +teclado("Escolha uma ação: ");


    switch(option) {
        case 1:
            sansa.ataque += 10;
            console.log("Sansa recebeu +10 em ataque")
            console.log("")
            break;
        case 2:
            sansa.defesa += 10;
            console.log("Sansa recebeu +10 em defesa")
            console.log("")

            break;
        case 3: 
            console.log("Sansa -> , ", sansa );
            console.log("")

            break;
        case 9:
            console.log("Fim da execução");
            console.log("")

        default:
    }
}



