import { FC, useState } from 'react';
import useGenerateLyrics from '../hooks/useGenerateLyrics';
import formatLyrics from '../util/formatLyrics';
import AboutText from './AboutText';
import TextBox from './styles/TextBox';

const MainBlock: FC = () => {
  const { isLoading, error, generatedLyrics, handleGenerate } =
    useGenerateLyrics();
  const [displayAbout, setDisplayAbout] = useState(false);
  return (
    <div>
      <div>
        {!displayAbout && (
          <button onClick={handleGenerate}>
            {isLoading ? 'Generating...' : 'Generate!'}
          </button>
        )}
      </div>
      <TextBox>
        {error && <div className="error">{error}</div>}
        {generatedLyrics && (
          <div className="lyrics">
            {displayAbout ? (
              <AboutText />
            ) : (
              <>{formatLyrics(generatedLyrics)}</>
            )}
          </div>
        )}
      </TextBox>
      <div>
        <button onClick={() => setDisplayAbout(!displayAbout)}>
          {displayAbout ? 'Return' : 'About'}
        </button>
      </div>
    </div>
  );
};

export default MainBlock;
