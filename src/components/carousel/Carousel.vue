<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
      <!-- Carousel Items -->
      <div v-for="(item, index) in carouselItems"
           :key="index"
           :id="`carousel-item-${ index }`"
           class="duration-700 ease-in-out"
           data-carousel-item="active">
        <img
            :src="item.image"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."
            :class="{'hidden': index !== getCurrentElement }">
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button id="carousel-indicator-1" type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
      <button id="carousel-indicator-2" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
      <button id="carousel-indicator-3" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
      <button id="carousel-indicator-4" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"></button>
    </div>
    <!-- Slider controls -->
    <button @click="onPrev()" id="data-carousel-prev" type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button @click="onNext()" id="data-carousel-next" type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
  </div>

</template>

<script>

import Button from '@/components/button/Button';

export default {
	components:{
		/*Button*/
	},
	data() {
		return {
			currentElement: 0,
			carouselItems: [
				{ headline: '', paragraph: '', image: require('@/assets/images/dumbPasswords/admiral.png') },
				{ headline: '', paragraph: '', image: require('@/assets/images/dumbPasswords/adp.png') },
				{ headline: '', paragraph: '', image: require('@/assets/images/dumbPasswords/aetna.png') },
				{ headline: '', paragraph: '', image: require('@/assets/images/dumbPasswords/aigues_barcelona.png') },
				{ headline: '', paragraph: '', image: require('@/assets/images/dumbPasswords/airaisa.png') },
				{ headline: '', paragraph: '', image: require('@/assets/images/dumbPasswords/aigues_barcelona.png') },
				{ headline: '', paragraph: '', image: require('@/assets/images/dumbPasswords/aetna.png') },
				{ headline: '', paragraph: '', image: require('@/assets/images/dumbPasswords/admiral.png') }
			]
		};
	},
	computed: {
		getCurrentElement() {
			return this.currentElement;
		}
	},
	methods: {
		onNext() {
			if (this.currentElement >= this.carouselItems?.length) {
				this.currentElement = 0;
			}
			//const currentEl = document.getElementById(`carousel-item-${ this.currentElement }`);
			//console.log('next slider item is shown: ', currentEl, 'Data: ', currentEl.dataset.carouselItem);
			this.currentElement += 1;
		},
		onPrev() {
			if (this.currentElement < 0) {
				this.currentElement = this.carouselItems?.length;
			}
			this.currentElement -= 1;
		}
	}
};
</script>
