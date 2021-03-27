import { ref, computed } from "vue";

let timeHover = ref(1500);

export function GamesLevel() {
  const getTimeHover = computed({
    get: () => {
      return timeHover.value;
    },
    set: (values) => {
      timeHover.value = values;
    },
  });
  return { getTimeHover };
}
