import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private pokemons1: any[] = [];
  private pokemons1Count: number = 0;
  private pokemons2: any[] = [];
  private pokemons2Count: number = 0;
  private battleResults: any[] = [];
  private battleCount: number = 0;
  

  constructor() { }
 

  setPokemon1(pokemon: any) {
    const pokeTemp = { ...pokemon }; // Cria uma cópia do objeto pokemon
    this.pokemons1.push(pokeTemp);
    console.log(this.pokemons1);
  }

  setPokemon2(pokemon: any) {
    const pokeTemp = { ...pokemon }; // Cria uma cópia do objeto pokemon
    this.pokemons2.push(pokeTemp);
    console.log(this.pokemons2);
  }

  comparePokemons(): string {
    let contender1Wins = false;
    let contender1Loses = false;
    let tie = false;
    const contender1 = this.pokemons1[this.pokemons1.length - 1];
    const contender2 = this.pokemons2[this.pokemons2.length - 1];

    if (!contender1 || !contender2) {
    console.log("necessário dois pokemons para iniciar a rinha.")
    }

    const abilities1 = contender1.abilities.length;
    const abilities2 = contender2.abilities.length;

    let result = '';

    if (abilities1 > abilities2) {
      result = `${contender1.name} venceu com ${abilities1} habilidades contra ${abilities2} habilidades.`;
      contender1Wins = true;
    } else if (abilities1 < abilities2) {
      result = `${contender2.name} venceu com ${abilities2} habilidades contra ${abilities1} habilidades.`;
      contender1Loses = true;
    } else {
      result = `A batalha terminou em empate com ambos possuindo ${abilities1} habilidades.`;
      let tie = true;
    }
    // Incrementa o número de batalhas
    this.battleCount++;

    // Adiciona o resultado da batalha ao array de resultados
    this.battleResults.push({
      contender1: contender1,
      contender2: contender2,
      result: result,
      battleCount: this.battleCount,
      contender1Wins: contender1Wins,
      contender1Loses: contender1Loses,
      tie: tie
    });
    
    console.log(this.battleResults)
    return result;
  }

  getBattleResults() {
    return this.battleResults;
  }
}
