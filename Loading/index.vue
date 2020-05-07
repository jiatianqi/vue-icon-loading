<template>
  <div :class="'balls ball-' + typeis">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "1"
    }
  },
  computed: {
    typeis() {
      if (["1", "2", "3"].indexOf(this.type) == -1) {
        return "1";
      } else {
        return this.type;
      }
    }
  }
};
</script>

<style scoped>
.balls {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  z-index: 999999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #3c8dbc;
}

.ball-1 div {
  transform: translateY(-100%);
  animation: wave 0.8s ease-in-out alternate infinite;
}

.ball-1 div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.ball-1 div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes wave {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}

.ball-2 div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.ball-2 div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}

.ball-3 div {
  animation: fade 0.8s ease-in-out alternate infinite;
}

.ball-3 div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.ball-3 div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
