<template>
  <transition-group name="upload-fade">
    <li v-for="(item, index) in files" class="py-upload__list" v-show="files.length" :key="index">
      <span class="py-upload__list__name" @click="onItem(item, index)">
        <i class="pyui-icons py-icon-file-fill"></i>
        <span>{{item.name}}</span>
      </span>
      <i v-if="item.percentage === 100"
        @click="onRemove(item, index)"
        title="删除" class="pyui-icons py-icon-close"></i>
      <div class="py-upload__list__wappar" v-if="item.showProgress">
        <div class="py-upload__list__prect">
          <li :style="{width: item.percentage+'%'}"></li>
        </div>
        <span class="py-upload__list__del" ref="del"
          v-if="item.showProgress">{{item.percentage}}%</span>
      </div>
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'py-upload__list',
  props: {
    files: {
      type: Array,
      default: () => {},
    },
    onBeforeRemove: Function,
  },
  methods: {
    onItem(index, item) {
      this.$emit('on-item', index, item);
    },
    onRemove(item, index) {
      if (this.onBeforeRemove(item, index) === false) {
        return false;
      }
      return this.$emit('on-remove', item, index);
    },
  },
};
</script>
