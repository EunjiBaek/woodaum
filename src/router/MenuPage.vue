<template>
  <div class="top_pad">
    <div class="sub_top" :style="subtop_img">
      <div class="tab_btn">
        <ul>
          <li
            v-for="(tab, index) in tabs"
            v-bind:class="{ active: currentTab === index }"
            :key="tab.index"
          >
            <a href="#" v-on:click.prevent="tabClickEvent(index)">{{ tab }}</a>
            <!-- <a v-on:click.prevent="select($event)">{{ tab }}</a> -->
          </li>
        </ul>
      </div>

      <div class="sub_desc">
        <strong>WOODAUM+82 Broiled</strong>
        <p>
          {{ $t("subtop_menu.content") }}
        </p>
      </div>
    </div>

    <div class="sub_content">
      <div class="container">
        <div class="tab-content">
          <!--메뉴-->
          <div class="menu_wrap" v-show="currentTab == 0">
            <div
              class="menu_box"
              v-for="menu in menuDetails"
              :key="menu.id"
              @click="modalOpen(menu.id)"
            >
              <div v-if="menu.special === true" class="special_badge">
                Special Part
              </div>
              <div class="img">
                <img :data-lazy="menu.imgSrc" v-lazyloadImage alt="" />
              </div>
              <div class="content">
                <span v-if="$i18n.locale === 'ko'">{{ menu.name }}</span>
                <span v-else>{{ menu.en_name }}</span>
                <p v-if="$i18n.locale === 'ko'">
                  {{ menu.en_name }}
                </p>
              </div>
            </div>
          </div>
          <!--//메뉴-->

          <div class="menu_wrap" v-show="currentTab == 1">
            <div
              class="menu_box"
              v-for="menu in menuDetails_02"
              :key="menu.id"
              @click="modalOpen_02(menu.id)"
            >
              <div v-if="menu.special === true" class="special_badge">
                Special Part
              </div>
              <div class="img">
                <img :data-lazy="menu.imgSrc" v-lazyloadImage alt="" />
              </div>
              <div class="content">
                <span v-if="$i18n.locale === 'ko'">{{ menu.name }}</span>
                <span v-else>{{ menu.en_name }}</span>
                <p v-if="$i18n.locale === 'ko'">
                  {{ menu.en_name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main.scss";

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
      white-space: nowrap;
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

.menu_wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1em 1.8%;

  > .menu_box {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 32.1334%;
    box-sizing: border-box;
    transition: all 0.2s ease;

    > .special_badge {
      position: absolute;
      top: 12px;
      left: -5px;
      background-color: #a8854e;
      z-index: 100;
      color: #ffffff;
      height: 20px;
      padding: 0 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

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
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      > img {
        width: auto;
        height: 100%;
        transition: all 0.2s ease;
      }
    }

    > .content {
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 25px;
      width: 100%;
      padding: 0 10px;

      > span {
        display: block;
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
        text-align: center;
        margin-bottom: 6px;
      }
      > p {
        font-size: 12px;
        color: #ffffff;
        text-align: center;
      }
    }
  }
}

@media (max-width: 890px) {
  .menu_wrap > .menu_box {
    width: 49.1%;
  }
}

@media (max-width: 768px) {
  .tab_btn > ul > li > a {
    color: $header_color_01;
  }
  .tab_btn {
    padding-top: 15px;
  }
}
</style>

<script>
import { openModal } from "jenesius-vue-modal";
import LazyImage from "@/components/LazyImage.vue";
import ModalPopup from "@/components/common/ModalPopup.vue";

export default {
  name: "MenuPage",
  props: {
    name: {
      type: String,
    },
  },
  // components: {
  //   LazyImage,
  // },
  //   setup() {
  //     openModal(ModalPopup, { title: "hello" });
  //   },
  methods: {
    tabClickEvent: function (index) {
      if (index === 0) {
        this.$router.push("/menu/menu1");
      } else {
        this.$router.push("/menu/menu2");
      }
    },
    select: function (event) {
      console.log(event.currentTarget.parentNode);
      // this.currentTab = index;
    },
    modalOpen: function (id) {
      let menu = this.menuDetails.find((v) => v.id == id);
      openModal(ModalPopup, {
        name: menu.name,
        en_name: menu.en_name,
        imgSrc: menu.imgSrc,
        desc: menu.desc,
      });
    },
    modalOpen_02: function (id) {
      let menu = this.menuDetails_02.find((v) => v.id == id);
      openModal(ModalPopup, {
        name: menu.name,
        en_name: menu.en_name,
        imgSrc: menu.imgSrc,
        desc: menu.desc,
      });
    },
  },
  data() {
    return {
      subtop_img: {
        backgroundImage: `url(${require("../assets/subtopImage/subtop_menu.png")})`,
      },
      currentTab: 0, // 기본 currentTab 값 지정
      tabs: [this.$t("menu_tab.tab_01"), this.$t("menu_tab.tab_02")],
      menuDetails: [
        {
          id: 1,
          name: "스페셜",
          en_name: "Assorted Korean beef",
          desc: this.$t("manu_01.desc"),
          imgSrc: require("../assets/menu/menu-1.png"),
          special: false,
        },
        {
          id: 2,
          name: "꽃등심",
          en_name: "Aged Korean beef rib-eye Korean beef",
          desc: this.$t("manu_02.desc"),
          imgSrc: require("../assets/menu/menu-2.png"),
          special: false,
        },
        {
          id: 3,
          name: "등심",
          en_name: "Aged Korean beef rib-eye Korean beef",
          desc: this.$t("manu_03.desc"),
          imgSrc: require("../assets/menu/menu-3.png"),
          special: false,
        },
        {
          id: 4,
          name: "특안심",
          en_name: "Aged Korean beef sirloin",
          desc: this.$t("manu_04.desc"),
          imgSrc: require("../assets/menu/menu-4.png"),
          special: false,
        },
        {
          id: 5,
          name: "살치살",
          en_name: "Aged Korean beef chuck flap tail",
          desc: this.$t("manu_05.desc"),
          imgSrc: require("../assets/menu/menu-5.png"),
          special: true,
        },
        {
          id: 6,
          name: "새우살",
          en_name: "Aged Korean beef rib-eye cap",
          desc: this.$t("manu_06.desc"),
          imgSrc: require("../assets/menu/menu-6.png"),
          special: true,
        },
        {
          id: 7,
          name: "안창살",
          en_name: "Aged Korean beef thin skirt",
          desc: this.$t("manu_07.desc"),
          imgSrc: require("../assets/menu/menu-7.png"),
          special: true,
        },
        {
          id: 8,
          name: "치마살",
          en_name: "Aged Korean beef thin flank meat",
          desc: this.$t("manu_08.desc"),
          imgSrc: require("../assets/menu/menu-8.png"),
          special: true,
        },
      ],
      menuDetails_02: [
        {
          id: 9,
          name: "한우 로스편채",
          en_name: "Broiled sliced Korean beef",
          desc: this.$t("manu_09.desc"),
          imgSrc: require("../assets/menu/menu-9.png"),
          special: false,
        },
        {
          id: 10,
          name: "한우 육회",
          en_name: "Korean beef tartar",
          desc: this.$t("manu_10.desc"),
          imgSrc: require("../assets/menu/menu-10.png"),
          special: false,
        },
      ],
    };
  },
  created() {
    if (this.$route.params.name === "menu1") {
      this.currentTab = 0;
    } else if (this.$route.params.name === "menu2") {
      this.currentTab = 1;
    } else if (this.$route.params.name === "menu3") {
      this.currentTab = 2;
    }
  },
};
</script>
