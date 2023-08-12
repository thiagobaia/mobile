import { CommonActions, createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function openScreen() {
  navigationRef.goBack();
}

