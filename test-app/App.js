import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      serverMessage: "Esperando resposta do servidor..."
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://192.168.0.15:8000/api/getServerMessage");
      const respjson = await response.json();
      console.log("respjson: ", respjson);
      if (respjson.success && respjson.message) {
        this.setState({ serverMessage: respjson.message });
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.serverMessage}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
