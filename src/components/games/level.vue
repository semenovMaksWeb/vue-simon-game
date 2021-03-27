<template>
  <div class="games-level-items">
    <label class="games-level-label" :for="$attrs.id">{{ text }}</label>
    <input
      class="games-level-input"
      @input="$emit('update:getTimeHover', Number($event.target.value))"
      type="radio"
      name="level"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "level",
  props: {
    getTimeHover: {
      type: Number,
    },
    text: {
      type: String,
    },
  },
};
</script>
<style>
.games-level-items {
  margin-bottom: 10px;
}
.games-level-label {
  margin-right: 5px;
}
</style>
