/*
* Author:dinglong
* DateTime:2024/1/14 下午 3:29
*/
export default {
  build:{
      outDir:"nest_dist",
      assets:"nest_server",
      sourcemap:false,
      lib: {
          entry: './src/main.ts',
          fileName: 'server',
          formats: ['cjs']
      },
      rollupOptions: {
          external: [
              'path','express','multer'

          ]
      }

  }

}
