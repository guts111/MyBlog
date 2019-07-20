const { 
  override, 
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')

const path = require("path")

// const rewiredMap = () => config => {
//   config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
//   return config;
// }; 方法2

module.exports = override(
  //process.env.GENERATE_SOURCEMAP = "false";  //打包之后有SOURCEMAP可关闭 方法1
  
  // rewiredMap() //方法2


  //按需加载antd
  fixBabelImports('import', {        
      libraryName: 'antd',        
      libraryDirectory: 'es',       
      style: 'css',
  }),
  //别名配置
  addWebpackAlias({        
      "@": path.resolve(__dirname, "./src"),             
      // "assets": path.resolve(__dirname, "./src/assets"),
      // "@components": path.resolve(__dirname, "./src/components")     
  }),

  // addLessLoader({
  //     javascriptEnabled: true,
  //     modifyVars: {'@primary-color': '#1DA57A'}
  // }),
)