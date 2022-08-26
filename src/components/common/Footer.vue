<template>
  <div class="footer">
    <div class="footer-content container">
      <div class="bottom">
        <ul>
          <li>
            {{ $t("footer.list_01") }} ㅣ
            {{ $t("footer.list_02") }}
            10F (주)휴세코
          </li>
          <li>{{ $t("footer.list_03") }}</li>
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

@media (max-width: 768px) {
  .footer {
    display: none;
  }
}
</style>
