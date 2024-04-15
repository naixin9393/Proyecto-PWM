export interface Content {
  title: string;
  imageUrl: string;
  synopsis: string;
  releaseDate: Date;
  genres: string[];
  rating: number;
  durationInMinutes?: number;
  chapters?: number;
  episodes?: number;
  availableOn: string[];
}
