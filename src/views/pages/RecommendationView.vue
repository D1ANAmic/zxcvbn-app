<template>
  <PageCard :header="'How to keep your accounts secure'">
    <template>
      <main>
<Paragraph :paragraph="'&quotSo are there any recommendations to ensure password security?&quot, you might ask. Well, first of all don\'t submit your passwords to random apps disguised as educational programs.'"></Paragraph>
        <img src="../../assets/images/horseScale/horse_smirk.png" class="inline max-w-[100px]"/>
        <Paragraph :paragraph="'Just kidding. Although it is crucial to be cautious about who you trust with your password. Treacherous attackers lurk everywhere. '"></Paragraph>
        <Paragraph :paragraph="'Despite Zxcvbn providing the tools to compose a strong password, the endless amount of accounts that are now a fixture in our everyday lives pose a challenge to the creative mind and memory.'"></Paragraph>
        <Paragraph :paragraph="'That\'s where password managers come into play. Not only do most of them provide you with strong passwords out of the box but since they serve as a safe, you only need to remember the main password to open the safe. To avoid any possible breaches, a local or self hosted password manager is a good solution. If you have the chance, pair it with multi-factor authentication. And as for the main password: Use Zxcvbn to compose a strong one'"></Paragraph>
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
	}
};
</script>

