<template>
  <table class="text-sm text-left w-2/3 center m-auto">
    <tbody>
    <tr
        class="bg-white border-b dark:border-gray-300"
        v-for="(value, key, index) in zxcvbnObject"
        :key="index">
      <td>{{ toTitleCase(key) }}: </td>
      <td>{{ value }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
	props: {
		zxcvbnObject: { type: Object, required: true }
	},
	methods: {
		toTitleCase(str) {
			return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
		}
	}
};
</script>
