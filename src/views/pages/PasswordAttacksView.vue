<template>
  <PageCard :header="'How attackers steal your passwords'">
    <template>
      <main>
        <Paragraph :paragraph="'These are the common ways attackers get your password.'"/>
        <Carousel></Carousel>
      </main>
    </template>
  </PageCard>
</template>

<script>

import PageCard from '@/components/cards/PageCard';
import Paragraph from '@/components/text/Paragraph';
import Carousel from '@/components/carousel/Carousel';

export default {
	components: {
		PageCard,
		Paragraph,
		Carousel
	}
};
</script>
