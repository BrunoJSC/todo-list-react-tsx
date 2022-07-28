import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #0369a1;

  padding: 2rem;

  border-radius: 0.7rem;

  margin-top: 3rem;

  strong {
    font-weight: bold;
    font-size: 2.5rem;

    .checked {
      text-decoration: line-through;
    }
  }

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  color: #991b1b;
  border: none;
  background: none;
  cursor: pointer;
`;

export const InputChecked = styled.button`
  padding: 0.8rem 0.6rem;
  border: none;
  border-radius: 100%;
  color: #fff;
`;
