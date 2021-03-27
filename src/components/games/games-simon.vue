<template>
  <div class="simon-row">
    <div
      class="simon simon-red"
      @click="userSimonClick(1)"
      v-bind:class="{
        simon_active: getIndexSimon === 1,
        disable: getHoveSimon,
      }"
    />
    <div
      class="simon simon-blue"
      @click="userSimonClick(2)"
      v-bind:class="{
        simon_active: getIndexSimon === 2,
        disable: getHoveSimon,
      }"
    />
    <div
      class="simon simon-yellow"
      @click="userSimonClick(3)"
      v-bind:class="{
        simon_active: getIndexSimon === 3,
        disable: getHoveSimon,
      }"
    />
    <div
      class="simon simon-green"
      @click="userSimonClick(4)"
      v-bind:class="{
        simon_active: getIndexSimon === 4,
        disable: getHoveSimon,
      }"
    />
  </div>
</template>

<script>
import { GamesSimon, GamesSimonClick } from "@/composition/games/games-simon";

export default {
  name: "games-simon",
  setup() {
    return { ...GamesSimon(), ...GamesSimonClick() };
  },
};
</script>

<style>
.simon-row {
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 25px;
}
.simon.disable {
  cursor: not-allowed;
}
.simon {
  width: 50%;
  height: 200px;
  cursor: pointer;
}
.simon_active,
.simon:hover {
  opacity: 0.4;
}
.simon.disable:hover {
  opacity: 1;
}
.simon-red {
  background-color: red;
}
.simon-blue {
  background-color: blue;
}
.simon-yellow {
  background-color: yellow;
}
.simon-green {
  background-color: green;
}
</style>
