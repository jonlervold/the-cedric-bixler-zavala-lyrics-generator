import './App.css';
import styled from 'styled-components';
import useGenerateLyrics from './hooks/useGenerateLyrics';
import Title from './components/Title';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

const StyledApp = styled.div`
  font-family: Monaco, monospace;
  color: white;
  text-align: center;
  justify-content: center;
`;
const MainBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .right-side {
    display: inline-block;
    width: 40%;
  }
  @media (max-width: 800px) {
    .right-side {
      width: 424px;
    }
  }
  .lyrics-box {
    height: 636px;
    width: 100%;
    background-color: gray;
    display: inline-block;
    overflow-y: scroll;
    padding: 0.8rem;
  }
`;

export function App() {
  const { isLoading, error, generatedLyrics, handleGenerate } =
    useGenerateLyrics();
  return (
    <StyledApp>
      <Title />
      <MainBlock>
        <LeftColumn />
        <RightColumn
          isLoading={isLoading}
          generatedLyrics={generatedLyrics}
          handleGenerate={handleGenerate}
        />
      </MainBlock>
      {error}
      <button>About Cedric Bixler Lyrics Generator</button>
    </StyledApp>
  );
}

export default App;
