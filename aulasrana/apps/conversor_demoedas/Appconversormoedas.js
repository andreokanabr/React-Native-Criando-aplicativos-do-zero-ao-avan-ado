import { StatusBar, View, StyleSheet, Text } from 'react-native';
import PickerItem from '../../src/Picker';

export default function App() {
  return (
    <View style={estilos.container}>
      <StatusBar hidden={true} />
      <View style={estilos.areaMoeda}>
        <Text style={estilos.titulo}> Selecione sua moeda </Text>
        <PickerItem />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
  },
  areaMoeda: {
    backgroundColor: '#f9f9f9',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
    marginBottom: 1,
  },
  titulo: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 5,
    textAlign: 'center',
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 18,
    color: '#000',
  },
  botaoArea: {
    width: '90%',
    backgroundColor: '#fb4b57',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  botaoText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  valorConvertido: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
});
