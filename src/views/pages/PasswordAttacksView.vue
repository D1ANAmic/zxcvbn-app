<template>
  <PageCard :header="'How attackers steal your passwords'">
    <template>
      <main>
        <Paragraph paragraph="Cyber crimes have been getting more and more over the last decades. Especially now that half our life is lived online, we need ways to protect our accounts against unauthorized access. Authentication via password has been around almost as long as computers themselves and the ways of cracking them are getting more and more clever by the minute."/>
        <Paragraph paragraph="Here are the most common ways attackers get your password."/>
        <Carousel></Carousel>
        <h2 class="mt-10 mb-6 text-3xl font-medium leading-tight">Online vs. Offline</h2>
        <Paragraph paragraph="sdf"></Paragraph>
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
