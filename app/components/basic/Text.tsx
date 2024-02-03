import { Text as RNText, StyleProp, StyleSheet, TextStyle } from "react-native";
import React from "react";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from "@expo-google-fonts/inter";

interface TextProps {
    /**
     * Custom text style to be applied.
     */
    style?: StyleProp<TextStyle>,
    /**
     * Weight of the text (400, 500, or 700).
     */
    weight?: number
}

export default function Text(props: React.PropsWithChildren<TextProps>) {
    const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_700Bold });

    // Choose the correct font weight
    let fontFamily;
    switch (props.weight) {
        case 400:
            fontFamily = "Inter_400Regular";
            break;
        case 500:
            fontFamily = "Inter_500Medium";
            break;
        case 700:
            fontFamily = "Inter_700Bold";
            break;
        default:
            fontFamily = "Inter_500Medium";
    }

    const style = StyleSheet.create({
        text: {
            fontFamily
        }
    });

    return fontsLoaded ? <RNText style={[style.text, props.style]}>{props.children}</RNText> : <Text>{props.children}</Text>;
}