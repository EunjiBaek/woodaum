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
          </li>
        </ul>
      </div>

      <div class="sub_desc">
        <strong>WOODAUM+82 Broiled</strong>
        <p>
          {{ $t("subtop_gift.content") }}<br />
          {{ $t("subtop_gift.content_02") }}
        </p>
      </div>
    </div>

    <div class="sub_content">
      <div class="container">
        <div class="tab-content">
          <div class="gift_wrap" v-show="currentTab == 0">
            <div class="cnt_top">
              <strong>{{
                $t("gift_page.total_leng", { n: this.giftDetails.length })
              }}</strong>
              <select name="" id="gift_filter" @change="sortSelect($event)">
                <option value="popularSort">
                  {{ $t("gift_page.select_01") }}
                </option>
                <option value="lowPriceSort">
                  {{ $t("gift_page.select_02") }}
                </option>
                <option value="highPriceSort">
                  {{ $t("gift_page.select_03") }}
                </option>
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
                    <img :data-lazy="gift.imgSrc" v-lazyloadImage />
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
                      >{{ numberFormat(gift.price)
                      }}{{ $t("page_price.currency") }}</strong
                    >
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="package_wrap" v-show="currentTab == 1">
            <div class="package_all_img">
              <img
                :data-lazy="require('@/assets/package/package_all.png')"
                v-lazyloadImage
              />
            </div>

            <div class="package_opt_desc">
              <div class="list">
                <div class="img">
                  <img
                    :data-lazy="require('@/assets/package/package_01.png')"
                    v-lazyloadImage
                  />
                </div>
                <div class="cnt">
                  <h2>{{ $t("package_01.tit") }}</h2>
                  <p>
                    {{ $t("package_01.desc") }}
                  </p>
                </div>
              </div>
              <div class="list">
                <div class="img">
                  <img
                    :data-lazy="require('@/assets/package/package_02.png')"
                    v-lazyloadImage
                  />
                </div>
                <div class="cnt">
                  <h2>{{ $t("package_02.tit") }}</h2>
                  <p>
                    {{ $t("package_02.desc") }}
                  </p>
                </div>
              </div>
              <div class="list">
                <div class="img">
                  <img
                    :data-lazy="require('@/assets/package/package_03.png')"
                    v-lazyloadImage
                  />
                </div>
                <div class="cnt">
                  <h2>{{ $t("package_03.tit") }}</h2>
                  <p>
                    {{ $t("package_03.desc") }}
                  </p>
                </div>
              </div>
              <div class="list">
                <div class="img">
                  <img
                    :data-lazy="require('@/assets/package/package_04.png')"
                    v-lazyloadImage
                  />
                </div>
                <div class="cnt">
                  <h2>{{ $t("package_04.tit") }}</h2>
                  <p>
                    {{ $t("package_04.desc") }}
                  </p>
                </div>
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
.gift_content {
  padding: 0 !important;
}

.package_wrap {
  position: relative;
  width: 100%;

  > .package_all_img {
    width: 100%;
    height: 720px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 100%;
    }
  }

  > .package_opt_desc {
    width: 100%;
    display: flex;
    font-size: 0;
    flex-wrap: wrap;
    gap: 12px 1.5%;

    > .list {
      position: relative;
      box-sizing: border-box;
      width: 49.25%;
      height: 110px;
      background-color: #000;
      border: 1px solid $secondary_color_01;
      display: flex;
      align-items: flex-start;
      padding-left: 186px;

      > .img {
        position: absolute;
        top: 0;
        left: 0;
        width: 186px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        > img {
          height: 101%;
        }
      }
      > .cnt {
        box-sizing: border-box;
        padding: 10px 24px;
        > h2 {
          color: $secondary_color_01;
          margin-bottom: 5px;
        }
        > p {
          color: #ffffff;
        }
      }
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

@media (max-width: 1250px) {
  .package_wrap > .package_opt_desc {
    gap: 12px 0;
    > .list {
      width: 100%;
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
  .package_wrap > .package_all_img {
    height: 450px;
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
  .package_wrap > .package_all_img {
    height: 380px;
  }
  .package_wrap > .package_opt_desc > .list > .cnt {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
  }
}
@media (max-width: 590px) {
  .gift_box_wrap .box .img {
    height: 200px;
  }
  .package_wrap > .package_all_img {
    height: 320px;
  }
  .package_wrap > .package_opt_desc > .list > .cnt {
    padding: 10px 15px 0 15px;
    h2 {
      font-size: 15px;
    }
    p {
      font-size: 11px;
    }
  }
}
@media (max-width: 490px) {
  .gift_box_wrap {
    gap: 10px 0;
  }
  .gift_box_wrap .box {
    width: 100%;
  }
  .package_wrap > .package_all_img {
    height: 250px;
  }
  .package_wrap > .package_opt_desc > .list {
    padding-left: 160px;
    > .img {
      width: 160px;
    }
  }
}
@media (max-width: 420px) {
  .package_wrap > .package_opt_desc > .list > .cnt {
    > h2 {
      font-size: 13px;
    }
    > p {
      font-size: 10px;
    }
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
      currentTab: 0, // ?????? currentTab ??? ??????
      tabs: [this.$t("gift_tab.tab_01"), this.$t("gift_tab.tab_02")],
      giftDetails: [
        {
          id: 1,
          name: this.$t("giftset_01.name"),
          desc_01: this.$t("giftset_01.desc_01"),
          desc_02: this.$t("giftset_01.desc_02"),
          price: 500000,
          imgSrc: require("../assets/gift/gift_01.png"),
          soldout: false,
        },
        {
          id: 2,
          name: this.$t("giftset_02.name"),
          desc_01: this.$t("giftset_02.desc_01"),
          desc_02: this.$t("giftset_02.desc_02"),
          price: 300000,
          imgSrc: require("../assets/gift/gift_02.png"),
          soldout: false,
        },
        {
          id: 3,
          name: this.$t("giftset_03.name"),
          desc_01: this.$t("giftset_03.desc_01"),
          desc_02: this.$t("giftset_03.desc_02"),
          price: 120000,
          imgSrc: require("../assets/gift/gift_03.png"),
          soldout: false,
        },
        {
          id: 4,
          name: this.$t("giftset_04.name"),
          desc_01: this.$t("giftset_04.desc_01"),
          desc_02: this.$t("giftset_04.desc_02"),
          price: 250000,
          imgSrc: require("../assets/gift/gift_04.png"),
          soldout: false,
        },
        {
          id: 5,
          name: this.$t("giftset_05.name"),
          desc_01: this.$t("giftset_05.desc_01"),
          desc_02: this.$t("giftset_05.desc_02"),
          price: 240000,
          imgSrc: require("../assets/gift/gift_05.png"),
          soldout: false,
        },
        {
          id: 6,
          name: this.$t("giftset_06.name"),
          desc_01: this.$t("giftset_06.desc_01"),
          desc_02: this.$t("giftset_06.desc_02"),
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
    tabClickEvent: function (index) {
      if (index === 0) {
        this.$router.push("/gift/giftset");
      } else {
        this.$router.push("/gift/package");
      }
    },
    sort: function (sortOrder) {
      return this.orderedListOptions[sortOrder]();
    },
    sortSelect(event) {
      // console.log(event.target.value);
      return (this.sortOrder = event.target.value);
    },
    numberFormat(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
