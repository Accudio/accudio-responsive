<template>
  <div class="responsive">
    <Buttons :url="url" :scroll="scroll" />
    <Devices :url="address" :scroll="scroll" />
    <div class="footer">
      Made by <a href="https://alistairshepherd.co.uk">Alistair Shepherd</a> - <a href="https://twitter.com/accudio">Twitter</a> - <a href="https://github.com/Accudio">Github</a> - <a href="https://alistairshepherd.co.uk">Website</a>
    </div>
  </div>
</template>

<script>
import Buttons from './Buttons.vue'
import Devices from './Devices.vue'

export default {
  props: ['url', 'scroll'],
  components: {
    Buttons,
    Devices
  },
  computed: {
    address () {
      if (typeof this.url !== 'undefined') {
        if (!/^(?:f|ht)tps?:\/\//.test(this.url)) {
          return 'https://' + this.url
        }
        return this.url
      }
    }
  }
}
</script>

<style lang="scss">
.footer {
  bottom: 0;
  color: #777;
  font-family: sans-serif;
  font-size: 13px;
  font-style: italic;
  opacity: 1;
  padding: .2rem .5rem;
  position: fixed;
  right: 0;
  transition: opacity .2s;

  a {
    color: currentColor;
    transition: color .1s;

    &:hover, &:focus {
      color: #000;
    }
  }
}

@mixin fullscreen {
  .footer {
    opacity: 0;
  }
}

:-webkit-full-screen { @include fullscreen; }
:-moz-full-screen { @include fullscreen; }
:-ms-fullscreen { @include fullscreen; }
:fullscreen { @include fullscreen; }
</style>
