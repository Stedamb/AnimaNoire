export interface Merch {
  title: string;
  description: string;
  photoSrc: string;
  price: number;
}

export const merchItems: Merch[] = [
  {
    title: "Longboard Deck",
    description: "Custom-designed longboard deck featuring Dutch-inspired artwork.",
    photoSrc: "/images/merch/longboard-deck.jpg",
    price: 89.99
  },
  {
    title: "Netherlands Tour T-Shirt",
    description: "Comfortable cotton t-shirt with a map of the Netherlands longboarding route.",
    photoSrc: "/images/merch/tour-tshirt.jpg",
    price: 24.99
  },
  {
    title: "Windmill Wheels Set",
    description: "High-performance longboard wheels with windmill-inspired design.",
    photoSrc: "/images/merch/windmill-wheels.jpg",
    price: 49.99
  },
  {
    title: "Dutch Landscape Hoodie",
    description: "Cozy hoodie featuring a scenic Dutch landscape print.",
    photoSrc: "/images/merch/landscape-hoodie.jpg",
    price: 54.99
  },
  {
    title: "Tulip Grip Tape",
    description: "Colorful grip tape with tulip patterns for added style and traction.",
    photoSrc: "/images/merch/tulip-griptape.jpg",
    price: 14.99
  }
];
