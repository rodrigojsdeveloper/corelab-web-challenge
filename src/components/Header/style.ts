import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 57px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white);
  box-shadow: 0px 1px 7px 0px var(--gray-700);

  padding: 10px 25.58px;

  .container.desktop {
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .container.mobile {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .container {
    width: 100%;
    max-width: 1417.11px;

    margin: 0 auto;

    & > img {
      cursor: pointer;
    }

    .content {
      width: 100%;
      max-width: 685.48px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (min-width: 426px) {
    .container.desktop {
      display: flex;
    }
  }

  @media (max-width: 425px) {
    height: auto;
    padding: 15px 10px;

    .container.mobile {
      display: flex;
    }

    .content {
      margin-bottom: 15px;
    }
  }
`;

export { Container };
