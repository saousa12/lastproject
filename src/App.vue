<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <!-- <v-btn to="/"> <span class="mr-2 text-white">Home</span></v-btn> -->
      <div class="border-sm rounded-circle bg-white pa-2 my-5">
        <v-img
          src="https://cdn.pixabay.com/photo/2013/07/12/14/11/sapling-147940_640.png"
          style="height: 30px"
        />
        <p class="font-weight-black text-black">Plant shop</p>
      </div>
      <v-btn href="#"> <span class="mr-2 text-white">Home</span></v-btn>
      <v-btn href="#shop"><span class="mr-2 text-white">Shop</span></v-btn>
      <v-btn href="#blog"><span class="mr-2 text-white">Blog</span></v-btn>

      <v-spacer></v-spacer>
      <v-btn icon="mdi-facebook" />
      <v-btn icon="mdi-instagram" />
      <v-btn to="/login" id="login-btn">login</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="bg-brown-darken-1 text-center d-flex flex-column">
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
.my-5 {
  margin: 2% 0 2% 0%;
}
</style>
