<!-- 1. function in methods is used for data and event binding  -->
<!-- 2. function in computed property is used only for data binding. its use like varible of data method -->
<!-- 3. function in watch property does not used for data and event binding. It's used for only perform some task when the particular state is changed. -->

<script>
export default {
  data() {
    return {
      firstName: "Md Mohimenol",
      lastName: "Islam",
      fullName: "Munna",
      age: null,
    };
  },

  watch: {
    lastName(newValue, oldValue) {
      console.log("watcher for last name :: ", newValue, "::", oldValue);
    },
  },

  computed: {
    fullNameHandler() {
      console.log("full name handler ::");
      this.fullName = this.firstName + " " + this.lastName;
      return this.fullName;
    },
  },

  methods: {
    firstNameHandler(event) {
      // console.log("first name handler ::", event.target.value);
      this.firstName = event.target.value;
    },

    lastNameHandler(event) {
      // console.log("last name handler ::", event.target.value);
      this.lastName = event.target.value;
    },

    ageHandler(event) {
      console.log("age handler ::");
      this.age = event.target.value;
    },

    resetAgeHandler() {
      console.log("reset age handler called");
      this.age = null;
    },
  },
};
</script>

<template>
  <div>
    <h2 class="title">Computed And Watch Property</h2>

    <h3>First Name : {{ firstName }}</h3>

    <h3>Full Name : {{ fullName }}</h3>
    <h3>Full Name (Method for data binding) : {{ fullNameHandler }}</h3>

    <h3>Age : {{ age }} years</h3>

    <div>
      <input
        type="text"
        name="firstName"
        @input="firstNameHandler"
        placeholder="Enter your first name"
      /><br />
      <br />
      <input
        type="text"
        name="lastName"
        @input="lastNameHandler"
        placeholder="Enter your last name"
      /><br />
      <br />

      <!-- :value="age"
        @input="ageHandler" -->

      <input
        type="number"
        name="age"
        v-model="age"
        placeholder="Enter your age"
      /><br />
      <br />
      <button type="submit">Submit</button>
      <button type="button" @click="resetAgeHandler">Reset Age</button>
    </div>
  </div>
</template>

<style scoped>
.title {
  color: salmon;
  font-size: 24px;
}
</style>
