import re
import json
import requests

#JS，这个用浏览器打开会呈现一堆看不懂的文字，需要用正则表达式对其解析
url = 'https://kyfw.12306.cn/otn/resources/js/framework/station_name.js?station_version=1.9028'
#对网页发送get请求
response = requests.get(url,verify=False)
#编写正则表达式
station = re.findall(r'([\u4e00-\u9fa5]+)\|([A-Z]+)',response.text)
#将字典赋给station
station = dict(station)
#以.json形式输出
with open('station.json', 'w', encoding='utf-8') as f:
    json.dump(station, f, ensure_ascii=False)


