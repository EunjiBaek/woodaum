<template>
  <div class="footer">
    <div class="footer-content container">
      <div class="bottom">
        <ul>
          <li>
            대표이사 : 김기환 ㅣ 주소 : 서울시 종로구 창경궁로 120 종로플레이스
            10F (주)휴세코
          </li>
          <li>사업자등록번호 : 114-81-97424 ㅣ 문의전화 : 02-6900-7605</li>
        </ul>
      </div>

      <p>COPYRIGHT © 2022 HUSECO ALL RIGHT RESERVED</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
@import "../../scss/main.scss";
.footer {
  text-align: center;
  background-color: #272727;
  padding: 40px 0;

  .footer-content {
    .bottom {
      margin-bottom: 25px;
      ul {
        > li {
          font-size: 12px;
          color: #c4cdd4;
          line-height: 1.4em;
        }
      }
    }

    > p {
      font-size: 14px;
      color: #c4cdd4;
    }
  }
}
</style>
