import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
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
                    <Text>{image ? 'Change' : 'Upload An'} Event Image</Text>
                </View>
            </TouchableOpacity>
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
        verticalAlign: 'middle'
    },
})