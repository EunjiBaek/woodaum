<template>
  <div class="top_pad">
    <div class="sub_top" :style="subtop_img">
      <div class="sub_desc">
        <strong>HANWOO Special Set</strong>
        <p>
          {{ $t("subtop_gift.content") }} <br />
          {{ $t("subtop_gift.content_02") }}
        </p>
      </div>
    </div>

    <div class="sub_content">
      <div class="container">
        <div class="product_desc_wrap">
          <div class="product_cnt">
            <div class="img">
              <img :data-lazy="giftDetails[index].imgSrc" v-lazyloadImage />
            </div>

            <div class="content">
              <h3>{{ giftDetails[index].name }}</h3>
              <p class="product_configuration">
                {{ giftDetails[index].desc_01 }}
              </p>

              <strong class="price"
                >{{ numberFormat(giftDetails[index].price) }}원</strong
              >

              <div class="icon_wrap"></div>
              <div class="detail_desc">
                <ul>
                  <li>
                    <span>{{ $t("giftset_list_tit.tit_01") }}</span>
                    <p>{{ $t("giftset_list_cnt.cnt_01") }}</p>
                  </li>
                  <li>
                    <span>{{ $t("giftset_list_tit.tit_02") }}</span>
                    <p>{{ $t("giftset_list_cnt.cnt_02") }}</p>
                  </li>
                  <li>
                    <span>{{ $t("giftset_list_tit.tit_03") }}</span>
                    <p>{{ $t("giftset_list_cnt.cnt_03") }}</p>
                  </li>
                  <li>
                    <span>{{ $t("giftset_list_tit.tit_04") }}</span>
                    <p>
                      {{ $t("giftset_list_cnt.cnt_04_lsit01") }}
                      {{ $t("giftset_list_cnt.cnt_04_lsit02") }}
                      {{ $t("giftset_list_cnt.cnt_04_lsit03") }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            v-if="giftDetails[index].pageDetail !== ''"
            class="product_detail_img_wrap"
            :class="{ active: show === true }"
          >
            <h3>{{ $t("giftset_desc.tit") }}</h3>
            <div class="img_wrap">
              <img
                :data-lazy="giftDetails[index].pageDetail[$i18n.locale]"
                v-lazyloadImage
              />
            </div>
            <div v-if="!show" class="gradation"></div>
          </div>
          <div
            v-if="giftDetails[index].pageDetail !== '' && !show"
            class="more_btn"
            @click="detailShow"
          >
            {{ $t("giftset_desc.btn") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.product_desc_wrap {
  margin-bottom: 50px;
}

.product_cnt {
  display: grid;
  grid-template-columns: 464px auto;
  gap: 0 55px;

  > .img {
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    > img {
      width: 100%;
    }
  }

  > .content {
    padding-top: 20px;

    > h3 {
      margin-bottom: 8px;
    }

    > p.product_configuration {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 25px;
    }

    > strong.price {
      display: block;
      font-size: 24px;
      color: #872e28;
      margin-bottom: 55px;
    }

    > .icon_wrap {
      padding-bottom: 20px;
      border-bottom: 1px solid #c4cdd4;
    }

    > .detail_desc {
      padding-top: 18px;

      > ul {
        > li {
          display: grid;
          grid-template-columns: 118px auto;
          margin-bottom: 24px;

          > span {
            font-size: 14px;
          }
        }
      }
    }
  }
}

.product_detail_img_wrap {
  position: relative;
  margin-top: 100px;

  //   임시작업
  height: 725px;
  overflow: hidden;

  &.active {
    height: auto;
  }

  .gradation {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 12%,
      rgba(255, 255, 255, 0.28) 45%,
      #fff 86%,
      #fcfcfc 100%,
      rgba(255, 255, 255, 0.33) 100%,
      #fff 100%,
      #fff 100%,
      #fff 100%
    );
  }
  > h3 {
    margin-bottom: 8px;
  }

  > .img_wrap {
    height: auto;
    margin-bottom: 130px;

    > img {
      width: 100%;
    }
  }
}
.more_btn {
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  height: 58px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
}

@media (max-width: 950px) {
  .product_cnt {
    grid-template-columns: 320px auto;
    gap: 0 25px;

    > .img {
      height: 320px;
    }
  }
  .product_cnt > .content > strong.price {
    margin-bottom: 25px;
  }
}

@media (max-width: 768px) {
  .product_cnt {
    grid-template-columns: auto;
    gap: 0;
  }
  .product_detail_img_wrap > .img_wrap {
    margin-bottom: 50px;
  }
}
</style>

<script>
import detailPgae01_ko from "@/assets/prodcutDetails/product_details_01.jpg";
import detailPgae01_en from "@/assets/prodcutDetails/product_details_01_en.jpg";
import detailPgae02_ko from "@/assets/prodcutDetails/product_details_02.jpg";
import detailPgae02_en from "@/assets/prodcutDetails/product_details_02_en.jpg";
import detailPgae03_ko from "@/assets/prodcutDetails/product_details_03.jpg";
import detailPgae03_en from "@/assets/prodcutDetails/product_details_03_en.jpg";

export default {
  name: "GiftSet",
  props: {
    id: {
      type: String,
    },
  },
  created() {
    this.index = this.$route.params.id - 1;
  },

  data() {
    return {
      subtop_img: {
        backgroundImage: `url(${require("../assets/subtopImage/subtop_gift.png")})`,
      },
      index: null,
      show: false,
      giftDetails: [
        {
          id: 1,
          name: this.$t("giftset_01.name"),
          desc_01: this.$t("giftset_01.desc_01"),
          desc_02: this.$t("giftset_01.desc_02"),
          price: 500000,
          imgSrc: require("../assets/gift/gift_01.png"),
          soldout: true,
          pageDetail: {
            ko: detailPgae01_ko,
            en: detailPgae01_en,
          },
        },
        {
          id: 2,
          name: this.$t("giftset_02.name"),
          desc_01: this.$t("giftset_02.desc_01"),
          desc_02: this.$t("giftset_02.desc_02"),
          price: 300000,
          imgSrc: require("../assets/gift/gift_02.png"),
          soldout: false,
          pageDetail: {
            ko: detailPgae02_ko,
            en: detailPgae02_en,
          },
        },
        {
          id: 3,
          name: this.$t("giftset_03.name"),
          desc_01: this.$t("giftset_03.desc_01"),
          desc_02: this.$t("giftset_03.desc_02"),
          price: 120000,
          imgSrc: require("../assets/gift/gift_03.png"),
          soldout: false,
          pageDetail: {
            ko: detailPgae03_ko,
            en: detailPgae03_en,
          },
        },
        {
          id: 4,
          name: this.$t("giftset_04.name"),
          desc_01: this.$t("giftset_04.desc_01"),
          desc_02: this.$t("giftset_04.desc_02"),
          price: 250000,
          imgSrc: require("../assets/gift/gift_04.png"),
          soldout: false,
          pageDetail: "",
        },
        {
          id: 5,
          name: this.$t("giftset_05.name"),
          desc_01: this.$t("giftset_05.desc_01"),
          desc_02: this.$t("giftset_05.desc_02"),
          price: 240000,
          imgSrc: require("../assets/gift/gift_05.png"),
          soldout: false,
          pageDetail: "",
        },
        {
          id: 6,
          name: this.$t("giftset_06.name"),
          desc_01: this.$t("giftset_06.desc_01"),
          desc_02: this.$t("giftset_06.desc_02"),
          price: 230000,
          imgSrc: require("../assets/gift/gift_06.png"),
          soldout: false,
          pageDetail: "",
        },
      ],
    };
  },
  mounted() {
    console.log(this.gift);
  },
  methods: {
    detailShow() {
      this.show = true;
    },
    numberFormat(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
