import React, { useState } from 'react';
import {ScrollView, Text, View, StyleSheet, Switch} from "react-native";

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
        

        const styles = StyleSheet.create({
                container: {
                        flexDirection: "column",
                        
                },
                filterText: {
                        fontSize: 20,
                        marginBottom: 20,       
                },
                switchbox: {
                        flexDirection: "row"
                }
                

        })


        const Filterbox = () => {
                const togglemyEvent = () => setMyEvent(previousState => !previousState);
                const toggleopenReg = () => setOpenReg(previousState => !previousState);
                return (
                        <View style = {styles.container}>
                           <Text style = {styles.filterText}>Filter</Text>
                           
                           <View style = {styles.switchbox}>
                                <Text>Only My Events</Text>
                                <Switch
                                onValueChange={togglemyEvent}
                                value = {myEvent}/>
                           </View> 
                           <View style = {styles.switchbox}>
                                <Text>Registration Open</Text>
                                <Switch
                                onValueChange={toggleopenReg}
                                value = {openReg}
                                />

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
        return (
                <ScrollView>
                        <Text>Open up App.tsx to start working on your app!</Text>
                        <Filterbox/>
                </ScrollView>
        )

}

