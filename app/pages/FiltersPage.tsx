import React, { useState } from 'react';
import {ScrollView, Text, View, StyleSheet, Switch, TextInput, Button, Pressable} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { NativeSyntheticEvent, TextInputKeyPressEventData  } from 'react-native';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


export function FiltersPage() {
        // filters box below
        const [myEvent, setMyEvent] = useState(false);
        const [openReg, setOpenReg] = useState(false);

        // sort by box below
        const [dateSort, setDateSort] = useState(false);
        const [distanceSort, setDistanceSort] = useState(false);
        const [participantsSort, setParticipantsSort] = useState(false);

        // date filter box below
        const [fromDate, setFromDate] = useState(new Date());
        const [toDate, setToDate] = useState(new Date());

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
          const changeDateSort = () => {
            setDateSort(true);
            setDistanceSort(false);
            setParticipantsSort(false);
          };
          const changeDistanceSort = () => {
            setDateSort(false);
            setDistanceSort(true);
            setParticipantsSort(false);
          };
          const changeParticipantsSort = () => {
            setDateSort(false);
            setDistanceSort(false);
            setParticipantsSort(true);
          };

          const styles = StyleSheet.create({
            title: {
              fontSize: 21,
            },

            parentBox: {
              display: "flex",
              width: "100%",
              flexDirection: "column"
            },

            sortOptionsBox: {
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between"
            },
          })

          return (
            <View style = {styles.parentBox}>
              <Text style={styles.title}> Sort by </Text>
              <View style = {styles.sortOptionsBox}>
                <Pressable onPress={changeDateSort} style={{ backgroundColor: dateSort ? "red" : "gray", borderRadius: 10 }}>
                  <Text style={{ fontSize: 16 }}>Date</Text>
                </Pressable> 
                <Pressable onPress={changeDistanceSort} style={{ backgroundColor: distanceSort ? "red" : "gray", borderRadius: 10 }}>
                  <Text style={{ fontSize: 16 }}>Distance</Text>
                </Pressable> 
                <Pressable onPress={changeParticipantsSort} style={{ backgroundColor: participantsSort ? "red" : "gray", borderRadius: 10 }}>
                  <Text style={{ fontSize: 16 }}>Participatns</Text>
                </Pressable> 
              </View>
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

            rangeBox: {
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between"
            }
          })
          const [startDate, setStartDate] = useState(new Date());
          const [endDate, setEndDate] = useState(new Date());

          return (
            <View style = {styles.parentBox}>
              <Text>Date</Text>
              <View>
                <Text>From</Text>
                {/* <DatePicker selected={startDate} onChange={(date: React.SetStateAction<Date>) => setStartDate(date)} /> */}
                <Text>to</Text>
                {/* <DatePicker selected={endDate} onChange={(date: React.SetStateAction<Date>) => setEndDate(date)} /> */}
              </View>
            </View>
          )
        }

        const DistanceFilter = () => {
          const styles = StyleSheet.create({
            mainView: {
              flexDirection: "row",
            },
            textInput : {
              backgroundColor: '#FFFFFF', 
              borderRadius: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingTop:10,
            },
            text : {
              marginTop:10,
            }

          })
          return (
          <View style = {styles.mainView} >
            <TextInput
                placeholder="0"
                value={distanceAway}
                onChangeText={(distance)=>setDistanceAway(distance)}
                style = {styles.textInput}
            />
            <Text style = {styles.text}>  miles away from current location</Text>
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
                    <SortByBox/>
                    <DateBox/>
                    <Text style = {styles.MainText}>Distance</Text>
                    <DistanceFilter/>
                    <Text style = {styles.MainText}>Organizer</Text>
                    
                    <OrgFilter/>
                  </View>
                        
                </ScrollView>
        )
}

