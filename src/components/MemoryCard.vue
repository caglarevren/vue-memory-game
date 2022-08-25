<template>
  <div class="game">
    <h1 class="game-title">Memory Card Game</h1>

    <div class="game-container" :class="disableBoxes ? 'pointer-none' : ''">
      <div
        class="game-container-box"
        v-for="(box, index) in boxData"
        :key="index"
      >
        <button
          class="game-container-box-btn"
          @click="showBox(index, box.value)"
          :class="box.show ? 'show' : ''"
        >
          <p v-if="!box.show">Click Me</p>
          <img :src="box.value" alt="" />
        </button>
      </div>
    </div>

    <div class="btn-container">
      <button @click="restartGame()">Restart Game</button>
    </div>

    <h3
      class="game-result"
      :class="result === 'Great' ? 'text-success' : 'text-danger'"
    >
      {{ result }}
    </h3>
  </div>
</template>

<script lang="ts">
/* --------------------------------- imports -------------------------------- */
import { Component, Vue } from 'vue-property-decorator'
import Cards from '@/data'

@Component
export default class MemoryCard extends Vue {
  /* ---------------------------------- data ---------------------------------- */
  private boxData = Cards
  private currVal: any = null
  private result: string = ''
  private disableBoxes: boolean = false

  /* --------------------------------- methods -------------------------------- */
  showBox(id: number, value: any) {
    this.boxData[id].show = true

    if (this.currVal === null) {
      this.currVal = value
    } else if (value === this.currVal) {
      this.result = 'Great'
      this.currVal = null

      setTimeout(() => {
        this.result = ''
      }, 1000)
    } else {
      this.result = 'Try Again!'
      this.disableBoxes = true
      this.boxData.map((box) => {
        setTimeout(() => {
          box.show = false
          this.disableBoxes = false
          this.result = ''
        }, 700)
      })

      this.currVal = null
    }
  }

  restartGame() {
    this.boxData.map((box) => {
      box.show = false
    })
  }
}
</script>

<style scoped lang="scss">
* {
  transition: all .1s;
}

.text-success {
  color: green;
}

.text-danger {
  color: red;
}

.pointer-none {
  pointer-events: none;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  button {
    padding: 10px 20px;
    background-color: #f2f7f7;
    border: 1px solid #bcedf5;
    border-radius: 6px;
    cursor: pointer;
    opacity: .7;
  }
}

.game {
  &-title {
    font-size: 52px;
    text-align: center;
    background: #121fcf;
    background: linear-gradient(to right, #121fcf 0%, #cf1512 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &-container {
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 6px;

    &-box {
      width: 200px;
      height: 150px;

      &-btn {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 0;
        cursor: pointer;

        img {
          display: none;
        }

        p {
          font-size: 24px;
        }
      }

      .show {
        border: 1px solid green;

        img {
          display: inline-block;
        }
      }
    }
  }

  &-result {
    font-size: 40px;
    text-align: center;
  }
}
</style>
