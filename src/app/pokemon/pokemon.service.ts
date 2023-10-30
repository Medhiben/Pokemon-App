import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[]{
   return  POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
   return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Eau',
      'Feu',
      'Insecte',
      'Normal',
      'Electrik',
      'Poisson',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ]
  }
}
