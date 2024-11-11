export interface Artist {
  name: string;
  surname: string;
  role: number;
  photoSrc: string;
}

export const artistItems: Artist[] = [
  {
    name: "Dylan",
    surname: "Gauthier",
    role: 1,
    photoSrc: "/artisti3.png"
  },
  {
    name: "Johannes",
    surname: "Veldhuis",
    role: 2,    
    photoSrc: "/artisti3.png"
  }
];
