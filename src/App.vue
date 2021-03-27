<template>
  <div class="container">
    <h1 class="h1">Simon Says</h1>
    <div class="row">
      <games-simon class="col" />
      <div class="col">
        <games-round />
        <games-button-start />
        <games-level />
      </div>
    </div>
  </div>
</template>

<script>
import GamesSimon from "@/components/games/games-simon";
import GamesLevel from "@/components/games/games-level";
import GamesRound from "@/components/games/games-round";
import GamesButtonStart from "@/components/games/games-button-start";
export default {
  name: "App",
  components: { GamesButtonStart, GamesRound, GamesLevel, GamesSimon },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.row {
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
}
.col {
  padding: 0 15px;
}
.h1 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
