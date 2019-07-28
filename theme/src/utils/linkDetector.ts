export const detectPodcastPlatform = (link: string) => {
  if (link.includes('anchor.fm')) return 'anchor';
  if (link.includes('itunes.apple.com')) return 'itunes';
  if (link.includes('overcast.fm')) return 'overcast';
  if (link.includes('google.com/podcasts')) return 'google-podcast';
  if (link.includes('stitcher.com')) return 'stitcher';
  if (link.includes('pca.st')) return 'pocket-cast';
  if (link.includes('open.spotify.com')) return 'spotify';
  if (link.includes('rss')) return 'rss';

  return 'notRecognized';
};
