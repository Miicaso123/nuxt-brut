<template>
  <div v-if="store.isVisible" class="dropdown-container">
    <div class="filters">
      <div class="filter-group" v-for="(items, label) in store.filters" :key="label">
        <h4 class="filter-label">{{ label }}</h4>
        <ul>
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropdownStore } from '@/stores/dropdown';
const store = useDropdownStore();
</script>

<style scoped>
.dropdown-container {
  display: flex;
  gap: 40px;
  background: white;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1320px;
  z-index: 100;
}

@media (max-width: 767px) {
  .dropdown-container {
    display: none;
  }
}

.filters {
  display: flex;
  gap: 32px;
}

.filter-group {
  min-width: 160px;
}

.filter-label {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
}

.filter-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.filter-group li {
  font-size: 13px;
  color: #333;
  margin: 4px 0;
  cursor: pointer;
}
</style>
