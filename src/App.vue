<template>
  <div>
    <Status title ="안녕하세요" name ="권용빈" v-bind:information = information />
  </div>
</template>

<script>
import Status from './Status';
export default {
  name: 'App',
  components: {
    Status
  },

  data: () => {
    return {
      information: {
        id: 1,
        name: 'velopert',
        email: 'public@velopert.com'
      }
    }
  }
};
</script>
