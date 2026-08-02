import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const PokemonDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => setPokemon(data));
    }, [id]);

    if (!pokemon) {
        return <h2>Loading...</h2>;
    }

    return (
        <section className="pokemonDetail">

            <div className="pokemonContainer">
                <div className="pokemonImage">
                    <img
                        src={pokemon.sprites.other["official-artwork"].front_default}
                        alt={pokemon.name}
                    />
                </div>

                <div className="pokemonInfo">
                    <h1>{pokemon.name}</h1>

                    <p><strong>ID:</strong> #{pokemon.id}</p>
                    <p><strong>Height:</strong> {pokemon.height}</p>
                    <p><strong>Weight:</strong> {pokemon.weight}</p>

                    <h3>Types</h3>

                    <div className="typeList">
                        {pokemon.types.map(type => (
                            <span
                                className="typeBadge"
                                key={type.type.name}
                            >
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <button className="backButton" onClick={() => navigate(-1)}>
                Return to list
            </button>
        </section>
    );
};

export default PokemonDetail;