
const extractTypesName = (data) => {
    return data.map(type => type.name);
}

const extracTypesUrl = (data) => {
    return data.map(type => type.url);
}

const extractPokemonsFromType = (data) => {
    return data.map(element => element.pokemon);
}

const prepareEntries = (data) => {
    return data.map(entry => {
        const array = entry.url.split('/');
        const id = array[array.length - 2];
        return {
            name: entry.name,
            imageUrl: `http://pokeapi.co/media/sprites/pokemon/${id}.png`
        }
    });
}

export { extractTypesName, extracTypesUrl, extractPokemonsFromType, prepareEntries };