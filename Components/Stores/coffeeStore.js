import { decorate, observable, computed } from "mobx";
import axios from "axios";

class CoffeeStore {
  constructor() {
    this.coffeeshops = null;
    this.coffeeshop = null;
    this.loading = true;
  }

  fetchAllCoffeeShops() {
    axios
      .get("http://coffee.q8fawazo.me/api/?format=json")
      .then(res => res.data)
      // For now just log user
      .then(coffeeshops => {
        this.coffeeshops = coffeeshops;
        this.loading = false;
      })
      .catch(err => console.error(err.response));
  }
}
decorate(CoffeeStore, {
  coffeeshop: observable,
  coffeeshops: observable,
  loading: observable
});
const coffeestore = new CoffeeStore();

coffeestore.fetchAllCoffeeShops();

export default coffeestore;
