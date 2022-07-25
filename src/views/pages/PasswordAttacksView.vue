<template>
  <PageCard :header="'How attackers steal your passwords'">
    <template>
      <main>
        <Paragraph :paragraph="'These are the common ways attackers get your password.'"/>
      </main>
    </template>
  </PageCard>
</template>

<script>

import PageCard from '@/components/cards/PageCard';
import Paragraph from '@/components/text/Paragraph';
import InnerCard from '@/components/cards/InnerCard';
import { validatePassword } from '@/utils/validatePassword';

export default {
	components: {
		PageCard,
		Paragraph
	}
};
</script>
