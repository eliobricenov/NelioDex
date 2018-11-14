const extractTypesName = (data) => {
    return data.map(type => type.name);
}

const extracTypesUrl = (data) => {
    return data.map(type => type.url);
}

const extractPokemonsFromType = (data) => {
    const result = data.map(element => element.pokemon);
    return prepareEntries(result);
}

const prepareEntries = (data) => {
    return data.map(entry => {
        const array = entry.url.split('/');
        const id = array[array.length - 2];
        return {
            id,
            name: entry.name,
            imageUrl: `http://pokeapi.co/media/sprites/pokemon/${id}.png`,
            url: entry.url
        }
    });
}

export { extractTypesName, extracTypesUrl, extractPokemonsFromType, prepareEntries };