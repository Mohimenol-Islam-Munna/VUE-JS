<script>
export default {
  data() {
    return {
      firstName: "Md Mohimenol",
      lastName: "Islam",
      fullName: "Munna",
    };
  },

  methods: {
    firstNameHandler(event) {
      console.log("first name handler ::", event.target.value);
      this.firstName = event.target.value;
    },

    lastNameHandler(event) {
      console.log("last name handler ::", event.target.value);
      this.lastName = event.target.value;
    },

    fullNameHandler() {
      console.log("full name handler ::");
      this.fullName = this.firstName + " " + this.lastName;
      return this.fullName;
    },
  },
};
</script>

<template>
  <div>
    <h2>Computed And Watch Property</h2>
    <h3>Full Name : {{ fullName }}</h3>
    <h3>Full Name (method for data binding) : {{ fullNameHandler() }}</h3>

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
      <button type="submit">Submit</button>
    </div>
  </div>
</template>
