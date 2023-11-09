import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent {
pokemonList : Pokemon[];
pokemon : Pokemon|undefined;

 constructor(
  private route : ActivatedRoute, 
  private router : Router,
  private pokemonService : PokemonService
  ){}

 ngOnInit() {
 const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

 if(pokemonId){
  this.pokemonService.getPokemonById(+pokemonId).subscribe((response) =>
  this.pokemon = response
  )
 }
 }

 goToPokemonList(){
  this.router.navigate(['/pokemons']);
 }

 redirectedtoEditPokemon(pokemon: Pokemon){
  this.router.navigate(['/edit/pokemon', pokemon.id]);
 }
}
