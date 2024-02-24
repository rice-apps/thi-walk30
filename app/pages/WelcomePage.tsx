import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppleHealthKit, {
    HealthValue,
    HealthKitPermissions,
} from 'react-native-health';

type props = {
    profile: string,
    image: string,
}

/* Temporary CSS style sheet to align basic components */
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: 20,
        alignItems: "center",
        marginLeft: 20
    },
    image: {
        width: 66,
        height: 66,
        borderRadius: 30,
        //   borderColor: "black", 
        //   borderWidth: 2,
    },
    text_large: {
        fontSize: 23,
        fontWeight: "600",
    },
    text_small: {
        fontSize: 18,
        fontWeight: "400"
    }

});


function WelcomePage(props: props) {
    useEffect(() => {
        /* Permission options */
        const permissions = {
            permissions: {
                read: [AppleHealthKit.Constants.Permissions.Steps]
            },
        } as HealthKitPermissions;

        AppleHealthKit.initHealthKit(permissions, (error: string) => {
            /* Called after we receive a response from the system */

            if (error) {
                console.log('[ERROR] Cannot grant permissions!')
            }

            /* Can now read or write to HealthKit */

            const options = {
                startDate: new Date(2020, 1, 1).toISOString(),
            }

            AppleHealthKit.getDailyStepCountSamples(
                options,
                (callbackError: string, results: HealthValue[]) => {
                    /* Samples are now collected from HealthKit */
                    console.log(callbackError, results);
                },
            )
        })
    }, []);

    return (
        <View>
            <View></View>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: props.image }}></Image>
                <View>
                    <Text style={styles.text_small}>Welcome,</Text>
                    <Text style={styles.text_large}>{props.profile}</Text>
                </View>
            </View>
        </View>
    )
}

export default WelcomePage;