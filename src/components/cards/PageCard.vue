<template>
  <CardBackground>
    <template #card-content>
      <div class="flex h-full basis-3/4 flex-col">
        <Button
          :classes="'md:hidden z-50 fixed w-full top-0 right-0 py-1 bg-secondary transition-color duration-500 ease-in-out text-xl lg:hidden'"
          :class="isMobileMenuShown ? 'text-font-light' : 'text-primary'"
          :handle-click="showMobileMenu"
        >
          <template #icon>
            <i class="fa-solid fa-bars"></i>
          </template>
        </Button>
        <Menu
          class="fixed top-0 left-0 z-10 min-w-full transition-transform duration-500 ease-in-out lg:hidden"
          :class="isMobileMenuShown ? 'translate-y-0' : '-translate-y-full'"
        />
        <header>
          <h1
            class="mt-20 mb-2 font-prozaLibre text-5xl font-bold leading-tight text-third md:mt-0"
          >
            {{ header }}
          </h1>
        </header>
        <slot></slot>
        <Pagination />
      </div>
    </template>
  </CardBackground>
</template>

<script>
import CardBackground from '@/components/cards/CardBackground';
import Pagination from '@/components/pagination/Pagination';
import Button from '@/components/button/Button';
import Menu from '@/components/menu/Menu';

export default {
	components: {
		Menu,
		Button,
		CardBackground,
		Pagination
	},
	props: {
		header: { type: String, required: true }
	},
	data() {
		return {
			isMobileMenuShown: false
		};
	},
	methods: {
		showMobileMenu() {
			this.isMobileMenuShown = !this.isMobileMenuShown;
		}
	}
};
</script>
