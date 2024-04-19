import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

interface UploadOrganizationButtonProps {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
}

export default function UploadOrganizationButton({ image, setImage }: UploadOrganizationButtonProps) {
  //image uri is the image within this component, image is the image within the parent that gets submitted to the backend
  const [imageUri, setImageUri] = useState<string>(image);
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16,9],
      quality: 1,
    });
    if (_image.canceled === false) {
      setImage(_image.assets[0]['uri']);
      setImageUri(_image.assets[0]['uri']);
    }
  };

  const clearImage = () => {
    setImage('');
    setImageUri('');
  }
  
  return (
        <View>
            <TouchableOpacity onPress={addImage}>
                <View style={imageUploaderStyles.container}>
                    {
                    imageUri  && <Image source={{ uri: imageUri }} style={{ width: 300, height: 200 }} />
                    } 
                    {
                    !imageUri && <AntDesign name="camerao" size={imageUri ? 20 : 50} color="blue" />
                    }
                    <Text>{imageUri ? 'Change' : 'Upload An'} Organization Photo</Text>
                </View>
            </TouchableOpacity>
            <View style = {imageUploaderStyles.button_row}>
              <Icon name="trash" size={24} color="black" onPress={clearImage}/>
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
        overflow:'hidden',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10%',
        marginBottom: 'auto',
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        verticalAlign: 'middle',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8
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
      marginTop: 10
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