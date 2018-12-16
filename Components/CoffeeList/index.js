import React, { Component } from "react";

import { observer } from "mobx-react";
// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeStore from "../Stores/coffeeStore";
// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    let ListItems;
    let coffeeshops = coffeeStore.coffeeshops;
    if (coffeeshops) {
      ListItems = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default observer(CoffeeList);
