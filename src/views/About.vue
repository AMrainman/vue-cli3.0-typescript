<template>
  <div>
    <span>我太懒了, 麻烦给我叫个饿了么</span>
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class About extends Vue { }
</script>
