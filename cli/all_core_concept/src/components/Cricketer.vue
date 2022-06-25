<script>
import { useCounterStore } from "../stores/useCounterStore";

export default {
  setup() {
    const store = useCounterStore();

    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <h2>Cricketer component</h2>

    <div>
      <p>Counter value :: {{ store.counter }}</p>
      <button @click="store.increment">Increment Counter Store</button>

      <h3>Cricketer Information</h3>
      <h4>Name: {{ store.cricketer.name }}</h4>
      <h4>Jersy: {{ store.cricketer.jersy }}</h4>
      <h4>Type: {{ store.cricketer.type }}</h4>
    </div>
  </div>
</template>
