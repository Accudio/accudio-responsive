<template>
  <div class="devices" :class="{'scroll': isScroll}" :style="{fontSize: fontSize+'px'}">
    <div class="mobile">
      <div class="clip" :style="{transform: 'scale('+mobile+')'}">
        <iframe id="mobile" :src="url">
        </iframe>
        <div class="error" :class="{ 'active': isHttp }"><h2>Error</h2></div>
      </div>
    </div>
    <div class="tablet">
      <div class="clip" :style="{transform: 'scale('+tablet+')'}">
        <iframe id="tablet" :src="url">
        </iframe>
        <div class="error" :class="{ 'active': isHttp }"><h2>Error</h2></div>
      </div>
    </div>
    <div class="laptop">
      <div class="clip" :style="{transform: 'scale('+laptop+')'}">
        <iframe id="laptop" :src="url">
        </iframe>
        <div class="error" :class="{ 'active': isHttp }"><h2>Error</h2></div>
      </div>
    </div>
    <div class="desktop">
      <div class="clip" :style="{transform: 'scale('+desktop+')'}">
        <iframe id="desktop" :src="url">
        </iframe>
        <div class="error" :class="{ 'active': isHttp }"><h2>Error</h2><h2>Due to the security policy of most browsers, you cannot view an insecure webpage (http) using this tool.</h2></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scale: 1,
      isHttp: false
    }
  },
  props: ['url', 'scroll'],
  computed: {
    isScroll () {
      if (this.scroll === 'true') {
        return true
      }
      return false
    },
    fontSize () {
      return this.scale * 100
    },
    mobile () {
      return this.scale * 0.316
    },
    tablet () {
      return this.scale * 0.333
    },
    laptop () {
      return this.scale * 0.412
    },
    desktop () {
      return this.scale * 0.4274
    }
  },
  created () {
    window.addEventListener('resize', this.windowResize)
    this.windowResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.windowResize)
  },
  mounted () {
    if (/^(?:f|ht)tp:\/\//.test(this.url)) {
      this.isHttp = true
    }
  },
  methods: {
    windowResize () {
      const maxwidth = 1540
      const maxheight = 900
      var width = window.innerWidth
      var height = window.innerHeight - 40
      if (width <= maxwidth || height <= maxheight) {
        if (width / maxwidth > height / maxheight) {
          this.scale = height / maxheight
        } else {
          this.scale = width / maxwidth
        }
      } else {
        this.scale = 1
      }
    }
  }
}
</script>

<style lang="scss">

.devices {
  font-size: 100px;
  height: 8.64em;
  left: 0;
  margin-top: 3rem;
  position: relative;
  width: 100%;

  .error {
    align-items: center;
    background: #000;
    bottom: 0;
    cursor: default;
    display: none;
    flex-direction: column;
    justify-content: center;
    left: 0;
    padding: 0 50px;
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;

    &.active {
      display: flex;
    }

    h2 {
      color: #fff;
      font-family: sans-serif;
      font-size: 40px;
      text-align: center;
    }
  }

  .clip {
    background-color: #fff;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    transform-origin: top left;
  }

  iframe {
    border: 0;
    height: 100%;
  }

  .mobile {
    background-image: url('assets/phone.png');
    height: 2.59em;
    left: 3.45em;
    position: absolute;
    top: 5.55em;
    width: 1.28em;
    z-index: 5;

    .clip {
      height: 568px;
      left: .137em;
      top: .413em;
      transform: scale(.316);
      width: 320px;
    }

    iframe {
      width: 337px;
    }
  }

  .tablet {
    background-image: url('assets/tablet.png');
    height: 4.5em;
    left: .8em;
    position: absolute;
    top: 3.3em;
    width: 3.1em;
    z-index: 3;

    .clip {
      height: 1024px;
      left: .275em;
      top: .535em;
      transform: scale(.333);
      width: 768px;
    }

    iframe {
      width: 786px;
    }
  }

  .laptop {
    background-image: url('assets/laptop.png');
    height: 4.4em;
    left: 7.6em;
    position: absolute;
    top: 4.1em;
    width: 7.16em;
    z-index: 2;

    .clip {
      height: 800px;
      left: .947em;
      top: .427em;
      transform: scale(.412);
      width: 1280px;
    }

    iframe {
      width: 1298px;
    }
  }

  .desktop {
    background-image: url('assets/desktop.png');
    height: 7.2em;
    left: 2.4em;
    position: absolute;
    top: .3em;
    width: 8.49em;
    z-index: 1;

    .clip {
      height: 1080px;
      left: .139em;
      top: .141em;
      transform: scale(.4274);
      width: 1920px;

      .error {
        padding: 0 200px;
      }
    }

    iframe {
      width: 1937px;
    }
  }

  &.scroll iframe {
    width: 100%;
  }
}

</style>