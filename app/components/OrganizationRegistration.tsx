import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, Pressable, TextInput} from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import UploadOrganizationButton from './UploadOrganizationButton';

const uploadImage = () => {
    console.log("Pressed Upload Image button");
}

const registerOrganization = () => {
    console.log("Pressed Register Organization button");
}

function OrganizationRegistration() {
    const [org_name, setOrgName] = useState("");
    const [org_phone, setOrgPhone] = useState("");
    const [org_email, setOrgEmail] = useState("");

    return (
        <ScrollView>
            <View style = {styles.container}>
                {/* Title*/}
                <View style = {{marginTop: 10}}>
                    <Text style = {styles.title} >Register your organization</Text>
                </View>
                {/*Form to upload image*/}
                <View style = {{marginBottom: 10}}>
                    <UploadOrganizationButton/>
                </View>
                {/* Forms for organization metadata */}
                <View>
                    {/* Organization Name */}
                    <View style={styles.block}>
                        <Text style={styles.titleText}>Organization Name</Text>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: "space-between", borderWidth: 1, borderRadius: 5}}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(value) => setOrgName(value)}
                                    placeholder="Name"
                                    placeholderTextColor="#00426e"
                                    autoCapitalize="none"
                                />
                            <Icon name="user" size={24} color="#00426D" style = {{marginRight: 10, marginTop: 5}}/>
                        </View>
                    </View>
                    {/* Phone Number */}
                    <View style={styles.block}>
                        <Text style={styles.titleText}>Phone Number</Text>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: "space-between", borderWidth: 1, borderRadius: 5}}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(value) => setOrgPhone(value)}
                                    placeholder="Phone Number"
                                    placeholderTextColor="#00426e"
                                    autoCapitalize="none"
                                />
                            <Icon name="phone" size={24} color="#00426D" style = {{marginRight: 10, marginTop: 5}}/>
                        </View>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.titleText}>Email</Text>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: "space-between", borderWidth: 1, borderRadius: 5}}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(value) => setOrgEmail(value)}
                                    placeholder="Phone Number"
                                    placeholderTextColor="#00426e"
                                    autoCapitalize="none"
                                />
                            <Icon name="envelope" size={24} color="#00426D" style = {{marginRight: 10, marginTop: 5}}/>
                        </View>
                    </View>
                </View>
                {/* Register button */}
                <View style = {{flex:1, justifyContent: 'center', alignItems: "center"}}>
                    <Pressable style={styles.submit} onPress = {registerOrganization}>
                            <Text style = {styles.text}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 25
    },
    title: {
        //Write css to center the text in the middle o the screen
        textAlign: 'center',
        color: "#00426D",
        fontSize: 24,
        fontWeight: "600",
    },
    block: {
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        padding: 10,
        borderRadius: 5,
        opacity: .7
    },
    titleText: {
        color: "#00426e",
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "500",
      },
    submit: {
        width: 138.38,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgb(25, 65, 106)",
        borderRadius: 5,
        marginTop: 30,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 17
      },
});

export default OrganizationRegistration;