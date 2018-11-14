import axios from 'axios';

import { prepareEntries, extractPokemonsFromType } from '../../util/PokedexUtil/PokedexUtil';

export default class PokedexListService {
    constructor() { }

    async getAllPokemons() {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return prepareEntries(result.data.results);
    }

    async getAllTypes() {
        const result = await axios.get('https://pokeapi.co/api/v2/type');
        return result.data.results;
    }

    async getPokemonsFromType(url) {
        const result = await axios.get(url);
        return extractPokemonsFromType(result.data.pokemon);
    }

}