<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal">
      <div v-if="!isAgeDeclined" class="flex flex-col gap-4">
        <h2 class="text-[#C10000] text-3xl">21+</h2>
        <p class="text-[#5A5A5A] text-xl">Для доступа на сайт необходимо подтвердить возраст</p>
        <span class="border flex border-gray-200"></span>
        <p class="text-base">
          Сайт содержит информацию, не рекомендованную для лиц, не достигших совершеннолетнего
          возраста. Вам исполнилось 21?
        </p>
        <div class="flex justify-around">
          <button class="btn" @click="confirmAge">Да</button>
          <button class="btn" @click="declineAge">Нет</button>
        </div>
      </div>

      <div v-if="isAgeDeclined">
        <p class="text-[#5A5A5A] text-xl">
          Вам не рекомендуется использовать сайт, так как Вы не достигли совершеннолетнего возраста.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const showModal = ref(true);
const isAgeDeclined = ref(false);

const confirmAge = () => {
  showModal.value = false;
};

const declineAge = () => {
  isAgeDeclined.value = true;
  showModal.value = true;
};

onMounted(() => {
  showModal.value = true;
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  width: 450px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.btn {
  width: 180px;
  height: 45px;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
}
</style>
