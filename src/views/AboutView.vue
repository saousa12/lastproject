<template>
  <div class="about">
    <h3>Username: <input type="email" v-model="email" required /></h3>
    <h3>Password : <input type="password" v-model="password" required /></h3>
    <br />
 
    <div class="text-center">
      <button color="warning" @click="login()">Login</button>
      <button color="primary" @click="googlelogin()">googlelogin</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    margin: 5%;
    min-height: 100vh;
    display: flex;
  }
  input {
    background-color: rgb(124, 120, 116);
    border-style: solid;
  }
}
</style>
