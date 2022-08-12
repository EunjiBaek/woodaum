<template>
  <div id="header">
    <div class="header container">
      <div class="logo">
        <v-lazy-image
          :src="logoImage[0].imgSrc"
          :srcset="
            logoImage[0].imgSrc +
            ' 1x,' +
            logoImage[1].imgSrc +
            ' 2x,' +
            logoImage[2].imgSrc +
            ' 3x'
          "
        />
      </div>
      <div class="header-slide-menu">
        <ul>
          <li
            v-on:mouseover="overEvent($event)"
            v-on:mouseleave="leaveEvent($event)"
          >
            <a href="#">BRAND STORY</a>
            <div class="sub-menu">
              <ul>
                <li><a href="#">우다움 이야기</a></li>
                <li><a href="#">한우 이야기</a></li>
                <li><a href="#">공간 이야기</a></li>
              </ul>
            </div>
          </li>
          <li v-on:mouseover="overEvent($event)" v-on:mouseleave="leaveEvent">
            <a href="#">MENU</a>
            <div class="sub-menu">
              <ul>
                <li><a href="#">구이류</a></li>
                <li><a href="#">특수 부위</a></li>
                <li><a href="#">일품 요리</a></li>
              </ul>
            </div>
          </li>
          <li v-on:mouseover="overEvent($event)" v-on:mouseleave="leaveEvent">
            <a href="#">GIFT</a>
            <div class="sub-menu">
              <ul>
                <li><a href="#">선물 세트</a></li>
                <li><a href="#">포장 안내</a></li>
              </ul>
            </div>
          </li>
          <li v-on:mouseover="overEvent($event)" v-on:mouseleave="leaveEvent">
            <a href="#">STORE</a>
            <div class="sub-menu">
              <ul>
                <li><a href="#">지점 안내</a></li>
              </ul>
            </div>
          </li>
          <li v-on:mouseover="overEvent($event)" v-on:mouseleave="leaveEvent">
            <a href="#">RESERVATION</a>
            <div class="sub-menu">
              <ul>
                <li><a href="#">매장 예약</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="lang-list">
        <ul>
          <li class="on"><a href="#">KOR</a></li>
          <li><a href="#">EN</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "Header",
  data() {
    return {
      logoImage: [
        { imgSrc: require("../../assets/Logo.png") },
        { imgSrc: require("../../assets/Logo@2x.png") },
        { imgSrc: require("../../assets/Logo@3x.png") },
      ],
      active: false,
    };
  },
  components: {
    VLazyImage,
  },
  methods: {
    overEvent: function (evnet) {
      let ob = evnet.currentTarget.getElementsByClassName("sub-menu")[0];
      ob.classList.add("active");
    },
    leaveEvent: function (evnet) {
      evnet.currentTarget
        .getElementsByClassName("sub-menu")[0]
        .classList.remove("active");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

#header {
  background-color: #272727;
  height: 100px;
  .header {
    height: inherit;
    display: flex;
    align-content: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > .header-slide-menu {
      width: 930px;
      height: 100%;
      > ul {
        font-size: 0;
        height: 100%;

        > li {
          position: relative;
          width: 20%;
          height: 100px;
          line-height: 100px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-sizing: border-box;
          cursor: pointer;

          &:hover {
            > a {
              box-sizing: border-box;
              border-bottom: 2px solid $secondary_color_01;
            }
          }

          > a {
            font-family: "Montserrat", sans-serif;
            white-space: nowrap;
            font-weight: 700;
            font-size: 18px;
            line-height: 1.8em;
            box-sizing: border-box;
            color: #ffffff;
          }

          // &:first-child {
          //   .sub-menu {
          //     display: block;
          //   }
          // }

          > .sub-menu {
            display: none;
            position: absolute;
            top: 99px;
            width: 100%;
            padding: 13px 0;
            background-color: rgba($color: $basic_color_01, $alpha: 0.6);
            color: #ffffff;
            z-index: 5;

            &.active {
              display: block;
            }

            > ul {
              font-size: 0;
              > li {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 28px;

                > a {
                  font-size: 14px;
                  color: #ffffff;
                }
              }
            }
          }
        }
      }
    }

    .lang-list {
      > ul {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
          position: relative;
          &:first-child {
            padding-right: 18px;

            &::after {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 8px;
              content: "";
              width: 1px;
              height: 12px;
              background-color: #666666;
            }
          }

          &.on {
            > a {
              color: #ffffff;
            }
          }
          > a {
            font-size: 14px;
            font-weight: 600;
            font-family: "Montserrat", sans-serif;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>
