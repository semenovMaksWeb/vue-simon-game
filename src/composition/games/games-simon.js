import { ref, computed } from "vue";
import { Utilities } from "@/composition/utilities";
import { GamesRound } from "@/composition/games/games-round";
import { GamesLevel } from "@/composition/games/games-level";
import { GamesButton } from "@/composition/games/games-button";

let indexSimon = ref(null);

const arrayClick = ref([]);
const arrayUser = ref([]);

let HoveSimon = ref(false);

export function GamesSimon() {
  const { getRandomInt, delay } = Utilities();
  const { getCountRound, countRoundAdd } = GamesRound();
  const { getTimeHover } = GamesLevel();

  const getIndexSimon = computed(() => indexSimon.value);
  const getArrayClick = computed(() => arrayClick.value);

  const ResetIndexSimon = async () => {
    await delay(getTimeHover.value);
    indexSimon.value = null;
  };

  const startHoveSimon = async () => {
    countRoundAdd();
    HoveSimon.value = true;
    for (let index = 1; getCountRound.value >= index; index++) {
      await delay(getTimeHover.value);
      indexSimon.value = getRandomInt(1, 4);
      arrayClick.value.push(indexSimon.value);
      await ResetIndexSimon();
    }
    // await ResetIndexSimon();
    HoveSimon.value = false;
  };

  return { getIndexSimon, startHoveSimon, getArrayClick };
}

export function GamesSimonClick() {
  // const { delay } = Utilities();
  const { countRoundReset } = GamesRound();
  const { stopGames } = GamesButton();

  const reset = () => {
    arrayUser.value = [];
    arrayClick.value = [];
    countRoundReset();
    stopGames();
  };
  const win = async () => {
    arrayUser.value = [];
    arrayClick.value = [];
    // await delay(1000);
    await GamesSimon().startHoveSimon();
  };
  const validate = async () => {
    const index = arrayUser.value.length - 1;
    if (arrayUser.value[index] !== arrayClick.value[index]) {
      reset();
    } else if (arrayUser.value.length === arrayClick.value.length) {
      await win();
    }
  };

  const userSimonClick = async (index) => {
    if (getHoveSimon.value === false) {
      arrayUser.value.push(index);
      await validate();
    }
  };

  const getHoveSimon = computed(() => {
    return HoveSimon.value;
  });

  return { userSimonClick, getHoveSimon };
}
