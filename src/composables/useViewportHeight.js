// composables/useViewportHeight.js
import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useViewportHeight() {
  // Реактивная переменная для хранения высоты
  const height = ref(window.innerHeight);

  // Функция-обработчик обновления
  const updateHeight = () => {
    height.value = window.innerHeight;
  };

  // Подписываемся на событие resize при монтировании
  onMounted(() => {
    window.addEventListener('resize', updateHeight);
  });

  // Отписываемся при размонтировании, чтобы избежать утечек памяти
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateHeight);
  });

  return { height };
}
