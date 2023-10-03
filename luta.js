class Heroi {
     constructor(nome, idade, tipo) {
       this.nome = nome;
       this.idade = idade;
       this.tipo = tipo;
     }
   
     atacou() {
       let ataque;
   
       switch (this.tipo) {
         case "mago":
           ataque = "usando magia";
           break;
         case "guerreiro":
           ataque = "usando espada";
           break;
         case "monge":
           ataque = "usando artes marciais";
           break;
         case "ninja":
           ataque = "usando shuriken";
           break;
         default:
           ataque = "atacou";
       }
   
       console.log(`o ${this.tipo} atacou ${ataque}`);
     }
   }
   
   const mago = new Heroi ("Clayton", 29, "mago");
   const guerreiro = new Heroi ("Silvio Santos", 90, "monge");
   
   mago.atacou();
   guerreiro.atacou();
   