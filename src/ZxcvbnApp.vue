<template>
  <!--tex2jax_ignore prevents Mathjax from processing the whole document, processable regions are additionally
  indicated by tex2jax_process-->
  <div id="app" class="tex2jax_ignore flex h-screen bg-app-background bg-cover">
    <div
      class="m-auto flex h-full w-full max-w-[1084px] flex-row flex-nowrap rounded border-third bg-primary
      text-left font-openSans text-font-dark shadow-2xl lg:h-80vh lg:w-80vw lg:border-2 lg:drop-shadow-2xl"
    >
      <Menu v-if="!isStartPage" class="hidden md:block" />
      <div
        class="overflow-x-hidden p-6 sm:p-20 lg:ml-auto lg:p-10"
        :class="isStartPage ? 'flex' : 'md:ml-[30%] '"
      >
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/menu/Menu';
import { mapState } from 'vuex';
export default {
	components: {
		//StartView,
		Menu
	},
	computed: {
		...mapState(['currentPage']),
		isStartPage() {
			return this.currentPage === 0;
		}
	}
};
</script>

<style lang="scss">
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
}
</style>
