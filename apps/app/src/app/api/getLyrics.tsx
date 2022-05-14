import axios from 'axios';

const getLyrics = async () => {
  const res: { data: string } = await axios.get(
    'https://azrpmnicq4kbbzcvbxbkkfozra0swfty.lambda-url.us-east-1.on.aws'
  );
  return res.data;
};

export default getLyrics;
