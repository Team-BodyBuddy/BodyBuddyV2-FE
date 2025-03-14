import React, { useEffect } from 'react';
import { View } from 'react-native';
import { MapViewContainer } from '../Styles';
import { loadKakaoMap } from "../../../apis/kakaoMap"

type MapViewProps = {
  location: string;
};

const MapView: React.FC<MapViewProps> = ({ location }) => {
  useEffect(() => {
    loadKakaoMap(() => {
      const kakao = (window as any).kakao;
      const container = document.getElementById('map');
      const options = { center: new kakao.maps.LatLng(37.5665, 126.9780), level: 3 };
      const map = new kakao.maps.Map(container, options);
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(location, (data: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(data[0].y, data[0].x);
          map.setCenter(coords);
          new kakao.maps.Marker({ map, position: coords });
        }
      });
    });
  }, [location]);

  return <MapViewContainer id="map" />;
};

export default MapView;