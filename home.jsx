import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const RiskTolerance = () => {
  const [riskTolerance, setRiskTolerance] = useState(0);

  let allocation = {
    NS: 0,
    FS: 0,
    TS: 0,
    ES: 0,
    CS: 0,
  };

  if (riskTolerance === 0) {
    allocation.NS = 18;
    allocation.FS = 4;
    allocation.TS = 2;
    allocation.ES = 16;
    allocation.CS = 60;
  }
  if (riskTolerance === 1) {
    allocation.NS = 30;
    allocation.FS = 14;
    allocation.TS = 12;
    allocation.ES = 20;
    allocation.CS = 62;
  }
  if (riskTolerance === 2) {
    allocation.NS = 37;
    allocation.FS = 19;
    allocation.TS = 18;
    allocation.ES = 0;
    allocation.CS = 0;
  }
  if (riskTolerance === 3) {
    allocation.NS = 37;
    allocation.FS = 19;
    allocation.TS = 18;
    allocation.ES = 0;
    allocation.CS = 0;
  }
  if (riskTolerance === 4) {
    allocation.NS = 37;
    allocation.FS = 19;
    allocation.TS = 18;
    allocation.ES = 0;
    allocation.CS = 0;
  }
  if (riskTolerance === 5) {
    allocation.NS = 37;
    allocation.FS = 19;
    allocation.TS = 18;
    allocation.ES = 0;
    allocation.CS = 0;
  }
  if (riskTolerance === 6) {
    allocation.NS = 37;
    allocation.FS = 19;
    allocation.TS = 18;
    allocation.ES = 0;
    allocation.CS = 0;
  }
  if (riskTolerance === 7) {
    allocation.NS = 37;
    allocation.FS = 19;
    allocation.TS = 18;
    allocation.ES = 0;
    allocation.CS = 0;
  }
  if (riskTolerance === 8) {
    allocation.NS = 37;
    allocation.FS = 19;
    allocation.TS = 18;
    allocation.ES = 0;
    allocation.CS = 0;
  }
  if (riskTolerance === 9) {
    allocation.NS = 37;
    allocation.FS = 19;
    allocation.TS = 18;
    allocation.ES = 0;
    allocation.CS = 0;
  }
  if (riskTolerance === 10) {
    allocation.NS = 37;
    allocation.FS = 19;
    allocation.TS = 18;
    allocation.ES = 0;
    allocation.CS = 0;
  }
  return (
    <View style={{paddingTop:70}}>
      <Text>Select Your Risk Tolerance:</Text>
      <Slider
        value={riskTolerance}
        onValueChange={(val) => setRiskTolerance(val)}
        minimumValue={0}
        maximumValue={10}
        step={1}
        minimumTrackTintColor="#006400"
        maximumTrackTintColor="#808080"
        style={styles.slider}
      />
      <Text>Risk Tolerance: {riskTolerance}</Text>
      {(riskTolerance === 0 ||
        riskTolerance === 1 ||
        riskTolerance === 2 ||
        riskTolerance === 3 ||
        riskTolerance === 4 ||
        riskTolerance === 5 ||
        riskTolerance === 6 ||
        riskTolerance === 6 ||
        riskTolerance === 7 ||
        riskTolerance === 8 ||
        riskTolerance === 9 ||
        riskTolerance === 10) && (
          <View>
            <Text>Allocation:</Text>
            <Text>NS: {allocation.NS}%</Text>
            <Text>FS: {allocation.FS}%</Text>
            <Text>TS: {allocation.TS}%</Text>
            <Text>ES: {allocation.ES}%</Text>
            <Text>CS: {allocation.CS}%</Text>
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    // width: "90%",
    // alignSelf: "center"
  },
});

export default RiskTolerance;
