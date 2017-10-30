<template>
<div class="sideMenu">
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
        <div class="block">
            <h4>项目说明</h4>
            <p>
                </br>一些说明一些说明一些说明一些说明一些说明
                </br>还有一些还有一些还有一些还有一些
            </p>
        </div>
        <div class="block">
            <p>选择框</p>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
         <div class="block">
            <span class="demonstration">日期选择器</span>
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
            </el-date-picker>
        </div>
    </el-tab-pane>

    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</div>

</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
.block {
  padding: 20px 10px;
}
.sideMenu{
    
}
</style>

