<template>
  <div class="app-container">
    <upload-excel-component
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    />
    <el-table
      :data="tableData"
      border
      highlight-current-row
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        v-for="item of tableHeader"
        :key="item"
        :prop="item"
        :label="item"
      />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from "@/components/UploadExcel/index-test.vue";

export default {
  name: "UploadExcel",

  // 子组件 ， 【upload-excel-component】：上传Excel 的UI框
  components: { UploadExcelComponent },

  /** *****************************************************************
   * 数据
   * handleSuccess() ，方法里面填充数据
   ********************************************************************/
  data() {
    return {
      tableData: [],
      tableHeader: [],
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning",
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
      this.debugLogOut();
    },
    debugLogOut() {
      console.log("读取到的表格的数据：", this.tableData);
      console.log("读取到的表格的抬头：", this.tableHeader);
    },
  },
};
</script>
