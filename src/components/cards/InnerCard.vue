<template>
  <div>
    <div
        id="imageWrapper"
        class="relative m-auto h-[300px] w-11/12 flex flex-col justify-center items-center rounded bg-white p-2.5 overflow-hidden "
    >
    </div>
        <Button
            :text="getButtonText"
            :handle-click="getHandleClick"
            :is-disabled="imageTransitionStarted">
            <template #icon>
              <span v-html="getButtonIcon"></span>
            </template>
        </Button>
  </div>
</template>

<script>
import Button from '@/components/button/Button';

const TRANSITION_TIMEOUT_MULTIPLIER = 1000;

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
			firstInit: true
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
				/*return this.startImageAnimation;*/
				return this.startPasswordPolicicesAnimation;
			}

			return this.resetImageAnimation;
		},
		/*getImageTransitionDuration() {
			if (this.firstInit) {

				return 0;
			}
			console.log('Computed: ', Math.floor(this.imageSources?.length) * ( this.currentImageIndex * 1000));

			return Math.floor(this.imageSources?.length) * TRANSITION_TIMEOUT_MULTIPLIER;
		},*/
		getButtonIcon() {
			if (! this.imageTransitionStarted) {
				return '<i class="fa-solid fa-play"></i>';
			}

			return '<i class="fa-solid fa-rotate"></i>';
		}
	},
	watch: {
		/*currentImageIndex() {
			/!* Make sure that the timeout duration is set to 0 for the initial image *!/
			if (! this.firstInit) {
				this.startImageAnimation();
			}
		}*/
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
			image.className = 'absolute w-11/12 self-center animate-appear';
			console.log(this.currentImageIndex);
			console.log(image);

			imageWrapper.appendChild(image);
			/*setTimeout(() => image.classList.remove('animate-appear'), this.imageTransitionDuration);*/
		},
		/*incrementImageCounter() {
			return this.currentImageIndex += 1;
		},*/
		startImageAnimation() {
			if (this.currentImageIndex >= this.imageSources.length) {

				return;
			}
			this.imageTransitionDuration = Math.floor(this.imageSources?.length) * TRANSITION_TIMEOUT_MULTIPLIER;
			//console.log(this.getImageTransitionDuration);
			setTimeout(() => {
				this.imageTransitionStarted = true;
				const transitionMilliseconds = this.currentImageIndex * TRANSITION_TIMEOUT_MULTIPLIER;
				this.imageTransitionDuration = this.imageTransitionDuration - transitionMilliseconds;
				//console.log(this.getImageTransitionDuration);
				this.appendCurrentImage();
				this.incrementImageCounter();
				this.firstInit = false;
			}, this.getImageTransitionDuration);

		},

		startPasswordPolicicesAnimation(){
			for (let i = 0 ; i <= this.imageSources.length; i ++){

				this.imageTransitionStarted = true;
				setTimeout( () => {
					this.currentImageIndex = i;
					console.log('currentIndex: ', this.currentImageIndex, 'I: ', i);
					this.appendCurrentImage();
					if (i === this.imageSources.length - 1){
						this.imageTransitionStarted = false;
					}
					/*this.incrementImageCounter();*/
					/*this.firstInit = false;*/
				}, 5000 * i);
			}


			/* for (let i = 0; i < wordIndex + 1; i ++) {
          const timeOut = 400 * i + 1500;
          const currentWord = document.getElementById(this.firstTwentyWordlist[i]);
          wordlist.push(currentWord);

          setTimeout(() => {

            this.toggleHighlight(wordlist, i);
            if (i === wordlist.length - 1){
              this.animationButtons.tokensAnimationRunning = false;
              this.toggleTokenTransformed();
            }
          }, timeOut);
        }

      },*/
		},


		/*		resetTransition() {
			this.imageTransitionStarted = false;
			this.currentImageIndex = 0;
		},*/
		resetImageAnimation() {
			/*this.resetTransition();*/
			document.getElementById('imageWrapper').innerHTML = '';
			this.imageTransitionStarted = false;
			/*this.firstInit = true;*/
		}
	},
	mounted() {
		this.populateImages();
		this.imageSources.forEach((img) => { console.log(img); });
	},
	beforeDestroy() {
		// To avoid memory leaks when refreshing page
		this.imageSources = [];
		this.resetTransition();
	}
};
</script>
