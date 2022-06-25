<script>
export default {
    // one way
    // props: ["name", "type", "stack-name", "jobExperience", "nameChangeHandler"],

    // another way 
    props: {
        name: String,
        type: String,
        "stack-name": String,
        jobExperience: Number,
        nameChangeHandler: Function
    },
    data() {
        return {
            t: "",
        };
    },
};
</script>
<template>
    <div>
        <h2>Developer Info</h2>
        <h3>Name: {{ name }}</h3>
        <h3>Type: {{ type }}</h3>
        <h3>Stack: {{ stackName }}</h3>
        <h3>Job Experience: {{ jobExperience }} year</h3>
    </div>

    <div>
        <!-- normal way  -->
        <button @click="nameChangeHandler('New Md Ifti')">
            Again Click To Chanage Name From Child
        </button> <br />

        <!-- emit event  -->
        <button @click="$emit('increamentJobExperienceHandler')" style="margin-top: 20px;">
            Click To Chanage Experience From Child
        </button>
    </div>
</template>
