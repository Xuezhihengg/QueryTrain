import scrapy
from scrapy_playwright.page import PageMethod

class TrainsDirectSpider(scrapy.Spider):
    name = "trains_direct"

    #通过外部命令行指定开始URL
    def __init__(self, start_url=None, *args, **kwargs):
        super(TrainsDirectSpider, self).__init__(*args, **kwargs)
        self.start_urls = start_url

    def start_requests(self):
        yield scrapy.Request(
            self.start_urls,
            meta={
                "playwright": True,
                "playwright_page_methods": [
                    PageMethod("wait_for_selector", '#queryLeftTable tr'),
                    PageMethod('wait_for_timeout', 5000)
                ],
            },
        )

    def parse(self, response):
        tbody = response.css('#queryLeftTable tr')
        for tr in tbody:
            train_id = tr.css('a::text').get()
            if train_id is None:
                continue
            start_s = tr.css('.start-s::text').get() or tr.css('.cdz strong:nth-child(1)::text').get()
            end_s = tr.css('.end-s::text').get() or tr.css('.cdz strong:nth-child(2)::text').get()
            start_t = tr.css('.start-t::text').get() 
            end_t = tr.css('.color999::text').get()
            duration = tr.css('.ls strong::text').get()
            business_seats = tr.css('td:nth-child(2) div::text').get() or tr.css('td:nth-child(2)::text').get()
            preferred_first_class = tr.css('td:nth-child(3) div::text').get() or tr.css('td:nth-child(3)::text').get()
            first_class = tr.css('td:nth-child(4) div::text').get() or tr.css('td:nth-child(4)::text').get()
            second_class = tr.css('td:nth-child(5) div::text').get() or tr.css('td:nth-child(5)::text').get()
            preferred_soft_sleeper = tr.css('td:nth-child(6) div::text').get() or tr.css('td:nth-child(6)::text').get()
            soft_sleeper = tr.css('td:nth-child(7) div::text').get() or tr.css('td:nth-child(7)::text').get()
            hard_sleeper = tr.css('td:nth-child(8) div::text').get() or tr.css('td:nth-child(8)::text').get()
            soft_seat = tr.css('td:nth-child(9) div::text').get() or tr.css('td:nth-child(9)::text').get()
            hard_seat = tr.css('td:nth-child(10) div::text').get() or tr.css('td:nth-child(10)::text').get()
            without_seat = tr.css('td:nth-child(11) div::text').get() or tr.css('td:nth-child(11)::text').get()

            yield{
                '车次': train_id,
                '出发站': start_s,
                '到达站': end_s,
                '出发时间': start_t,
                '到达时间': end_t,
                '历时': duration,
                '商务座': business_seats,
                '优选一等座': preferred_first_class,
                '一等座': first_class,
                '二等座': second_class,
                '高级软卧': preferred_soft_sleeper,
                '软卧': soft_sleeper,
                '硬卧': hard_sleeper,
                '软座': soft_seat,
                '硬座': hard_seat,
                '无座': without_seat
            }

        
