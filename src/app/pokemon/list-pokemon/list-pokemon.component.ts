import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  isLoading: boolean = true;

  constructor(
    private router : Router,
    private pokemonService : PokemonService,
    ){}
  ngOnInit(){
    setTimeout(() =>{ 
    this.isLoading = false;
  }, 500);
      this.pokemonService.getPokemonList().subscribe(pokemonList=>
      this.pokemonList= pokemonList
    );
  }

  goToPokemonList(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
