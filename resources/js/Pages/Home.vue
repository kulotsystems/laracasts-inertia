<template>
    <h1>Hello, {{ name }}</h1>

    <p>In this series, we will use the following frameworks:</p>
    <ul>
        <li v-for="framework in frameworks" :key="framework">{{ framework }}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            name: String,
            frameworks: Array
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
