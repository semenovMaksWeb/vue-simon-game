<template>
  <button @click="gamesStart" class="games-button-start">Старт</button>
</template>

<script>
import { GamesButton } from "@/composition/games/games-button";

export default {
  name: "games-button-start",
  setup() {
    return { gamesStart: GamesButton().gamesStart };
  },
};
</script>

<style>
.games-button-start {
  background-color: #989898;
  color: #fff;

  padding: 8px 4px;
  margin-bottom: 10px;

  border: 0;
  border-radius: 6px;
  cursor: pointer;
}
</style>
