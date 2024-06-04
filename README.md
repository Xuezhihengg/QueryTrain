# Query Train

## README.md
[English](README_en.md)

## 项目介绍

本项目使用Next.Js框架搭建前端服务，使用FastApi搭建后端服务，使用scrapy+playwright实现业务逻辑：从[铁路12306](https://www.12306.cn/index/)爬取指定出发地，目的地与日期的实时票务信息，包括‘直达列车’和‘中转列车’两类票务信息。项目使用到的技术有

* Next.Js实现前端服务
* FastApi搭建后端api
* scrapy实现爬虫业务
* playwright无头浏览器模拟
* sqlite票务信息临时存储

## 项目结构

### front-end

为前端服务文件夹，结构如下：

.

├── public

└── src

  ├── actions    （服务器操作）

  ├── app     (页面路由)

  ├── components      （组件）

  │  ├── footer

  │  ├── header

  │  ├── query-form

  │  ├── trains-list

  │  │  ├── trains-change

  │  │  └── trains-direct

  │  └── ui

  └── lib    （数据库方法）



### back-end

为后端服务文件夹，结构如下：

.

├── crawl.py     （爬虫启动方法）

├── main.py      （api路由）

├── scrapy.cfg

├── scrapy_12306    （scrapy项目文件）

│  ├── __init__.py

│  ├── items.py

│  ├── middlewares.py

│  ├── pipelines.py

│  ├── settings.py

│  └── spiders

│    ├── __init__.py

│    ├── trains_change.py

│    └── trains_direct.py

├── trains_change.json      （直达列车临时存储）

├── trains_direct.json         （中转列车临时存储）

└── utils

  ├── get_station_name.py

  └── station.json

## 部署方法

1. 把项目pull到本地

   ```git pull https://github.com/Xuezhihengg/QueryTrain.git```

2. 进入项目文件夹	

   ```cd QueryTrain```

3. 部署前端服务

   进入前端项目文件夹

   ```cd front_end```

   安装依赖

   ```npm install```

   启动前端服务

   Next.Js支持开发模式(dev)和生产模式，下面介绍两种模式的部署：

   * 开发模式

     直接运行 ```npm run dev```

   * 生产模式

     先打包构建项目 ```npm run build```

     然后本地部署 ```npm start```

   部署完成后可在本地http://localhost:3000（默认）查看前端服务

4. 部署后端服务 

   进入后端项目文件夹

   ```cd -```

   ```cd back_end```

   安装依赖

   ```pip install reqirements.txt```

   注意：如果出现一些依赖项未安装而报错，请仔细阅读提示信息完成相关依赖项的安装

   运行后端api服务

   ```fastapi dev```

   部署完成后可在本地http://127.0.0.1:8000/docs （默认）查看后端api文档

5. 使用QueryTrain

   访问本地http://localhost:3000

   在查询栏部分需要注意：日期格式必须为‘YYYY-MM-DD’，例如‘2024-06-05’

   ![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041227094.png)

   点击查询后等待后台返回票务信息，由于信息是从铁路12306实时爬取的，每次需要等待大约20s😓

   车次列表有两部分：

   * 直达列车信息
   * 中转列车信息（向下滑）

![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041230594.png)

![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041230006.png)

悬浮在信息卡上可查看具体票务信息![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041231706.png)

![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041232218.png)
