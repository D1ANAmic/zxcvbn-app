<template>
  <div
    class="m-auto w-11/12 max-w-sm flex-col rounded-3xl bg-primary p-10 font-poppins text-font-dark lg:flex lg:max-w-full"
  >
    <header>
      <h1 class="text-grey-600 mt-0 mb-2 text-5xl font-medium leading-tight">
        {{ header }}
      </h1>
    </header>
    <slot></slot>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/pagination/Pagination';

export default {
	components: {
		Pagination
	},
	props: {
		header: { type: String, required: true }
	}
};
</script>
