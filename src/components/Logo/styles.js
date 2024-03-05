import { StyleSheet } from "react-native";

export const ContainerStyles = (container_flex, container_width, container_height) => StyleSheet.create({
    container: {
        flex: container_flex,
        justifyContent: 'center',
        width: container_width,
        height: container_height,
        //marginTop: mt ? mt : 0,
    },
});

export const LogoStyles = (logo_width, logo_height, logo_color) => StyleSheet.create({
    logo: {
        width: logo_width,
        height: logo_height,
        tintColor: logo_color,
    }
});