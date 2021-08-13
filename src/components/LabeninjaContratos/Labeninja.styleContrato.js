import styled from 'styled-components';

export const Header = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color : lightblue;
  padding: 10px 40px;

`

export const BoxProduto = styled.div`
  display:grid;
  grid-template-columns: repeat(3,2fr);
  row-gap: 20px;
  column-gap: 20px;
  margin:10px;
  padding: 20px 40px; 
  border-right: 1px solid #ebe7fb;
  max-height: calc(130vh - calc(100vh / 2));
  overflow: auto;  
 
`

export const Img = styled.img`
cursor: pointer;
`

export const BoxPrincipal = styled.div`
  flex-grow: 1;
  background-color: #f4f3f8;
  border-radius: 20px;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  
`