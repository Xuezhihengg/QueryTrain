import scrapy
from scrapy_playwright.page import PageMethod


class TrainsChangeSpider(scrapy.Spider):
    name = "trains_change"

    #通过外部命令行指定开始URL
    def __init__(self, start_url=None, *args, **kwargs):
        super(TrainsChangeSpider, self).__init__(*args, **kwargs)
        self.start_urls = start_url

    def start_requests(self):
        yield scrapy.Request(
            self.start_urls,
            meta={
                "playwright": True,
                "playwright_page_methods": [
                    PageMethod("wait_for_selector", "#middle_div_new_tbody tr"),
                    # PageMethod('wait_for_timeout', 5000)
                ],
            },
        )

    def parse(self, response):
        for tr in response.css('.round-table'):
            start_s = tr.css('span.ft16::text').getall()[0]
            train_id_1 = tr.css('span.cc-num::text').getall()[0]
            middle_s = tr.css('div.ft16::text').get().replace("\n", "").replace("\t", "")
            train_id_2 = tr.css('span.cc-num::text').getall()[1]
            end_s = tr.css('span.ft16::text').getall()[1]
            start_t_from_start_s = tr.css('span.color666::text').getall()[0]
            duration_1 = tr.css('span.time.color666::text').getall()[0]
            arrive_t_at_middle_s =  tr.css('span.color666::text').getall()[2]
            start_t_from_middle_s =  tr.css('span.color666::text').getall()[3]
            duration_2 = tr.css('span.time.color666::text').getall()[1]
            arrive_t_at_end_s =  tr.css('span.color666::text').getall()[5]
            all_time = tr.css('span.alltime::text').get()


            yield{
                '起点站': start_s,
                '车次1': train_id_1,
                '中转站': middle_s,
                '车次2': train_id_2,
                '终点站': end_s,
                '从起点站出发时间': start_t_from_start_s,
                '历时1': duration_1,
                '到达中转站时间': arrive_t_at_middle_s,
                '从中转站出发时间': start_t_from_middle_s,
                '历时2': duration_2,
                '到达终点站时间': arrive_t_at_end_s,
                '总历时': all_time,
            }
