 <template class="temp">
  <small class="temp">Click the button to increment the count.</small>
    <button title="Click the button to increment the count." @click="increment">{{ message }}</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    computed: {
      message() {
        return `Clicked ${this.count} times`;
      },
    },
    methods: {
      increment() {
        this.count++;
      },
    },
  };
  </script>
  
  <style scoped>
  .temp {
    margin-top: 1rem;
    font-size: 10px;
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: #434d0c;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>