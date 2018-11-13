import axios from 'axios';

export default class PokedexListService {
    constructor() { }

    _prepareEntries(data) {
        return data.map(entry => {
            const array = entry.url.split('/');
            const id = array[array.length - 2];
            return {
                id,
                name: entry.name,
                imageUrl: `http://pokeapi.co/media/sprites/pokemon/${id}.png`
            }
        });
    }

    async getAllPokemons() {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return this._prepareEntries(result.data.results);
    }
}