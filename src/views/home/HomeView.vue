<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <Button
        :handle-click="() => $store.commit('SET_MODAL_OPEN', !modalOpen)"
        :text="'Open Modal'"/>
    <Modal
      v-if="modalOpen"
      :title="'Modal'"
      :msg="'as.dkfoiaewrj öaöoig asdklfj-l'"
      :catImage="catImage">
      <template #button>
          <Button
            :handle-click="closeModal"
            :classes="'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'"
            :text="'Confirm'"/>
           <Button
             :handle-click="closeModal"
            :text="'Cancel'"/>
      </template>
    </Modal>
    <ZxcvbnView />
  </div>
</template>

<script>

import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button.vue';
import ZxcvbnView from '@/views/home/ZxcvbnView';
import { mapState } from 'vuex';

export default {
	components: {
		Button,
		Modal,
		ZxcvbnView
	},
	props: {
	},
	data() {
		return {
			catImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png'
		};
	},
	computed: {
		...mapState([
			'modalOpen'
		])
	},
	methods: {
		closeModal(){
			this.$store.commit('SET_MODAL_OPEN', false);
		}
	}
};
</script>

