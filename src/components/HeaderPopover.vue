<template>
  <div class="header-popover">
    <!-- bordered 是否显示边框 -->
    <a-list :bordered="false">
      <template #header>
        <div
          class="header-popover-list-item"
          @click="changeDialogVisible('sign')"
        >
          Sign up
        </div>
      </template>
      <a-list-item
        class="header-popover-list-item"
        @click="changeDialogVisible('login')"
        >Login in
      </a-list-item>
      <a-divider class="header-popover-divider"></a-divider>
      <a-list-item class="header-popover-list-item">
        Host your home
      </a-list-item>
      <a-list-item class="header-popover-list-item">
        Host your experience
      </a-list-item>
      <a-list-item class="header-popover-list-item"> Help </a-list-item>
    </a-list>
  </div>
  <!-- @change在输入框发生变化且失去焦点后触发 -->
  <Login :visible="visible" @change="visibleChange" />
</template>

<script setup lang="ts">
import Login from "../views/login.vue";
import { Ref, ref, unref } from "vue";

const visible = ref(false);
const changeDialogVisible = (type: String) => {
  visible.value = true;
};
const visibleChange = (visible: Ref<Boolean>) => {
  // isRef() 检查某个值是否为 ref。 true or false
  // 如果参数是 ref，则返回内部值，否则返回参数本身。
  // 这是 val = isRef(val) ? val.value : val 计算的一个语法糖。
  visible.value = unref(visible);
};
</script>

<style lang="scss" scoped>
.header-popover {
  width: 220px;
  &-list-item {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      font-size: 16px;
      font-weight: 500;
      background-color: #f5f5f5;
    }
    // :last-child 选择器用来匹配父元素中最后一个子元素。(header-popover-list-item)
    // Sign up也是last-child
    &:last-child {
      margin: 0;
    }
  }
  &-divider {
    margin: 10px 0;
  }
  //   如果给当前组件的style 节点添加了scoped 属性，则当前组件的样式对其子组件是不生效的。如果想让某些样式对子组件生效，则需要使用:deep()。
  //   语法 .parent :deep(.children) { 样式内容 }
  :deep(.arco-list) {
    // 改变sign up
    .arco-list-header {
      padding: 0;
    }
    // 改变item其他项：loginin等
    .arco-list-item {
      padding: 10px 20px;
    }
  }
}
</style>
