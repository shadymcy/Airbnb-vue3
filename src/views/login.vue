<template>
  <a-modal draggable :visible="visible" @ok="handleOk" @cancel="handleCancel">
    <template #title> Title </template>
    <div>
      You can cusstomize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
  </a-modal>
</template>
<script lang="ts" setup>
// defineProps:在 单文件组件中，向组件传递数据，
// 接收父组件传递的数据
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
// 调用父组件change事件
const emit = defineEmits(["change"]);
// 在 emits() 的第一个参数，是监听事件的字面量。第二个参数为事件传递的参数。如果该事件有多个参数，第二个参数建议用对象的形式传递。
// emits('increase', {params1:'1',params2:'2'});
const handleOk = () => {
  emit("change", false);
};

const handleCancel = () => {
  emit("change", false);
};
</script>
