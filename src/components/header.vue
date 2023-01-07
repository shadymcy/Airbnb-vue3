<template>
  <div class="travel-header">
    <!-- 图片轮播 Carousel -->
    <!-- 可以通过 autoPlay 设置是否自动切换。
    animation-name 切换动画
    direction 幻灯片移动方向
    show-arrow切换箭头显示时机
-->
    <a-carousel
      :auto-play="true"
      class="travel-header-carousel"
      show-arrow="never"
      direction="vertical"
      animation-name="fade"
    >
      <a-carousel-item v-for="image in images">
        <img :src="image" class="img" />
      </a-carousel-item>
    </a-carousel>
    <div
      ref="headerBar"
      class="travel-header-content"
      :style="{
        backgroundColor: scrollTop > 100 ? '#fff' : 'transparent',
        boxShadow:
          scrollTop > 100 ? '2px 4px 10px rgba(0, 0, 0, 0.116)' : 'none',
      }"
    >
      <div class="left">
        <img class="img" :src="scrollTop > 100 ? airbnbRed : airbnbWhite" />
      </div>
      <div class="search">
        <!-- allow-clear  是否允许清空输入框 -->
        <a-input
          class="search-input"
          placeholder="Start your search"
          allow-clear
        >
          <!-- <input> Slots
        suffix 后缀元素 -->
          <template #suffix>
            <a-button status="danger" type="primary" shape="circle">
              <icon-search></icon-search>
            </a-button>
          </template>
        </a-input>
      </div>
      <div class="right">
        <a-button
          class="btn-1"
          shape="round"
          type="text"
          :style="{
            color: scrollTop > 100 ? '#222' : '#fff',
          }"
          >Become a Host</a-button
        >
        <a-button class="btn-2" shape="circle" type="text">
          <icon-apps
            :class="['icon', scrollTop > 100 ? 'icon-grid' : '']"
          ></icon-apps>
        </a-button>
        <!-- 气泡卡片 Popover鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。 -->
        <!-- position 弹出位置 -->
        <a-popover trigger="click" position="lt">
          <a-button class="btn-3" shape="round">
            <icon-unordered-list class="icon"></icon-unordered-list>
            <icon-github class="icon"></icon-github>
          </a-button>
          <!-- <popover> Slots content 内容 -->
          <template #content>
            <HeaderPopover />
          </template>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ImageBg from "@assets/images/bg.webp";
import ImageBg1 from "@assets/images/bg.png";
import airbnbRed from "@assets/images/airbnb-red.png";
import airbnbWhite from "@assets/images/airbnb-white.png";
import {
  IconGithub,
  IconUnorderedList,
  IconApps,
  IconSearch,
} from "@arco-design/web-vue/es/icon";
import HeaderPopover from "@/components/HeaderPopover.vue";
import { ref } from "vue";
import { onBeforeUnmount, onMounted } from "vue";

const images = [ImageBg, ImageBg1];
let scrollTop = ref(0);
let rootDom: HTMLElement | null;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// 安全链式调用:这里 Error对象定义的stack是可选参数.我们可以添加?操作符，当stack属性存在时，调用 stack.split。若stack不存在，则返回空
// return new Error().stack?.split('\n');
// 以上代码等同以下代码
// const err = new Error();
// return err.stack && err.stack.split('\n');
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
const getScrollTop = () => {
  scrollTop.value = rootDom?.scrollTop || 0;
};
// onMounted() 注册一个回调函数，在组件挂载完成后执行。
// addEventListener() 方法用于向指定元素添加监听事件。且同一元素目标可重复添加，不会覆盖之前相同事件，
// 配合 removeEventListener() 方法来移除事件。
onMounted(() => {
  // app在index.html
  rootDom = document.getElementById("app");
  rootDom?.addEventListener("scroll", getScrollTop);
});

onBeforeUnmount(() => {
  rootDom?.removeEventListener("scroll", getScrollTop);
});
</script>


<style lang="scss" scoped>
@import '@assets/scss/mixin';

.travel-header {
  position: relative;
  color: #fff;
  // vw:就是相对视口宽度(Viewport Width)。1vw = 1% * 视口宽度。也就是说,一个视口就是100vw。
  &-carousel {
    width: 100vw;
    height: 800px;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  // @mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。
  // @include 指令可以将混入（mixin）引入到文档中。
  &-content {
    // 见assets/scss/mixin.scss
    // 参数的定义与变量定义的规则一样，都是$符号起头,给justify传参。
    // space-between均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点
    @include flex(space-between);
    // 生成固定定位的元素，相对于浏览器窗口进行定位。
    position: fixed;
    top: 0;
    left: 0;
    background-color: transparent;
    height: 80px;
    width: calc(100% - 160px);
    z-index: 1;
    padding: 0 80px;
    .left {
      @include flex;
      cursor: pointer;
      .img {
        width: 120px;
        height: auto;
      }
    }
    .search {
      &-input {
        width: 300px;
        height: 48px;
        align-items: center;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 40px;
        // box-shadow: h-shadow v-shadow blur spread color inset;
        // h-shadow	必需的。水平阴影的位置;v-shadow	必需的。垂直阴影的位置。
        // blur	可选。模糊距离；color	可选。阴影的颜色。
        // 可以在同一个元素上设置多个阴影效果，并用逗号将他们分隔开。
        box-shadow: 0 1px 2px rgb(0, 0, 0, 0.08), 0 4px 12px rgb(0, 0, 0, 0.05);
        color: #222;
        // max-width属性设置元素的最大宽度。注意： max-width属性不包括填充，边框，或页边距！
        // %	定义基于包含它的块级对象的百分比最大宽度。
        max-width: 100%;
        transition: box-shadow 0.2s ease;
        vertical-align: middle;
      }
    }

    .right {
      @include flex;
      .btn-1 {
        color: #fff;
        &:hover {
          // !important提供了一个增加样式权重的方法，让浏览器首选执行这个语句。
          // 使用方法：选择器 {样式：值 !important}
          color: #222 !important;
        }
      }
      .btn-2 {
        margin: 0 10px;
        cursor: pointer;
        .icon {
          margin-top: 4px;
          color: #fff;
          font-size: 18px;
        }
        .icon-grid {
          color: #222;
        }

        // 后代选择器 (空格) 后代选择器匹配属于指定元素后代的所有元素。
        &:hover .icon {
          color: #222;
        }
      }
      .btn-3 {
        @include flex(space-between, center, row, inline-flex);
        width: 77px;
        height: 42px;
        background-color: #fff;
        border: 1px solid #ddd;
        .icon {
          font-size: 18px;
        }
      }
    }
  }
}
</style> 