import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { homeStyles } from './assets/styles/home.style';
import { viewStyles } from './assets/styles/view.style';
import { LinearGradient } from 'expo-linear-gradient';

import { CalculadoraKeys } from './components/calculadora-keys';

export default function App() {
  return (
    <View style={homeStyles.container}>
      <LinearGradient colors={['#5ec5c1', '#3e93ba', '#2164b3']} style={homeStyles.container}>
        <CalculadoraKeys></CalculadoraKeys>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  
    
  
  );


  


}

