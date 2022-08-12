<template>
  <div>
    <div class="sub_top" :style="subtop_img">
      <div class="tab_btn">
        <ul>
          <li
            v-for="(tab, index) in tabs"
            v-bind:class="{ active: currentTab === index }"
            :key="tab.index"
          >
            <a href="#" v-on:click.prevent="currentTab = index">{{ tab }}</a>
          </li>
        </ul>
      </div>

      <div class="sub_desc">
        <strong>WOODAUM+82 Broiled</strong>
        <p>
          우다움+82는 우다움 숙성 기술을 더하여 <br />
          한우 특유의 부드러운 풍미를 최대로 즐기실 수 있도록 하였습니다.
        </p>
      </div>
    </div>

    <div class="sub_content">
      <div class="container">
        <div class="tab-content">
          <!--메뉴-->
          <div class="menu_wrap" v-show="currentTab == 0">
            <div class="menu_box">
              <div class="img">
                <img src="../assets/brandstory/wodawum02.jpg" alt="" />
              </div>
              <div class="content">
                <span>특안심</span>
                <p>Aged Korean beef sirloin</p>
              </div>
            </div>
            <div class="menu_box"></div>
            <div class="menu_box"></div>
            <div class="menu_box"></div>
          </div>
          <!--//메뉴-->

          <div v-show="currentTab == 1">2</div>

          <div v-show="currentTab == 2">3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.sub_top {
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .sub_desc {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > strong {
      font-size: 64px;
      font-weight: 100;
      font-family: Montserrat, sans-serif;
      color: #ffffff;
      line-height: 1.2em;
      margin-bottom: 30px;
    }

    > p {
      color: #ffffff;
      text-align: center;
    }
  }
}
.tab_btn {
  width: 100%;
  padding-top: 40px;

  > ul {
    position: relative;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-size: 0;

    &::after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 100%;
      height: 1px;
      background-color: #ffffff;
      opacity: 0.5;
    }

    > li {
      width: 120px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      display: inline-block;
      cursor: pointer;
      &.active {
        > a {
          display: inline-block;
          color: $secondary_color_01;

          &::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 100%;
            height: 4px;
            background-color: $secondary_color_01;
          }
        }
      }

      > a {
        position: relative;
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
      }
    }
  }
}

.sub_content {
  margin-top: 60px;
}

.menu_wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;

  > .menu_box {
    position: relative;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
    width: 33.3334%;
    box-sizing: border-box;
    transition: all 0.2s ease;

    &:hover {
      > .img > img {
        transform: scale(1.1);
      }
    }

    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    > .img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      transition: all 0.2s ease;

      > img {
        width: auto;
        max-height: 100%;
        transition: all 0.2s ease;
      }
    }

    > .content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 25px;
      width: 100%;

      > span {
        display: block;
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
        text-align: center;
        margin-bottom: 2px;
      }
      > p {
        color: #ffffff;
        text-align: center;
      }
    }
  }
}
</style>

<script>
export default {
  name: "MenuPage",
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      subtop_img: {
        backgroundImage: `url(${require("../assets/brandstory/wodawum02.jpg")})`,
      },
      currentTab: 0, // 기본 currentTab 값 지정
      tabs: ["구이류", "특수부위", "일품요리"],
    };
  },
  created() {
    console.log(this.$route);
  },
};
</script>
