<template>
  <div>
    <main id="brandstory">
      <!-- <modal-popup /> -->
      <section id="section1" class="content_item show">
        <div class="content">
          <h2>{{ $t("brand_story_01.title") }}</h2>
          <p class="sub-tit">{{ $t("brand_story_01.sub_title") }}</p>
          <p class="content">
            {{ $t("brand_story_01.content") }}
          </p>
        </div>

        <div ref="section1" class="image" :style="section_img_01"></div>

        <div class="gradient"></div>
      </section>

      <section id="section2" class="content_item">
        <div class="content">
          <h2>{{ $t("brand_story_02.title") }}</h2>
          <p class="sub-tit">{{ $t("brand_story_02.sub_title") }}</p>
          <p class="content">
            {{ $t("brand_story_02.content") }}
          </p>
        </div>
        <div class="image" :style="section_img_02">></div>
        <div class="gradient"></div>
      </section>

      <section id="section3" class="content_item">
        <div class="content">
          <h2>{{ $t("brand_story_03.title") }}</h2>
          <p class="sub-tit">{{ $t("brand_story_03.sub_title") }}</p>
          <p class="content">
            {{ $t("brand_story_03.content") }}
          </p>
        </div>
        <div class="image" :style="section_img_03"></div>
        <div class="gradient"></div>
      </section>
    </main>

    <main id="mobile_brandstory">
      <!-- <modal-popup /> -->
      <section id="mb_section1" class="content_item show">
        <div class="content">
          <h2>{{ $t("brand_story_01.title") }}</h2>
          <p class="sub-tit">{{ $t("brand_story_01.sub_title") }}</p>
          <p class="content">
            {{ $t("brand_story_01.content") }}
          </p>
        </div>

        <div ref="section1" class="image" :style="section_img_01"></div>

        <div class="gradient"></div>
      </section>

      <section id="mb_section2" class="content_item">
        <div class="content">
          <h2>{{ $t("brand_story_02.title") }}</h2>
          <p class="sub-tit">{{ $t("brand_story_02.sub_title") }}</p>
          <p class="content">
            {{ $t("brand_story_02.content") }}
          </p>
        </div>
        <div class="image" :style="section_img_02">></div>
        <div class="gradient"></div>
      </section>

      <section id="mb_section3" class="content_item">
        <div class="content">
          <h2>{{ $t("brand_story_03.title") }}</h2>
          <p class="sub-tit">{{ $t("brand_story_03.sub_title") }}</p>
          <p class="content">
            {{ $t("brand_story_03.content") }}
          </p>
        </div>
        <div class="image" :style="section_img_03"></div>
        <div class="gradient"></div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#brandstory {
  section {
    position: relative;
    width: 100%;
    height: 625px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    > .gradient {
      display: none;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(217, 217, 217, 0) 16%,
        rgba(0, 0, 0, 0.5) 100%
      );
      z-index: 500;
    }

    > .image {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center 45%;
      background-attachment: fixed;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 500;
    }

    > .content {
      position: relative;
      z-index: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h2 {
        color: white;
        font-size: 32px;
        margin-bottom: 24px;
        opacity: 0;
        transform: translateY(100px);
        transition: all 1.2s 0.3s cubic-bezier(0, 0.66, 0.38, 1.01);
      }

      > p {
        color: #ffffff;
        text-align: center;

        &.sub-tit {
          font-size: 24px;
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(100px);
          transition: all 1.4s 0.5s cubic-bezier(0, 0.66, 0.38, 1.01);
        }

        &.content {
          width: 510px;
          font-size: 18px;
          opacity: 0;
          transform: translateY(100px);
          transition: all 1.6s 0.7s cubic-bezier(0, 0.66, 0.38, 1.01);
          word-break: keep-all;
        }
      }
    }
    &.show {
      > .content {
        > h2 {
          opacity: 1;
          transform: translateY(0);
        }
        > p {
          &.sub-tit,
          &.content {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }
  }
}
#mobile_brandstory {
  position: relative;
  display: none;
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    > .gradient {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(217, 217, 217, 0) 16%,
        rgba(0, 0, 0, 0.5) 100%
      );
      z-index: 500;
    }

    > .image {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
      background-attachment: fixed;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 500;
    }

    > .content {
      position: relative;
      z-index: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-sizing: border-box;
      padding: 0 25px;
      transition: all 0.3s ease-in-out;

      h2 {
        color: white;
        font-size: 32px;
        margin-bottom: 5px;
        opacity: 0;
        transform: translateY(100px);
        transition: all 1.2s 0.3s cubic-bezier(0, 0.66, 0.38, 1.01);
      }

      > p {
        font-weight: 600;
        color: #ffffff;
        text-align: center;

        &.sub-tit {
          font-size: 14px;
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(100px);
          transition: all 1.4s 0.5s cubic-bezier(0, 0.66, 0.38, 1.01);
        }

        &.content {
          width: 510px;
          font-size: 12px;
          opacity: 0;
          transform: translateY(100px);
          transition: all 1.6s 0.7s cubic-bezier(0, 0.66, 0.38, 1.01);
        }
      }
    }
    &.show {
      > .content {
        > h2 {
          opacity: 1;
          transform: translateY(0);
        }
        > p {
          &.sub-tit,
          &.content {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  #brandstory {
    display: none;
  }
  #mobile_brandstory {
    display: block;
  }
  #mobile_brandstory section.show > .content > p.sub-tit,
  #mobile_brandstory section.show > .content > p.content {
    width: 100%;
  }
}
</style>

<script>
// import ModalPopup from "@/components/common/ModalPopup.vue";
import LazyImage from "@/components/LazyImage.vue";

export default {
  name: "BrandStory",
  data() {
    return {
      section_img_01: {
        backgroundImage: `url(${require("../assets/brandstory/wodawum.jpg")})`,
      },
      section_img_02: {
        backgroundImage: `url(${require("../assets/brandstory/wodawum02.jpg")})`,
      },
      section_img_03: {
        backgroundImage: `url(${require("../assets/brandstory/wodawum03.jpg")})`,
      },
    };
  },
  // components: {
  //   LazyImage,
  // },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll_02);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleScroll_02);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        (document.documentElement.scrollTop ||
          window.scrollY ||
          window.pageYOffset) + window.innerHeight;
      let st = window.scrollY;
      const items = document.querySelectorAll("#brandstory .content_item");
      for (let i = 0; i < items.length; i++) {
        if (scrollTop > items[0].offsetTop) {
          this.$refs.section1.style.backgroundPositionY = -(st / 50) + "px";
        } else if (scrollTop > items[1].offsetTop) {
          this.$refs.section2.style.backgroundPositionY = -(st / 50) + "px";
        } else if (scrollTop > items[2].offsetTop) {
          this.$refs.section3.style.backgroundPositionY = -(st / 50) + "px";
        }
      }
      document.querySelectorAll("#brandstory .content_item").forEach((item) => {
        scrollTop > item.offsetTop
          ? item.classList.add("show")
          : item.classList.remove("show");
      });
    },
    handleScroll_02() {
      let scrollTop =
        (document.documentElement.scrollTop ||
          window.scrollY ||
          window.pageYOffset) + window.innerHeight;

      document
        .querySelectorAll("#mobile_brandstory .content_item")
        .forEach((item) => {
          scrollTop > item.offsetTop
            ? item.classList.add("show")
            : item.classList.remove("show");
        });
    },
  },
};
</script>
