import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  //On a besoin de pokemon pour pouvoir récuperer par exemple la liste de spokemons car il nous fait les pokemons par l'Input
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
    ) { }

  ngOnInit() {
  //récupérer La liste des types de Pokemons pokemonTypeList
  this.types = this.pokemonService.getPokemonTypeList();
  }


  //fonction qui va permettre lors de l'edition dans le form de garder selectionner le(s) type(s) par défault
  hasType(type: string): boolean{
    //la methode includes renvoit true ou false pour le type 
return this.pokemon.types.includes(type);
  }

  //fonction qui va permettre dans le form de selectionner d'autres types que celui par défault
  selectType($event: Event, type: string){
    // isChecked va permettre de savoir si l'utilisateur a coché cases à l'aide la l'instruction checked
  const isChecked: boolean = ($event.target as HTMLInputElement).checked;
  if(isChecked){
    this.pokemon.types.push(type);
  }else{
    const index = this.pokemon.types.indexOf(type);
    this.pokemon.types.splice(index, 1);
  }
  }

  //
  onSubmit(){
    this.pokemonService.updatePokemon(this.pokemon)
    .subscribe(() => {
        this.router.navigate(['/pokemon', this.pokemon.id])
      })
  }

  isTypesValid(type : string): boolean {
    
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false
    }
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
    return false
    }
    return true
  }
}
