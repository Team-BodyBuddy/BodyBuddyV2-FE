import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MapView from './components/MapView';
import { Container } from './Styles';

const MapContainer: React.FC = () => {
  const [location, setLocation] = useState<string | null>(null);

  return (
    <Container>
      <SearchBar onSearch={setLocation} />
      {location && <MapView location={location} />}
    </Container>
  );
};

export default MapContainer;