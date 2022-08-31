<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tex2jax_process">
    <div
      class="mt-10 rounded bg-text-area-highlight p-10 italic text-secondary"
    >
      <Paragraph
        :paragraph="'<b>Tip</b>: How to easily convert powers of two into powers of ten:'"
        class="mt-0 mb-5"
      />
      <div class="text-sm leading-8">
        <span class="block">$2^{10} = 1024 \approx 10^3$</span>
        <span class="block">$2^{20} = 1048576 \approx 10^6$</span>
        <span class="block">$2^{30} = 1073741824 \approx 10^9$</span>
        <span class="block">$2^{40} = 1099511627776 \approx 10^{12}$</span>
      </div>
    </div>
  </div>
</template>

<script>
import Paragraph from '@/components/text/Paragraph';
import { initializeMathJaxQueue } from '@/utils/initializeMathJaxQueue';

export default {
	components: { Paragraph },
	methods: {
		initializeMathJaxQueue
	},
	mounted() {
		this.initializeMathJaxQueue(this);
	}
};
</script>
