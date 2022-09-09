import { Text, View, Image, ImageBackground } from 'react-native';
import { keysStyles } from '../assets/styles/keys.style';
import { viewStyles } from '../assets/styles/view.style';
export function CalculadoraKeys() {
  return (
    <View>
          <View style={viewStyles.container}>
          <Image 
            source={require('../assets/Us.png')}
            style={viewStyles.teste}
          ></Image>
          </View>
      <View style={keysStyles.rowKeys}>
        <View style={keysStyles.columnKey}>Username</View>
        <Image 
            source={require('../assets/Avatar.png')}
              style={keysStyles.usuario}
            ></Image>
        </View>
      <View style={keysStyles.rowKeys}>
        <View style={keysStyles.columnKey}>Password</View>
        <Image 
            source={require('../assets/Cadeado.png')}
              style={keysStyles.cadeado}
            ></Image>
      </View>

      
    </View>
  );
} 