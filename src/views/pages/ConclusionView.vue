<template>
  <PageCard :header="'Is Zxcvbn the solution to all our problems?'">
    <template>
      <main>
        <Paragraph
            paragraph="Bla."
        ></Paragraph>
      </main>
    </template>
  </PageCard>
</template>

<script>
import Paragraph from '@/components/text/Paragraph';
import PageCard from '@/components/cards/PageCard';

export default {
	components: {
		Paragraph,
		PageCard
	},
	data() {
		return {
			value: ''
		};
	}

};
</script>
