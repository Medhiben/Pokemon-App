export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    constructor(
      id: number = 1,
      hp: number = 100,
      cp: number = 10,
      picture: string = 'entrez une URL d une image d un Pokemon',
      // picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
      types: string[] =['Normal'],
      created: Date = new Date()
){
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;

    }
    

  }

