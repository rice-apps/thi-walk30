import react from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

type props = {
    profile: String,
    image: String,
}

function WelcomePage(props: props) {
    return (
        <View>
            <Text>{props.profile}</Text>
            {/* put image here */}
            {/* <Image></Image> */}
            <Text>Imagine we have an image here {props.image}</Text>
        </View>
    )
}

export default WelcomePage;