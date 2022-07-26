<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <Button :handle-click="handlePageDecrement" :disabled="currentPage === 1">
        <template #icon>
          <i class="fa-solid fa-chevron-left"></i>
        </template>
      </Button>
      <Button :handle-click="handlePageIncrement" :disabled="currentPage === pageNumber">
        <template #icon>
          <i class="fa-solid fa-chevron-right text-font-dark"></i>
        </template>
      </Button>
    </div>
    <span aria-label="Page count" class="">
      {{ currentPage }}
    </span>
    <span aria-label="All pages" class="">
      {{ ` / ${pageNumber}` }}
    </span>
  </div>
</template>

<script>
import Button from '@/components/button/Button';
import { mapState } from 'vuex';

export default {
	components:{
		Button
	},
	data() {
		return {
			pageNumber : 1,
			buttonDisabled: false

		};
	},
	computed: {
		...mapState(['currentPage', 'allPages', 'pages'])
	},
	methods: {
		handlePageIncrement() {
			if (this.currentPage < this.pageNumber) {
				this.$store.commit('SET_CURRENT_PAGE', this.currentPage + 1);
				this.$router.push(this.pages[this.currentPage]);
			}
		},
		handlePageDecrement() {
			if (this.currentPage > 1) {
				this.$store.commit('SET_CURRENT_PAGE', this.currentPage - 1);
				this.$router.push(this.pages[this.currentPage]);
			}
		},
		getPageNumber() {
			return Object.keys(this.pages).length;
		}
	},
	created() {
		this.pageNumber = this.getPageNumber();
	}
};
</script>
