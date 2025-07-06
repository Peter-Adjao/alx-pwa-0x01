import { ReactNode, SetStateAction } from "react";

export interface ComponentProps {
  children: ReactNode
}

export interface ButtonProps {
  title: string
  action?: () => void
}

export interface MovieProps {
  id: string
  title: string
  posterImage: string
  releaseYear: string
}

interface PrimaryImage {
  url: string
}

interface TitleText {
  text: string
}

interface ReleaseYear {
  year: string
}

export interface MoviesProps {
  image: any;
  year: any;
  title: string;
  id: string
  primaryImage: PrimaryImage
  titleText: TitleText
  releaseYear: ReleaseYear
}

type Props = {
  setError: (value: SetStateAction<string | null>) => void;
};
