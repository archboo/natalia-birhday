<template>
  <q-page class="birthday-page" align="center">
    <q-card class="birthday-page__main" flat>
      <q-img src="/src/assets/main.png" :width="viewportWidth + 'px'" />
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Реактивная переменная
const viewportHeight = ref(window.innerHeight);
const viewportWidth = ref(window.innerWidth);
// Обновление высоты
const updateHeight = () => {
  viewportHeight.value = window.innerHeight;
};

const updateWidth = () => {
  viewportHeight.value = window.innerWidth;
};

// Подписка при монтировании
onMounted(() => {
  window.addEventListener('resize', updateHeight);
  window.addEventListener('resize', updateWidth);
});

// Отписка при размонтировании
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight);
  window.removeEventListener('resize', updateWidth);
});
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'FourthFont';
  src: url('/public/fonts/MariinavoFont-Regular.ttf') format('opentype');
  font-weight: normal;
  font-display: fallback;
}
.birthday-page {
  background-image: url(../assets/background.png);
  background: url(../assets/background.png);
}
</style>
