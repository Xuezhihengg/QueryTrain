from fastapi import FastAPI
from crawl import get_trains_direct,get_trains_change

app = FastAPI()

@app.get('/trains_direct')
async def query_trains_direct(start_s:str,end_s:str,train_date:str):
    return await get_trains_direct(start_s,end_s,train_date) 

@app.get('/trains_change')
async def query_trains_change(start_s:str,end_s:str,train_date:str):
    return await get_trains_change(start_s,end_s,train_date) 