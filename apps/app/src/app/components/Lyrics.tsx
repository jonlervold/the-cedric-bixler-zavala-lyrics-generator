import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 40%;
  background-color: gray;
  display: inline-block;
  margin: 0.5rem;
`;

type Props = {
  generatedLyrics: string | JSX.Element[];
};

const Lyrics: FC<Props> = ({ generatedLyrics }) => {
  return <div>..</div>;
};

export default Lyrics;
