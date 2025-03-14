import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
`;

export const MapViewContainer = styled.View`
  width: 100%;
  height: 70%;
  display: none; /* 기본적으로 숨김 */
`;