import { GestureResponderEvent, ImageProps } from "react-native";

export interface DataPartners {
  id?: number;
  partners?: string;
  photo?: string;
}

export interface PropsPartners {
  data: DataPartners[];
  title: string;
  seeall: string;
  routeScreen: any;
}

export interface ListAttractionsDataModel {
  id?: number;
  description?: string;
  instagram?: string;
  category?: string;
  facebook?: string;
  whatsapp?: string;
  dataItem?: any;
  galery: string[];
  place: string;
  photo: any;
  attractionImage: string;
  city: string;
  map?: string;
  onPress?: (event: GestureResponderEvent) => void;
}



export interface ListEventDataModel {
  eventId:number;
  place: string;
  date?: string;
  city: string;
  name: string;
  dateEvent?: string;
  category?: string;
  description?: string;
  prohibited?: string;
  outlets?: string;
  eventImage?: string;
  maps?: string;
  dataItem?: any;
  categoryId?: number;
  onPress?: (event: GestureResponderEvent) => void;
}


export interface CardLocalListModel {
  eventId:number;
  place: string;
  date?: string;
  city: string;
  description: string;
  name: string;
  dateEvent?: string;
  category?: string;
  prohibited?: string;
  outlets?: string;
  image?: any;
  maps?: string;
  dataItem?: any;
  categoryId?: number;
  onPress?: (event: GestureResponderEvent) => void;
}


