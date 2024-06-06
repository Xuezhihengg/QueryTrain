import asyncio
import json
import urllib.parse

# 异步命令行执行函数
async def execute(command):
    process = await asyncio.create_subprocess_exec(*command)
    await process.communicate()

def read_json_file(file_path):
    with open(file_path, "r") as file:
        data = json.load(file)
    return data


async def get_trains_direct(start_s,end_s,train_date):
    station_file_path = 'utils/station.json'
    station_data = read_json_file(station_file_path)
    #获取站点编码
    start_s_code = station_data[start_s]
    end_s_code = station_data[end_s]
    #将站点编码转换为url编码
    start_s_url = urllib.parse.quote(start_s)
    end_s_url = urllib.parse.quote(end_s)

    start_url = f"https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs={start_s_url},{start_s_code}&ts={end_s_url},{end_s_code}&date={train_date}&flag=N,N,Y"

    command = [
        "scrapy",
        "crawl",
        "trains_direct",
        "-O",
        "trains_direct.json",
        "-a",
        f"start_url={start_url}",
    ]
    await execute(command)

    json_data = read_json_file("trains_direct.json")
    return json_data

async def get_trains_change(start_s,end_s,train_date):
    station_file_path = 'utils/station.json'
    station_data = read_json_file(station_file_path)
    #获取站点编码
    start_s_code = station_data[start_s]
    end_s_code = station_data[end_s]
    #将站点编码转换为url编码
    start_s_url = urllib.parse.quote(start_s)
    end_s_url = urllib.parse.quote(end_s)

    start_url = f"https://kyfw.12306.cn/otn/lcQuery/init?linktypeid=lx&fs={start_s_url},{start_s_code}&ts={end_s_url},{end_s_code}&date={train_date}&flag=N,N,Y"

    command = [
        "scrapy",
        "crawl",
        "trains_change",
        "-O",
        "trains_change.json",
        "-a",
        f"start_url={start_url}",
    ]

    await execute(command)


    json_data = read_json_file("trains_change.json")
    return json_data
