import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 20rem;
  background-color: #075985;
  padding-top: 14rem;
`;

export const Title = styled.h1`
  font-size: 2.9rem;
  text-align: center;
  color: #fff;
`;

export const Container = styled.div`
  max-width: 55rem;
  margin: auto;
  background-color: #1c1917;
  padding: 3rem;

  border-radius: 0.6rem;
  
  div {
    margin-bottom: 2rem;
    color: #fff;

    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  width: 80%;
`;

export const Button = styled.button`
  padding: 1rem 1.5rem;
  
  background-color: #0369a1;

  border: none;
  cursor: pointer;
`;