import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

class HomePage extends Component {
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
        {/* <Switch>
          <Route path="../CoffeeCart" component={CoffeeCart} />
          <Route path="../CoffeeDetail" component={CoffeeDetail} />
          <Route path="../Login" component={Login} />
          <Redirect to="/" />
        </Switch> */}
      </Container>
    );
  }
}

export default HomePage;
