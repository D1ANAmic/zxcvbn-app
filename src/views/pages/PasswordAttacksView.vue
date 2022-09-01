<template>
  <PageCard :header="'How attackers steal your passwords'">
    <template>
      <main>
        <Paragraph
          :paragraph="'The rate of cyber crimes is increasing every year. Since half our life is lived online, we need ways to protect our accounts from unauthorized access. Passwords have been around almost as long as computers but at the same time password cracking attempts are getting cleverer by the minute.'"
        />
        <Paragraph
          :paragraph="'Here are the most common ways attackers get their hands on your password:'"
        />
        <Carousel />
        <h2 class="mt-20 mb-6 text-3xl leading-tight">
          Online vs. offline attacks
        </h2>
        <Paragraph
          class="mb-[2rem]"
          :paragraph="'Based on the way password cracking attacks are performed, we can classify them into two categories:'"
        />
        <h3 class="text-xl font-medium leading-tight">Online Attacks</h3>
        <Paragraph
          class="mb-[2rem] mt-[2rem]"
          :paragraph="'The target of online attacks is primarily the login interface of a website. Here the attacker would try a number of username and password combinations in order to gain access. Telltale password composition rules can hereby help to narrow down the possible passwords. Online attacks are limited by the network speed on the one hand. On the other hand, most applications have an alert system that will block the account after a certain number of failed login attempts. Therefore online guessing attacks are basically limited and can be mitigated.'"
        />
        <h3 class="mb-[2rem] text-xl font-medium leading-tight">
          Offline Attacks
        </h3>
        <Paragraph
          class="mt-[2rem]"
          :paragraph="'Offline attacks attempt to recover passwords from a storage file or database an attacker could gain access to. Passwords are usually encrypted by a hashing algorithm, so it will take some time to recover the original words. But since the attacker is already in possession of the hashes, there are no limitations to the number of guessing attempts.'"
        />
      </main>
    </template>
  </PageCard>
</template>

<script>
import PageCard from '@/components/cards/PageCard';
import Paragraph from '@/components/text/Paragraph';
import Carousel from '@/components/carousel/PasswordAttacksCarousel';
import { scrollToTop } from '@/utils/scrollTopTop';

export default {
	components: {
		PageCard,
		Paragraph,
		Carousel
	},
	created() {
		scrollToTop();
	}
};
</script>
