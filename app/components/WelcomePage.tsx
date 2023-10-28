import react from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

type props = {
    profile: string,
    image: string,
}

/* Temporary CSS style sheet to align basic components */ 
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: 20
    },
    logo: {
      width: 66,
      height: 58,
    }
  });
  

function WelcomePage(props: props) {
    return (
        <View>
            <View style = {styles.row}>
                <Text>Welcome {props.profile}!</Text>
                <Image style={styles.logo}
                    source={{uri: props.image}}></Image>
            </View>
        </View>
    )
}

export default WelcomePage;