<template>
<div>
  <div class="mt50" style="font-size: 30px;color: blue">导入地址插件</div>

  <el-form :inline="true" :model="formCreate" class="demo-form-inline" label-position="right" label-width="120px">
     <el-form-item label="地区：" prop="provinceOptions">
       <el-cascader
       :options="provinceOptions"
       v-model="formCreate.provinceOptions"
        @change="ChangeRegions"
        ></el-cascader>
     </el-form-item>
    </el-form>

    <div>
      <div>{{msg}}</div>
      <input type="button" value='反转字符串' @click='reverse'>
      <div>变化之后的内容：{{msg}}</div>
    </div>

<h2>一般方式的三级联动参考element的级联菜单选项</h2>
  <div class="block">
    <span class="demonstration">默认 click 触发子菜单</span>
    <el-cascader
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
  </div>

</div>
</template>
<script>
  // 学会举一反三 并结合实际情况进行分析原因
import citys from '@/utils/citys.js'
  export default {
    mounted(){
       // console.log(citys);
    },
    data: function () {
      return {
        msg:'helloworld',
        provinceOptions: citys.regions,//将下拉的数据显示出来
        formCreate:{
          provinceOptions: [],
        },
        selectedOptions: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
      }
    },
    watch:{
      $route: function () {

      }
    },
    created: function () {
    },
    methods:{
      reverse(){//取值，改变 ,赋值的形式，可以借助于第三个变量
        /*let str = this.msg;
        str=str.split("").reverse().join("");
        console.log(str);
        this.msg = str;*/
        //将改变之后的值，重新的赋值给页面中
        this.msg=this.msg.split("").reverse().join("");
      },
      ChangeRegions(){
        console.log(this.formCreate.provinceOptions);//可以将选择的数据传递到后台
      },
      handleChange(){}
    }
  }





</script>
<style>
</style>
