<template>
  <div
      class="m-auto flex h-80vh w-80vw flex-row flex-nowrap rounded-3xl bg-primary pr-3 font-openSans text-font-dark text-left drop-shadow-2xl"
  >
    <slot name="start"></slot>
    <slot name="menu"></slot>
    <slot name="card-content"></slot>
  </div>
</template>

<script>

export default {
	components: {
	}
};
</script>
