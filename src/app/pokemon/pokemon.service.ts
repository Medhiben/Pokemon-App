import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  searchPokemon(term: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<null>{
    const HttpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }

   return this.http.put('api/pokemons', pokemon, HttpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null),
   ))
  };

  deletePokemonById(pokemonId: number) : Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null),
   ))
    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon>{
      const HttpOptions = {
        headers : new HttpHeaders({'Content-Type' : 'application/json'})
      }

      return this.http.post<Pokemon>('api/pokemons', pokemon, HttpOptions).pipe(
        tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null),
   ))
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
