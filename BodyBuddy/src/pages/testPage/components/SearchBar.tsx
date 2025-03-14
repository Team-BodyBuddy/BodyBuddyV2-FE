import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { SearchInput } from "../Styles"

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      Keyboard.dismiss();
    }
  };

  return (
    <SearchInput
      placeholder="장소를 검색하세요..."
      value={query}
      onChangeText={setQuery}
      onSubmitEditing={handleSearch}
      returnKeyType="search"
    />
  );
};

export default SearchBar;