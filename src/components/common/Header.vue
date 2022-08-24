<template>
  <div>
    <div class="mobile_navigation">
      <ul>
        <li>
          <router-link to="/">
            <div class="img">
              <v-lazy-image
                :src="mobile_nav_home[0].imgSrc"
                :srcset="
                  mobile_nav_home[0].imgSrc +
                  ' 1x,' +
                  mobile_nav_home[1].imgSrc +
                  ' 2x,' +
                  mobile_nav_home[2].imgSrc +
                  ' 3x'
                "
              />
            </div>
            <span>HOME</span>
          </router-link>
        </li>

        <li>
          <a
            href="https://app.catchtable.co.kr/ct/search/total"
            target="_blank"
          >
            <div class="img">
              <v-lazy-image
                :src="mobile_nav_reserve[0].imgSrc"
                :srcset="
                  mobile_nav_reserve[0].imgSrc +
                  ' 1x,' +
                  mobile_nav_reserve[1].imgSrc +
                  ' 2x,' +
                  mobile_nav_reserve[2].imgSrc +
                  ' 3x'
                "
              />
            </div>
            <span>예약하기</span>
          </a>
        </li>

        <li>
          <router-link to="/gift/giftset">
            <div class="img">
              <v-lazy-image
                :src="mobile_nav_gift[0].imgSrc"
                :srcset="
                  mobile_nav_gift[0].imgSrc +
                  ' 1x,' +
                  mobile_nav_gift[1].imgSrc +
                  ' 2x,' +
                  mobile_nav_gift[2].imgSrc +
                  ' 3x'
                "
              />
            </div>
            <span>선물세트</span>
          </router-link>
        </li>

        <li>
          <router-link to="/store">
            <div class="img">
              <v-lazy-image
                :src="mobile_nav_store_search[0].imgSrc"
                :srcset="
                  mobile_nav_store_search[0].imgSrc +
                  ' 1x,' +
                  mobile_nav_store_search[1].imgSrc +
                  ' 2x,' +
                  mobile_nav_store_search[2].imgSrc +
                  ' 3x'
                "
              />
            </div>
            <span>매장찾기</span>
          </router-link>
        </li>

        <li>
          <a href="https://www.instagram.com/woodaumplus82/" target="_blank">
            <div class="img">
              <v-lazy-image
                :src="mobile_nav_insta[0].imgSrc"
                :srcset="
                  mobile_nav_insta[0].imgSrc +
                  ' 1x,' +
                  mobile_nav_insta[1].imgSrc +
                  ' 2x,' +
                  mobile_nav_insta[2].imgSrc +
                  ' 3x'
                "
              />
            </div>
            <span>SNS</span>
          </a>
        </li>
      </ul>
    </div>
    <div id="header" v-on:mouseleave="leaveEvent">
      <div class="header container">
        <div class="hamburger" v-on:click="navOpen = true">
          <i class="fas fa-bars"></i>
        </div>
        <div class="logo">
          <router-link to="/">
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
          </router-link>
        </div>
        <div class="header-slide-menu" v-on:mouseover="overEvent">
          <ul>
            <li>
              <router-link to="/brandStory">BRAND STORY</router-link>
              <div class="sub-menu" v-if="actived === true">
                <ul>
                  <li><a href="/brandStory#section1">우다움 이야기</a></li>
                  <li><a href="/brandStory#section2">한우 이야기</a></li>
                  <li><a href="/brandStory#section3">공간 이야기</a></li>
                </ul>
              </div>
            </li>
            <li>
              <router-link :to="{ name: 'MenuPage', params: { name: 'menu1' } }"
                >MENU</router-link
              >
              <div class="sub-menu" v-if="actived === true">
                <ul>
                  <li>
                    <router-link
                      :to="{ name: 'MenuPage', params: { name: 'menu1' } }"
                      >구이류</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'MenuPage', params: { name: 'menu3' } }"
                      >일품 요리</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <router-link :to="{ name: 'Gift', params: { name: 'giftset' } }"
                >GIFT</router-link
              >
              <div class="sub-menu" v-if="actived === true">
                <ul>
                  <li>
                    <router-link
                      :to="{ name: 'Gift', params: { name: 'giftset' } }"
                      >선물 세트</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'Gift', params: { name: 'package' } }"
                      >포장 안내</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <router-link to="/store">STORE</router-link>
              <div class="sub-menu" v-if="actived === true">
                <ul>
                  <li><router-link to="/store">지점 안내</router-link></li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="https://app.catchtable.co.kr/ct/search/total"
                target="_blank"
                >RESERVATION</a
              >
              <div class="sub-menu" v-if="actived === true">
                <ul>
                  <li>
                    <a
                      href="https://app.catchtable.co.kr/ct/search/total"
                      target="_blank"
                      >매장 예약</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="lang-list">
          <ul>
            <!-- $i18n.locale = 'en' -->
            <li><a href="#" v-on:click="choiceLang('ko')">KOR</a></li>
            <li><a href="#" v-on:click="choiceLang('en')">EN</a></li>
          </ul>
        </div>
      </div>
      <div
        v-on:mouseover="overEvent"
        v-if="actived === true"
        class="background"
      ></div>
    </div>
    <div class="slide_wrap">
      <transition name="translateX">
        <nav id="slide_menu" v-show="navOpen">
          <div class="slide_menu_top">
            <div class="close_btn" v-on:click="navOpen = false">
              <img :src="require('../../assets/icon/close_btn.png')" />
            </div>
            <div class="lang-list">
              <ul>
                <li class="on"><a href="#">KOR</a></li>
                <li><a href="#">EN</a></li>
              </ul>
            </div>
          </div>
          <div class="slide_menu_bot">
            <ul>
              <li>
                <router-link to="/brandStory">BRAND STORY</router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'MenuPage', params: { name: 'menu1' } }"
                  >MENU</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Gift', params: { name: 'giftset' } }"
                  >GIFT</router-link
                >
              </li>
              <li>
                <router-link to="/store">STORE</router-link>
              </li>
              <li>
                <a
                  href="https://app.catchtable.co.kr/ct/search/total"
                  target="_blank"
                  >RESERVATION</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import { i18n } from "@/locales/i18n";

export default {
  name: "Header",
  data() {
    return {
      langs: [
        {
          id: "ko",
          val: "ko",
        },
        {
          id: "en",
          val: "en",
        },
      ],
      currentLang: this.$i18n.locale,
      navOpen: false,
      actived: false,
      logoImage: [
        { imgSrc: require("../../assets/logo.png") },
        { imgSrc: require("../../assets/Logo@2x.png") },
        { imgSrc: require("../../assets/Logo@3x.png") },
      ],
      mobile_nav_home: [
        { imgSrc: require("../../assets/icon/mobilenav_home.png") },
        { imgSrc: require("../../assets/icon/mobilenav_home@2x.png") },
        { imgSrc: require("../../assets/icon/mobilenav_home@3x.png") },
      ],
      mobile_nav_reserve: [
        { imgSrc: require("../../assets/icon/mobilenav_reserve.png") },
        { imgSrc: require("../../assets/icon/mobilenav_reserve@2x.png") },
        { imgSrc: require("../../assets/icon/mobilenav_reserve@3x.png") },
      ],
      mobile_nav_gift: [
        { imgSrc: require("../../assets/icon/mobilenav_gift.png") },
        { imgSrc: require("../../assets/icon/mobilenav_gift@2x.png") },
        { imgSrc: require("../../assets/icon/mobilenav_gift@3x.png") },
      ],
      mobile_nav_store_search: [
        { imgSrc: require("../../assets/icon/mobilenav_store_search.png") },
        { imgSrc: require("../../assets/icon/mobilenav_store_search@2x.png") },
        { imgSrc: require("../../assets/icon/mobilenav_store_search@3x.png") },
      ],
      mobile_nav_insta: [
        { imgSrc: require("../../assets/icon/mobilenav_insta.png") },
        { imgSrc: require("../../assets/icon/mobilenav_insta@2x.png") },
        { imgSrc: require("../../assets/icon/mobilenav_insta@3x.png") },
      ],
      active: false,
    };
  },
  components: {
    VLazyImage,
  },
  mounted() {
    if (localStorage.currentlang) this.currentlang = localStorage.currentlang;
  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.navOpen = false;
      }
    },
    currentlang(newLang) {
      localStorage.currentlang = newLang;
    },
  },
  methods: {
    choiceLang: function (lang) {
      if (lang === this.currentLang) return;
      this.currentLang = lang;
      localStorage.setItem("currentlang", this.currentLang);
      window.location.reload();
    },
    overEvent: function () {
      // document.querySelector(".background").style.dispaly = "block";
      this.actived = true;
    },
    leaveEvent: function () {
      this.actived = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

// .slide_wrap {
//   position: fixed;
//   background-color: rgba;
//   width: 100%;
//   height: 100%;
// }
.mobile_navigation {
  width: 100%;
  height: 145px;
  display: none;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 600;
  padding: 15px 0 45px 0;
  ul {
    > li {
      display: inline-block;
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }

      > a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        > .img {
          margin-bottom: 4px;
        }
      }
    }
  }
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #272727;
  height: 100px;
  z-index: 700;

  .background {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: 128px;
    background-color: rgba($color: $basic_color_01, $alpha: 0.6);
  }
  .header {
    height: inherit;
    display: flex;
    align-content: center;
    justify-content: space-between;

    .hamburger {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 25px;
      cursor: pointer;

      > i {
        font-size: 30px;
        color: #ffffff;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
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
              overflow: hidden;
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
            overflow: hidden;
          }
          &:hover {
            .sub-menu {
              top: 119px;
            }
          }

          > .sub-menu {
            position: absolute;
            top: 120px;
            width: 100%;
            color: #ffffff;
            z-index: 550;

            > ul {
              font-size: 0;
              > li {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 28px;

                &:hover {
                  > a {
                    text-decoration: underline;
                  }
                }

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

#slide_menu {
  .slide_menu_top {
    position: relative;
    height: 80px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 28px;
    border-bottom: 1px solid #2e383f;
    box-sizing: border-box;

    .close_btn {
      position: absolute;
      top: 50%;
      right: 28px;
      transform: translateY(-50%);
      cursor: pointer;

      > i {
        font-size: 24px;
        color: #ffffff;
      }
    }
    .lang-list {
      > ul {
        height: 100%;
        display: flex;
        align-items: center;
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

  .slide_menu_bot {
    > ul {
      li {
        height: 55px;
        border-bottom: 1px solid #2e383f;

        > a {
          width: 100%;
          height: 100%;
          transition: 0.4s ease;
          color: #ffffff;
          font-size: 18px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
        }
      }
    }
  }
}

#slide_menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: #272727;
  z-index: 710;
  transition: 0.2s ease;
}

@media (max-width: 1250px) {
  .header-slide-menu {
    display: none;
  }
  #header .header {
    .hamburger {
      display: block;
    }
    justify-content: center;
    .lang-list {
      display: none;
    }
  }
}

.translateX-enter {
  transform: translateX(-280px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(-280px);
  opacity: 0;
}

@media (max-width: 768px) {
  #header {
    height: 80px;
  }
  .mobile_navigation {
    display: flex;
  }
}
</style>
