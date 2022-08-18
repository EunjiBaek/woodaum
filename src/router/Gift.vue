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
            <a href="#" v-on:click.prevent="currentTab = index">{{ tab }}</a>
          </li>
        </ul>
      </div>

      <div class="sub_desc">
        <strong>WOODAUM+82 Broiled</strong>
        <p>
          우다움 한우는 믿을 수 있습니다.<br />
          우리땅에서 나고 자란 한우를 깨끗한 환경에서 작업해 보내드립니다.
        </p>
      </div>
    </div>

    <div class="sub_content">
      <div class="container">
        <div class="tab-content">
          <div class="gift_wrap" v-show="currentTab == 0">
            <div class="cnt_top">
              <strong>총 6개 상품</strong>
              <select name="" id="gift_filter" @change="sortSelect($event)">
                <option value="popularSort">인기상품순</option>
                <option value="lowPriceSort">낮은가격순</option>
                <option value="highPriceSort">높은가격순</option>
              </select>
            </div>

            <div class="gift_box_wrap">
              <div class="box" v-for="gift in sort(sortOrder)" :key="gift.id">
                <router-link
                  :to="{
                    name: 'GiftSet',
                    params: { id: gift.id, giftList: JSON.stringify(gift) },
                    // path: `/gift/giftset/${gift.id}`,
                    // params: { id: gift.id, giftList: gift },
                  }"
                >
                  <div class="img">
                    <img :src="gift.imgSrc" />
                    <div v-if="gift.soldout === true" class="caption">
                      sold out
                    </div>
                  </div>

                  <div class="cnt">
                    <h3>{{ gift.name }}</h3>
                    <p class="desc_01">
                      {{ gift.desc_01 }}
                    </p>
                    <p class="desc_02">{{ gift.desc_02 }}</p>
                    <strong
                      class="price"
                      :class="{ soldout: gift.soldout === true }"
                      >{{ gift.price }}</strong
                    >
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="package_wrap" v-show="currentTab == 1">
            <div class="img_wrap">
              <img :src="require('../assets/package.jpg')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.gift_content {
  padding: 0 !important;
}

.package_wrap {
  position: relative;
  width: 100%;
  height: 1000px;
  overflow: hidden;
  > .img_wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
.gift_wrap {
  > .cnt_top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    > strong {
      font-size: 18px;
      font-weight: 700;
    }

    > select {
      width: 128px;
    }
  }
}

.gift_box_wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px 1.5%;

  .box {
    width: 32.3334%;
    margin-bottom: 22px;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;

    .img {
      position: relative;
      width: 100%;
      height: 330px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: 100%;
      }

      > .caption {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        background-color: #fafafa38;
      }
    }

    .cnt {
      position: relative;
      height: 165px;
      box-sizing: border-box;
      padding: 30px;

      > h3 {
        margin-bottom: 4px;
      }

      > p.desc_01 {
        font-weight: 600;
        margin-bottom: 6px;
      }

      > p.desc_02 {
        font-size: 12px;
        margin-bottom: 10px;
      }

      > strong.price {
        font-size: 18px;
        font-weight: 700;
        color: #872e28;

        &.soldout {
          color: #c4cdd4 !important;
        }
      }
    }
  }
}
@media (max-width: 995px) {
  .gift_box_wrap {
    gap: 1em 1.5%;
    .box {
      width: 49.25%;
    }
  }
}
@media (max-width: 768px) {
  .tab_btn > ul > li > a {
    color: $header_color_01;
  }
  .tab_btn {
    padding-top: 15px;
  }
  .gift_box_wrap .box {
    margin-bottom: 0;
  }
  .gift_box_wrap .box .img {
    height: 250px;
  }
  .gift_box_wrap .box .cnt {
    padding: 15px;
    height: 135px;
  }
  .gift_box_wrap .box .cnt > h3 {
    font-size: 14px;
  }
  .gift_box_wrap .box .cnt > p.desc_01 {
    font-size: 12px;
    color: #2e383f;
  }
  .gift_box_wrap .box .cnt > p.desc_02 {
    display: none;
  }
  .gift_box_wrap .box .cnt > strong.price {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: #872e28;
  }
}
@media (max-width: 590px) {
  .gift_box_wrap .box .img {
    height: 200px;
  }
}
@media (max-width: 490px) {
  .gift_box_wrap {
    gap: 10px 0;
  }
  .gift_box_wrap .box {
    width: 100%;
  }
}
</style>

<script>
export default {
  name: "Gift",
  props: {
    name: {
      type: String,
    },
  },
  created() {
    if (this.$route.params.name === "giftset") {
      this.currentTab = 0;
    } else if (this.$route.params.name === "package") {
      this.currentTab = 1;
    }
  },
  data() {
    return {
      sortOrder: "popularSort",
      subtop_img: {
        backgroundImage: `url(${require("../assets/subtopImage/subtop_gift.png")})`,
      },
      currentTab: 0, // 기본 currentTab 값 지정
      tabs: ["선물세트", "포장안내"],
      giftDetails: [
        {
          id: 1,
          name: "한우 스페셜 세트 A (3.1kg)",
          desc_01: "꽃등심 900g, 등심 800g, 안심 500g, 불고기 800g",
          desc_02: "안심 보냉가방/박스 포장",
          price: 500000,
          imgSrc: require("../assets/gift/gift_01.png"),
          soldout: true,
        },
        {
          id: 2,
          name: "한우 스페셜 세트 B (1.7kg)",
          desc_01: "등심 600g, 안심 600g, 불고기 500g",
          desc_02: "안심 보냉가방/박스 포장",
          price: 300000,
          imgSrc: require("../assets/gift/gift_02.png"),
          soldout: false,
        },
        {
          id: 3,
          name: "우다움 양념LA갈비 세트",
          desc_01: "양념 LA갈비 1.2kg X 2pack",
          desc_02: "스티로폼박스/아이스팩/부직포 가방",
          price: 120000,
          imgSrc: require("../assets/gift/gift_03.png"),
          soldout: false,
        },
        {
          id: 4,
          name: "한우 꽃등심",
          desc_01: "꽃등심 1kg",
          desc_02: "안심 보냉박스 포장",
          price: 250000,
          imgSrc: require("../assets/gift/gift_04.png"),
          soldout: false,
        },
        {
          id: 5,
          name: "한우 안심",
          desc_01: "안심 1kg",
          desc_02: "안심 보냉박스 포장",
          price: 240000,
          imgSrc: require("../assets/gift/gift_05.png"),
          soldout: false,
        },
        {
          id: 6,
          name: "한우 안심",
          desc_01: "등심 1kg",
          desc_02: "안심 보냉박스 포장",
          price: 230000,
          imgSrc: require("../assets/gift/gift_06.png"),
          soldout: false,
        },
      ],
    };
  },
  computed: {
    orderedListOptions: function () {
      return {
        popularSort: () => {
          return this.giftDetails;
        },
        lowPriceSort: () => {
          const arr = [...this.giftDetails].sort(function (a, b) {
            return a.price - b.price;
          });
          return arr;
        },
        highPriceSort: () => {
          const arr = [...this.giftDetails].sort(function (a, b) {
            return b.price - a.price;
          });
          return arr;
        },
      };
    },
  },
  methods: {
    sort: function (sortOrder) {
      return this.orderedListOptions[sortOrder]();
    },
    sortSelect(event) {
      // console.log(event.target.value);
      return (this.sortOrder = event.target.value);
    },
  },
};
</script>
