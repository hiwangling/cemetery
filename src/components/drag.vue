<template>
  <div style="height: 800px" class="app">
    <el-form v-if="status" :inline="true" class="demo-form-inline" style="position: relative;">
      <template v-for="item in content">
        <my-edit :child="item" :styleobject="item.styleObject" />
        <el-form-item :label="item.label">
          <el-input v-model="item.txt" style="width:100px" />
        </el-form-item>
      </template>
      <p>大字：{{ fn.max }}</p>
      <p>小字：{{ fn.min }}</p>
    </el-form>
  </div>
</template>
  	<script>
module.exports = {
  components: {
    'my-edit': httpVueLoader('../components/edit.vue')
  },
  data: function() {
    return {
      status: true,
      content: [{
        	txt: '一九八九',
        	label: '生于',
        type: 'min',
        	styleObject: {
			    left: '254px',
			    top: '82px'
			  }
      }, {
        	txt: '一九七七',
        	label: '逝于',
        type: 'max',
        	styleObject: {
			    left: '351px',
			    top: '88px'
			  }
      }, {
        txt: '一九五二',
        label: '逝于',
        type: 'max',
        styleObject: {
          left: '400px',
          top: '88px'
        }

      }, {
        txt: '一九五二',
        label: '逝于',
        type: 'max',
        styleObject: {
          left: '500px',
          top: '128px'
        }
      }, {
        txt: '一九五二',
        label: '逝于',
        type: 'max',
        styleObject: {
          left: '460px',
          top: '128px'
        }
      }
      ]
    }
  },
  computed: {
    fn: function() {
      let max = 0; let min = 0
      this.content.filter((v, k) => v.type == 'max' ? max += v.txt.length : min += v.txt.length
      )
      return { max, min }
    }
  },
  methods: {

  }
}
</script>
