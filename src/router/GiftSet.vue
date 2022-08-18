<template>
  <div class="top_pad">
    <div class="sub_top" :style="subtop_img">
      <div class="sub_desc">
        <strong>HANWOO Special Set</strong>
        <p>
          우다움 한우는 믿을 수 있습니다. <br />
          우리땅에서 나고 자란 한우를 깨끗한 환경에서 작업해 보내드립니다.
        </p>
      </div>
    </div>

    <div class="sub_content">
      <div class="container">
        <div class="product_desc_wrap">
          <div class="product_cnt">
            <div class="img"><img :src="giftDetails[index].imgSrc" /></div>

            <div class="content">
              <h3>{{ giftDetails[index].name }}</h3>
              <p class="product_configuration">
                {{ giftDetails[index].desc_01 }}
              </p>

              <strong class="price">{{ giftDetails[index].price }}원</strong>

              <div class="icon_wrap"></div>
              <div class="detail_desc">
                <ul>
                  <li>
                    <span>배송구분</span>
                    <p>바로배송</p>
                  </li>
                  <li>
                    <span>원산지</span>
                    <p>국내산</p>
                  </li>
                  <li>
                    <span>포장타입</span>
                    <p>냉장/스티로폼</p>
                  </li>
                  <li>
                    <span>안내사항</span>
                    <p>
                      해당 상품은 냉장 제품입니다. 상품 수령 후 최대한 빠른
                      시일내에 섭취를 권장드립니다. 비닐포장 등에 의해 산소가
                      공급되지않아 간혹 검붉게 변하는 현상이 발생할 수 있으나,
                      산소와 접촉하면 선홍색으로 돌아오는 점 안내드립니다.
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
            <h3>상품설명</h3>
            <div class="img_wrap">
              <img :src="giftDetails[index].pageDetail" />
            </div>
            <div class="service_center_wrap">
              <h2>고객 행복 센터</h2>
              <p class="desc">
                궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요? 아래
                전화번호로 연락주시면 빠르게 도와드리겠습니다.
              </p>
              <div class="call">
                <span>전화문의 (02)6900 - 0000</span>
              </div>
              <span>오전 8시 - 오후 5시 (월~금)</span>
            </div>
            <div v-if="!show" class="gradation"></div>
          </div>
          <div
            v-if="giftDetails[index].pageDetail !== '' && !show"
            class="more_btn"
            @click="detailShow"
          >
            상품설명 더보기
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.product_desc_wrap {
  margin-bottom: 200px;
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

  > .service_center_wrap {
    padding-bottom: 50px;
    > h2 {
      color: #2e383f;
      margin-bottom: 16px;
    }

    > div.call {
      position: relative;
      display: flex;
      align-items: center;
      height: 28px;
      padding-left: 20px;
      margin-bottom: 16px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        height: 28px;
        background-color: $secondary_color_01;
      }

      > span {
        font-size: 18px;
        color: $secondary_color_01;
        font-weight: 600;
      }
    }

    > p.desc {
      color: #2e383f;
      font-weight: 600;
      margin-bottom: 35px;
    }

    > span {
      font-size: 14px;
      font-weight: 600;
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
}
</style>

<script>
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
          name: "한우 스페셜 세트 A (3.1kg)",
          desc_01: "꽃등심 900g, 등심 900g, 안심 500g, 불고기 800g",
          desc_02: "안심 보냉가방/박스 포장",
          price: 500000,
          imgSrc: require("../assets/gift/gift_01.png"),
          soldout: true,
          pageDetail: require("../assets/prodcutDetails/product_details_01.jpg"),
        },
        {
          id: 2,
          name: "한우 스페셜 세트 B (1.7kg)",
          desc_01: "등심 600g, 안심 600g, 불고기 500g",
          desc_02: "안심 보냉가방/박스 포장",
          price: 300000,
          imgSrc: require("../assets/gift/gift_02.png"),
          soldout: false,
          pageDetail: require("../assets/prodcutDetails/product_details_02.jpg"),
        },
        {
          id: 3,
          name: "우다움 양념LA갈비 세트",
          desc_01: "양념 LA갈비 1.2kg X 2pack",
          desc_02: "스티로폼박스/아이스팩/부직포 가방",
          price: 120000,
          imgSrc: require("../assets/gift/gift_03.png"),
          soldout: false,
          pageDetail: require("../assets/prodcutDetails/product_details_03.jpg"),
        },
        {
          id: 4,
          name: "한우 꽃등심",
          desc_01: "꽃등심 1kg",
          desc_02: "안심 보냉박스 포장",
          price: 250000,
          imgSrc: require("../assets/gift/gift_04.png"),
          soldout: false,
          pageDetail: "",
        },
        {
          id: 5,
          name: "한우 안심",
          desc_01: "안심 1kg",
          desc_02: "안심 보냉박스 포장",
          price: 240000,
          imgSrc: require("../assets/gift/gift_05.png"),
          soldout: false,
          pageDetail: "",
        },
        {
          id: 6,
          name: "한우 안심",
          desc_01: "등심 1kg",
          desc_02: "안심 보냉박스 포장",
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
  },
};
</script>
