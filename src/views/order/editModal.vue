<template>
<div class="modal fade" v-bind:id="mess"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel2">编辑菜单</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group text-left">
              <label for="recipient-name2" class="control-label">姓名{{Name}}:</label>
              <input type="text" class="form-control" id="recipient-name2"  v-model="Name" >
            </div>
            <div class="form-group text-left">
              <label for="recipient-age2" class="control-label" >年龄{{Age}}:</label>
              <input type="text" class="form-control" id="recipient-age2" v-model="Age" >
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="closeModel()">关闭</button>
          <button type="button" class="btn btn-primary" @click="saveAddData()">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //在子组件中实现与父组件之间的通行
  export default {
    name:"editModal",
    props:["mess","EditingNam","EditingAg","EditingInde"],
    mounted:function(){
      console.log(this.EditingAg)
    },
    data: function () {
      return {
        Name:this.EditingNam,//将父组件的值，拿到在自组件中赋值  暂时娶不到 后期用 vuex状态管理
        Age:this.EditingAg,
        Index:this.EditingInde
      }
    },
    watch:{
    },
    methods:{
      saveAddData: function (a) {
        /* alert(this.EditingName+this.EditingAge);*/
        //this.$emit("editMsg",this.EditingName,this.EditingAge)
        this.$emit("editMsg",this.Name,this.Age,this.Index);//将子组件的值传递到父组件中
      },
      closeModel: function () {
        this.$emit("closeEditModal")
      }

    }
  }

</script>
<style>
</style>
