<template>
  <div>
    <div
        id="imageWrapper"
        class="relative m-auto h-[500px] w-11/12 flex flex-col justify-center items-center rounded bg-white p-2.5 overflow-hidden"
    >
    </div>
        <Button
            :text="getButtonText"
            :handle-click="getHandleClick"
            :is-disabled="false">
            <template #icon>
              <span v-html="getButtonIcon"></span>
            </template>
        </Button>
  </div>
</template>

<script>
import Button from '@/components/button/Button';

const TRANSITION_TIMEOUT_MULTIPLIER = 1000;
const TRANSITION_TIMEOUT_DEFAULT_MILLISECONDS = 1000;

export default {
	components: {
		Button
	},
	data() {
		return {
			imageSources: [],
			imageTransitionDuration: 0,
			currentImageIndex: 0,
			imageTransitionStarted: false,
			firstInit: true,
			transitionTimeoutDefault: TRANSITION_TIMEOUT_DEFAULT_MILLISECONDS
		};
	},
	computed: {
		getButtonText() {
			if (! this.imageTransitionStarted) {
				return 'Play';
			}

			return 'Refresh';
		},
		getHandleClick() {
			if (! this.imageTransitionStarted) {
				return this.startImageAnimation;
			}

			return this.resetImageAnimation;
		},
		getImageTransitionDuration() {
			if (this.firstInit) {

				return 0;
			}

			return Math.floor(this.imageSources?.length) * TRANSITION_TIMEOUT_MULTIPLIER;
		},
		getButtonIcon() {
			if (! this.imageTransitionStarted) {
				return '<i class="fa-solid fa-play"></i>';
			}

			return '<i class="fa-solid fa-rotate"></i>';
		}
	},
	watch: {
		currentImageIndex() {
			/* Make sure that the timeout duration is set to 0 for the initial image */
			if (! this.firstInit) {
				this.startImageAnimation();
			}
		}
	},
	methods: {
		getImageAltText(source) {
			if (! source || ! source.length) {
				return 'undefined';
			}
			const arr = source.split('/');

			return arr[arr.length - 1].split('.')[0];
		},
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
		appendCurrentImage() {
			const imageWrapper = document.getElementById('imageWrapper');
			const image = document.createElement('img');
			image.src = this.imageSources[this.currentImageIndex];
			image.alt = this.getImageAltText(this.imageSources[this.currentImageIndex]);
			image.className = 'absolute max-h-[80%] max-w-[80%] self-center';
			image.classList.add('animate-appear');

			imageWrapper.appendChild(image);
			setTimeout(() => image.classList.remove('animate-appear'), this.imageTransitionDuration);
		},
		incrementImageCounter() {
			return this.currentImageIndex += 1;
		},
		startImageAnimation() {
			if (this.currentImageIndex >= this.imageSources.length) {

				return;
			}
			this.imageTransitionDuration = Math.floor(this.imageSources?.length) * TRANSITION_TIMEOUT_MULTIPLIER;
			setTimeout(() => {
				this.imageTransitionStarted = true;
				const transitionMilliseconds = this.currentImageIndex * TRANSITION_TIMEOUT_MULTIPLIER;
				this.imageTransitionDuration = this.imageTransitionDuration - transitionMilliseconds;
				this.appendCurrentImage();
				this.incrementImageCounter();
				this.firstInit = false;
			}, this.getImageTransitionDuration);

		},
		resetTransition() {
			this.imageTransitionStarted = false;
			this.currentImageIndex = 0;
		},
		resetImageAnimation() {
			this.resetTransition();
			document.getElementById('imageWrapper').innerHTML = '';
			this.firstInit = true;
		}
	},
	mounted() {
		this.populateImages();
	},
	beforeDestroy() {
		// To avoid memory leaks when refreshing page
		this.imageSources = [];
		this.resetTransition();
	}
};
</script>
