export type Song = {
  id: number;
  spotify_id: string;
  track_name: string;
  duration: number;
  energy: number;
  danceability: number;
  genre: {
    id: number;
    genre: string;
  };
};
