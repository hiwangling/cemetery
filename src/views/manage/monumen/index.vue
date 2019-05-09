<template>
  <div style="height: 600px" class="app">
    <el-form :inline="true" class="demo-form-inline">
  

      <template v-for="item in content">
        <drag :child="item" :styleobject="item.styleObject" />
        <el-form-item v-show="item.entry" :label="item.label">
        <el-date-picker
      v-if="item.edit == false"
      v-model="item.value"
      type="date"
      size="mini"
      :style="{width:item.styleObject.width}"
      @change = 'check(item)'
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日">
    </el-date-picker>
    <el-input v-else v-model="item.txt" size="mini" :style="{width:item.styleObject.width}"/> 
        </el-form-item>
      </template>
      <p>大字：{{ fn.big }}</p>
      <p>小字：{{ fn.small }}</p>
    </el-form>
  </div>
</template>
  	<script>
import Drag from './components/Drag'
import checkdate from '@/utils/date' // 转中文日期
export default {
  name: 'DragMonumen',
  components: {
    Drag
  },
  props: {
    index: {
      type: String,
      default: 1
    }
  },
  data() {
    return {
      content: [{
          id:0,
        	txt: '',
          value:'',
        	label: '生 :',
          size: 'small', //大字小字
          entry: true, // 是否显示输入框
          status: true, // 是否显示拖拽框
          edit: false, // 拖拽框是否可编辑
        	styleObject: {
			    left: '254px',
			    top: '82px',
          width: '180px'
			  }
      },{
          id:1,
          txt: '',
          value:'',
          label: '殁 :',
          size: 'small',
          entry: true, 
          status: true, 
          edit: false, 
          styleObject: {
          left: '404px',
          top: '82px',
          width: '180px'
        }
      },{
          id:2,
          txt: '',
          value:'',
          label: '姓名 :',
          size: 'big',
          entry: true, 
          status: true, 
          edit: true, 
          styleObject: {
          left: '500px',
          top: '82px',
          width: '80px'
        }
      }
      ]
    }
  },
  computed: {
    fn: function() {
      let big = 0; let small = 0
      this.content.filter((v, k) => {
        v.status = v.txt != ''
        v.size == 'big' ? big += v.txt.length : small += v.txt.length
      }
      )
      return { big, small }
    },

  },
  watch: {
    index: function(oldVal, newVal) {
      if (oldVal == 1) {
        console.log(oldVal)
      }
    }
  },
  methods: {
  check:function(v){
    this.content.forEach((n,k)=>{
      if(n.id === v.id){
         n.txt = checkdate(v.value)
      }
    })
 
 
  }
  }
}
</script>
<style>
 
</style>
