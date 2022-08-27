<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative">
    <!-- Carousel wrapper -->
    <div class="relative h-72 overflow-hidden rounded-lg">
      <!-- Carousel Items -->
      <div
        v-for="(item, index) in imageSources"
        :key="index"
        :id="`carousel-item-${index}`"
        data-carousel-item="active"
        class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 bg-font-light transition-opacity duration-1000 ease-in-out flex"
        alt="..."
        :class="index !== getCurrentElement ? 'opacity-0' : 'opacity-1'"
      >
        <img :src="imageSources[index]" class="m-auto w-3/4">
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3"
    >
      <div
        v-for="(item, index) in imageSources"
        :key="index"
        :id="`carousel-indicator-${index}`"
        class="h-3 w-3 cursor-pointer rounded-full bg-font-dark bg-opacity-20 transition delay-75 duration-500 ease-in-out hover:bg-opacity-50"
        @click="setCurrentSlide(index)"
      ></div>
    </div>
    <!-- Slider controls -->
    <button
      @click="onPrev()"
      id="data-carousel-prev"
      type="button"
      class="absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4"
    >
      <span
        class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-font-dark bg-opacity-20 transition delay-75 duration-500 ease-in-out hover:bg-opacity-50 hover:text-primary"
      >
        <i class="fa-solid fa-chevron-left text-dark"></i>
      </span>
    </button>
    <button
      @click="onNext()"
      id="data-carousel-next"
      type="button"
      class="absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4"
    >
      <span
        class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-font-dark bg-opacity-20 transition delay-75 duration-500 ease-in-out hover:bg-opacity-50 hover:text-primary"
      >
        <i class="fa-solid fa-chevron-right text-dark"></i>
      </span>
    </button>
  </div>
</template>

<script>

export default {
	components: {
		/*Button*/
	},
	data() {
		return {
			currentElement: 0,
			imageSources: []
		};
	},
	computed: {
		getCurrentElement() {
			return this.currentElement;
		}
	},
	methods: {
		populateImages() {
			//webpack function to get all files in a specified folder
			const context = require.context(
				'@/assets/images/dumbPasswords/',
				true,
				/^\.\/.*$/
			);
			context
				.keys()
				.forEach((key) =>
					this.imageSources.push(
						//populate imageSources array with image paths
						require(`@/assets/images/dumbPasswords/${key.replace('./', '')}`)
					)
				);
		},
		onNext() {
			if (this.currentElement >= this.imageSources?.length - 1) {
				this.currentElement = 0;

				return;
			}
			this.currentElement += 1;
		},
		onPrev() {
			if (this.currentElement <= 0) {
				this.currentElement = this.imageSources?.length - 1;

				return;
			}
			this.currentElement -= 1;
		},
		setCurrentSlide(index) {
			this.currentElement = index;
		}
	},
	mounted() {
		this.populateImages();

	}
};
</script>
