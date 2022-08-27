<template>
  <CardBackground>
    <template #menu>
    <Menu />
    </template>
    <template #card-content>
    <div class="flex h-full basis-3/4 flex-col overflow-y-auto p-10">
      <header>
        <h1 class="mt-0 mb-2 text-5xl font-medium leading-tight">
          {{ header }}
        </h1>
      </header>
      <slot></slot>
      <Pagination />
    </div>
    </template>
  </CardBackground>
</template>

<script>
import CardBackground from '@/components/cards/CardBackground';
import Menu from '@/components/menu/Menu';
import Pagination from '@/components/pagination/Pagination';

export default {
	components: {
		CardBackground,
		Menu,
		Pagination
	},
	props: {
		header: { type: String, required: true }
	}
};
</script>
