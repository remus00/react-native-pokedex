import axiosInstance from './axios-config';

const getPokemonList = async (limit: number = 1, offset: number = 0) => {
    try {
        const response = await axiosInstance.get(`/pokemon?limit=${limit}&offset=${offset}`);

        const detailedPokemonList = await Promise.all(
            response.data.results.map(async (pokemon: any) => {
                const pokemonDetails = await axiosInstance.get(pokemon.url);
                return {
                    name: pokemonDetails.data.name,
                    image: pokemonDetails.data.sprites.front_default,
                    types: pokemonDetails.data.types.map((type: any) => type.type.name),
                };
            }),
        );

        return detailedPokemonList;
    } catch (error) {
        console.error(error);
    }
};

export { getPokemonList };
