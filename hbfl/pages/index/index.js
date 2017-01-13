//index.js

var ajax = getApp().globalData.ajax;

Page({
  data:{
    dataList:[],  //初始化数组
    index:1,       //请求的页数,
    types:34        //请求类型 
  },
  
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    var self = this;
    var types = this.data.types;
    var index = this.data.index;
    
    ajax(types,index,self);

    
  },
    
  onPullDownRefresh: function() {
    // 页面上拉触底事件的处理函数
   
    var index = this.data.index++;
    var self = this;
    var types = this.data.types;
    
    
    ajax(types,index,self);

  }

})
