# Query Train

## README.md
[简体中文](README.md)

## Project Introduction

This project uses the Next.Js framework to build front-end services, FastApi to build back-end services, and uses scrapy+playright to implement business logic: from [Railway 12306] (https://www.12306.cn/index /) Crawl up the real-time ticket information of the designated departure place, destination and date, including 'direct train' and 'transit train'. The technology used in the project is

* Next.Js implements front-end services

* FastApi builds back-end api

* scrapy realizes crawler business

* playwright headless browser simulation

* Temporary storage of sqlite ticket information

## Project structure

### front-end

It is a front-end service folder with the following structure:

.

├── public

└── src

├── actions (server operation)

├── app (page routing)

├── components (components)

│ ├── footer

│ ├── header

│ ├── query-form

│ ├── trains-list

│ │ ├── trains-change

│ │ └── trains-direct

│ └── ui

└── lib (database method)

### back-end

It is a back-end service folder with the following structure:

.

├── crawl.py (crawler start method)

├── main.py (api routing)

├── scrapy.cfg

├── scrapy_12306 (scrapy project file)

│ ├── __init__.py

│ ├── items.py

│ ├── middlewares.py

│ ├── pipelines.py

│ ├── settings.py

│ └── spiders

│ ├── __init__.py

│ ├── trains_change.py

│ └── trains_direct.py

├── trains_change.json (temporary storage of direct trains)

├── trains_direct.json (temporary storage of transit trains)

└── utils

├── get_station_name.py

└── station.json

## Deployment method

1. Pull the project to the local

```git pull https://github.com/Xuezhihengg/QueryTrain.git```

2. Enter the project folder

```cd QueryTrain```

3. Deploy front-end services

Enter the front-end project folder

```cd front_end```

Installation dependency

```npm install```

Start the front-end service

Next.Js supports development mode (dev) and production mode. The following is the deployment of the two modes:

* Development mode

Run directly ```npm run dev```

* Production mode

First package and build the project ```npm run build```

Then deploy locally ```npm start```

After deployment, you can view the front-end services at local http://localhost:3000 (default)

4. Deploy back-end services

Enter the back-end project folder

```cd -```

```cd back_end```

Installation dependency

```pip install reqirements.txt```

Note: If some dependencies are not installed and an error is reported, please read the prompt message carefully to complete the installation of the relevant dependencies.

Run the back-end api service

```fastapi dev```

After deployment, you can view the back-end api document at local http://127.0.0.1:8000/docs (default)

5. Use QueryTrain

Visit the local http://localhost:3000

It should be noted in the query column: the date format must be 'YYYY-MM-DD', such as '2024-06-05'

![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041236301.png)

Click to query and wait for the background to return to the ticket information. Since the information is crawled from the railway 12306 in real time, you need to wait for about 20s each time. 😓

The list of trains has two parts:

* Direct train information

* Transit train information (sliding down)

![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041236402.png)

![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041230006.png)

Suspended on the information card to view the specific ticket information![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041236785.png)

![](https://raw.githubusercontent.com/Xuezhihengg/Blog_images/main/202406041236212.png)