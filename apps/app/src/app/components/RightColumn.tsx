import { FC } from 'react';
import formatLyrics from '../util/formatLyrics';

type Props = {
  isLoading: boolean;
  generatedLyrics: string | undefined;
  handleGenerate: () => Promise<void>;
};

const RightColumn: FC<Props> = ({
  isLoading,
  generatedLyrics,
  handleGenerate,
}) => {
  let formattedLyrics = undefined;
  if (generatedLyrics !== undefined) {
    formattedLyrics = formatLyrics(generatedLyrics);
  }

  return (
    <div className="right-side">
      <div className="lyrics-box">
        {formattedLyrics}
        {isLoading && 'Generating...'}
      </div>
      <div>
        <button onClick={handleGenerate}>Generate!</button>
      </div>
    </div>
  );
};

export default RightColumn;
