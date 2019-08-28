<template>
  <div class="home">
    <el-divider content-position="left">我是一个可耻的表格{{activeSheetName}}</el-divider>
    <el-tabs v-model="activeSheetId"
      v-if="excelData.length"
      type="border-card">
      <el-tab-pane :label="data[0][0].tableName"
        v-for="(data, index) in excelData"
        :key="index"
        :name="data[0][0].sheetId">
        <HelloWorld :data="data" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

import { getData } from '@/api'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  excelData: ApiTypes.ReturnGetRulesData[][][] = [] // 加工后的表格数据
  initExcelData: ApiTypes.ReturnGetRulesData[] = [] // 原始的表格数据
  activeSheetId: string = '' // 选中的tab名

  // computed
  get activeSheetName () {
    if (!this.activeSheetId) return ''
    return this.initExcelData.find(item => item.sheetId === this.activeSheetId)!.sheetName
  }

  // created
  private async created () {
    let res = await getData({ id: '1' })
    this.initExcelData = res.data.data
    this.excelData = this.transformData(this.initExcelData)
    this.activeSheetId = this.excelData[0][0][0].sheetId
  }

  // methods
  // 将json转成我需要的格式
  private transformData (initArr: ApiTypes.ReturnGetRulesData[]) {
    let sheetArr = initArr.reduce((prev: ApiTypes.ReturnGetRulesData[][], current): ApiTypes.ReturnGetRulesData[][] => {
      if (prev.length > 0) {
        let isExit = prev.some((item: ApiTypes.ReturnGetRulesData[]) => {
          if (item[0].sheetId === current.sheetId) {
            item.push(current)
            return true
          } else {
            return false
          }
        })
        if (!isExit) prev.push([current])
        return prev
      } else {
        return [[current]]
      }
    }, [])
    interface ArrayLike<T> {
      length: number
      [n: number]: T
    }
    return sheetArr.map((arr: ApiTypes.ReturnGetRulesData[]): ApiTypes.ReturnGetRulesData[][] => {
      let arrayLike: ArrayLike<ApiTypes.ReturnGetRulesData[]> = {} as ArrayLike<ApiTypes.ReturnGetRulesData[]>
      arr.forEach(item => {
        if (arrayLike[item.rowSort]) {
          arrayLike[item.rowSort].splice(Number(item.columnSort), 0, item) // 按顺序添加
        } else {
          arrayLike[item.rowSort] = [item]
        }
      })
      arrayLike.length = Object.keys(arrayLike).length
      return Array.from(arrayLike)
    })
  }
}
</script>
