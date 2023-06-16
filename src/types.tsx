export type ProjectTypes = {
  name: string;
  overview: string;
  img: string;
  site: string;
  github: string;
  techStack: string[];
  features: {
    title: string;
    items: {
      title: string;
      image: string;
      description: string;
    }[];
  }[];
  responsive: string;
};
