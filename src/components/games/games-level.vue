<template>
  <div class="games-level-block">
    <level
      checked
      id="easy"
      v-model:getTimeHover="getTimeHover"
      :value="1500"
      text="Легкий"
    />
    <level
      id="medium"
      v-model:getTimeHover="getTimeHover"
      :value="1000"
      text="Средний"
    />
    <level
      id="hard"
      v-model:getTimeHover="getTimeHover"
      :value="400"
      text="Сложный"
    />
  </div>
</template>

<script>
import { GamesLevel } from "@/composition/games/games-level";
import Level from "@/components/games/level";

export default {
  name: "games-level",
  components: { Level },
  setup() {
    return { ...GamesLevel() };
  },
};
</script>
