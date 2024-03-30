import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AppleHealthKit, {
    HealthValue,
    HealthKitPermissions,
} from 'react-native-health';

function HealthTestPage() {
    const [steps, setSteps] = useState(0);

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
                startDate: new Date(2023, 1, 1).toISOString(),
            }

            AppleHealthKit.getDailyStepCountSamples(
                options,
                (callbackError: string, results: HealthValue[]) => {
                    /* Samples are now collected from HealthKit */
                    if (callbackError != null) {
                        console.log(callbackError);
                        return;
                    }

                    const stepVal = results.reduce((acc, healthVal) => acc + healthVal.value, 0);
                    setSteps(stepVal);
                },
            )
        })
    }, []);

    return (
        <View>
            <Text>Steps: {steps}</Text>
        </View>
    )
}

export default HealthTestPage;