import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/searcg.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const SearchResults = await search(searchTerm);
  return <div>SearchResults</div>;
}

export default SearchResults;
