export interface IEvent {
  id: number;
  name: string;
  place: string;
  city: string;
  date: Date;
  description: string;
  prohibited: string;
  maps: string;
  outlets: string;
  created_at: string;
  updated_at: string;
  category: {
    id: number;
    name: string;
  };
  image: {
    id: number;
    url: string;
  };
}
