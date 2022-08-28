<template>
<!--tex2jax_ignore prevents Mathjax from processing the whole document, processable regions are additionally indicated by tex2jax_process-->
  <div id="app" class="flex h-screen bg-app-background tex2jax_ignore">
   <div class="m-auto flex h-80vh w-80vw flex-row flex-nowrap rounded-3xl bg-primary pr-3 font-openSans text-font-dark text-left drop-shadow-2xl" >
    <Menu/>
    <div class="overflow-y-auto pl-20 pr-20 pt-10 pb-10">
      <transition  name="fade" mode="out-in">
      <router-view/>
      </transition>
    </div>
   </div>
  </div>
</template>

<script>
import Menu from '@/components/menu/Menu';
export default {
	components:{
		Menu
	}
};

</script>


<style lang="scss">
.fade-leave-active {
  opacity: 0;
  transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {

}

</style>
