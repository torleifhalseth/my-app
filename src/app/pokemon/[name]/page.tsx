async function getPokemon({ name }: { name: string }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({
  params: { name },
}: {
  params: {
    name: string;
  };
}) {
  const pokemon = await getPokemon({ name });
  return (
    <div className="text-center m-12">
      <h1 className="text-5xl mb-6">{pokemon.name}</h1>
      <ul>
        <li>
          <strong>Height:</strong> {pokemon.height}
        </li>
        <li>
          <strong>Weight:</strong> {pokemon.weight}
        </li>
        <li>
          <strong>Base experience:</strong> {pokemon.base_experience}
        </li>
        <li>
          <strong>Abilities:</strong>{" "}
          {pokemon.abilities
            .map((ability: any) => ability.ability.name)
            .join(", ")}
        </li>
      </ul>
      {/* <code>{JSON.stringify(pokemon)}</code> */}
    </div>
  );
}
