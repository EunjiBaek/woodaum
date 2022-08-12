<template>
  <div class="footer">
    <div class="footer-content container">
      <div class="footer-top-list">
        <ul>
          <li>이용약관</li>
          <li>개인정보취급방침</li>
          <li>이메일무단수집거부</li>
          <li>사이트맵</li>
        </ul>
      </div>

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
  padding: 35px 0;

  .footer-content {
    .footer-top-list {
      margin-bottom: 20px;
      ul {
        > li {
          position: relative;
          display: inline-block;
          color: #c4cdd4;
          font-size: 14px;
          padding: 0 30px;

          &::after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            display: inline-block;
            width: 1px;
            height: 13px;
            background-color: #c4cdd4;
          }
        }
      }
    }

    .bottom {
      margin-bottom: 50px;
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
