<template>
  <CardBackground>
    <template #card-content>
      <div class="flex h-full basis-3/4 flex-col">
        <header>
          <h1
            class="mt-0 mb-2 font-prozaLibre text-5xl font-bold leading-tight text-third"
          >
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
import Pagination from '@/components/pagination/Pagination';

export default {
	components: {
		CardBackground,
		Pagination
	},
	props: {
		header: { type: String, required: true }
	}
};
</script>
