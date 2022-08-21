<template>
  <div>
  <table class=" text-left w-2/3">
    <tbody>
    <tr
        class=" border-b dark:border-font-dark"
        >
      <td>{{ toTitleCase(Object.keys(zxcvbnObject)[0])}}: </td>
      <td>{{ zxcvbnObject.password}}</td>
    </tr>

    <tr
        class=" border-b dark:border-font-dark"
    >
      <td>{{ toTitleCase(Object.keys(zxcvbnObject)[1])}}: </td>
      <td>{{ zxcvbnObject.guesses}}</td>
    </tr>
    <tr
        class=" border-b dark:border-font-dark"
    >
      <td>Patterns: </td>
      <td>
        <span v-for="(value, key, index) in zxcvbnObject.sequence"
              :key="index"
              class="block">
          {{ toTitleCase(value.pattern) }} ["{{value.token}}"]

        </span>
      </td>
    </tr>
    <tr
        class=" border-b dark:border-font-dark"
    >
      <td>Crack times: </td>
      <td>
        <span class="block">
          Online (10 guesses/s): {{zxcvbnObject.crack_times_display.online_no_throttling_10_per_second}}
        </span>
        <span class="block">
          Offline (1e10 guesses/s): {{zxcvbnObject.crack_times_display.offline_fast_hashing_1e10_per_second}}
        </span>
      </td>
    </tr>
    <tr
        class=" border-b dark:border-font-dark"
    >
      <td>Score: </td>
      <td>{{ zxcvbnObject.score}}</td>
    </tr>
    <tr
        class=" border-b dark:border-font-dark"
    >
      <td>Feedback: </td>
      <td>{{ zxcvbnObject.feedback.warning? zxcvbnObject.feedback.warning + '.' : ''}}
        <span v-for="(value, key, index) in zxcvbnObject.feedback.suggestions"
              :key="index"
              class="block">
          {{ value}}

        </span>
      </td>
    </tr>
    </tbody>
  </table>
    <br>
    <Button
      :text="!isRawDataShown? 'Show raw data' : 'Hide raw data'"
      :handle-click="toggleRawData"
    />
    <br>
  <table
      v-if="isRawDataShown"
      class=" text-left w-2/3">
    <tbody>
    <tr
        class=" border-b dark:border-font-dark"
        v-for="(value, key, index) in zxcvbnObject"
        :key="index">
      <td>{{ toTitleCase(key) }}: </td>
      <td>{{ value }}</td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import Button from '@/components/button/Button';
export default {
	components: { Button },
	props: {
		zxcvbnObject: { type: Object, required: true }
	},
	data(){
		return {
			isRawDataShown: false
		};
	},
	methods: {
		toTitleCase(str) {
			return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
		},
		toggleRawData(){
			this.isRawDataShown = ! this.isRawDataShown;
		}
	}
};
</script>
