<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
      <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <img alt="Vue logo" :src="catImage">
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">{{ title }}</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">{{ msg }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <!-- Button -->
         <slot name="button"></slot>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		title: { type: String, required: true },
		msg: { type: String, default: '' },
		catImage: { type: String, default: '' }
	},
	data() {
		return {
		};
	},
	mounted(){
	}
};
</script>
