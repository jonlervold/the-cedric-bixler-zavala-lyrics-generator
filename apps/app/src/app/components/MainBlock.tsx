import { FC, useRef, useState } from 'react';
import useGenerateLyrics from '../hooks/useGenerateLyrics';
import formatLyrics from '../util/formatLyrics';
import AboutText from './AboutText';
import TextBox from './styles/TextBox';

const MainBlock: FC = () => {
  const { isLoading, error, generatedLyrics, handleGenerate } =
    useGenerateLyrics();
  const [displayAbout, setDisplayAbout] = useState(false);

  const mainBoxRef = useRef<HTMLDivElement>(null);
  const scrollToMainBox = () => {
    if (mainBoxRef.current !== null) {
      mainBoxRef.current.scrollIntoView();
    }
  };

  return (
    <div ref={mainBoxRef}>
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
        {!displayAbout && (
          <button
            onClick={async () => {
              await handleGenerate();
              scrollToMainBox();
            }}
          >
            {isLoading ? 'Generating...' : 'Generate!'}
          </button>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setDisplayAbout(!displayAbout);
            scrollToMainBox();
          }}
        >
          {displayAbout ? 'Return' : 'About'}
        </button>
      </div>
    </div>
  );
};

export default MainBlock;
