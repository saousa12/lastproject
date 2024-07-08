<template>
  <div>
    <div class="carousel">
      <v-carousel
        color="white"
        hide-delimiter-background
        show-arrows="hover"
        style="color: white; height: auto"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          cover
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div class="new-product my-14">
      <div class="text-center text-h3 my-10">
        <div>New Products</div>
        <div class="text-h5">
          A perfect blend of creativity, energy, communication, happiness and
          love. Let us arrange a smile for you.
        </div>
      </div>
      <div class="d-flex justify-center">
        <div class="image-container">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/14/13/24/ai-generated-8633136_640.png"
            class="resized-image"
          />
        </div>
        <div class="image-container">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/14/13/24/ai-generated-8633136_640.png"
            class="resized-image"
          />
        </div>
        <div class="image-container">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/14/13/24/ai-generated-8633136_640.png"
            class="resized-image"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="d-flex justify-center">
        <div class="overlay">
          <div class="text-overlay">
            <p class="text-h5">natural</p>
            <p class="text-h3 font-weight-black">Decor Home</p>
            <v-btn color="green">Show now</v-btn>
          </div>
          <img
            src="https://prestashop5.templatetrip.com/PRSTM01/PRSTM003_plant/img/cms/banner-02.jpg"
            class="custom-image"
          />
        </div>
        <div class="overlay text-white">
          <div class="text-overlay">
            <p class="text-h5">natural</p>
            <p class="text-h3 font-weight-black">Decor Home</p>
            <v-btn text-color="black">Show now</v-btn>
          </div>
          <img
            src="https://prestashop5.templatetrip.com/PRSTM01/PRSTM003_plant/img/cms/banner-01.jpg"
            class="custom-image"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.image-container {
  background-color: #f0f0f0;
  margin: 5px;
  border-radius: 5px;
}
.resized-image {
  width: auto;
  height: 400px;
  object-fit: cover;
}
.custom-image {
  object-fit: cover;
}
.overlay {
  position: relative;
  display: inline-block;
  margin: 1%;
}
.text-overlay {
  position: absolute;
  top: 50%; /* จุดศูนย์กลางในแนวตั้ง */
  left: 20px; /* ระยะของ text-overlay จากซ้าย */
  transform: translateY(-50%); /* ย้าย text-overlay ให้อยู่กลางจากด้านบนลงมา */
  text-align: center;
  z-index: 1;
}
</style>
