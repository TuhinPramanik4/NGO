// Free, license-friendly photos from Pexels (verified to resolve).
// Helper builds a compressed, cropped, sized CDN URL.
export const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

// Pools of verified photo IDs grouped by theme.
export const pool = {
  school: [18012456, 6217466, 20556421, 3231359, 3920704, 1895114, 10172966, 618116, 5909898, 16118310],
  women: [33808945, 26832956, 20356784, 31443510, 4579692, 14995279, 20356777, 20407441],
  food: [7156158, 6646847, 7345447, 7156155, 6995015, 6994982, 6591166, 6994993, 6591165, 6646903, 6590920],
  elderly: [15276491, 11359605, 18048161, 16571591, 6346388, 1370281, 15759710],
  flood: [33329471, 17609960, 23939154, 33329468, 20989105, 21960699, 27567485],
  ambulance: [6519887, 5364345, 6519935, 6520213, 6519847, 8942043],
  volunteer: [8543399, 8543395, 6568957, 6347743, 7475141, 7475173, 7475178, 7475128, 7475138],
  village: [24428857, 5399393, 11583062, 13354592, 11444459],
  diya: [10182772, 13689170, 20302339, 33360798, 30425298, 10178166],
  portrait: [12327289, 17454597, 13141398, 6722952, 14120649, 9174125],
} as const;

// The NGO's own promotional video (from shatakshi.org).
export const promoVideo = {
  vimeoId: "844853329",
  poster: px(pool.school[0], 1200, 700),
};
