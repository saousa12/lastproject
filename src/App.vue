<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <v-btn to="/"> <span class="mr-2 text-white">Home</span></v-btn>
      <v-btn to="#shop"><span class="mr-2 text-white">Shop</span></v-btn>
      <v-btn to="#blog"><span class="mr-2 text-white">Blog</span></v-btn>

      <v-spacer></v-spacer>
      <v-btn icon="mdi-facebook" />
      <v-btn icon="mdi-instagram" />
      <v-btn to="/login" id="login-btn">login</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="text"
        ></v-btn>
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {},
};
</script>
<style>
#login-btn {
  border-color: black;
  border-width: 2px;
}
</style>
