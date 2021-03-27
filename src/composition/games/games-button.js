import { ref, computed } from "vue";
import { GamesSimon } from "@/composition/games/games-simon";

let startGames = ref(false);

export function GamesButton() {
  const { startHoveSimon } = GamesSimon();
  const getStartGames = computed(() => startGames.value);
  const stopGames = () => {
    startGames.value = false;
  };
  const gamesStart = async () => {
    if (startGames.value === false) {
      startGames.value = true;
      await startHoveSimon();
    }
  };

  return { gamesStart, getStartGames, stopGames };
}
