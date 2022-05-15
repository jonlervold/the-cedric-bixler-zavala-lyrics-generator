import { FC, useState } from 'react';
import useGenerateLyrics from '../hooks/useGenerateLyrics';
import formatLyrics from '../util/formatLyrics';

const MainBlock: FC = () => {
  const { isLoading, error, generatedLyrics, handleGenerate } =
    useGenerateLyrics();
  const [displayAbout, setDisplayAbout] = useState(false);
  const aboutText = 'Hello';
  return (
    <div>
      <div>
        {!displayAbout && (
          <button onClick={handleGenerate}>
            {isLoading ? 'Generating...' : 'Generate!'}
          </button>
        )}
      </div>
      <div className="text-box">
        {error && <div className="error">{error}</div>}
        <div className="lyrics">
          {displayAbout ? aboutText : <>{formatLyrics(generatedLyrics)}</>}
        </div>
      </div>
      <div>
        <button onClick={() => setDisplayAbout(!displayAbout)}>
          {displayAbout ? 'Return' : 'About'}
        </button>
      </div>
    </div>
  );
};

export default MainBlock;
