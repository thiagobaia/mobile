import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CardOptionHome } from '../../Elements/CardOptionHome/CardOptionHome';
import { Container, Title } from './styles';

export interface ListSectionTabModel{
    title: string;
    data: any;
    columns: number; 
    navigateRoute: string;
    ComponentItem: any;
}

export function ListSectionTab({ title, data, columns, ComponentItem}:ListSectionTabModel) {
  return (
    <Container>
    <Title>{title}</Title>
      <FlashList
        numColumns={columns}
        data={data}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="alert-circle-outline" size={24} color="black" />
            <Text>Sem Eventos cadastrados no momento</Text>
          </View>
        }
        renderItem={({ item }:any) => (
          <ComponentItem Props={item}/>
        )}
        estimatedItemSize={200}
      />
  </Container>
  );
}