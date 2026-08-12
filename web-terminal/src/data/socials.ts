export type Social = {
  id: number;
  title: string;
  url: string;
};

export const socials: Social[] = [
  { id: 1, title: "GitHub", url: "https://github.com/Fasping" },
  { id: 2, title: "LinkedIn", url: "https://www.linkedin.com/in/fernandocases94/" },
];

export const socialIds = socials.map(({ id }) => String(id));
