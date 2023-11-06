import Image from "next/image";
import Layout from "../../components/layout";

function pokemon({ results }) {
  const {
    id,
    sprites,
    name,
    types,
    abilities,
    species,
    base_experience,
    height,
    weight,
  } = results;
  return (
    <Layout title={name} description={`${name} - ${types}`}>
      <main className={`flex ${types[0].type.name}`}>
        <div className={`card ${types[0].type.name}`}>
          <div className={`gen ${types[0].type.name}`}>
            <p>N.° {id}</p>
          </div>
          <div className="body">
            <h1>{name}</h1>
            <p>Species: {species.name}</p>
            <Image
              src={sprites.other.home.front_default}
              width={300}
              height={350}
              alt={name}
            />
            <div className="row">
              {types.map((item, index) => (
                <div key={index} className={`type ${item.type.name}`}>{item.type.name}</div>
              ))}
            </div>
            <div className={`description ${types[0].type.name}-desc`}>
              <div>
                Abilities:
                {abilities.map((item, index) => (
                  <p key={index}>{item.ability.name}</p>
                ))}
              </div>
              <div>
                <p>Height: {height}</p>
              </div>
              <div>
                <p>Weight: {weight}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default pokemon;

export async function getStaticPaths() {
  const respond = await fetch(`${process.env.API_URL}/pokemon?limit=1292`);
  const { results } = await respond.json();
  const paths = results.map((pokemon) => ({
    params: {
      name: pokemon.name,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { name } }) {
  const respond = await fetch(`${process.env.API_URL}/pokemon/${name}`);
  const results = await respond.json();
  return {
    props: {
      results,
    },
  };
}
