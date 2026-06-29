import type { IconName } from "@/components/SocialIcons";

export interface SiteLink {
  /** Display label, e.g. "Instagram" */
  label: string;
  /** Optional handle shown under the label, e.g. "@fitnessmonkey" */
  handle?: string;
  /** Destination URL (mailto: for email) */
  href: string;
  /** Which icon to render — see components/SocialIcons.tsx */
  icon: IconName;
}

/**
 * Professional / engineering channels.
 * These are live.
 */
export const professionalLinks: SiteLink[] = [
  {
    label: "Email",
    handle: "chris.r.schuhmacher@gmail.com",
    href: "mailto:chris.r.schuhmacher@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    handle: "in/chrisschuhmacher",
    href: "https://linkedin.com/in/chrisschuhmacher",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    handle: "cschucode",
    href: "https://github.com/cschucode",
    icon: "github",
  },
];

/**
 * Fitness Monkey channels.
 * Everything else on the site reads from this one array, so these values
 * are the single place to update if a handle ever changes.
 */
export const FITNESS_MONKEY_SITE = "https://www.fitnessmonkey.org";

export const fitnessMonkeyLinks: SiteLink[] = [
  {
    label: "Instagram",
    handle: "@fitnessmonkeyrising",
    href: "https://www.instagram.com/fitnessmonkeyrising/",
    icon: "instagram",
  },
  {
    label: "TikTok",
    handle: "@fitnessmonkeyrising",
    href: "https://www.tiktok.com/@fitnessmonkeyrising",
    icon: "tiktok",
  },
  {
    label: "YouTube",
    handle: "@fitnessmonkeyrising",
    href: "https://www.youtube.com/@fitnessmonkeyrising",
    icon: "youtube",
  },
  {
    label: "Substack",
    handle: "@fitnessmonkeyrising",
    href: "https://substack.com/@fitnessmonkeyrising",
    icon: "substack",
  },
];
