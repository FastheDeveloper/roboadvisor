import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import React, { useState,useEffect} from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Feather } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";
import axios from 'axios';
const statusBarHeight = getStatusBarHeight();
const data = [{ key: "Health" }, { key: "Car" }, { key: "Bike" }];

const Homescreen = () => {
  const [riskTolerance, setRiskTolerance] = useState(0);
  const [data, setData] = useState([]);
  const [stockData, setStockData] = useState([]);
 
  let allocation = {
    NS: data.NS,
    FS: data.FS,
    TS: data.TS,
    ES: data.ES,
    NB: data.NB,
    FB: data.FB,
    CM: data.CM,
    RE: data.RE,
    TB: data.TB,
    ALT: data.ALT,
  };



  let widthNS = `${allocation.NS+30}%`,
    widthFS = `${allocation.FS+30}%`,
    widthTS =  `${allocation.TS+30}%`,
    widthES =  `${allocation.ES+30}%`,
    widthNB = `${allocation.NB+30}%`,
    widthFB = `${allocation.FB+30}%`,
    widthCM = `${allocation.CM+30}%`,
    widthRE = `${allocation.RE+30}%`,
    widthTB =`${allocation.TB+30}%`,
    widthALT =  `${allocation.ALT+30}%`;

    useEffect(()=>{
      const getData = async () => {
        try {
            const response = await fetch(`https://red-important-marlin.cyclic.app/stockings?index=${riskTolerance}`);
            
            const json = await response.json();
            setData(json);
            
        } catch (error) {
            console.error(error);
        }
        
    };
    getData();
    },[riskTolerance])

    

  const handleSliderChange = (value) => {
    setRiskTolerance(value);
  
}

  return (
    <View style={styles.container}>
       <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.textGreeting}>Hey Ayodamola</Text>
          <Text style={styles.textExtra}>
            Welcome, lets find a plan for you
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 3,
            paddingHorizontal: 2,
            borderRadius: 12,
            backgroundColor: "#a3a09e",
          }}
        >
          <Feather name="search" size={24} color="white" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <View
          style={{
            // backgroundColor: "#161616",
            borderWidth:.5,
            borderColor:'#FDB813',
            marginVertical: 15,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#fff" }}>INVEST</Text>
        </View>

<TouchableOpacity >
        <View
          style={{
            borderWidth:.5,
            borderColor:'#FDB813',
            marginVertical: 15,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 12,
          }}
        >
          
          <Text style={{ color: "#fff" }}>TRADE</Text>
        </View>
        </TouchableOpacity>
        <View
          style={{
            borderWidth:.5,
            borderColor:'#FDB813',
            marginVertical: 15,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#fff" }}>CHARTS</Text>
        </View>

        <View
          style={{
            borderWidth:.5,
            borderColor:'#FDB813',
            marginVertical: 15,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#fff" }}>CONNECT</Text>
        </View>
      </View>
      <View>
        <View style={{ marginTop: 10,marginBottom:10 }}>
          <Text
            style={{ color: "#fff", fontFamily: "Montserat", fontSize: 15 }}
          >
            CUSTOMIZE YOUR PLAN
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#0B3D91",
            padding: 5,
            marginTop: 5,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginTop: 5,
              alignItems: "center",
            }}
          >
            <Text style={{color:'#d1cfcf'}}>What is your risk tolerance</Text>
            <Text style={{ fontWeight: "900", fontSize: 20,color:'#d1cfcf' }}>
              {riskTolerance}
            </Text>
          </View>
          <Slider
            value={riskTolerance}
            onValueChange={handleSliderChange}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#FDB813"
            maximumTrackTintColor="#d1cfcf"
            renderThumbComponent={thumb}
            trackStyle={{ height: 10, borderRadius: 5 }}
          />
        </View>
        {stockData.slice(riskTolerance * 10, riskTolerance * 10 + 10).map((stock, index) => (
        <Text key={index}>{stock.NS}</Text>
    ))}

        {(riskTolerance == 0 ||
          riskTolerance == 1 ||
          riskTolerance == 2 ||
          riskTolerance == 3 ||
          riskTolerance == 4 ||
          riskTolerance == 5 ||
          riskTolerance == 6 ||
          riskTolerance == 6 ||
          riskTolerance == 7 ||
          riskTolerance == 8 ||
          riskTolerance == 9 ||
          riskTolerance == 10) && (
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#FDB813",
              padding: 15,
              borderRadius: 15,
            }}
          >
            <View>
              <Text
                style={[
                  styles.textExtra,
                  { fontSize: 20, fontWeight: "800", letterSpacing: 2, },
                ]}
              >
                Allocation:
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <Text style={styles.textExtra1}>Nigerian Stock:</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* #FDB813 */}
              {/* #0B3D91 
               */}
                <View
                  style={{
                    width: widthNS,
                    marginLeft: 15,
                    borderWidth: 1,
                    borderColor: "#0B3D91",
                    padding:5
                  }}
                >
                  <Text> {allocation.NS}%</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <Text style={styles.textExtra1}>Foriegn Stocks :</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                
                <View style={{ width: widthFS,borderWidth: 1,
                    borderColor: "#0B3D91", marginLeft: 10,padding:5 }}>
                <Text>{allocation.FS}%</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <Text style={styles.textExtra1}>Tech Stocks : </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
               
                <View style={{ width: widthTS,borderWidth: 1,
                    borderColor: "#0B3D91",marginLeft:31,padding:5}}>
                <Text>{allocation.TS}%</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <Text style={styles.textExtra1}>Emerging Stocks: </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                
                <View style={{ width: widthES,borderWidth: 1,
                    borderColor: "#0B3D91", padding:5}}>
                <Text>{allocation.ES}%</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <Text style={styles.textExtra1}> Nigerian Bonds: </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
               
                <View
                  style={{
                    width: widthNB,
                    borderWidth: 1,
                    borderColor: "#0B3D91",
                    marginLeft: 7,
                    padding:5
                  }}
                >
                  <Text>{allocation.NB}%</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <Text style={styles.textExtra1}>Foriegn Bonds:</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
             
                <View style={{ width: widthFB, borderWidth: allocation.FB ==0 ? 0 :1,
                    borderColor: "#0B3D91",marginLeft:22,padding:5 }}>
                <Text> {allocation.FB}%</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <Text style={styles.textExtra1}>Commodities: </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                
                <View style={{ width: widthCM, borderWidth:allocation.CM ==0 ? 0 :1,
                    borderColor: "#0B3D91",marginLeft:27, padding:5 }}>
                <Text>{allocation.CM}%</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                
              }}
            >
              <Text style={styles.textExtra1}>Real Estate:</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
              
                <View style={{ width: widthRE,  borderWidth:allocation.RE ==0 ? 0 :1,
                    borderColor: "#0B3D91",marginLeft:49,padding:5 }}>
                <Text> {allocation.RE}%</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <Text style={styles.textExtra1}>T-Bills:</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                
                <View style={{ width: widthTB, borderWidth:allocation.TB ==0 ? 0 :1,
                    borderColor: "#0B3D91",marginLeft:100 }}>
                  <Text>{allocation.TB}%</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 7,
              }}
            >
              <Text style={styles.textExtra1}>Alternative:</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
               
                <View style={{ width: widthALT, borderWidth:allocation.ALT ==0 ? 0 :1,
                    borderColor: "#0B3D91",marginLeft:57  }}>
                   <Text> {allocation.ALT}%</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
      </ScrollView>
    </View>
  );
};

export default Homescreen;

const thumb = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: 20,
        width: 20,
        borderRadius: 20,
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    paddingHorizontal: 10,
    backgroundColor: "#000000",
  },
  textGreeting: {
    color: "#ffffff",
    fontFamily: "Montserat",
    fontWeight: "800",
    fontSize: 20,
    letterSpacing: 2,
  },
  textExtra: {
    color: "#ffffff",
    fontFamily: "Montserat",
  },
  textExtra1: {
    // color: "#ffffff",
    fontFamily: "Montserat",
    fontWeight: "500",
    fontSize: 16,
    // letterSpacing:1
  },
});
