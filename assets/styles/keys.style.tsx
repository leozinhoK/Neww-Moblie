import { ImageBackground, StyleSheet } from 'react-native';

export const keysStyles = StyleSheet.create({
  rowKeys: {
    paddingTop: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  columnKey: {
    backgroundColor: '#21f4fe',
    width: '70%',
    height: 45,
    marginLeft: 70,
    marginTop: 15,
    fontFamily: 'Arial',
    fontSize: 19,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  backspace: {
    width: 30,
    height: 30,

  },


  cadeado: {
    position: 'absolute',
    left: 80,
    top: 32,
    width: 30,
    height: 30,
},


  usuario: {  
    position: 'absolute',
    left: 78,
    top: 32,
    width: 33,
    height: 33,
  
  
  },


  container: {

    backgroundColor: '#5ec5c1'




  }


  

});