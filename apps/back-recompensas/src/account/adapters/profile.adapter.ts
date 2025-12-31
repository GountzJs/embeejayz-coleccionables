import { Total } from '../models/types/total.type';

type Data = {
  id: string;
  avatar: string;
  username: string;
  total?: Total;
};

export const profileAdapter = ({ id, avatar, username, total }: Data) => ({
  data: {
    id,
    avatar,
    username,
    total: {
      borders: total?.borders || 0,
      cards: total?.cards || 0,
      general: total?.general || 0,
    },
  },
});
