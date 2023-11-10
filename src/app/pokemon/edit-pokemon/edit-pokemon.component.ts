import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <div *ngIf="pokemon" class="center" >
      <img [src]="pokemon.picture">
    </div>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent {
pokemon: Pokemon|undefined;

constructor(
  private route: ActivatedRoute,
  private pokemonservice: PokemonService
) { }

ngOnInit():void {
const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
if(pokemonId){
  this.pokemonservice.getPokemonById(+pokemonId).subscribe( pokemon =>
  this.pokemon = pokemon);
}else{
this.pokemon = undefined;
}

}

}