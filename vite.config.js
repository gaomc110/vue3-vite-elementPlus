import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import { resolve } from 'path'
//import styleImport from 'vite-plugin-style-import';
import { viteMockServe } from 'vite-plugin-mock';
import viteSvgIcons from 'vite-plugin-svg-icons'; // 这边用的是0.7.0版本，高版本有不同的方法
import  path from 'path'

export default defineConfig({
  base:'./', //配置打包公共路径
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      //localEnabled: command === 'serve',
      //prodEnabled: command !== 'serve' && prodMock,
      //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      /*injectCode: `
          import { setupProdMockServer } from '/mock';
          setupProdMockServer();
          `*/
    }),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  // 如果报错__dirname找不到，需要安装node,
  // 执行npm i @types/node --save-dev
  resolve:{ // 配置路基别名地方
    alias:{
        "@":path.join(__dirname,'src'),
        "~": path.join(__dirname, "node_modules"),
        "/img":path.join(__dirname, "./src/assets/images")
    }
    //alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  build:{
    //指定输出路径
    assetsDir: "./",
    // 指定输出文件路径
    outDir: "dist",
    minify: 'terser', // 这个一定要配置
    terserOptions:{ // 代码压缩配置
      compress:{
        // 生产环境时移除console
        drop_console:true,
        drop_debugger: true,
      }
    },
    // 打包输出文件配置
    rollupOptions:{
      output:{
        chunkFileNames:'static/js/[name]-[hash].js',
        entryFileNames:'static/js/[name]-[hash].js',
        assetFileNames:'static/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  // css 处理
  css:{
    postcss:{
      plugins:[
        require('autoprefixer'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-simple-vars'),
        require('postcss-import'),
        // 这块未来解决打包会出现一下错误
        //warning: "@charset" must be the first rule in the file
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ]
    },
    preprocessorOptions: {
      scss: {
        /* .scss全局预定义变量，引入多个文件 以;(分号分割)*/
        additionalData: `
                @import "@/assets/scss/_variable.scss";
                @import "@/assets/scss/mixin.scss";
                `,
      },
    },
  },
  // 服务配置
  server:{
    port:3000,// 端口号
    open:false,// 自动在浏览器打开
    https:false,// 是否开启 https
    proxy:{ // 配置代理
      '/api':{
        target:'http://localhost:3300',
        changeOrigin:true,
        rewrite:(path)=> path.replace(/^\/api/,'')
      }
    }
  }
})
