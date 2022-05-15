import { useEffect, useState } from 'react';
import getLyrics from '../api/getLyrics';
import formatLyrics from '../util/formatLyrics';

const useGenerateLyrics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [generatedLyrics, setGeneratedLyrics] = useState<string | undefined>();

  const handleGenerate = async () => {
    setError(undefined);
    setIsLoading(true);
    try {
      const newLyrics = await getLyrics();
      setGeneratedLyrics(newLyrics);
    } catch (e) {
      if (e instanceof Error) {
        setError(
          'There was no response from the server while attempting to generate new lyrics. Check your internet connection.'
        );
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return { isLoading, error, handleGenerate, generatedLyrics };
};

export default useGenerateLyrics;
