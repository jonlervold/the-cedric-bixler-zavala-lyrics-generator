import { useEffect, useState } from 'react';
import getLyrics from '../api/getLyrics';

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
          'There was an error contacting the server. Check your internet connection.'
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
