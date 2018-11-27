
## Ionic 通过webpack脚本，切换服务器环境

1.在src下创建文件夹environments，并创建三个对应的环境配置文件

* src/environments/environment.dev.ts
* src/environments/environment.uat.ts
* src/environments/environment.prod.ts

2.然后在项目根目录中创建文件夹config，里面创建文件webpack.config.js

* config/webpack.config.js

3.修改项目的package.json文件，添加：

```
"config": {
    "ionic_webpack": "./config/webpack.config.js"
}
```

4.修改tsconfig.json文件，添加

```
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@env/environment": [
        "environments/environment.prod"
      ]
    }
  }
}
```

5.添加启动Script

* 修改package.json

```
"scripts": {
    "start": "ionic-app-scripts serve",
    "clean": "ionic-app-scripts clean",
    "build": "ionic-app-scripts build",
    "lint": "ionic-app-scripts lint",

    "serve:dev":"NODE_ENV=dev ionic serve",
    "serve:uat":"NODE_ENV=uat ionic serve",
    "serve:prod":"NODE_ENV=prod ionic serve",

    "build:dev":"NODE_ENV=dev ionic cordova build android --prod",
    "build:uat":"NODE_ENV=uat ionic cordova build android --prod",
    "build:prod":"NODE_ENV=prod ionic cordova build android --prod"

}
```

6.npm run serve:dev
