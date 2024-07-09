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
      <div class="d-flex justify-center flex-row">
        <div v-for="(product, index) in newProducts" :key="index">
          <img :src="product.src" class="resized-image" />
        </div>
      </div>
    </div>
    <div>
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
            We specialize in creating the perfect floral expression of your
            message. May it be love, condolences, friendship or celebration we
            are ready to deliver your message in floral. We also deliver daily.
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
    <div>
      <div class="d-flex flex-column bg-green-lighten-3">
        <div style="padding: 5% 0% 5% 0%; text-align: center">
          <p class="text-h3">From Our Blog</p>
          <p class="text-h5">
            A perfect blend of creativity, energy, communication, happiness and
            love. Let us arrange a smile for you.
          </p>
        </div>
        <div>
          <v-row>
            <v-col
              v-for="(blog, index) in Blogs"
              :key="index"
              cols="12"
              md="4"
              class="mb-4"
            >
              <v-card>
                <img
                  :src="blog.img"
                  alt=""
                  style="max-height: 20rem"
                  class="custom-imge"
                />
                <v-card-title>{{ blog.title }}</v-card-title>
                <v-card-subtitle
                  >{{ blog.writer }}/{{ blog.date }}</v-card-subtitle
                >
                <v-card-text>{{ blog.content }}</v-card-text>
                <v-divider style="margin: 0 3% 0 3%"></v-divider>
                <div style="padding: 2%" class="d-flex justify-space-between">
                  <a href="#">Continue Reading</a>
                  <div class="d-flex flex-row">
                    <v-icon id="like">{{
                      active ? "mdi-heart" : "mdi-heart-outline"
                    }}</v-icon>
                    <p>1</p>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      newProducts: [
        {
          src: "https://prestashop5.templatetrip.com/PRSTM01/PRSTM003_plant/163-home_default/the-adventure-begins-framed-poster.jpg",
        },
        {
          src: "https://prestashop5.templatetrip.com/PRSTM01/PRSTM003_plant/157-home_default/the-best-is-yet-to-come-framed-poster.jpg",
        },
        {
          src: "https://prestashop5.templatetrip.com/PRSTM01/PRSTM003_plant/239-home_default/mountain-fox-notebook.jpg",
        },
      ],
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
      Blogs: [
        {
          img: "https://cdn.pixabay.com/photo/2021/12/06/18/48/botanical-6851296_640.jpg",
          title: "การเลือกต้นไม้กระถางที่เหมาะสมสำหรับบ้านคุณ",
          writer: "สมชาย พืชพันธุ์",
          content:
            "ต้นไม้กระถางไม่เพียงแต่เพิ่มความสดชื่นให้กับบ้านของคุณ แต่ยังช่วยปรับปรุงอากาศภายในบ้านได้อีกด้วย...",
          date: "2024-07-01",
        },
        {
          img: "https://cdn.pixabay.com/photo/2021/12/06/18/48/botanical-6851296_640.jpg",
          title: "วิธีการดูแลต้นไม้กระถางในหน้าร้อน",
          writer: "สมหญิง ธรรมชาติ",
          content:
            "หน้าร้อนเป็นช่วงเวลาที่ท้าทายสำหรับการดูแลต้นไม้กระถาง แต่ด้วยเทคนิคที่ถูกต้อง คุณสามารถทำให้ต้นไม้ของคุณเจริญเติบโตได้ดี...",
          date: "2024-07-05",
        },
        {
          img: "https://cdn.pixabay.com/photo/2021/12/06/18/48/botanical-6851296_640.jpg",
          title: "อุปกรณ์ปลูกต้นไม้ที่จำเป็นสำหรับมือใหม่",
          writer: "สมปอง พรรณพืช",
          content:
            "การปลูกต้นไม้ไม่ยากอย่างที่คิด หากคุณมีอุปกรณ์ที่ถูกต้องและรู้จักวิธีการใช้...",
          date: "2024-07-10",
        },
        {
          img: "https://cdn.pixabay.com/photo/2021/12/06/18/48/botanical-6851296_640.jpg",
          title: "ไอเดียการจัดสวนด้วยต้นไม้กระถาง",
          writer: "สมพร สีเขียว",
          content:
            "การจัดสวนด้วยต้นไม้กระถางไม่เพียงแต่เป็นการเพิ่มความสวยงามให้กับบ้านของคุณ แต่ยังช่วยสร้างพื้นที่สำหรับการพักผ่อน...",
          date: "2024-07-15",
        },
        {
          img: "https://cdn.pixabay.com/photo/2021/12/06/18/48/botanical-6851296_640.jpg",
          title: "เคล็ดลับการเลือกดินปลูกที่เหมาะสม",
          writer: "สมศักดิ์ สวนสนุก",
          content:
            "การเลือกดินปลูกที่เหมาะสมเป็นสิ่งสำคัญในการปลูกต้นไม้ให้เจริญเติบโตได้ดี มาดูกันว่าคุณควรเลือกดินแบบไหน...",
          date: "2024-07-20",
        },
      ],
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
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
