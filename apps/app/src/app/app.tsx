import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [generatedLyrics, setGeneratedLyrics] = useState<
    string | JSX.Element[]
  >('Push Generate');

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
      <button onClick={handleGenerate}>Generate!</button>
      <p>{generatedLyrics}</p>
    </StyledApp>
  );
}

export default App;
