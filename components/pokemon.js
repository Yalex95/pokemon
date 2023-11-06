import Link from 'next/link'

function Pokemon({ pokemon }) {
  const { name } = pokemon;

  return (
    <>
    <Link href={`/pokemons/${name}`} className='pokemon'>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{name}</span>

    </Link>
    </>
  );
}

export default Pokemon;
