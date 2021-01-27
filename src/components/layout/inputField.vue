<template>
  <div>
    <form>
      <label>ID</label>
      <!-- <input type="text" v-model = "title" style = "padding: 20px; border: 1px pink solid"> -->
      <input type="text" :value = "value" @input = "$emit('input', $event.target.value)" style = "padding: 20px; border: 1px pink solid">
      <button>Submit</button>      
    </form>
    {{ id }}
    <button @click="updateId"> button </button>
  </div>
</template>

<script>
export default {
  props : {
    value : {
      type : String,
      required : true
    }
  },
  // methods : {
  //   titleUpdate(e) {
  //     this.$emit('titleFromChild', e.target.value)
  //   }
  // }
  data() {
    return {
      id : 'charlie'
    }
  },
  beforeCreate() {
    console.log('생성 전', this.id)
  },
  created() {
    console.log('생성 후', this.id)
  },
  beforeMount() {
    // alert('beforeMount')
  },
  mounted() {
    // alert('mounted')
  },
  beforeUpdate() {
    // alert('beforeUpdate')
  },
  updated() {
    // alert('updated')
  },
  beforeDestroy() {
    alert('beforeDestroy')
  },
  destroyed() {
    alert('destroyed')
  },
  methods: {
    updateId() {
      this.id = 'updated!'
    }
  }
}
</script>