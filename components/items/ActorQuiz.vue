<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ "Welcher Superheld ist das?" }}
            </h3>
            <div class="image">
              <img src="~/assets/images/ironman.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Contains main superheroes from Marvel & DC, their actors, and images for each one
/* const data = [{
  // Marvel
  IronMan:{HeroName: "Iron Man" ,},
  CaptainAmerica:{HeroName: "Captain America" ,},
  WinterSoldier:{HeroName: "Winter Soldier" ,},
  NickFury:{HeroName: "Nick Fury" ,},
  Hulk:{HeroName: "Hulk" ,},
  BlackWidow:{HeroName: "Black Widow" ,},
  Thor:{HeroName: "Thor" ,},
  Loki:{HeroName: "Loki" ,},
  Hawkeye:{HeroName: "Hawkeye" ,},
  WarMachine:{HeroName: "War Machine" ,},
  Falcon:{HeroName: "Falcon" ,},
  StarLord:{HeroName: "Star Lord" ,},
  Gamora:{HeroName: "Gamora" ,},
  RocketRacoon:{HeroName: "Rocket Racoon" ,},
  Groot:{HeroName: "Groot" ,},
  Drax:{HeroName: "Drax" ,},
  YonduOlunta:{HeroName: "Yondu Olunta" ,},
  Mantis:{HeroName: "Mantis" ,},
  Nebula:{HeroName: "Nebula" ,},
  AntMan:{HeroName: "Ant Man" ,},
  BlackPanther:{HeroName: "Black Panther" ,},
  Vision:{HeroName: "Vision" ,},
  ScarletWitch:{HeroName: "Scarlett Witch" ,},
  Quicksilver:{HeroName: "Quicksilver" ,},
  TheWasp:{HeroName: "The Wasp" ,},
  SpiderMan:{HeroName: "Spider Man" ,},
  DoctorStrange:{HeroName: "Doctor Strange" ,},
  Valkyrie:{HeroName: "Valkyrie" ,},
  Korg:{HeroName: "Korg" ,},
  Shuri:{HeroName: "Shuri" ,},
  CaptainMarvel:{HeroName: "Captain Marvel" ,},
  Heimdall:{HeroName: "Heimdall" ,},
  Phastos:{HeroName: "Phastos" ,},
  Ajak:{HeroName: "Ajak" ,},
  // DC
  Batman:{HeroName: "Batman" ,},
  Superman:{HeroName: "Superman" ,},
  WonderWoman:{HeroName: "Wonder Woman" ,},
  Aquaman:{HeroName: "Aquaman" ,},
  TheFlash:{HeroName: "The Flash" ,},
  Cyborg:{HeroName: "Cyborg" ,},
  Deadshot:{HeroName: "Deadshot" ,},
  ElDiablo:{HeroName: "El Diablo" ,},
}];
console.log(data);
*/
</script>

<style>
.image {
  filter: blur(0px);
}

</style>
