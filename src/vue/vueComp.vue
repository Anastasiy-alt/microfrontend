<script setup>
import {ref, watchEffect} from "vue";

const count = ref(window.store.count);

const random = () => {
  window.store.random();
  count.value = window.store.count;
};

watchEffect(() => {
  count.value = window.store.count;
});

</script>

<template>
  <div class="block">
    <h1 class="title">
      Pet-проект основанный на микрофронтендах
    </h1>
    <p class="subtitle">
      Данный текст и кнопка "Клик!" написаны на Vue.
      С помощью <i>магии</i> (store) кнопка генерирует случайное число и передает его в React.
    </p>
    <p class="subtitle">
      Рандомное число (вывод из Vue): {{ count }}
    </p>
    <button class="btn" @click="random">
      Клик!
    </button>
  </div>
</template>

<style>
.block {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px;
  font-family: Montserrat, sans-serif;
  max-width: 90vw;
}

.title {
  text-align: center;
  margin: 0 0 20px 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
}

.subtitle {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
}

.btn {
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  background-color: #fff;
  padding: 0 30px;
  text-transform: uppercase;
  border-radius: 5px;
  border: 2px solid deepskyblue;
  height: 44px;
  transition: all 0.35s ease-in-out;
  cursor: pointer;
  width: fit-content;
}


.btn:hover {
  background-color: deepskyblue;
}
</style>