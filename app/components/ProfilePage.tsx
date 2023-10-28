import react from 'react';
import {Text, View} from 'react-native';
import WelcomePage from './WelcomePage';

type props = {
    profile: string,
    image: string,
}

function ProfilePage(props: props) { 
    return (
        <View>
            <WelcomePage profile = {props.profile} image = {props.image}></WelcomePage>
            <View>
                {/*Put Activity Card Here*/}
                <Text>Imagine we have an activity card here</Text>
            </View>
            <View>
                {/*Put Event List Component here*/}
                <Text>Imagine we have an event list here</Text>
            </View>
      </View>
    )
}

export default ProfilePage;