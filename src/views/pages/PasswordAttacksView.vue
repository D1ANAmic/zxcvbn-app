<template>
  <PageCard :header="'How attackers steal your passwords'">
    <template>
      <main>
        <Paragraph paragraph="Cyber crimes have been getting more and more over the last decades. Especially now that half our life is lived online, we need ways to protect our accounts against unauthorized access. Authentication via password has been around almost as long as computers themselves and the ways of cracking them are getting more and more clever by the minute."/>
        <Paragraph paragraph="Here are the most common ways attackers get your password."/>
        <Carousel></Carousel>
        <h2 class="mt-10 mb-6 text-3xl font-medium leading-tight">Online vs. offline attacks</h2>
        <Paragraph paragraph="Based on the way password cracking attacks are performed, we can classify them into two categories:"></Paragraph>
        <Paragraph paragraph="The target of online attacks is primarily the login interface of a website. Here the attacker would try a number of username and password combinations in order to gain access. Telltale password composition rules can hereby help to narrow down the possible passwords. Online attacks are limited by the network speed on the one hand. One the other hand, most applications have a alert system that will block the account after a certain number of failed login attemps. Therefore online guessing attacks are basically limited and can be intervened by the service. "></Paragraph>
        <Paragraph paragraph="Offline attacks attempt to recover passwords from a storage file or database an attacker could gain access to. Passwords are usually encrypted by a hashing algorithm, so it will take some time to recover the original strings. But since the attacker is already in possession of the hashes, there are no limitations to the number of possible guesses except the computing speed."></Paragraph>
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
