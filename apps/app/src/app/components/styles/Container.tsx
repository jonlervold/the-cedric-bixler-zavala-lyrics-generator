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
    color: black;
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
    border: 1px solid white;
    border-collapse: collapse;
  }

  td {
    border: 1px solid gray;
    padding: 0.25rem 0.75rem 0.25rem 0.75rem;
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
