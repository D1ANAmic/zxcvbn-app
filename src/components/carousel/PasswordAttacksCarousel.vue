<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative">
    <!-- Carousel wrapper -->
    <div class="relative h-80 overflow-hidden rounded-lg">
      <!-- Carousel Items -->
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        :id="`carousel-item-${index}`"
        data-carousel-item="active"
        class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 bg-font-light transition-opacity duration-1000 ease-in-out"
        :class="index !== getCurrentElement ? 'opacity-0' : 'opacity-1'"
      >
        <div
          class="absolute h-full w-full bg-contain bg-center bg-no-repeat opacity-10"
          :class="item.bgImage"
        ></div>
        <div class="p-50 m-auto flex h-full items-center p-32 text-center">
          <div>
            <h2 class="mb-3 text-2xl font-extrabold">{{ item.headline }}</h2>
            <p>{{ item.paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3"
    >
      <div
        v-for="(_, index) in carouselItems"
        :key="index"
        :id="`carousel-indicator-${index}`"
        class="h-3 w-3 cursor-pointer rounded-full bg-font-dark bg-opacity-20 transition delay-75 duration-500 ease-in-out hover:bg-opacity-50"
        @click="setCurrentSlide(index)"
      ></div>
    </div>
    <!-- Slider controls -->
    <Button
      :handle-click="onPrev"
      id="data-carousel-prev"
      :classes="'absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4'"
    >
      <template #icon>
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-font-dark bg-opacity-20 transition delay-75 duration-500 ease-in-out hover:bg-opacity-50 hover:text-primary"
        >
          <i class="fa-solid fa-chevron-left text-dark"></i>
        </span>
      </template>
    </Button>
    <Button
      :handle-click="onNext"
      id="data-carousel-next"
      :classes="'absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4'"
    >
      <template #icon>
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-font-dark bg-opacity-20 transition delay-75 duration-500 ease-in-out hover:bg-opacity-50 hover:text-primary"
        >
          <i class="fa-solid fa-chevron-right text-dark"></i>
        </span>
      </template>
    </Button>
  </div>
</template>

<script>
import Button from '@/components/button/Button';

export default {
	components: {
		Button
	},
	data() {
		return {
			currentElement: 0,
			carouselItems: [
				{
					headline: 'Phishing',
					paragraph:
            'Phishing is a strategy of social engineering where the attacker attempts to trick users into supplying their credentials disguised as a legitimate site or service. Phishing attacks are commonly conducted via email. ',
					bgImage: 'bg-phishing'
				},
				{
					headline: 'Keylogging',
					paragraph:
            'Keyloggers are malicious pieces of software. Once they run on the user’s device, they record all keyboard strokes that are typed and pass them to the attacker. In a password attack, the keylogger records not only the user name and password but also the service where those credentials are used.',
					bgImage: 'bg-keylogger'
				},
				{
					headline: 'Brute Force Attack',
					paragraph:
            'A brute force attack is a trial-and-error method. By using Most of the time Brute Force Attacks are executed/conducted with dedicated algorithms by using different combinations of characters until the correct combination is found. They are most efficient if the pool of possible symbols is known to the attacker and in general for rather short passwords. ',
					bgImage: 'bg-bruteforce'
				},
				{
					headline: 'Dictionary Attacks',
					paragraph:
            'Dictionary Attacks are a subset of Brute Force Attacks where password dictionaries or lists of common passwords are tried against a login. Most of these lists derive from former breaches where credential information was stolen from big companies and later appeared somewhere on the internet.',
					bgImage: 'bg-dictionary'
				},
				{
					headline: 'Password spraying',
					paragraph:
            'For Password spraying, the same password is used against multiple logins which makes it less suspicious than multiple passwords against a single account. As a result the attack isn’t easily detected by most security systems.',
					bgImage: 'bg-password-spraying'
				},
				{
					headline: 'Credential stuffing',
					paragraph:
            'Credential stuffing is another subset of Brute Force Attacks where a cyber attack in which credentials obtained from a data breach on one service are used to attempt to log in to another unrelated service.',
					bgImage: 'bg-credential-stuffing'
				}
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
			if (this.currentElement >= this.carouselItems?.length - 1) {
				this.currentElement = 0;

				return;
			}
			this.currentElement += 1;
		},
		onPrev() {
			if (this.currentElement <= 0) {
				this.currentElement = this.carouselItems?.length - 1;

				return;
			}
			this.currentElement -= 1;
		},
		setCurrentSlide(index) {
			this.currentElement = index;
		}
	}
};
</script>
