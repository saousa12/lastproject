<template>
  <div class="header">
    <h1 class="text-h2 text-center font-weight-bold spacing-playground pa-6">
      PlanT Shop
    </h1>
    <p>email {{ email }}</p>
    <p>password {{ uid }}</p>
    <v-container>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows="hover"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          height="100%"
        >
          <v-sheet>
            <div class="d-flex fill-height justify-center align-center">
              <div class="h2">{{ item.tname }} Trend</div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <br />

      <div>
        <v-card>
          <v-tabs v-model="tab" background-color="primary">
            <v-tab value="one">Trend ยอดนิยม</v-tab>
            <v-tab value="two">เคล็ดลับวิธีปลูกต้นไม้มงคล 2022</v-tab>
            <v-tab value="three">อ่านเพิ่มเติม</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                กระแสการปลูกต้นไม้มาแรงไม่แผ่วจริง ๆ
                เพราะนอกจากจะปลูกเป็นงานอดิเรกใช้เวลาว่างให้เกิดประโยชน์
                ช่วยเพิ่มความสดชื่น และบรรยากาศดี ๆ ให้กับบ้านของเราได้แล้ว
                ต้นไม้บางชนิดยังสามารถปลูกขายสร้างรายได้ให้กับคนอีกมากมาย
                และแน่นอนว่าในปี 2022
                การปลูกต้นไม้ก็ยังได้รับความสนใจอย่างต่อเนื่อง
                โดยเฉพาะต้นไม้มงคลเสริมโชคลาภต่าง ๆ
                วันนี้กระปุกดอทคอมเลยขอรวมลิสต์ต้นไม้มงคล 2022
                และต้นไม้ที่น่าปลูกในปีเสือมาฝากกัน
              </v-window-item>

              <v-window-item value="two">
                - หน้าประตูบ้าน : บริเวณนี้ปลูกได้ทั้งไม้ดอกและไม้ประดับมงคล
                เช่น ต้นศุภโชค นอกจากจะช่วยเสริมเรื่องโชคลาภ-เงินทองแล้ว
                ยังเชื่อกันว่าสามารถช่วยปัดเป่าและป้องกันสิ่งชั่วร้าย
                ไม่ให้เข้ามาทำร้ายคนในบ้านได้อีกด้วย
              </v-window-item>

              <v-window-item value="three"> อื่นๆ </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
  <div class="container">
    <div class="text-h2 d-flex justify-center"><br />ต้นไม้มงคล 2022<br /></div>
    <div class="d-flex justify-center">
      <v-btn color="green" @click="hide = !hide"> add Data</v-btn>
      <div class="d-flex justify-center"></div>
    </div>

    <br />
    <br />
    <div class="d-flex align-content-start flex-wrap justify-center">
      <v-card class="mx-3 mb-5" max-width="344" v-for="n in product" :key="n">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          cover
        ></v-img>

        <v-card-title>{{ n.fname }} </v-card-title>

        <v-card-subtitle> {{ n.sname }} </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text"> ดูรายละเอียด </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ n.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      items: [
        {
          tname: "ต้นไม้มงคล ปี 2022",
          src: "https://s359.kapook.com/pagebuilder/562962e6-5330-4f22-8b88-fd1068dbb14b.jpg",
        },
        {
          tname: "ต้นไม้มงคล ปี 2022",
          src: "https://s359.kapook.com/pagebuilder/3446c6cb-57c6-4bd8-a892-529628ed553b.jpg",
        },
        {
          tname: "ต้นไม้มงคล ปี 2022",
          src: "https://s359.kapook.com/pagebuilder/0dad449c-97dc-44bc-ae99-8f780bb5fb29.jpg",
        },
        {
          tname: "ต้นไม้มงคล ปี 2022",
          src: "https://s359.kapook.com/pagebuilder/8c384414-abba-4ec5-a0be-094ccaef1622.jpg",
        },
        {
          tname: "ต้นไม้มงคล ปี 2022",
          src: "https://s359.kapook.com/pagebuilder/4d4ac275-93e0-4c1d-bae4-c697c0f33660.jpg",
        },
      ],
      product: [
        {
          fname: "ต้นศุภโชค",
          sname: "(Pachira Aquatica)",
          src: "https://s359.kapook.com/pagebuilder/562962e6-5330-4f22-8b88-fd1068dbb14b.jpg",
          description:
            "เป็นต้นไม้ยืนต้นที่มีถิ่นกำเนิดในอเมริกากลางและอเมริกาใต้ เมื่อโตเต็มที่สามารถสูงได้ถึง 18 เมตร ในปัจจุบันนิยมนำมาปลูกในบ้านและให้เป็นของขวัญกันมากขึ้น เพราะเชื่อกันว่าเป็นต้นไม้มงคล ช่วยเสริมโชคลาภ-การเงินได้",
        },
        {
          fname: "ต้นคลาสซูล่า",
          sname: "( Crassula Ovata หรือ Jade Tree)",
          src: "https://s359.kapook.com/pagebuilder/3446c6cb-57c6-4bd8-a892-529628ed553b.jpg",
          description:
            "มีถิ่นกำเนิดในแอฟริกา จุดเด่นของต้นไม้ชนิดก็คือสามารถปรับตัวได้ดีทุกสภาพอากาศ เหมาะสำหรับปลูกในที่มีแดดตลอดทั้งวัน ความชื้นต่ำ และต้องการน้ำน้อย รดน้ำทุก 1-2 สัปดาห์ต่อครั้งก็เพียงพอ สามารถปลูกได้ทั้งในดินปลูกต้นไม้ทั่วไปและดินปลูกแคคตัส เพราะจัดอยู่ในกลุ่มเดียวกับต้นไม้อวบน้ำ หลายคนนิยมนำมาปลูกในบ้าน",
        },
      ],
      uid: "",
    };
  },
  methods: {
    add() {
      this.product.push();
    },
  },
};
</script>

<style>
header {
  text-align: center;
}
</style>
