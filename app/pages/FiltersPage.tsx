import React, { useState, useEffect } from 'react';
import {ScrollView, Text, View, StyleSheet, Switch, TextInput, Button, Pressable} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { NativeSyntheticEvent, TextInputKeyPressEventData  } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import RNDateTimePicker from '@react-native-community/datetimepicker';



export function FiltersPage(props: {navigator: any}) {
        // filters box below
        const [globalsearchTerm, setGlobalSearchTerm] = useState("");
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
                  paddingTop: 20
                },
                filtercomponents: {
                  marginLeft: 30,
                  marginRight: 30,
                },
                MainText: {
                  fontSize: 25,
                  marginBottom: 10, 
                  color: "#004260",      
          },    Button: {
              marginTop: 20,
              backgroundColor: "red",
          }


                

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
                    color: "#004260",
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
                                  trackColor = {{true: "blue",false: "white"}}
                                  value = {myEvent}/>
                                </View>
                                <View style = {styles.container}>
                                  <Text style = {styles.colorText}>Registration Open</Text>
                                  <Switch
                                  style = {styles.switch}
                                  onValueChange={toggleopenReg}
                                  trackColor = {{true: "blue",false: "white"}}
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
              textAlign: "center"
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
            pressableStyle: {
              
              borderRadius: 10,
              padding: 10,
              margin: 5,
              
            },
            textBox: {
              fontSize:16,
              color: "#004260",   

            }
          })

          return (
            <View style = {styles.parentBox}>
              <Text style={styles.title}> Sort by </Text>
              <View style = {styles.sortOptionsBox}>
              <Pressable onPress={changeDateSort} style={{ ...styles.pressableStyle, backgroundColor:dateSort ? "#004260" : "rgba(128, 128, 128, 0.8)"}}>
                  <Text style={{...styles.textBox, color: dateSort ? "white" : "#004260"}}>Date</Text>
                </Pressable> 
                <Pressable onPress={changeDistanceSort} style={{ ...styles.pressableStyle, backgroundColor: distanceSort ? "#004260" : "rgba(128, 128, 128, 0.8)"}}>
                  <Text style={{...styles.textBox, color: distanceSort ? "white" : "#004260"}}>Distance</Text>
                </Pressable> 
                <Pressable onPress={changeParticipantsSort} style={{ ...styles.pressableStyle, backgroundColor: participantsSort ? "#004260" : "rgba(128, 128, 128, 0.8)"}}>
                  <Text style={{...styles.textBox, color: participantsSort ? "white" : "#004260"}}>Participants</Text>
                </Pressable> 
              </View>
            </View>
          )
        }

        const DateBox = () => {
          const styles = StyleSheet.create({
            title: {
              fontSize: 21,
              textAlign: "center"
            },

            parentBox: {
              display: "flex",
              width: "100%",
              flexDirection: "column",
            
            },

            parentDateBox: {
              display: "flex",
              width: "100%",
              flexDirection: "column",
              zIndex: 40
            },

            rangeBox: {
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between"
            }
          })
          const handleDateFromChange = (event: any, date: Date | undefined) => {
            if (date) {
                
                setFromDate(date);
            }
        };

          const handleDateToChange = (event: any, date: Date | undefined) => {
            if (date) {
             
              setToDate(date);
              
            }
          };
          

          return (
            <View style = {styles.parentDateBox}>
              <Text style = {styles.title}>Date</Text>
              <View style = {{flexDirection: 'row'}}>
                <Text>From</Text>
                <RNDateTimePicker
          value={fromDate}
          mode="date"
          onChange={handleDateFromChange}
        
          minimumDate={new Date()}
          />
                <Text>to</Text>
                <RNDateTimePicker
          value={toDate}
          mode="date"
          onChange={handleDateToChange}
        
          minimumDate={new Date()}
          />
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
              fontSize: 15,
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

          button: {
            marginTop: 10,
            backgroundColor: "red"
          }
        })
        

          const [searchTerm, setSearchTerm] = useState("");
          useEffect(() => {
            setGlobalSearchTerm(searchTerm);
          }, [searchTerm]);
          
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

                    <Button
                      title = "Apply Filters" 
                      onPress = {()=>{

                        let userPrefs = {
                          onlyMyEvents: myEvent, 
                          openRegistration: openReg, 
                          doDateSort: dateSort,
                          doParticipantSort: participantsSort ,
                          doDistanceSort: distanceSort,
                          doDistanceAway: distanceAway,
                          doToDate: toDate,
                          doFromDate: fromDate
                        }

                        let ev = props.navigator.route.params;
                        
                        
                        console.log(userPrefs);
                      }
                      }
                        />
                  </View>
                        
                </ScrollView>
        )
}
