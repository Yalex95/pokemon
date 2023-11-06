import { useState } from "react";
import Layout from "../components/layout";
import Pokemon from "../components/pokemon";
import Pagination from "../components/pagination";
import { paginate } from "../helpers/paginate";

export default function Home({ results }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 60;

  const paginatedPokemons = paginate(results, currentPage, pageSize);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout title={"Home"} description={"All pokemons, catch them all"}>
      <main className="bg-black home">
        <div className="flex">
          <div className="container">
            <h1>Pokemons</h1>
            <div className="grid">
              {paginatedPokemons.map((pokemon, index) => (
                <Pokemon key={index} pokemon={pokemon} />
              ))}
            </div>
            <Pagination
              items={results.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
            <div></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = `/pokemon?limit=1292`;

  const response = await fetch(`${process.env.API_URL}${url}`);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
}
