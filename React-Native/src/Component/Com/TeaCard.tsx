import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const TeaCard = ({ imageSource, title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.BTCard}>
                <Image source={imageSource} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    BTCard: {
        width: "40%",
        height: 80,
        backgroundColor: "black",
        margin: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    title: {
        color: "white",
        marginTop: 5,
        textAlign: "center",
    }
});

export default TeaCard;
