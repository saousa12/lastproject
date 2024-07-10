<template>
  <div>
    <div class="carousel">
      <v-carousel
        color="white"
        hide-delimiter-background
        show-arrows="hover"
        style="color: black"
        height="800"
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
      <div class="d-flex justify-center flex-row">
        <div
          v-for="(product, index) in newProducts"
          :key="index"
          class="text-center font-weight-bold text-h6"
        >
          <img :src="product.src" class="resized-image" />
          <p>{{ product.name }}</p>
          <p class="text-light-green">{{ product.price }}</p>
        </div>
      </div>
    </div>
    <div class="sale">
      <v-row class="ma-5 pa-5">
        <v-col class="d-flex justify-end"
          ><img
            src="https://cdn.pixabay.com/photo/2022/04/30/18/05/rosemary-7166091_640.jpg"
          />
        </v-col>
        <v-col
          class="d-flex flex-column justify-center"
          style="margin-left: 5%"
        >
          <p class="text-h3 custom-font">Holiday Gifts</p>
          <div
            style="
              width: 100px;
              height: 2px;
              background-color: gray;
              margin-top: 3%;
            "
          ></div>
          <p class="text-h2 mt-3 font-weight-bold text-uppercase">
            Big Sale -30%
          </p>
          <p class="text-h5 mt-5">
            We specialize in creating the perfect small tree expression of your
            message. Whether it is love, condolences, friendship, or
            celebration, we are ready to deliver your message through small
            trees. We also offer daily delivery.
          </p>
          <v-btn
            href="#"
            color="green-darken-4"
            max-width="10rem"
            size="large"
            rounded="xl"
            variant="outlined"
            style="margin-top: 10%"
            >View look</v-btn
          >
        </v-col>
      </v-row>
    </div>
    <div class="sale">
      <v-row class="ma-5 pa-5">
        <v-col
          class="d-flex flex-column justify-center"
          style="margin-left: 10%"
        >
          <p class="text-h3 custom-font">7 Day</p>
          <div
            style="
              width: 100px;
              height: 2px;
              background-color: gray;
              margin-top: 3%;
            "
          ></div>
          <p
            class="text-h2 mt-3 font-weight-bold"
            style="text-transform: uppercase"
          >
            IDEAL FRESHNESS
          </p>

          <p class="text-h5 mt-5">
            We specialize in creating the perfect small tree expression of your
            message. Whether it is love, condolences, friendship, or
            celebration, we are ready to deliver your message through small
            trees. We also offer daily delivery.
          </p>
          <v-btn
            href="#"
            color="green-darken-4"
            max-width="10rem"
            size="large"
            rounded="xl"
            variant="outlined"
            style="margin-top: 10%"
            >View look</v-btn
          >
        </v-col>
        <v-col
          ><img
            src="https://cdn.pixabay.com/photo/2024/01/27/08/22/ai-generated-8535500_640.png"
          />
        </v-col>
      </v-row>
    </div>
    <div class="band">
      <div class="d-flex justify-center">
        <div class="overlay">
          <div class="text-overlay">
            <p class="text-h5">natural</p>
            <p class="text-h3 font-weight-black">Decor Home</p>
            <v-btn color="green" style="margin-top: 1rem">Show now</v-btn>
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
            <v-btn text-color="black" style="margin-top: 1rem">Show now</v-btn>
          </div>
          <img
            src="https://prestashop5.templatetrip.com/PRSTM01/PRSTM003_plant/img/cms/banner-01.jpg"
            class="custom-image"
          />
        </div>
      </div>
    </div>
    <div class="shop" id="shop">
      <div style="margin: 5% 0%">
        <div>
          <p class="text-h3 text-center">Featured Item</p>
        </div>
        <div class="d-flex justify-center ma-5">
          <v-btn
            v-for="(btn, index) in buttons"
            :key="index"
            rounded="xl"
            size="large"
            :color="selectedButton === index ? 'green' : ''"
            @click="setButton(index)"
            class="ma-2"
          >
            {{ btn }}
          </v-btn>
        </div>
        <div>
          <v-row class="d-flex justify-center">
            <v-col
              v-for="(item, index) in displayedFeatures"
              :key="index"
              cols="12"
              md="2"
              class="mr-2"
            >
              <div class="text-center text-h6">
                <img :src="item.img" alt="" class="resized-image" />
                <p>⭐⭐⭐⭐⭐</p>
                <p>{{ item.name }}</p>
                <p class="text-red">{{ item.price }}</p>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="d-flex flex-row justify-center" style="margin-right: 15px">
          <v-btn rounded="xl" @click="scrollLeft" :disabled="currentIndex === 0"
            >←</v-btn
          >
          <v-btn
            rounded="xl"
            @click="scrollRight"
            :disabled="currentIndex === maxIndex"
            >→</v-btn
          >
        </div>
      </div>
    </div>
    <div class="blog" id="blog">
      <div
        class="bg-light-green-lighten-3"
        style="margin: 5% 0% 0% 0%; padding: 5% 0% 5% 0%; text-align: center"
      >
        <div>
          <p class="text-h3">From Our Blog</p>
          <p class="text-h5">
            A perfect blend of creativity, energy, communication, happiness and
            love. Let us arrange a smile for you.
          </p>
        </div>
        <div class="d-flex flex-row justify-center mt-5">
          <div v-for="(blog, index) in Blogs" :key="index">
            <v-card class="ma-2 pa-2 text-start" width="500" height="550">
              <div>
                <v-img
                  :src="blog.img"
                  alt=""
                  max-height="20rem"
                  class="custom-image"
                ></v-img>
                <v-card-title>{{ blog.title }}</v-card-title>
                <v-card-subtitle>
                  {{ blog.writer }} / {{ blog.date }}
                </v-card-subtitle>
                <v-card-text>{{ blog.content }}</v-card-text>
              </div>
              <div>
                <v-divider class="mx-3" />
                <div class="d-flex justify-space-between px-4 py-2">
                  <a href="#">Continue Reading</a>
                  <div class="d-flex flex-row">
                    <v-icon icon="mdi-heart-outline" />
                    <p class="ml-2">0</p>
                  </div>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isActive: false,
      selectedButton: 0,
      focus: false,
      buttons: ["Special Product", "Feature", "Bestseller"],
      newProducts: [
        {
          name: "Ornamental Sweet Potato",
          src: "https://prestashop5.templatetrip.com/PRSTM01/PRSTM003_plant/163-home_default/the-adventure-begins-framed-poster.jpg",
          price: "$12.90",
        },
        {
          name: "Variegated Solomon Seal",
          src: "https://prestashop5.templatetrip.com/PRSTM01/PRSTM003_plant/203-home_default/brown-bear-cushion.jpg",
          price: "$68.90",
        },
        {
          name: "Dense Blazing Star",
          src: "https://prestashop5.templatetrip.com/PRSTM01/PRSTM003_plant/239-home_default/mountain-fox-notebook.jpg",
          price: "$12.90",
        },
      ],
      items: [
        {
          src: "https://cdn.pixabay.com/photo/2024/04/21/01/27/ai-generated-8709663_640.png",
        },
        {
          src: "https://cdn.pixabay.com/photo/2019/11/18/08/21/bonsai-4634225_640.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_640.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2017/01/30/10/03/book-2020460_640.jpg",
        },
      ],
      Blogs: [
        {
          img: "https://cdn.pixabay.com/photo/2017/03/16/13/49/desk-2149265_640.jpg",
          title: "Indoor Plant Care Tips",
          writer: "Jane Doe",
          content:
            "Learn how to take care of your indoor plants with these simple tips.",
          date: "2024-06-12",
        },
        {
          img: "https://cdn.pixabay.com/photo/2017/03/16/13/49/desk-2149265_640.jpg",
          title: "Best Tools for Gardening",
          writer: "John Smith",
          content:
            "Discover the best tools for making your gardening easier and more enjoyable.",
          date: "2024-05-08",
        },
        {
          img: "https://cdn.pixabay.com/photo/2017/03/16/13/49/desk-2149265_640.jpg",
          title: "How to Repot Your Plants",
          writer: "Anna Johnson",
          content:
            "Step-by-step guide to repotting your plants to ensure they stay healthy and grow well.",
          date: "2024-04-20",
        },
      ],
      features: [
        {
          name: "Monstera Deliciosa",
          price: "$29.99",
          img: "https://cdn.pixabay.com/photo/2021/03/19/08/00/monstera-plant-6106850_640.jpg",
        },
        {
          name: "Fiddle Leaf Fig",
          price: "$39.99",
          img: "https://th.bing.com/th/id/R.7b5fecbf5568651e8eff22058f6fa49e?rik=vfcAfhCAhPdztQ&pid=ImgRaw&r=0",
        },
        {
          name: "Snake Plant",
          price: "$19.99",
          img: "https://th.bing.com/th/id/OIP.VsjL5J_cyPvJM1ZnMPCXGQHaJQ?w=205&h=256&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          name: "Peace Lily",
          price: "$24.99",
          img: "https://th.bing.com/th/id/OIP.M0ppDfkNqLMbZ14K62lVIwHaJ4?w=205&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          name: "Pothos",
          price: "$14.99",
          img: "https://cdn.pixabay.com/photo/2024/03/03/03/44/ai-generated-8609739_640.jpg",
        },
        {
          name: "Pilea Peperomioides",
          price: "$15",
          img: "https://th.bing.com/th/id/R.36d3fec0c553e6d09dfd38d26aea4089?rik=s7Bl7MNl6qjvsQ&pid=ImgRaw&r=0",
        },
        {
          name: "String of Pearls",
          price: "$20",
          img: "https://th.bing.com/th/id/OIP.ukwa5RpYVFgfrceBxkiF_gHaJ3?rs=1&pid=ImgDetMain",
        },
        {
          name: "Ficus Elastica 'Tineke'",
          price: "$25",
          img: "https://th.bing.com/th/id/OIP.VOmwF48T4eHxjCY1hGmSHQHaHa?rs=1&pid=ImgDetMain",
        },
        {
          name: "Calathea Orbifolia",
          price: "$18",
          img: "https://th.bing.com/th/id/OIP.MbKLSf0vA-xIG-5x8D-MPQHaHr?rs=1&pid=ImgDetMain",
        },
        {
          name: "Hoya Kerrii",
          price: "$22",
          img: "https://i.etsystatic.com/14339179/r/il/d7a37b/2816836250/il_600x600.2816836250_43cn.jpg",
        },
      ],
      currentIndex: 0,
      itemsPerPage: 4,
    };
  },
  methods: {
    setButton(index) {
      this.selectedButton = index;
    },
    scrollLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    scrollRight() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++;
      }
    },
  },
  computed: {
    maxIndex() {
      return Math.ceil(this.features.length / this.itemsPerPage) - 1;
    },
    displayedFeatures() {
      const start = this.currentIndex * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.features.slice(start, end);
    },
  },
};
</script>

<style scoped>
.resized-image {
  background-color: #f0f0f0;
  border-radius: 5px;
  margin: 5px;
  width: 300px;
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

.custom-font {
  font-family: "Times New Roman", Times, serif;
}
a:hover {
  color: blue;
}
a {
  color: black;
}
#like:active {
  color: red;
}
</style>
