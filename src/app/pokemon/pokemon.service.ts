import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]>{
   return this.http.get<Pokemon[]>('api/pokemons').pipe(
    tap((pokemonList) => this.log(pokemonList)),
    catchError((error) => this.handleError(error, [])
   ));
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
   return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
   tap((response) => this.log(response)),
   catchError((error) =>  this.handleError(error, undefined))
   );
  }

  private log(response: Pokemon[]|Pokemon|undefined){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
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
