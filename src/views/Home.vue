<template>
  <div>
    <h1>Welcome to Home</h1>
    <inputField v-model="title" />    
    {{ title }}
  </div>  
</template>
<script>
import inputField from '@/components/layout/inputField';

export default {
  data() {
    return {
      title : ""
    }
  },
  components : {
    inputField
  },
  // methods: {
  //   titleChange(title) {
  //     this.title = title
  //   }
  // }
}
</script>