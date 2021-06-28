import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"

export default function QuotationsItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logBitcoin}
                        source={require("../../img/bitcoin.jpg")}
                    />
                    <Text style={styles.dayCotation}>07/05/2021</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>R$ 53331.052</Text>
            </View>
        </View>
    )
}