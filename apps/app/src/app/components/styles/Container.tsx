import styled from 'styled-components';

const Container = styled.div`
  width: 930px;
  @media (max-width: 979px) {
    width: 95%;
  }
  margin: auto;
  font-family: Monaco, monospace;
  color: white;
  text-align: center;

  img {
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  button {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: rgb(236, 236, 236);
    border: none;
    font-weight: bolder;
  }

  a:link,
  a:visited {
    color: white;
  }
  a:hover {
    color: orange;
  }

  table {
    table-layout: fixed;
    margin: auto;
  }

  .error {
    color: red;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 60%;
    margin: auto;
  }

  .footer {
    padding-bottom: 1rem;
  }
`;

export default Container;
