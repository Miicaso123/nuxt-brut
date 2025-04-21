<template>
  <footer>
    <div class="bg-[#C49955] h-4">
      <span class="flex justify-end mr-8">
        <button @click="scrollToTop" class="bg-[#C49955] w-[60px] h-[60px] md:w-[40px] md:h-[40px] text-white cursor-pointer">
          <span>🡱</span>
        </button>
      </span>
    </div>
    <div class="footer-content bg-[#2C2C2C] text-white py-8">
      <div class="container-custom px-4">
        <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-4">
          <!-- Мы на связи -->
          <div>
            <h3 class="text-[30px] mb-4">МЫ НА СВЯЗИ!</h3>
            <p class="mb-2">Винные истории, акции и бонусы для своих.</p>
            <p class="mb-4">Один клик - и у вас в почте.</p>
            <div class="mb-4 flex gap-1">
              <input
                type="email"
                placeholder="Укажите свой e-mail"
                class="w-[305px] p-2 bg-[#2C2C2C] border border-[#FFFFFF] text-sm focus:outline-none"
              />
              <button class="bg-[#C49955] w-[40px] h-[40px] cursor-pointer">
                <span>🠖</span>
              </button>
            </div>
            <label class="flex items-center space-x-2 text-sm">
              <input type="checkbox" class="form-checkbox text-yellow-500" />
              <span>Я соглашусь с условиями пользовательского соглашения</span>
            </label>
            <h4 class="mt-6">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h4>
            <div class="mt-4 flex gap-6">
              <a href="#" class="text-2xl"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="text-2xl"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-2xl"><i class="fab fa-whatsapp"></i></a>
              <a href="#" class="text-2xl"><i class="fab fa-telegram-plane"></i></a>
            </div>
          </div>

          <!--О Brut -->
          <div>
            <h3 class="text-lg mb-4">О BRUT</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:underline font-extralight">О магазине</a></li>
              <li><a href="#" class="hover:underline font-extralight">События</a></li>
              <li><a href="#" class="hover:underline font-extralight">система лояльности</a></li>
              <li><a href="#" class="hover:underline font-extralight">Публичная оферта</a></li>
            </ul>
          </div>

          <!-- Сотрудничество -->
          <div>
            <h3 class="text-lg mb-4">СОТРУДНИЧЕСТВО</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:underline">Корпоративным клиентам</a></li>
              <li><a href="#" class="hover:underline">Частным клиентам</a></li>
            </ul>
          </div>

          <!-- Контакты -->
          <div>
            <h3 class="text-lg mb-4">КОНТАКТЫ</h3>
            <p class="mb-2">Алматы</p>
            <p class="mb-2">+7 777 666 2233</p>
            <p class="mb-2">+7 777 666 2233</p>
            <p class="mb-2">Есть винный вопрос? Звоните, обсудим!</p>
            <p class="mb-4 text-[#b7b7b7]">brutwine@mail.ru</p>
          </div>
        </div>
      </div>
      <!-- Нижняя часть -->
      <div class="border-t border-[#C49955]">
        <div class="pt-6 flex flex-col md:flex-row justify-between text-sm container-custom">
          <p class="mb-2 md:mb-0">@BRUT_2021</p>
          <p>Пользовательское соглашение и условия</p>
          <p>Обработка персональных данных</p>
          <p>Создание сайтов. Разработано Nidge Digital Agency</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

footer a {
  text-transform: uppercase;
  color: #b7b7b7;
  transition: color 0.3s;
}

footer a:hover {
  color: #d4af37;
}

input[type='checkbox'] {
  accent-color: #d4af37;
}
</style>
