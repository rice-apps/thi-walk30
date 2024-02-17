import React, { useState } from 'react';
import {ScrollView, Text, View, StyleSheet, Switch} from "react-native";

export function FiltersPage() {
        const [myEvent, setMyEvent] = useState(false);
        const [openReg, setOpenReg] = useState(false);
        const styles = StyleSheet.create({
                container: {
                        flexDirection: "column",
                        
                },
                filterText: {
                        fontSize: 20,
                        marginBottom: 20,       
                }
                

        })


        const Filterbox = () => {
                return (
                        <View style = {styles.container}>
                           <Text style = {styles.filterText}>Filter</Text>
                           <Switch></Switch>    
                        </View>
                )
                
        }

        const SortByBox = () => {
          const [dateSort, setDateSort] = useState(false);
          const [distanceSort, setDistanceSort] = useState(false);
          const [participantsSort, setParticipantsSort] = useState(false);
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

                </ScrollView>
        )

}

