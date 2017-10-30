<template>
<div>
  <el-container>
    <el-header >
      <div class="topshow">
              <div class="block"><h2>项目名称</h2>
        <el-button type="primary">去瞅瞅</el-button>
      </div>
      <div class="block">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/hamburger.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <span>项目名称</span>
                <el-button type="text" class="button">去吃吃看</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>

</div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '北京'
        }, {
          value: '选项2',
          label: '上海'
        }, {
          value: '选项3',
          label: '天津'
        }],
        value: ''
      }
    }
  }
</script>

<style scoped>
.el-header {
  padding:150px 150px;
  background: url("../assets/city.jpg");
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>