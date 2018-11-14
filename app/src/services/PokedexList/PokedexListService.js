import axios from 'axios';

import { prepareEntries, extractPokemonsFromType, extractDetailInfo } from '../../util/PokedexUtil/PokedexUtil';
import { getFromStorage, putInStorage, deleteFromStorage } from '../../util/Storage/StorageUtil';

export default class PokedexListService {
    constructor() { }

    async getAllPokemons() {
        try {
            const data = await getFromStorage('ALL_POKEMON');
            console.log('Succesfully loaded pokemons from storage');
            return data;
        } catch (error) {
            console.log(error);
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
            const data = prepareEntries(result.data.results);
            try {
                await putInStorage(data, 'ALL_POKEMON');
            } catch {
                console.log(error);
            }
            return data;
        }
    }

    async getAllTypes() {
        try {
            const data = await getFromStorage('ALL_POKEMON_TYPES');
            console.log('Succesfully loaded pokemon types from storage');
            return data;
        } catch (error) {
            console.log(error);
            const result = await axios.get('https://pokeapi.co/api/v2/type');
            const data = result.data.results;
            try {
                await putInStorage(data, 'ALL_POKEMON_TYPES');
            } catch {
                console.log(error);
            }
            return data;
        }
    }

    async getPokemonsFromType(url) {
        const result = await axios.get(url);
        return extractPokemonsFromType(result.data.pokemon);
    }

    async getDetailFromPokemon(pokeId) {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`);
        return extractDetailInfo(result.data);
    }

}