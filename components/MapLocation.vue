<template>
  <div class="map-container">
    <client-only>
      <iframe
        src="https://yandex.com/map-widget/v1/?ll=76.958051%2C43.222377&z=16&pt=76.958051,43.222377,pm2drm"
        width="100%"
        height="400"
        frameborder="0"
        allowfullscreen="true"
        style="border: 0"
      ></iframe>
      <template #placeholder>
        <div class="map-placeholder">Загрузка карты...</div>
      </template>
    </client-only>
  </div>
</template>

<style scoped>
.map-container {
  max-width: 100%;
  height: 400px;
  margin: 30px 0;
}
.map-placeholder {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  color: #333;
  font-size: 1.2rem;
}
</style>
