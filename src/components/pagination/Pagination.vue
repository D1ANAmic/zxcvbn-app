<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <Button :handle-click="handlePageDecrement">
        <template #icon>
          <i class="fa-solid fa-chevron-left"></i>
        </template>
      </Button>
      <Button :handle-click="handlePageIncrement">
        <template #icon>
          <i class="fa-solid fa-chevron-right text-font-dark"></i>
        </template>
      </Button>
    </div>
    <span aria-label="Page count" class="">
      {{ currentPage }}
    </span>
    <span aria-label="All pages" class="">
      {{ ` / ${allPages}` }}
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
		};
	},
	computed: {
		...mapState(['currentPage', 'allPages'])
	},
	methods: {
		handlePageIncrement() {
			if (this.currentPage < this.allPages) {
				this.$store.commit('SET_CURRENT_PAGE', this.currentPage + 1);
			}
		},
		handlePageDecrement() {
			if (this.currentPage > 1) {
				this.$store.commit('SET_CURRENT_PAGE', this.currentPage - 1);
			}
		}
	}
};
</script>
