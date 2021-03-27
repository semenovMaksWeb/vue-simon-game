import { ref, computed } from "vue";

let countRound = ref(0);

export function GamesRound() {
  const getCountRound = computed(() => countRound.value);
  const countRoundAdd = () => {
    countRound.value++;
  };
  const countRoundReset = () => {
    countRound.value = 0;
  };
  return { getCountRound, countRoundAdd, countRoundReset };
}
