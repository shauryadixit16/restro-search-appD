import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
const SearchScreen = () => {
  const [term, Setterm] = useState('');
  const [search, results, error] = useResults();

  const filterResults = (price) => {
    return results.filter((result) => result.rating === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        newterm={(newterm) => Setterm(newterm)}
        submit={() => {
          search(term);
          Setterm('');
        }}
      />
      {error ? <Text>{error}</Text> : null}

      <ResultList title='Cost Effective' results={filterResults(3)} />
      <ResultList title='Bit Pricer' results={filterResults(4)} />
      <ResultList title='Big Spender' results={filterResults(5)} />
    </>
  );
};

export default SearchScreen;
