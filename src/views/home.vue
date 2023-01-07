<template>
  <Header />
  <main class="home-main">
    <!-- section元素代表一个页面或一个内容块的部分，一般作为主题块列表 -->
    <section class="nearby">
      <h3 class="nearby-title">Explore nearby</h3>
      <div class="nearby-wrap">
        <div class="nearby-wrap-item" v-for="item in 8">
          <img :src="bg1" class="img" />
          <div class="right">
            <span class="h5">Shanghai City</span>
            <span class="h6">5 minutes drive</span>
          </div>
        </div>
      </div>
    </section>
    <!-- 如需为一个元素规定多个类，用空格分隔类名。  -->
    <section class="nearby live">
      <h3 class="nearby-title">Discover things to do</h3>
      <div class="nearby-wrap">
        <div class="live-wrap-item" v-for="item in 4">
          <img :src="bg2" class="img" />
          <span class="h5">Outdoor getaways</span>
        </div>
      </div>
    </section>

    <section class="hosting">
      <img :src="bg4" class="img" />
      <div class="hosting-des">
        <p class="hosting-des-title">Try hosting</p>
        <span class="hosting-des-text">Earn extra income and unlock new</span>
        <span class="hosting-des-text"
          >opportunities by sharing your space.</span
        >
        <div class="hosting-des-btn">Learn more</div>
      </div>
    </section>
    <section class="nearby discover">
      <h3 class="nearby-title">Discover things to do</h3>
      <div class="discover-wrap">
        <div class="discover-wrap-item" v-for="item in 3">
          <img :src="bg3" class="img" />
          <span class="h5">Experiences</span>
          <span class="h6">Find unforgettable activities near you.</span>
        </div>
      </div>
    </section>
    <section class="inspiration">
      <h3 class="inspiration-title">Inspiration for future getaways</h3>
      <a-tabs default-active-key="0" class="inspiration-tab">
        <a-tab-pane
          :key="idx"
          :title="item.name"
          v-for="(item, idx) in inspirationTabs"
        >
          <div class="inspiration-tab-panel">
            <div class="inspiration-tab-panel--item" v-for="item in 37">
              <span class="h5">Los Angeles</span>
              <span class="h6">California</span>
            </div>
          </div></a-tab-pane
        >
      </a-tabs>
    </section>
  </main>
  <Footer />
</template>


<script setup lang="ts">
import Header from "@/components/header.vue";
import Footer from "@/components/Footer.vue";

import bg1 from "@assets/images/nearbg-1.webp";
import bg2 from "@assets/images/nearbg-2.webp";
import bg3 from "@assets/images/nearbg-3.webp";
import bg4 from "@assets/images/nearbg-4.webp";

const inspirationTabs = [
  { name: "Destinations for arts & culture" },
  { name: "Destinations for outdoor adventure" },
  { name: "Mountain cabins" },
  { name: "Beach destinations" },
  { name: "Popular destinations" },
  { name: "Unique Stays" },
];
</script>


<style lang="scss" scoped>
@import "@assets/scss/app.scss";
@import "@assets/scss/mixin.scss";
// @mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。
@mixin h5 {
  font-size: 18px;
  // 设置行高.针对文本
  line-height: 22px;
  // max-height 属性设置元素的最大高度。注意： max-height属性不包括填充，边框，或页边距！
  // 不超出的话，层高度就和层中内容元素高度一样，否则就截断内容，显示max-height的高度。
  // 这个44后面加个空格再px(max-height不生效)
  max-height: 44 px;
  // 
  overflow: hidden;
  // 显示省略符号 ... 来代表被修剪的文本。
  text-overflow: ellipsis;
  // -webkit-box用于移动端设备自适应布局，实现横列的流体布局
  // 在需要实现流体布局的子元素的直接父元素中添加属性：display:-webkit-box;
  display: -webkit-box;
  // 【实现多行文本溢出显示...】webkit-line-clamp 用来限制在一个块元素显示的文本的行数。为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
  // display: -webkit-box; 必须结合的属性，将对象作为弹性伸缩盒子模型显示 。
  // -webkit-box-orient 必须结合的属性，设置或检索伸缩盒对象的子元素的排列方式 。
  // 效果：第15 https://www.runoob.com/w3cnote/front-end-interview-a-few-important-points-of-knowledge.html
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: rgb(34, 34, 34);
  font-weight: 600;
  // white-space属性指定元素内的空白怎样处理。
  // pre-line	合并空白符序列，但是保留换行符。
  white-space: pre-line;
  padding-top: 8px;
}
@mixin h6 {
  font-size: 16px;
  line-height: 18px;
  max-height: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: rgb(34, 34, 34);
  font-weight: 400;
  white-space: pre-line;
  margin-top: 4px;
}
.home-main {
  width: calc(100vw - 160px);
  .nearby {
    height: 260px;
    overflow: hidden;
    &-title {
      font-size: 32px;
      color: #222;
    }
    &-wrap {
      display: grid;
      grid-template-columns: repeat(4, 25%);
      // gap 属性是用来设置网格行与列之间的间隙，该属性是row-gap and column-gap的简写形式。
      gap: 16px;
      &-item {
        @include flex(flex-start);
        cursor: pointer;

        .img {
          width: 64px;
          height: 64px;
          border-radius: 4px;
          margin-right: 10px;
        }
        .right {
          @include flex(center, center, column);
          .h5 {
            font-size: 16px;
            color: #222;
            font-weight: 600;
          }
          .h6 {
            font-size: 16px;
            color: #222;
            margin-top: 10px;
          }
        }
      }
    }
  }
  .live {
    height: auto;
    &-wrap {
      display: grid;
      grid-template-columns: repeat(4, 25%);
      gap: 16px;
      &-item {
        display: grid;
        cursor: pointer;
        .img {
          width: 100%;
          border-radius: 8px;
        }
        @include h5;
      }
    }
  }
  .discover {
    height: auto;
    &-wrap {
      display: grid;
      grid-template-columns: repeat(3, 33.33%);
      gap: 16px;
      &-item {
        display: grid;
        cursor: pointer;
        .img {
          width: 100%;
          border-radius: 8px;
        }
        .h5 {
          @include h5;
        }
        .h6 {
          @include h6;
          margin-top: 5px;
          font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
            "Helvetica Neue", sans-serif;
        }
      }
    }
  }
  .hosting {
    position: relative;
    margin: 24px 0;
    margin-top: 40px;
    border-radius: 8px;
    &-des {
      @include flex(center, flex-start, column);
      position: absolute;
      left: 0;
      top: 0;
      width: 48%;
      height: 100%;
      padding-left: 80px;
      color: #fff;
      cursor: pointer;
      &-title {
        font-size: 48px;
        line-height: 52px;
      }
      &-text {
        font-size: 18px;
        line-height: 24px;
      }
      &-btn {
        margin-top: 40px;
        font-size: 16px;
        color: rgb(72, 72, 72);
        border-radius: 8px;
        background-color: #fff;
        font-weight: 600;
        padding: 14px 24px;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
    }
    .img {
      width: 100%;
      border-radius: 8px;
    }
  }

  .inspiration {
    margin: 60px 0;
    &-title {
      color: #222;
      font-weight: 400;
      width: 100%;
      margin-bottom: 8px;
    }
    &-tab {
      &-panel {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        gap: 16px;
        &--item {
          @include flex(center, flex-start, column);
          .h5 {
            color: #222;
            text-overflow: ellipsis;
            overflow: hidden;
            // nowrap	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
            white-space: nowrap;
            font-size: 14px;
            line-height: 18px;
            cursor: pointer;
          }
          .h6 {
            color: #717171;
            margin-top: 5px;
            font-size: 14px;
          }
        }
      }
      // 导航
      :deep(.arco-tabs-tab) {
        color: #717171;
      }
      :deep(.acro-tabs-tab-active) {
        color: #222;
      }
      :deep(.arco-tabs-nav-ink) {
        background-color: #222;
      }
    }
  }
}
</style>
