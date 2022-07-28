<template>
  <div
    class="m-auto flex h-80vh w-80vw flex-row flex-nowrap rounded-3xl bg-primary pr-3 font-openSans text-font-dark text-left drop-shadow-2xl"
  >
    <Menu />
    <div class="flex h-full basis-3/4 flex-col overflow-y-auto p-10">
      <header>
        <h1 class="text-grey-600 mt-0 mb-2 text-5xl font-medium leading-tight">
          {{ header }}
        </h1>
      </header>
      <slot></slot>
      <Pagination />
    </div>
  </div>
</template>

<script>
import Menu from '@/components/menu/Menu';
import Pagination from '@/components/pagination/Pagination';

export default {
	components: {
		Menu,
		Pagination
	},
	props: {
		header: { type: String, required: true }
	}
};
</script>
