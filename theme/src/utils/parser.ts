import { Episode } from '../types/Podcast';
import { AnchorEpisode } from '../types/Anchor';

export const parseToEpisode = (anchorEpisode: AnchorEpisode) => {
  const { itunes, enclosure, ...rest } = anchorEpisode;

  const result: Episode = {
    ...rest,
    duration: itunes ? parseInt(itunes.duration) : 0,
    cover: itunes ? itunes.image : '',
    url: enclosure ? enclosure.url : '',
  };

  return result;
};
