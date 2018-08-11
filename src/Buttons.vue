<template>
  <div class="header" :class="{'active': isInfo}">
    <div class="info-panel">
      <h1>Accudio Responsive Viewer</h1>
      <p>
        This is a simple, easy to use way to see a website or web app on different screen sizes. It was built as a quick way to produce a presentation mock for clients having produced a site prototype. To use, simply enter your URL in the top right and submit (<font-awesome-icon :icon="['fas', 'search']" /> or return). By default the iframe is sized to hide the scrollbar of the page (while maintaining scrolling behaviour), however you can click <font-awesome-icon :icon="['fas', 'arrows-alt-v']" /> to fit the entire frame if you want to see the scrollbar, you have a custom scrollbar, or no scroll on the page. To go fullscreen, press F11 or click <font-awesome-icon :icon="['fas', 'expand']" />. This also hides the UI to enable a screenshot without visible controls, and requires you to press F11 or ESC (depending on browser) to come out of fullscreen again.
      </p>
      <p>
        This tool was built by <a href="https://alistairshepherd.co.uk">Alistair Shepherd</a> of <a href="https://accudio.com">Accudio</a>. You can view the source and contribute on <a href="https://github.com/Accudio/accudio-responsive">Github</a>.
      </p>
    </div>
    <div class="buttons">
      <div class="url">
        <form ref="controls">
          <input name="url" type="text" :value="url" placeholder="Enter address..." aria-label="Address field" /><input type="hidden" name="scroll" :value ="isScroll" /><button class="btn" type="submit"><font-awesome-icon :icon="['fas', 'search']" /></button>
        </form>
      </div>
      <button class="btn sm" v-on:click="scrollToggle" :class="{'active': isScroll}">
        <font-awesome-icon :icon="['fas', 'arrows-alt-v']" />
      </button>
      <button class="btn" v-on:click="fullscreen">
        <font-awesome-icon :icon="['fas', 'expand']" />
      </button>
      <button class="btn" v-on:click="info" :class="{'active': isInfo}">
        <font-awesome-icon :icon="['fas', 'info-circle']" />
      </button>
      <a class="btn" href="https://github.com/Accudio/accudio-responsive/">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isScroll: false,
      isInfo: false
    }
  },
  props: ['url', 'scroll'],
  methods: {
    fullscreen () {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen()
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen()
      }
    },
    scrollToggle () {
      this.isScroll = !this.isScroll
      setTimeout(() => { this.$refs.controls.submit() }, 100)
    },
    info () {
      this.isInfo = !this.isInfo
    }
  },
  mounted () {
    if (this.scroll === 'true') {
      this.isScroll = true
    }
  }
}
</script>

<style lang="scss">

$info-height: 16rem;

.header {
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: -$info-height;
  transition: top .2s;
  width: 100vw;
  z-index: 2;

  &.active {
    top: 0;
  }

  .info-panel {
    background: #222;
    color: #fff;
    font-family: sans-serif;
    height: $info-height;
    line-height: 1.5;
    padding: 1rem 10rem;

    h1 {
      margin-top: 0;
    }

    svg {
      font-size: 90%;
      margin: 0 .3rem;
    }

    a {
      color: #fff;
      font-weight: 600;
      transition: color .3s;

      &:hover, &:focus {
        color: #87ff86;
      }
    }
  }

  .buttons {
    display: flex;
    height: 2.5rem;
    justify-content: flex-end;
    visibility: visible;
    width: 100%;

    > * {
      margin-right: .5rem;
    }

    .btn {
      align-items: center;
      background: #333;
      border: 0;
      color: #fff;
      cursor: pointer;
      display: flex;
      height: 100%;
      justify-content: center;
      width: 2.5rem;

      &.sm {
        font-size: 50%;
      }

      &.active {
        color: #87ff86;
      }

      svg {
        display: inline-block;
        font-size: inherit;
        height: 2em;
        overflow: visible;
        transition: all .3s;
        vertical-align: -.125em;
        width: 1em;
      }

      &:hover, &:focus {
        svg {
          transform: scale(1.2);
        }
      }
    }

    .url {
      form {
        display: flex;
        height: 100%;

        input {
          border: 1px solid #aaa;
          color: #999;
          font-size: 1rem;
          height: 100%;
          padding: 0 .2rem 0 1rem;
          width: calc(100vw - 15rem);
        }
      }
    }
  }
}

@mixin fullscreen {
  .header {
    top: (-$info-height - 2.5rem);
    visibility: hidden;
  }
}

:-webkit-full-screen { @include fullscreen; }
:-moz-full-screen { @include fullscreen; }
:-ms-fullscreen { @include fullscreen; }
:fullscreen { @include fullscreen; }
</style>