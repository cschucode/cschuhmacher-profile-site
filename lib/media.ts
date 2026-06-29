export interface MediaItem {
  /** Outlet or show name, e.g. "The Rich Roll Podcast" */
  show: string;
  /** Host name, where it adds recognition */
  host?: string;
  /** Episode or article title */
  title: string;
  href: string;
  /** Best-known year of publication */
  year?: string;
}

/**
 * Podcast appearances. Verified links — see docs/media-links.md for sourcing.
 */
export const podcasts: MediaItem[] = [
  {
    show: "The Rich Roll Podcast",
    host: "Rich Roll",
    title: "San Quentin to Saved: My Last Mile to Redemption",
    href: "https://www.richroll.com/podcast/chris-schuhmacher-426/",
    year: "2019",
  },
  {
    show: "The Forward",
    host: "Lance Armstrong",
    title: "The Last Mile",
    href: "https://theforwardpodcast.libsyn.com/the-last-mile",
    year: "2018",
  },
  {
    show: "The Confessional",
    host: "Nadia Bolz-Weber",
    title: "Chris Schuhmacher, Software Developer",
    href: "https://nadiabolzweber.com/103-chris-schuhmacher/",
    year: "2020",
  },
  {
    show: "The Nantucket Project",
    title: "Saved at San Quentin",
    href: "https://tnpdaily.libsyn.com/saved-at-san-quentin-chris-schuhmacher",
    year: "2018",
  },
];

/**
 * Press coverage and published essays.
 */
export const press: MediaItem[] = [
  {
    show: "Logic Magazine",
    title: "Extreme Programming: Coding in Prison",
    href: "https://logicmag.io/justice/chris-schuhmacher-on-coding-in-prison/",
  },
  {
    show: "CNBC",
    title: "The Last Mile helps ex-convicts land jobs as Silicon Valley programmers",
    href: "https://www.cnbc.com/2017/12/01/the-last-mile-helps-ex-convicts-land-jobs-as-silicon-valley-programmer.html",
    year: "2017",
  },
  {
    show: "The Last Mile",
    title: "My Prison Identity — an essay",
    href: "https://tlm.medium.com/my-prison-identity-300ea7942173",
  },
  {
    show: "Stand Together",
    title: "The Last Mile Prepares Incarcerated Individuals for Reentry",
    href: "https://standtogether.org/stories/future-of-work/the-last-mile-prepares-incarcerated-individuals-for-reentry",
    year: "2019",
  },
];

/** Short list of show names for the hero "As heard on" strip. */
export const asHeardOn = podcasts.map((p) => p.show);
