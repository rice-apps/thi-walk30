
import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage(props: {onChange: any}) {
  const [image, setImage] = useState('');
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16,9],
      quality: 1,
    });
    if (_image.canceled === false) {
        props.onChange(_image.assets[0]['uri'])
        setImage(_image.assets[0]['uri']);
    }
  };
  return (
        <View>
            <TouchableOpacity onPress={addImage}>
                <View>
                    {
                    image && (
                        <View>
                            <Image source={{ uri: image }} style={imageUploaderStyles.container} />
                            <Button title='Delete Image' onPress={() => {
                                props.onChange('');
                                setImage('');
                            }}/>
                        </View>
                    )} 
                    {
                    !image && (
                        <View style={imageUploaderStyles.container}>
                            <AntDesign name="camerao" size={70} color='#103158' />
                            <Text style={imageUploaderStyles.text}>Upload event image</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
  );
}
const imageUploaderStyles=StyleSheet.create({
    container:{
        width:330,
        height: 187.25,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4C4D4F',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor:'white',
        alignItems:"center",
        justifyContent: 'center'
    },
    text: {
        paddingTop: 5,
        fontSize: 15,
        color: '#103158'
    },
    deleteButton: {

    }
})