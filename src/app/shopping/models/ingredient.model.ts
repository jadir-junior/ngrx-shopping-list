interface Image {
  src: string;
  alt: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  img: Image;
}
