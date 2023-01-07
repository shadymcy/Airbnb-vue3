<template>
  <!-- <footer> 标签定义文档或节的页脚。 -->
  <footer class="travel-footer-wrap">
    <div class="travel-footer">
      <div class="travel-footer-help">
        <div class="title">Company resources</div>
        <router-link to="/" class="link">Contact us</router-link>
        <router-link to="/" class="link">Help center</router-link>
        <router-link to="/" class="link">Locations</router-link>
        <router-link to="/" class="link">Brand Resource Center</router-link>
      </div>
      <div class="travel-footer-help">
        <div class="title">Responsibility</div>
        <router-link to="/" class="link">Accessibility</router-link>
        <router-link to="/" class="link">Crisis response</router-link>
        <router-link to="/" class="link">Digital wellbeing</router-link>
      </div>
      <div class="travel-footer-help">
        <div class="title">Other Services</div>
        <router-link to="/" class="link">Investor Relations</router-link>
        <router-link to="/" class="link">Trip.com Rewards</router-link>
        <router-link to="/" class="link">Affiliate Program</router-link>
        <router-link to="/" class="link">List My Hotel</router-link>
        <router-link to="/" class="link">All Hotels</router-link>
        <router-link to="/" class="link">Become a Supplier</router-link>
      </div>
      <div class="travel-footer-help">
        <div class="title">More about us</div>
        <router-link to="/" class="link">Transparency report</router-link>
        <router-link to="/" class="link">Community guidelines</router-link>
        <router-link to="/" class="link">How our business works</router-link>
        <router-link to="/" class="link">Extended workforce</router-link>
      </div>
    </div>
    <a-divider class="travel-footer-divider"></a-divider>
    <div class="travel-footer-bottom">
      <div class="left">
        <span>© 2023 Airbnb, Inc.</span>
        <div class="link-wrap">
          <router-link to="/">Privacy</router-link>
          <router-link to="/">Terms</router-link>
          <router-link to="/">Sitemap</router-link>
        </div>
      </div>
      <div class="right">
        <img :src="sphere" class="img" />
        <router-link to="/">English(US)</router-link>
        <div style="margin-left: 10px">
          <span style="margin-right: 5px">￥</span>
          <router-link to="/">CNY</router-link>
        </div>
        <icon-weibo-circle-fill
          style="margin-left: 10px"
        ></icon-weibo-circle-fill>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import sphere from "@assets/images/sphere.png";
import { IconWeiboCircleFill } from "@arco-design/web-vue/es/icon";
</script>


<style scoped lang="scss">
@import "@assets/scss/mixin.scss";

.travel-footer-wrap {
  width: calc(100vw - 160px);
  padding: 48px 80px;
  background-color: #f7f7f7;
  // font-family属性指定一个元素的字体
  // font-family 可以把多个字体名称作为一个"回退"系统来保存。如果浏览器不支持第一个字体，则会尝试下一个。
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
}
.travel-footer {
  // display:grid   设置该元素为网格容器
  display: grid;
  //grid-template-columns： 列宽
  //repeat()：可以重复一些行或者列，值可以是长度或者是auto-fill（填充尽可能多的单元格）
  //相当于grid-template-columns: 25% 25% 25% 25%;
  grid-template-columns: repeat(4, 25%);
  &-help {
    @include flex(top, flex-start, column);
    .title {
      color: rgb(34, 34, 34);
      //  uppercase定:义仅有大写字母。（文字全大写）
      text-transform: uppercase;
      font-size: 12px;
      //   font-weight 属性设置文本的粗细
      font-weight: bold;
      margin-bottom: 10px;
      
    }
    .link {
      line-height: 20px;
      color: #222;
      // text-decoration 属性规定添加到文本的修饰，下划线、上划线、删除线等。
      text-decoration: none;
      cursor: pointer;
      font-size: 14px;
      margin-top: 16px;
    }
  }
}
.travel-footer-divider {
  width: 100%;
}
.travel-footer-bottom {
  @include flex(space-between);
  color: #222;
  .link-wrap {
    margin-left: 10px;
    // router-link标签，默认渲染出来是<a></a>标签
    a {
      position: relative;
      color: #222;
      margin-left: 10px;
      padding-left: 10px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      &::before {
        content: ".";
        position: absolute;
        top: -4px;
        left: -2px;
      }
    }
  }
  .left,
  .link-wrap,
  .right {
    @include flex;
    color: #222;
  }
  .right {
    a {
      color: #222;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: #666;
      }
    }
    .img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      cursor: pointer;
    }
  }
}
</style>
