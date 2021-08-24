//set第一个参数：设置的别名，第二个参数：设置的路径
// .set('@',resolve('./src'))
// .set('assets',resolve('.src/assets'))
// .set('components',resolve('./src/components'))
// .set('views',resolve('src/views'))
module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  }
  
  

