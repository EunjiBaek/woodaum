<template>
  <div>
    <widget-container-modal />
    <Header />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import { container } from "jenesius-vue-modal";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default {
  name: "App",
  components: { Header, Footer, widgetContainerModal: container },
};
</script>

<style lang="scss">
// 폰트설정
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "@/scss/main.scss";

/* 여백 초기화 */
body,
div,
ul,
li,
dl,
dd,
dt,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
fieldset,
legend,
p,
select,
table,
th,
td,
tr,
textarea,
button,
form,
figure,
figcaption {
  margin: 0;
  padding: 0;
  line-height: 1.3em;
}

/* a 링크 초기화 */
a {
  color: #000;
  text-decoration: none;
}
/* 폰트 초기화 */
body,
input,
textarea,
select,
button,
table {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  color: $text_color_01;
  font-size: 13px;
  line-height: 1.5;
}

body {
  overflow-x: scroll;
}

/* 폰트 스타일 초기화 */
em,
address {
  font-style: normal;
}

/* 블릿기호 초기화 */
ul,
li,
ol {
  list-style: none;
}

/* 제목 태그 초기화 */
h1 {
  font-size: 32px;
  font-weight: 800;
}
h2 {
  font-size: 24px;
  font-weight: 700;
}
h3 {
  font-size: 18px;
  font-weight: 700;
}

h5,
h6 {
  font-size: 13px;
  font-weight: normal;
}

p {
  font-size: 14px;
  line-height: 1.3em;
}

.small_text {
  font-size: 12px;
}

/* 테두리 초기화 */
img,
fieldset {
  border: 0 none;
}

/* 버튼 초기화 */
button {
  border: 0;
}

/* clearfix */
.clearfix {
  *zoom: 1;
}
.clearfix:before,
.clearfix:after {
  display: block;
  content: "";
  line-height: 0;
}
.clearfix:after {
  clear: both;
}

.container {
  width: 1200px;
  margin: 0 auto;
}
.row {
  padding: 0 20px;
}

.sub_top {
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .sub_desc {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > strong {
      font-size: 64px;
      font-weight: 100;
      font-family: Montserrat, sans-serif;
      color: #ffffff;
      line-height: 1.2em;
      margin-bottom: 30px;
    }
    > p {
      color: #ffffff;
      text-align: center;
    }
  }
}

.sub_content {
  margin-top: 60px;
  margin-bottom: 100px;
}

select {
  border: 1px solid #cccccc;
  appearance: none;
  font-size: 14px;
  height: 30px;
  padding: 0 2em 0 0.5em;
  background-image: url("./assets/icon/select_arrow.png");
  background-position: 95% 50%;
  background-repeat: no-repeat;
}

@media (max-width: 1250px) {
  .container {
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
  }
}
</style>
