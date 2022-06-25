<script>
export default {
    // one way
    // props: ["name", "type"],

    // another way
    props: {
        name: String,
        type: String,
        "stack-name": String,
        jobExperience: Number
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
</template>
