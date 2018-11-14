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

const extractDetailInfo = (data) => {
    const toCheck = data.flavor_text_entries;
    const result = toCheck.find(element => {
        return element.language.name === 'en';
    })
    return result.flavor_text;
}

export { extractTypesName, extracTypesUrl, extractPokemonsFromType, prepareEntries, extractDetailInfo };