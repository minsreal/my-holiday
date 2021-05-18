<template>
  <div
    class="select-box selected"
    @click="activeFn"
  >
    <div class="label selected">{{label}}</div>
    <div
      class="select-right selected"
      :class="[active? 'active': '', txt ? '': 'gray']"
    >{{txt ? txt : placeholder}}</div>
    <div
      class="list selected"
      v-if="active"
    >
      <div
        class="select-part selected"
        v-for="(item,index) in list"
        :key="index"
        @click="chooseFn(item)"
      >{{item.value}}</div>
    </div>
  </div>
</template>
<script>
let activeSelectIndex = 0
export default {
  name: 'Selector',
  props: ['label', 'list', 'defTxt', 'placeholder'],
  components: {},
  data () {
    return {
      txt: this.defTxt || null,
      active: false,
      activeSelectIndex: 0,
      eventFn: e => {
        const className = e.target.className
        if (this.activeSelectIndex !== activeSelectIndex) {
          this.active = false
        }
        if (className.indexOf('selected') === -1) {
          this.active = false
        }
      }
    }
  },
  computed: {},
  created () {},
  mounted () {
    document.addEventListener('click', this.eventFn)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.eventFn)
  },
  methods: {
    activeFn () {
      this.active = !this.active

      activeSelectIndex += 1

      this.activeSelectIndex = activeSelectIndex
    },
    chooseFn (obj) {
      this.txt = obj.value
      this.$emit('chooseFn', obj)
    }
  }
}
</script>

<style lang="css" scoped>
.select-box {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.select-box .list {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  max-height: 200px;
  transform: translateY(100%);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  z-index: 9;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
