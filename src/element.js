// 按需引入elementUI矿建
// 引入组件
import {
    ElTable,
    ElTableColumn,
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
    ElButton
  } from 'element-plus';


  export const  components = [
    ElTable,
    ElTableColumn,
    ElButton
  ]
  
  export const plugins = [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
  ]