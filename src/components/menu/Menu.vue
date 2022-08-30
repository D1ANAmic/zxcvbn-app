<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="pl-15 md:py-20 overflow-y-auto flex flex-col md:min-w-[30%] fixed h-screen lg:h-auto lg:relative md:max-w-[30%] basis-1/2 bg-secondary p-5 lg:p-10 text-left font-prozaLibre text-font-light text-sm xl:text-base"
  >
    <div class="flex flex-col justify-center m-auto">
      <ul class="m-auto flex h-1/2 flex-col justify-evenly">
        <li
          v-for="(page, index) in pages"
          :key="page.name"
          :index="index"
          class="cursor-pointer rounded p-2 tracking-wide"
          :class="{
            ' menu-active font-extrabold tracking-normal':
              isActivePage(page.name),
          }"
          @click="getPageLink(page)"
          @keyup.enter="getPageLink(page)"
        >
          <a>{{ index + 1 }}. {{ page.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['currentPage', 'pages']),
		getCurrentPageName() {
			return this.pages[this.currentPage - 1].name;
		}
	},
	methods: {
		isActivePage(name){
			return this.getCurrentPageName === name;
		},
		getPageLink(page) {
			const { pageNumber, path } = page;
			if (pageNumber === this.currentPage) {
				return;
			}
			this.$store.commit('SET_CURRENT_PAGE', pageNumber);
			this.$router.push(path);
		}
	}
};
</script>

<style lang="scss">
.menu-active {
  text-shadow: 0 0 10px;
}
</style>
