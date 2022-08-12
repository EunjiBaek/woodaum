<template>
  <div>
    <div class="main_slide">
      <swiper
        :effect="'fade'"
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :speed="800"
        :parallax="true"
        class="main_top_swiper"
      >
        <swiper-slide>
          <div class="img">
            <img src="../assets/mainImage/main_slide_01.jpg" alt="" />
          </div>
          <div class="text">
            <h1 data-swiper-parallax="-500">숙성투뿔한우 전문점</h1>
            <p data-swiper-parallax="-300">
              우다움+82는 질 좋은 한우에 우다움 숙성 기술을 더하여 <br />
              한우 본연의 맛을 지키는 대한민국 숙성 한우 전문점 입니다.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img src="../assets/mainImage/main_slide_01.jpg" alt="" />
          </div>
          <div class="text">
            <h1 data-swiper-parallax="-500">숙성투뿔한우 전문점</h1>
            <p data-swiper-parallax="-300">
              우다움+82는 질 좋은 한우에 우다움 숙성 기술을 더하여 <br />
              한우 본연의 맛을 지키는 대한민국 숙성 한우 전문점 입니다.
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="container content">
      <div class="card-list">
        <!-- 카드1 -->
        <div class="card">
          <div class="cnt">
            <h2>RESERVATION</h2>
            <span>예약하기</span>
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
        </div>
        <!-- //카드1 -->

        <!-- 카드2 -->
        <div class="card">
          <div class="cnt">
            <h2>GIFT</h2>
            <span>선물세트 보러가기</span>
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
        </div>
        <!-- //카드2 -->

        <!-- 카드3 -->
        <div class="card">
          <div class="cnt">
            <h2>SEARCH</h2>
            <span>매장 찾기</span>
          </div>
        </div>
        <!-- //카드3 -->
      </div>

      <div class="video_wrap">
        <div class="video_cnt">
          <video></video>
        </div>

        <div class="video_desc">
          <h2>WE ARE WOODAUM+82</h2>
          <p>
            소고기 중의 소고기, 우다움 +82의 소고기는 <br />
            잠자던 미식 세포를 깨우는 한점의 예술입니다.
          </p>
        </div>
      </div>

      <div class="insta_wrap">
        <div class="tit">
          <span></span>
          <h2>WOODAUM INSTAGRAM</h2>
          <span></span>
        </div>
        <div class="instagram">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

    <!-- bottom slide
    
      :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
    -->
    <div class="bottom_swiper_wrap">
      <swiper
        :navigation="true"
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        class="main_bot_swiper"
      >
        <swiper-slide>
          <div class="container">
            <div class="box">
              <div class="box_cnt">
                <h2>살치살</h2>
                <span>Assorted Korean beef</span>
                <p>
                  균형잡힌 마블링과 부드러운 조직감을 지닌 <br />
                  최상등급(1++) 살치살
                </p>
              </div>
              <div class="box_img">
                <img src="../assets/mainImage/main_slide_01.jpg" alt="" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="container">
            <div class="box">
              <div class="box_cnt">
                <h2>살치살</h2>
                <span>Assorted Korean beef</span>
                <p>
                  균형잡힌 마블링과 부드러운 조직감을 지닌 <br />
                  최상등급(1++) 살치살
                </p>
              </div>
              <div class="box_img">
                <img src="../assets/mainImage/main_slide_01.jpg" alt="" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="container">
            <div class="box">
              <div class="box_cnt">
                <h2>살치살</h2>
                <span>Assorted Korean beef</span>
                <p>
                  균형잡힌 마블링과 부드러운 조직감을 지닌 <br />
                  최상등급(1++) 살치살
                </p>
              </div>
              <div class="box_img">
                <img src="../assets/mainImage/main_slide_01.jpg" alt="" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay, Parallax, EffectFade } from "swiper";

export default {
  name: "HomePage",
  data() {
    return {
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
    };
  },
  components: {
    VLazyImage,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay, Parallax, EffectFade],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

.swiper-slide-duplicate {
  font-size: 18px;
  background: #fafaf6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_slide {
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
</style>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.main_slide {
  width: 100%;
  height: 1010px;
  margin-bottom: 80px;

  .main_top_swiper {
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .swiper-slide {
      position: relative;
      background: #fafaf6;
      display: flex;
      justify-content: center;
      align-items: center;

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
          width: 100%;
        }
      }

      > .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;

        > h1 {
          margin-bottom: 45px;
          color: #ffffff;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
        }

        > p {
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
    padding: 24px;
    background-color: blue;
    > .cnt {
      > h2 {
        color: #ffffff;
        line-height: 1.2em;
        font-family: "Montserrat", sans-serif;
      }

      > span {
        color: #ffffff;
      }
    }
    > .icon {
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
    background-color: #000000;
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
  > .instagram {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    > div {
      position: relative;
      display: inline-block;
      overflow: hidden;
      cursor: pointer;
      width: 24%;
      box-sizing: border-box;
      background-color: grey;

      &::after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
  }
}
.bottom_swiper_wrap {
  margin-bottom: 100px;
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
          max-height: 100%;
        }
      }
    }
  }
}
</style>
