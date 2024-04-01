import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

export default function UploadOrganizationButton() {
  const [image, setImage] = useState('');
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16,9],
      quality: 1,
    });
    if (_image.canceled === false) {
        setImage(_image.assets[0]['uri']);
    }
  };

  const clearImage = () => {
    setImage('');
  }

  const uploadImage = async () => {
    console.log("Pressed Upload Image button");
  }

  return (
        <View>
            <TouchableOpacity onPress={addImage}>
                <View style={imageUploaderStyles.container}>
                    {
                    image  && <Image source={{ uri: image }} style={{ width: 300, height: 200 }} />
                    } 
                    {
                    !image && <AntDesign name="camerao" size={image ? 20 : 50} color="blue" />
                    }
                    <Text>{image ? 'Change' : 'Upload An'} Organization Photo</Text>
                </View>
            </TouchableOpacity>
            <View style = {imageUploaderStyles.button_row}>
              <Pressable onPress={uploadImage} style = {imageUploaderStyles.button}>
                      <Text style = {imageUploaderStyles.text}>Upload Image</Text>
              </Pressable>
              <Icon name="trash" size={24} color="black" onPress={clearImage} style = {{marginLeft: 10}}/>
            </View>
        </View>
  );
}
const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:220,
        width:300,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:15,
        overflow:'hidden',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10%',
        marginBottom: 'auto',
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        verticalAlign: 'middle',
        borderSize: 10
    },
    button: {
      width: 153.01,
      height: 39.49,
      borderRadius: 5,
      backgroundColor: "rgb(75, 121, 192)",
    },
    button_row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
      fontSize: 17
    },
})