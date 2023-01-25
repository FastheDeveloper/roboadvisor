import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RiskTolerance from './home';
import Homescreen from './Homescreen';
import { useFonts } from 'expo-font'
export default function App() {

  let [fontsLoaded] = useFonts({
    'Montserat': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if(!fontsLoaded){
      return null
    }

  return (
    <View style={styles.container}>
    {/* <RiskTolerance /> */}
    <Homescreen />
      
      <StatusBar style='light' translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
});
