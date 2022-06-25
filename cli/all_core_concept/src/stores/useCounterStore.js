import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      counter: 10,
      cricketer: {
        name: "Mashrafe",
        jersy: 2,
        type: "bowler",
      },
    };
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
