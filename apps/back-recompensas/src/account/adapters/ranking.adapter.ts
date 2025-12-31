import { Ranking } from '../models/types/ranking.type';

export const rankingAdapter = (
  ranking: Ranking[],
  twitchMap: Map<unknown, unknown>,
) => ({
  data: ranking.map(({ id, ref, total }) => ({
    id,
    username: twitchMap.get(ref),
    total,
  })),
});
