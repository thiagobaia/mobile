import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
} from "react-native";
import {useSponsors} from "../../hooks/SponsorsContext";

import {FlashList} from "@shopify/flash-list";

export const Contact = () => {

    const {sponsors, loading} = useSponsors();


    const renderItem = ({item}: any) => {
        return (
            <View style={styles.itemWrapperStyle}>
                <View style={styles.contentWrapperStyle} key={item.id}>
                    <Text style={styles.txtEmailStyle}>{item.name}</Text>
                </View>
            </View>
        );
    };

    const renderLoader = () => {
        return loading ? (
            <View style={styles.loaderStyle}>
                <ActivityIndicator size="large" color="#aaa"/>
            </View>
        ) : null;
    };

    return (
        <>
            <StatusBar backgroundColor="#000"/>
            <FlashList
                data={sponsors}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                ListFooterComponent={renderLoader}
                onEndReachedThreshold={0}
                estimatedItemSize={200}
            />
        </>
    );
};

const styles = StyleSheet.create({
    itemWrapperStyle: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        marginBottom: 20,
    },
    itemImageStyle: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    contentWrapperStyle: {
        justifyContent: "space-around",
    },
    txtNameStyle: {
        fontSize: 16,
    },
    txtEmailStyle: {
        color: "#777",
    },
    loaderStyle: {
        marginVertical: 50,
        alignItems: "center",
    },
});
