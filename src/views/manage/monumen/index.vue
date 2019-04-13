  <template>
  	<div style="height: 600px" class="app">
    <el-form :inline="true"  class="demo-form-inline">
   <template v-for="item in content" >
  		<drag :child="item" :styleobject="item.styleObject" ></drag>
  		<el-form-item :label="item.label" v-show="item.entry">
  			<el-input size="mini" v-model="item.txt" :style="{width:item.styleObject.width}"></el-input> 
  		</el-form-item>
  </template>
  <p>大字：{{fn.big}}</p>
  <p>小字：{{fn.small}}</p>
</el-form>
  	</div>
  	</template>
  	<script>
import Drag from './components/Drag'
export default {
name: 'DragMonumen',
components: {
  Drag
},
props: {
    index: {
      type: String,
      default: 1
    },
  },
data() {
   return { 
        content:[{
        	txt:'一九八九',
        	label:'生于',
          size:'small',
          entry:true,  //是否显示输入框
          status:true, //是否显示拖拽框
          edit:true,    //拖拽框是否可编辑
        	styleObject: {
			    left: '254px', 
			    top: '82px',
          width:'80px'
			  }
        },{
        	txt:'八',
        	label:'月',
          size:'big',
          entry:true,
          status:true,
          edit:false,
        	styleObject: {
			    left: '351px',
			    top: '88px',
          width:'80px'
			  }
        },{
          txt:'二十一',
          label:'日',
          size:'big',
          entry:true,
          status:true,
          edit:true,
          styleObject: {
          left: '400px',
          top: '88px',
          width:'80px'
        },

        },{
          txt:'一九五二',
          label:'殁于',
          size:'big',
          entry:true,
          edit:true,
          status:true,
          styleObject: {
          left: '500px',
          top: '128px',
          width:'80px'
        },
        },{
          txt:'八',
          label:'月',
          size:'big',
          entry:true,
          status:true,
          edit:true,
          styleObject: {
          left: '460px',
          top: '128px',
          width:'80px'
        },
        },
        {
          txt:'八',
          label:'日',
          size:'big',
          entry:true,
          status:true,
          edit:true,
          styleObject: {
          left: '560px',
          top: '128px',
          width:'80px'
        },
        },{
          txt:'一九八九',
          label:'生于',
          size:'small',
          entry:true,
          status:true,
          edit:true,
          styleObject: {
          left: '254px',
          top: '82px',
          width:'80px'
        }
        },{
          txt:'八',
          label:'月',
          size:'big',
          entry:true,
          status:true,
          edit:true,
          styleObject: {
          left: '351px',
          top: '88px',
          width:'80px'
        }
        },{
          txt:'二十一',
          label:'日',
          size:'big',
          entry:true,
          status:true,
          edit:true,
          styleObject: {
          left: '400px',
          top: '88px',
          width:'80px'
        },

        },{
          txt:'一九五二',
          label:'殁于',
          size:'big',
          entry:true,
          status:true,
          edit:true,
          styleObject: {
          left: '500px',
          top: '128px',
          width:'80px'
        },
        },{
          txt:'八',
          label:'月',
          size:'big',
          entry:true,
          status:true,
          edit:true,
          styleObject: {
          left: '460px',
          top: '128px',
          width:'80px'
        },
        },
        {
          txt:'八',
          label:'日',
          size:'big',
          entry:true,
          status:true,
          edit:true,
          styleObject: {
          left: '560px',
          top: '128px',
          width:'80px'
        },
        }
        ]
   }
},
computed: {
fn:function(){
   let big = 0,small = 0;
   this.content.filter((v,k)=>{
       v.status = v.txt == '' ? false : true
       v.size == 'big' ? big += v.txt.length : small += v.txt.length
   }
   )
   return {big,small} 
}
},
methods:{

},
watch: {
    index:function(oldVal,newVal){
      if(oldVal == 1){
         console.log(oldVal)
      }
    }
  }
}
</script>
<style>
.el-input--mini >>> .el-input__inner{
  padding: 0 5px;
}
</style>
