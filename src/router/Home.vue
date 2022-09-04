<template>
  <div>
    <div class="main_slide">
      <!-- :autoplay="{
          delay: 6000,
          disableOnInteraction: false,
        }" -->
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :speed="1000"
        :parallax="true"
        class="main_top_swiper"
      >
        <!-- main_slide -->
        <swiper-slide v-for="mainslide in main_slide" :key="mainslide.id">
          <div class="img">
            <img :src="mainslide.imgSrc" alt="" />
          </div>
          <div class="text">
            <h1 data-swiper-parallax="-500">{{ mainslide.title }}</h1>
            <p data-swiper-parallax="-300">
              {{ mainslide.sub_title }} <br />
              {{ mainslide.sub_title_02 }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="container content">
      <div class="card-list">
        <!-- 카드1 -->
        <div class="card">
          <a
            href="https://app.catchtable.co.kr/ct/search/total"
            target="_blank"
          >
            <div class="cnt">
              <h2>RESERVATION</h2>
              <span>{{ $t("main_card_list.list_01") }}</span>
            </div>
            <div class="icon">
              <v-lazy-image
                :src="reservation_img[0].imgSrc"
                :srcset="
                  reservation_img[0].imgSrc +
                  ' 1x,' +
                  reservation_img[1].imgSrc +
                  ' 2x,' +
                  reservation_img[2].imgSrc +
                  ' 3x'
                "
              />
            </div>
            <div class="img">
              <img
                :src="require('../assets/mainImage/main_reservation.png')"
                lazy="loading"
              />
            </div>
          </a>
        </div>
        <!-- //카드1 -->

        <!-- 카드2 -->
        <div class="card">
          <router-link to="/gift/giftset">
            <div class="cnt">
              <h2>GIFT</h2>
              <span>{{ $t("main_card_list.list_02") }}</span>
            </div>
            <div class="icon">
              <v-lazy-image
                :src="gift_img[0].imgSrc"
                :srcset="
                  gift_img[0].imgSrc +
                  ' 1x,' +
                  gift_img[1].imgSrc +
                  ' 2x,' +
                  gift_img[2].imgSrc +
                  ' 3x'
                "
              />
            </div>
            <div class="img">
              <img
                :data-lazy="require('../assets/mainImage/main_gift.png')"
                v-lazyloadImage
              />
            </div>
          </router-link>
        </div>
        <!-- //카드2 -->

        <!-- 카드3 -->
        <div class="card">
          <router-link to="/store">
            <div class="cnt">
              <h2>SEARCH</h2>
              <span>{{ $t("main_card_list.list_03") }}</span>
            </div>
            <div class="icon">
              <v-lazy-image
                :src="store_search_img[0].imgSrc"
                :srcset="
                  store_search_img[0].imgSrc +
                  ' 1x,' +
                  store_search_img[1].imgSrc +
                  ' 2x,' +
                  store_search_img[2].imgSrc +
                  ' 3x'
                "
              />
            </div>
            <div class="img">
              <img
                :data-lazy="require('../assets/mainImage/main_search.png')"
                v-lazyloadImage
              />
            </div>
          </router-link>
        </div>
        <!-- //카드3 -->
      </div>

      <div class="video_wrap">
        <div class="video_cnt">
          <iframe
            width="100%"
            height="385px"
            src="https://www.youtube.com/embed/oknrs7qFI10"
            controls
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="video_desc">
          <h2>WE ARE WOODAUM+82</h2>
          <p>
            {{ $t("main_youtube.desc_01") }} <br />
            {{ $t("main_youtube.desc_02") }}
          </p>
        </div>
      </div>

      <div class="insta_wrap">
        <div class="tit">
          <span></span>
          <h2>WOODAUM+82 INSTAGRAM</h2>
          <span></span>
        </div>

        <!-- iframeList -->
        <div class="instagram">
          <div v-for="insta in iframeList" :key="insta.id">
            <iframe
              :src="insta.src"
              frameborder="0"
              width="100%"
              height="393px"
              scrolling="no"
              allowtransparency="true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- bottom slide
    
      :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
                :pagination="{
          type: 'fraction',
        }"
    -->
    <div class="bottom_swiper_wrap">
      <swiper
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :controller="{ control: controlledSwiper }"
        :navigation="true"
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        class="main_bot_swiper"
        ref="main_bot_swiper"
        @swiper="onSwiper"
        @slideChangeTransitionEnd="slideChangeTransitionEnd"
      >
        <swiper-slide v-for="botslide in main_bot_slide" :key="botslide.id">
          <div class="container">
            <div class="box">
              <div class="box_cnt">
                <!-- <span v-if="$i18n.locale === 'ko'">{{ menu.name }}</span> -->
                <h2 v-if="$i18n.locale === 'ko'">{{ botslide.title }}</h2>
                <h2 v-else>{{ botslide.sub_title }}</h2>
                <span v-if="$i18n.locale === 'ko'">{{
                  botslide.sub_title
                }}</span>
                <p>
                  {{ botslide.desc }}
                </p>
              </div>
              <div class="box_img">
                <img :src="botslide.imgSrc" alt="" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!--임시주석처리-->
      <!-- <div class="control_wrap" v-on:click="playEvent">
        <div class="paly_btn">
          <img v-show="paly === true" :src="iconImg[1].imgSrc" />
          <img
            v-show="paly === false"
            :src="iconImg[0].imgSrc"
            style="display: none"
          />
        </div>
        <div class="index_wrap">
          <span>1/10</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SkeletonBox from "@/components/common/SkeletonBox";

import { Navigation, Pagination, Autoplay, Parallax, Controller } from "swiper";

export default {
  name: "HomePage",
  data() {
    return {
      paly: true,
      swiperObj: null,
      iframeList: [
        {
          id: 1,
          src: "https://www.instagram.com/p/CYP5GvKBRiG/embed",
        },
        {
          id: 2,
          src: "https://www.instagram.com/p/CQFpcAJjl9M/embed",
        },
        {
          id: 3,
          src: "https://www.instagram.com/p/CP7E-7KD---/embed",
        },
        {
          id: 4,
          src: "https://www.instagram.com/p/CPzvidljPA4/embed",
        },
        {
          id: 5,
          src: "https://www.instagram.com/p/CPmttTQjr-U/embed",
        },
        {
          id: 6,
          src: "https://www.instagram.com/p/CPU5C8lD2em/embed",
        },
        {
          id: 7,
          src: "https://www.instagram.com/p/CPFTjTyj7bX/embed",
        },
        {
          id: 8,
          src: "https://www.instagram.com/p/COj6TA-hr2G/embed",
        },
      ],
      iconImg: [
        { imgSrc: require("../assets/icon/paly_btn.png") },
        { imgSrc: require("../assets/icon/pause_btn.png") },
      ],
      reservation_img: [
        { imgSrc: require("../assets/mainImage/reservation_img.png") },
        { imgSrc: require("../assets/mainImage/reservation_img@2x.png") },
        { imgSrc: require("../assets/mainImage/reservation_img@3x.png") },
      ],
      gift_img: [
        { imgSrc: require("../assets/mainImage/gift_img.png") },
        { imgSrc: require("../assets/mainImage/gift_img@2x.png") },
        { imgSrc: require("../assets/mainImage/gift_img@3x.png") },
      ],
      store_search_img: [
        { imgSrc: require("../assets/mainImage/store_search.png") },
        { imgSrc: require("../assets/mainImage/store_search@2x.png") },
        { imgSrc: require("../assets/mainImage/store_search@3x.png") },
      ],
      main_slide: [
        {
          id: 1,
          title: this.$t("main_slide_01.title"),
          sub_title: this.$t("main_slide_01.sub_title"),
          imgSrc: require("../assets/mainImage/main_slide_01.jpg"),
        },
        {
          id: 2,
          title: this.$t("main_slide_02.title"),
          sub_title: this.$t("main_slide_02.sub_title"),
          sub_title_02: this.$t("main_slide_02.sub_title_02"),
          imgSrc: require("../assets/mainImage/main_slide_03.jpg"),
        },
        {
          id: 3,
          title: this.$t("main_slide_03.title"),
          sub_title: this.$t("main_slide_03.sub_title"),
          imgSrc: require("../assets/mainImage/main_slide_02.jpg"),
        },
      ],
      main_bot_slide: [
        {
          id: 1,
          title: "스페셜",
          sub_title: "Assorted Korean beef",
          desc: this.$t("manu_01.desc"),
          imgSrc: require("../assets/menu/menu-1.png"),
        },
        {
          id: 2,
          title: "꽂등심",
          sub_title: "Aged Korean beef rib-eye Korean beef ",
          desc: this.$t("manu_02.desc"),
          imgSrc: require("../assets/menu/menu-2.png"),
        },
        {
          id: 3,
          title: "등심",
          sub_title: "Aged Korean beef rib-eye Korean beef",
          desc: this.$t("manu_03.desc"),
          imgSrc: require("../assets/menu/menu-3.png"),
        },
        {
          id: 4,
          title: "특안심",
          sub_title: "Aged Korean beef sirloin",
          desc: this.$t("manu_04.desc"),
          imgSrc: require("../assets/menu/menu-4.png"),
        },
        {
          id: 5,
          title: "살치살",
          sub_title: "Aged Korean beef chuck flap tail",
          desc: this.$t("manu_05.desc"),
          imgSrc: require("../assets/menu/menu-5.png"),
        },
        {
          id: 6,
          title: "새우살",
          sub_title: "Aged Korean beef rib-eye cap",
          desc: this.$t("manu_06.desc"),
          imgSrc: require("../assets/menu/menu-6.png"),
        },
        {
          id: 7,
          title: "안창살",
          sub_title: "Aged Korean beef thin skirt",
          desc: this.$t("manu_07.desc"),
          imgSrc: require("../assets/menu/menu-7.png"),
        },
        {
          id: 8,
          title: "치마살",
          sub_title: "Aged Korean beef thin flank meat",
          desc: this.$t("manu_08.desc"),
          imgSrc: require("../assets/menu/menu-8.png"),
        },
      ],
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SkeletonBox,
    VLazyImage,
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.main_bot_slide;
    },
  },
  methods: {
    slideChangeTransitionEnd(index) {
      // this.main_bot_slide.length
      // console.log(index.realIndex, index);
      if (this.paly === false) {
        index.autopaly.paused = true;
      }
    },
    playEvent: function () {
      if (this.paly === true) {
        this.paly = false;
      } else {
        this.paly = true;
      }
    },
    handler(component) {
      console.log(component);
    },
  },
  setup() {
    const controlledSwiper = ref(null);
    const setControlledSwiper = (swiper) => {
      controlledSwiper.value = swiper;
    };
    return {
      controlledSwiper,
      setControlledSwiper,
      modules: [Navigation, Pagination, Autoplay, Parallax, Controller],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

.Skeleton {
  width: 100%;
  height: 100vh;
  background-color: #cccccc;
}

.swiper-slide-duplicate {
  font-size: 18px;
  background: #fafaf6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_slide {
  .swiper-slide {
    overflow: hidden;
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 3px;
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    line-height: 1em;
    bottom: 24px;
  }
  .swiper-pagination-bullet-active {
    background-color: $secondary_color_01 !important;
  }
  .swiper-pagination-bullet {
    background-color: #ffffff;
    opacity: 1;
  }
}

.main_bot_swiper {
  .swiper-pagination {
    color: #ffffff;
    > span {
      color: #ffffff;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    height: 38px;
    color: $secondary_color_01;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 38px;
    font-weight: 600;
  }
}

@media (max-width: 1300px) {
  .main_bot_swiper {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.skeltone {
  background-color: #ccc;
}

#header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 500;
}

.main_slide {
  width: 100%;
  height: 100vh;
  margin-bottom: 80px;

  .main_top_swiper {
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .swiper-slide {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;

      > .img {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        z-index: 1;

        > img {
          height: 100%;
        }
      }

      > .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        box-sizing: border-box;
        padding: 0 25px;
        transition: all 0.3s ease-in;

        > h1 {
          margin-bottom: 45px;
          color: #ffffff;
          text-align: center;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
        }

        > p {
          display: inline-block;
          width: 350px;
          word-break: keep-all;
          text-align: center;
          color: #ffffff;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
}

.card-list {
  margin-bottom: 100px;
  display: flex;
  align-items: flex-start;
  gap: 0 20px;

  .card {
    position: relative;
    width: 33.3334%;
    height: 130px;
    box-sizing: border-box;
    overflow: hidden;

    .img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;

      > img {
        width: 100%;
      }
    }

    > a {
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 24px;
    }
    .cnt {
      position: relative;
      z-index: 11;
      > h2 {
        color: #ffffff;
        line-height: 1.2em;
        font-family: "Montserrat", sans-serif;
      }

      > span {
        color: #ffffff;
      }
    }
    .icon {
      z-index: 11;
      position: absolute;
      right: 24px;
      bottom: 24px;
    }
  }
}

.video_wrap {
  display: flex;
  align-items: center;
  gap: 0 73px;
  margin-bottom: 100px;

  > .video_cnt {
    width: 65%;
    height: 385px;
  }
  > .video_desc {
    width: 35%;
    > h2 {
      font-family: "Montserrat", sans-serif;
      color: #b98947;
      margin-bottom: 3px;
    }
    > p {
      font-size: 18px;
      font-weight: 600;
    }
  }
}

.insta_wrap {
  margin-bottom: 100px;
  > .tit {
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    > span {
      width: 33.3334%;
      display: block;
      height: 1px;
      background-color: $basic_color_01;
    }
    > h2 {
      width: 33.3334%;
      font-family: "Montserrat", sans-serif;
      text-align: center;
    }
  }

  .Header {
    display: none !important;
  }

  > .instagram {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 1%;
    > div {
      position: relative;
      display: inline-block;
      overflow: hidden;
      cursor: pointer;
      width: 24.25%;
      box-sizing: border-box;
      background-color: grey;

      > iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &::after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
  }
}

.bottom_swiper_wrap {
  position: relative;
  padding-bottom: 100px;
  > .control_wrap {
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    padding: 0 8px;
    background-color: rgba(0, 0, 0, 0.5);

    > div {
      line-height: initial;
      font-size: 0;
    }

    .paly_btn {
      margin-right: 12px;
      cursor: pointer;
    }

    .index_wrap {
      span {
        font-size: 12px;
        color: #ffffff;
      }
    }
  }
}

.main_bot_swiper {
  width: 100%;
  height: 560px;
  margin: 0 auto;

  .swiper-slide {
    background: #fafaf6;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      height: inherit;
    }

    .box {
      height: inherit;
      display: flex;
      align-items: flex-start;
      gap: 0 60px;

      > .box_cnt {
        height: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        > h2 {
          margin-bottom: 8px;
        }

        > span {
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          margin-bottom: 20px;
          font-size: 14px;
        }

        > p {
          display: inline-block;
          width: 300px;
          word-break: keep-all;
          font-weight: 600;
        }
      }

      > .box_img {
        width: 760px;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        > img {
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 1250px) {
  .main_slide {
    height: 620px;
    .main_top_swiper .swiper-slide > .text > h1 {
      font-size: 24px;
      margin-bottom: 35px;
    }
  }
  .insta_wrap > .instagram > div {
    width: 32.6667%;
    > iframe {
      height: 470px;
    }
  }
}

@media (max-width: 1250px) {
  .insta_wrap {
    display: none;
  }
}

@media (max-width: 965px) {
  .main_bot_swiper .swiper-slide .container {
    padding: 0;
  }
  .main_bot_swiper .swiper-slide .box {
    position: relative;

    .box_img {
      width: 100%;
    }
    .box_cnt {
      position: absolute;
      left: 40px;
      > h2,
      span,
      p {
        color: #ffffff;
      }
    }
  }
}

@media (max-width: 768px) {
  .bottom_swiper_wrap {
    padding-bottom: 180px;
  }
  .main_slide {
    margin-bottom: 25px;
  }
  .main_bot_swiper .swiper-slide .box > .box_cnt > p {
    display: none;
  }
  .video_wrap {
    flex-direction: column;
    gap: 15px 0;
    margin-bottom: 40px;
    > .video_cnt {
      width: 100%;
      height: 250px;

      > iframe {
        height: 250px;
      }
    }

    > .video_desc {
      width: 100%;

      > p {
        font-size: 16px;
      }
    }
  }
  .card-list {
    display: none;
  }
  .insta_wrap > .instagram {
    gap: 5px 1%;
  }
  .insta_wrap > .instagram > div {
    width: 32.3334%;
  }
  .main_bot_swiper {
    height: 210px;
  }
  .insta_wrap {
    margin-bottom: 40px;
  }
}
@media (max-width: 650px) {
  .insta_wrap > .tit {
    margin-bottom: 12px;
  }
  .insta_wrap > .tit > span {
    display: none;
  }
  .insta_wrap > .tit > h2 {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .main_slide .main_top_swiper .swiper-slide > .text > p {
    width: 250px;
  }
}
</style>
