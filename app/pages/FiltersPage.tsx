import React, { useState } from 'react';
import {ScrollView, Text, View, StyleSheet, Switch, TextInput} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { NativeSyntheticEvent, TextInputKeyPressEventData  } from 'react-native';
import { TouchableOpacity } from 'react-native';

export function FiltersPage() {
        // filters box below
        const [myEvent, setMyEvent] = useState(false);
        const [openReg, setOpenReg] = useState(false);

        // sort by box below
        const [dateSort, setDateSort] = useState(false);
        const [distanceSort, setDistanceSort] = useState(false);
        const [participantsSort, setParticipantsSort] = useState(false);

        // date filter box below
        const [fromDate, setFromDate] = useState(null);
        const [toDate, setToDate] = useState(null);
        

        const [distanceAway, setDistanceAway] = useState("0");
        const [distanceFrom, setDistanceFrom] = useState("current location");
        

        const styles = StyleSheet.create({
                
                fullPage: {
                  backgroundColor: "#F0F8FF",
                },
                filtercomponents: {
                  marginLeft: 30,
                  marginRight: 30,
                },
                MainText: {
                  fontSize: 25,
                  marginBottom: 10,       
          },


                

        })


        const Filterbox = () => {
                const togglemyEvent = () => setMyEvent(previousState => !previousState);
                const toggleopenReg = () => setOpenReg(previousState => !previousState);
                const styles = StyleSheet.create({
                  container: {
                          flexDirection: "column",
                  },
                  container1: {
                    flexDirection: "row",
            },
                  
                  switchbox: {
                          flexDirection: "column",
                          backgroundColor: "white",
                          paddingBottom: 10,
                          paddingTop: 10,
                          
                          borderRadius:10,
                  },
                  colorText: {
                    fontSize: 20,
                    marginBottom: 10,
                    marginTop: 10,
                    paddingLeft: 20,
                    
                  },
                  switch : {
                    position: "absolute",
                    right: 20,
                    top:8,
                    
  
                  },
                  fullPage: {
                    backgroundColor: "#F0F8FF",
                  }
  
  
                  
  
          })
                return (
                        <View style = {styles.container}>
                           
                           
                           <View style = {styles.switchbox}>
                                <View style = {styles.container}>
                                  <Text style = {styles.colorText}>Only My Events</Text>
                                  <Switch
                                  style = {styles.switch}
                                  onValueChange={togglemyEvent}
                                  value = {myEvent}/>
                                </View>
                                <View style = {styles.container}>
                                  <Text style = {styles.colorText}>Registration Open</Text>
                                  <Switch
                                  style = {styles.switch}
                                  onValueChange={toggleopenReg}
                                  value = {openReg}
                                  />
                                </View>

                           </View>  
                        </View>
                )
                
        }

        const SortByBox = () => {
          const styles = StyleSheet.create({
            title: {
              fontSize: 21,
            },

            parentBox: {
              display: "flex",
              width: "100%",
              flexDirection: "column"
            },

            sortOptions: {
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between"
            }
          })

          return (
            <View style = {styles.parentBox}>
              
            </View>
          )
        }

        const DateBox = () => {
          const styles = StyleSheet.create({
            title: {
              fontSize: 21,
            },

            parentBox: {
              display: "flex",
              width: "100%",
              flexDirection: "column"
            },

            sortOptions: {
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between"
            }
          })
        }

        const DistanceFilter = () => {
          const styles = StyleSheet.create({
            mainView: {
              flexDirection: "row",
            }

          })
          return (
          <View style = {styles.mainView} >
            <TextInput
                placeholder="0"
                value={distanceAway}
                onChangeText={(distance)=>setDistanceAway(distance)}
                
            />
            <Text> miles away from </Text>
          </View>
        )}

        const OrgFilter = () => {
          
          const styles = StyleSheet.create({

          container: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF', 
            borderRadius: 5,
            marginTop: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          icon: {
            marginLeft: 10,
            marginRight: 10,
          },
          input: {
            flex: 1,
            fontSize: 16,
            paddingVertical: 10,
          },
        })

          
          const [searchTerm, setSearchTerm] = useState("");
          return (
                  <View>
                    <View style = {styles.container}>
                     <AntDesign name="search1" size={24} color="black" style={styles.icon} />
                      <TextInput
                        placeholder="Search for organizer"
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}                       
                        style={styles.input}
                      />
                    </View>
                  </View>
          )
          
  }

        return (
                <ScrollView style = {styles.fullPage}>
                  <View style = {styles.filtercomponents}>
                    <Text style = {styles.MainText}>Filter</Text>
                    <Filterbox/>
                    <Text style = {styles.MainText}>Organizer</Text>
                    <DistanceFilter/>
                    <OrgFilter/>
                  </View>
                        
                </ScrollView>
        )


}

