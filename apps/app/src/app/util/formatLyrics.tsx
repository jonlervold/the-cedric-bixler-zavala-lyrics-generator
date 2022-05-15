const formatLyrics = (generatedLyrics: string | undefined) => {
  if (generatedLyrics === undefined) {
    return undefined;
  } else {
    const formattedLyrics = generatedLyrics.split('\n').map((item) => {
      return <div style={{ whiteSpace: 'break-spaces' }}>{item}</div>;
    });

    return formattedLyrics;
  }
};

export default formatLyrics;
