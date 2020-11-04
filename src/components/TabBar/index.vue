<template>
    <footer id="footer">
    <ul>
      <li>
        <i class="iconfont icon-huazhuangdai"></i>
        <p>电影</p>
      </li>
      <li class="active">
        <i class="iconfont icon-yanying"></i>
        <p>影院</p>
      </li>
      <li>
     
        <i class="iconfont icon-zhijiayou" ></i>
        <p>我的</p>
      </li>
    </ul>
  </footer>

</template>

<style lang="scss" scoped>
    #footer{width: 100%; height: 0px; background: #fff; border-top: 2px #ebe8e3 solid; position: fixed; left: 0; bottom: 60px; }
    #footer ul{display: flex; text-align: center; height: 50px; align-items: center; list-style:none;}
    #footer ul li{flex: 1; height: 40px;}
    #footer ul li.active{color: #f03d37;}
    #footer ul li{font-size: 20px;}
    #footer ul li p{font-size: 12px; line-height: 18px;}
</style>
