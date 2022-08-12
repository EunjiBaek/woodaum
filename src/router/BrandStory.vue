<template>
  <main id="brandstory">
    <!-- <modal-popup /> -->
    <section id="section1" class="content_item">
      <div class="content">
        <h2>우다움 이야기</h2>
        <p class="sub-tit">‘숙성 투뿔 한우 전문점’</p>
        <p class="content">
          우다움+82는 질 좋은 한우에 우다움 숙성 기술을 더하여 <br />
          한우 본연의 맛을 지키는 대한민국 숙성 투뿔한우암소 전문점 입니다.
        </p>
      </div>

      <div ref="section1" class="image" :style="section_img_01"></div>
    </section>

    <section id="section2" class="content_item">
      <div class="content">
        <h2>한우 이야기</h2>
        <p class="sub-tit">‘저온 숙성과정을 거친 1++ 최상급 암소 한우’</p>
        <p class="content">
          대한민국에서 건강하게 자란 1++등급 암소 한우만 엄선하여
          <br />정성스럽게 손질하고 숙성하였고 맛의 깊이는 더 깊어졌습니다.
        </p>
      </div>
      <div class="image" :style="section_img_02">></div>
    </section>

    <section id="section3" class="content_item">
      <div class="content">
        <h2>공간 이야기</h2>
        <p class="sub-tit">‘지금 이 순간을 더 특별하게'</p>
        <p class="content">
          우다움+82 에서는 고객님의 시간이 더 특별해 질 수 있도록
          <br />프라이빗한 공간과 편안한 다이닝 공간을 준비했습니다.
        </p>
      </div>
      <div class="image" :style="section_img_03"></div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
#brandstory {
  section {
    width: 100%;
    height: 625px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    > .image {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
      background-attachment: fixed;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 500;
    }

    > .content {
      position: relative;
      z-index: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h2 {
        color: white;
        font-size: 32px;
        margin-bottom: 24px;
      }

      > p {
        color: #ffffff;
        text-align: center;

        &.sub-tit {
          font-size: 24px;
          margin-bottom: 30px;
        }

        &.content {
          font-size: 18px;
        }
      }
    }
  }
  #section1 {
    > .image {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
      background-attachment: fixed;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 500;
    }
  }
}
</style>

<script>
// import ModalPopup from "@/components/common/ModalPopup.vue";

export default {
  name: "BrandStory",
  //   components: {
  //     ModalPopup,
  //   },
  //   methods: {
  //     click() {
  //       this.$modal.show("modal-popup");
  //     },
  //   },
  data() {
    return {
      section_img_01: {
        backgroundImage: `url(${require("../assets/brandstory/wodawum.jpg")})`,
      },
      section_img_02: {
        backgroundImage: `url(${require("../assets/brandstory/wodawum02.jpg")})`,
      },
      section_img_03: {
        backgroundImage: `url(${require("../assets/brandstory/wodawum03.jpg")})`,
      },
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      console.log(window.scrollY);
      let st = window.scrollY;
      this.$refs.section1.style.backgroundPositionY = -(st / 10) + "px";
    },
  },
};
</script>
