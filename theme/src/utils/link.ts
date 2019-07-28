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

export const detectSocialPlatform = (link: string) => {
  if (link.includes('facebook.com')) return 'facebook';
  if (link.includes('twitter.com')) return 'twitter';
  if (link.includes('youtube.com')) return 'youtube';
  if (link.includes('whatsapp.com')) return 'whatsapp';
  if (link.includes('instagram.com')) return 'instagram';

  return 'notRecognized';
};

export const isExternalUrl = (url: string) => {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  return regex.test(url);
};
