<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <v-btn to="/"> <span class="mr-2 text-white">Home</span></v-btn>
      <v-btn to="/about"><span class="mr-2 text-white">About</span></v-btn>
      <v-btn to="/tshop"><span class="mr-2 text-white">Plant Shop</span></v-btn>

      <v-spacer></v-spacer>
      <v-btn icon="mdi-facebook" />
      <v-btn icon="mdi-instagram" />
      <v-btn to="/about">signin</v-btn>
      <v-btn to="/about">login</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
  },
};
</script>
