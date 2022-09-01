<template>
  <div class="top_pad">
    <div class="sub_top" :style="subtop_img">
      <div class="sub_desc">
        <strong>WOODAUM+82 Store</strong>
        <p>
          {{ $t("subtop_store.content") }} <br />
          {{ $t("subtop_store.content_02") }}
        </p>
      </div>
    </div>

    <div class="sub_content">
      <div class="container">
        <h3>{{ $t("store_info.title") }}</h3>

        <div class="store_info_wrap">
          <div v-for="store in stores" class="box" :key="store.id">
            <div class="img">
              <img
                v-if="store.imgSrc !== ''"
                :data-lazy="store.imgSrc"
                v-lazyloadImage
              />
              <div class="no_img" v-else>준비중입니다</div>
            </div>
            <div class="content">
              <h3>{{ store.name }}</h3>
              <p>{{ store.address }}</p>
              <strong>{{ store.number }}</strong>
              <div class="btn_wrap">
                <button type="button" class="view">
                  <a :href="store.viewSrc">View</a>
                </button>
                <button type="button" class="reserve" target="_blank">
                  <a :href="store.reserve">{{
                    $t("store_info.reserve_btn")
                  }}</a>
                </button>
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

.sub_content {
  > div > h3 {
    margin-bottom: 35px;
  }
}

.store_info_wrap {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px 1.5%;

  > .box {
    width: 49.25%;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.1);

    .img {
      width: 100%;
      height: 330px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      > .no_img {
        width: 100%;
        height: 100%;
        background-color: #c4c4c4;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #ffffff;
        font-weight: 600;
      }

      > img {
        width: 100%;
      }
    }

    .content {
      > h3 {
        color: #2e383f;
        margin-bottom: 4px;
      }

      > p {
        font-size: 14px;
        color: #2e383f;
        margin-bottom: 12px;
      }

      > strong {
        display: block;
        font-size: 18px;
        color: $secondary_color_01;
        margin-bottom: 25px;
      }
      height: 220px;
      box-sizing: border-box;
      padding: 28px 58px;

      > .btn_wrap {
        display: flex;
        align-items: flex-start;
        gap: 0 1.5%;

        > button {
          width: 49.25%;
          height: 42px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-sizing: border-box;
          overflow: hidden;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
          }

          &.view {
            background-color: #fff;
            border: 1px solid $secondary_color_01;

            > a {
              color: $secondary_color_01;
            }

            &:hover {
              background-color: $secondary_color_01;
              a {
                color: #ffffff;
              }
            }
          }

          &.reserve {
            background-color: #fff;
            border: 1px solid #000000;
            a {
              color: #000000;
            }
            &:hover {
              background-color: #000000;
              a {
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 950px) {
  .store_info_wrap > .box .img > img {
    width: auto;
    height: 100%;
  }
}
@media (max-width: 768px) {
  .store_info_wrap {
    gap: 15px 0;
    > .box {
      width: 100%;
    }
  }
  .store_info_wrap > .box .img {
    height: 250px;
    > img {
      width: 100%;
      height: auto;
    }
  }
  .store_info_wrap > .box .content {
    padding: 28px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      subtop_img: {
        backgroundImage: `url(${require("../assets/subtopImage/subtop_store.png")})`,
      },
      stores: [
        {
          id: 1,
          name: this.$t("store_younsan.name"),
          address: this.$t("store_younsan.address"),
          number: "02-792-1992",
          imgSrc: require("../assets/store/store-1.jpg"),
          reserve: "https://app.catchtable.co.kr/ct/search/total",
          viewSrc: "https://test.ducon.co.kr/en/tour/7ntbh52wn",
        },
        {
          id: 2,
          name: this.$t("store_bundang.name"),
          address: this.$t("store_bundang.address"),
          number: "031-726-8292",
          imgSrc: require("../assets/store/store-2.jpg"),
          reserve: "https://app.catchtable.co.kr/ct/search/total",
          viewSrc: "https://test.ducon.co.kr/en/tour/qpjcpgmxt9",
        },
      ],
    };
  },
};
</script>
