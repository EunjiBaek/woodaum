<template>
  <div class="modal_wrap">
    <button class="close_btn" type="button" v-on:click="modalClose">
      <img :src="require('../../assets/icon/close_btn.png')" />
    </button>
    <div class="img_wrap">
      <img :src="imgSrc" />
    </div>
    <div class="cnt_wrap">
      <h2 v-if="$i18n.locale === 'ko'">{{ name }}</h2>
      <h2 v-else>{{ en_name }}</h2>
      <span v-if="$i18n.locale === 'ko'">{{ en_name }}</span>

      <p class="menu_desc">{{ desc }}</p>

      <p class="warnnig">
        {{ $t("modal_warnning") }}
      </p>
    </div>
  </div>
</template>

<script>
import { closeModal } from "jenesius-vue-modal";

export default {
  props: {
    name: String,
    en_name: String,
    imgSrc: String,
    desc: String,
  },
  methods: {
    modalClose: function () {
      closeModal();
    },
  },
};
</script>

<style lang="scss">
.modal_wrap {
  position: relative;
  width: 620px;
  padding: 4px 4px 28px 4px;
  background-color: #fff;

  > .close_btn {
    position: absolute;
    right: 14px;
    top: 14px;
    background: none;
    cursor: pointer;
  }

  > .img_wrap {
    width: 100%;
    height: 560px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;

    > img {
      height: 100%;
    }
  }

  > .cnt_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      text-align: center;
    }
    span {
      display: inline-block;
      font-size: 12px;
      margin-bottom: 15px;
    }

    > p.menu_desc {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 33px;
      text-align: center;
      word-break: keep-all;
    }

    > p.warnnig {
      font-size: 12px;
    }
  }
}
.modal-container {
  z-index: 1001 !important;
  background: rgba(0, 0, 0, 0.65) !important;
  box-sizing: border-box;
}

@media (max-width: 680px) {
  .modal-container {
    padding: 0 20px;
  }
  .modal_wrap {
    width: 100%;
    > .cnt_wrap {
      box-sizing: border-box;
      padding: 0 40px;
    }
    > .img_wrap {
      height: 400px;

      // > img {
      //   width: 100%;
      //   height: auto;
      // }
    }
  }
}
</style>
