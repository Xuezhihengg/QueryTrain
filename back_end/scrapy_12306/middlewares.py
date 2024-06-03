from fake_useragent import UserAgent

class RandomUserAgentMiddleware(object):
    def __init__(self,crawler) -> None:
        #随机请求头对象
        self.ua = UserAgent(os= ["windows", "macos", "linux"])
        self.ua_type = crawler.settings.get("RANDOM_UA_TYPE","random")

    @classmethod    
    def from_crawler(cls,crawler):
        return cls(crawler)
    
    def process_request(self,request,spider):
        def get_ua():
            return getattr(self.ua,self.ua_type)
        request.headers.setdefault('User-Agent',get_ua())

# 自定义Cookies中间件
class SetCookiesMiddleware(object):
    # 初始化
    def __init__(self, cookies_str):
        self.cookies_str = cookies_str

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            # 获取配置文件中的Cookies信息
            cookies_str=crawler.settings.get('COOKIES')
        )

    cookies = {}

    def process_request(self, request, spider):
        for cookie in self.cookies_str.split(";"):  # 通过;分割Cookies字符串
            key, value = cookie.split("=", 1)  # 将key与值进行分割
            self.cookies.__setitem__(key, value)  # 将分割后的数据保存至字典中
        request.cookies = self.cookies  # 设置格式化以后的Cookies

