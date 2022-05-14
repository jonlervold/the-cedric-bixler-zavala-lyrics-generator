const formatLyrics = (generatedLyrics: string) => {
  const formattedLyrics = generatedLyrics.split('\n').map((item) => {
    return <div style={{ whiteSpace: 'break-spaces' }}>{item}</div>;
  });

  return formattedLyrics;
};

export default formatLyrics;
