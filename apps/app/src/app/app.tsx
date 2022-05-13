import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Lyrics from './components/Lyrics';

const StyledApp = styled.div`
  font-family: Monaco, monospace;
  color: white;
  text-align: center;
  justify-content: center;
  img {
    align-self: center;
  }
`;
const MainBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  width: 40%;
  height: 636px;
  background-color: gray;
  display: inline-block;
  margin: 0.5rem;
  overflow: scroll;
`;

export function App() {
  const [generatedLyrics, setGeneratedLyrics] = useState<
    string | JSX.Element[]
  >('Wait');

  const handleGenerate = async () => {
    const res: { data: string } = await axios.get(
      'https://azrpmnicq4kbbzcvbxbkkfozra0swfty.lambda-url.us-east-1.on.aws'
    );
    console.log(res.data);
    const newLyrics = res.data.split('\n').map((item) => {
      return (
        <span>
          {item}
          <br />
        </span>
      );
    });

    setGeneratedLyrics(newLyrics);
  };

  return (
    <StyledApp>
      <img src="../assets/dashes.png" />
      <img src="../assets/app-title.png" />
      <img src="../assets/dashes.png" />
      <MainBlock>
        <img src="../assets/cedric.png" />
        <Card>{generatedLyrics}</Card>
        {/* {generatedLyrics} */}
      </MainBlock>
      <button onClick={handleGenerate}>Generate!</button>
      <button>About Cedric Bixler Lyrics Generator</button>
    </StyledApp>
  );
}

export default App;
