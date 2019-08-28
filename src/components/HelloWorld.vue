<template>
  <div class="hello">
    <table class="excelTable">
      <thead>
        <tr>
          <th v-for="head in data[0]"
            :key="head.id">{{head.step}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data"
          :key="index">
          <td v-for="cell in row"
            :key="cell.id">
            <div class="cell">
              {{cell.value || cell.id}}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private data!: ApiTypes.ReturnGetRulesData[]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$lightGrey: #f2f2f2;
.hello {
  overflow: auto;
}
table.excelTable {
  min-width: 100%;
  tr {
    td,
    th {
      min-width: 200px;
      text-overflow: ellipsis;
      vertical-align: middle;
      position: relative;
      text-align: left;
      border: 1px solid $lightGrey;
    }
    th {
      padding: 10px;
      text-align: center;
      background-color: #f5f7fa;
    }
    td {
      padding: 5px;
      font-size: 14px;
      &:hover {
        background-color: #f5f7fa;
        .cell {
          display: block;
        }
      }
      .cell {
        min-height: 23px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  }
}
</style>
