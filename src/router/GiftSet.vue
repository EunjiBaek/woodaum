<template>
  <div>
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
            <div class="img">
              <img :src="require('../assets/menu/menu-1.jpg')" />
            </div>

            <div class="content">
              <h3>한우 스페셜 세트 A (3.1kg)</h3>
              <p class="product_configuration">
                꽃등심 900g, 등심 900g, 안심 500g, 불고기 800g
              </p>

              <strong class="price">500,000 원</strong>

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

          <div class="product_detail_img_wrap">
            <h3>상품설명</h3>
            <div class="img_wrap">
              <img
                :src="
                  require('../assets/prodcutDetails/product_details_01.png')
                "
              />
            </div>
            <div class="service_center_wrap">
              <h2>고객 행복 센터</h2>
              <p class="desc">
                궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요? 아래
                전화번호로 연락주시면 빠르게 도와드리겠습니다.
              </p>
              <p class="call">전화문의 (02)6900 - 0000</p>
              <span>오전 8시 - 오후 5시 (월~금)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main.scss";
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
  margin-top: 100px;
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
    > h2 {
      color: #2e383f;
      margin-bottom: 16px;
    }

    > p.call {
      display: block;
      height: 28px;
      color: $secondary_color_01;
      font-weight: 600;
      padding-right: 20px;
    }

    > p.desc {
      color: #2e383f;
      font-weight: 600;
      margin-bottom: 35px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      subtop_img: {
        backgroundImage: `url(${require("../assets/brandstory/wodawum02.jpg")})`,
      },
    };
  },
};
</script>
