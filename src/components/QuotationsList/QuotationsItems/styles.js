import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    mainContent:{
        width: "95%",
        height: "auto",
        backgroundColor: "#000000",
        marginLeft:"3%",
        marginBottom:"15",
        borderRadius:10,
        flexDirection: "row",
        alignItems:"center",
        // padding:10
    },
    contextLeft:{
        width:"33%",
        height:"100%",
        alignItems:"flex-start"
    },
    dayCotation:{
        fontSize:16,
        // paddingLeft:22,
        color:"#ffffff",
        fontWeight:"bold",

    },
    logBitcoin:{
        width:40,
        height:40,
        marginLeft:2
    },
    boxLogo:{
        flexDirection:"row",
        alignItems:"center",
    },
    contextRight:{
        width:"60%",
        alignItems:"flex-end"
    },
    price:{
        color:"#ffffff",
        fontWeight:"bold",
        fontSize:18
    }
});

export default styles