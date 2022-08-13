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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product_cnt {
  display: flex;
  align-items: flex-start;

  > .img {
    width: 464px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    > img {
      width: 100%;
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
