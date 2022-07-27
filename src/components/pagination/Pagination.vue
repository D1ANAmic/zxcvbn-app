<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <Button :handle-click="handlePageDecrement" :disabled="currentPage === 1">
        <template #icon>
          <i class="fa-solid fa-chevron-left"></i>
        </template>
      </Button>
      <Button :handle-click="handlePageIncrement" :disabled="currentPage === totalPages">
        <template #icon>
          <i class="fa-solid fa-chevron-right text-font-dark"></i>
        </template>
      </Button>
    </div>
    <span aria-label="Page count" class="">
      {{ currentPage }}
    </span>
    <span aria-label="All pages" class="">
      {{ ` / ${totalPages}` }}
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
			totalPages : 0,
			buttonDisabled: false

		};
	},
	computed: {
		...mapState(['currentPage', 'pages'])
	},
	methods: {
		handlePageIncrement() {
			if (this.currentPage < this.totalPages) {
				this.$store.commit('SET_CURRENT_PAGE', this.currentPage + 1);
				console.log(this.currentPage);
				console.log(this.totalPages);
				this.$router.push(this.pages[this.currentPage - 1]['path']);
			}
		},
		handlePageDecrement() {
			if (this.currentPage > 0) {
				this.$store.commit('SET_CURRENT_PAGE', this.currentPage - 1);
				this.$router.push(this.pages[this.currentPage - 1]['path']);
			}
		},
		getPageNumber() {
			return Object.keys(this.pages).length ;
		}
	},
	created() {
		this.totalPages = this.getPageNumber();
	}
};
</script>
