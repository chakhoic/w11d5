export const allPokemon = () => {
    return fetch('/api/pokemon');
};

// export const postTea = (tea) => {
//     return fetch('/api/teas', {
//         method: "POST",
//         body: JSON.stringify(tea),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     });
// };

// export const destroyTea = (teaId) => {
//     return fetch(`/api/teas/${teaId}`, {
//         method: 'DELETE'
//     });
// };

export const getAPokemon = (pokemonId) => {
    return fetch(`/api/pokemon`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pokemonId),
    })
};