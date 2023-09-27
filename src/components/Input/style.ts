import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 530.17px;
  height: 28px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 3px;
  border: 1px solid var(--gray-200);
  box-shadow: 1px 1px 3px 0px var(--color-black);

  margin: 0 20px;
  padding: 7.25px 9px;

  & > input {
    width: 100%;

    font-weight: 400;
    font-size: 9px;
    line-height: 10.89px;

    background-color: var(--transparent);

    &::placeholder {
      color: var(--gray-500);
    }

    &:focus::placeholder {
      color: var(--transparent);
    }
  }

  & > svg {
    cursor: pointer;
  }

  @media (max-width: 425px) {
    margin: 0;
  }
`;

export { Container };
