<template>
  <h3 class="games-round-title">Раунд: {{ getCountRound }}</h3>
</template>

<script>
import { GamesRound } from "@/composition/games/games-round";

export default {
  name: "games-round",
  setup() {
    return { getCountRound: GamesRound().getCountRound };
  },
};
</script>
<style>
.games-round-title {
  margin-bottom: 10px;
}
</style>
