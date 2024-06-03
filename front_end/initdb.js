const sql = require('better-sqlite3');
const db = sql('trains.db');

db.prepare(
	`
CREATE TABLE IF NOT EXISTS trains_direct (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    车次 TEXT,
    出发站 TEXT,
    到达站 TEXT,
    出发时间 TEXT,
    到达时间 TEXT,
    历时 TEXT,
    商务座 TEXT,
    优选一等座 TEXT,
    一等座 TEXT,
    二等座 TEXT,
    高级软卧 TEXT,
    软卧 TEXT,
    硬卧 TEXT,
    软座 TEXT,
    硬座 TEXT,
    无座 TEXT
)
`
).run();

db.prepare(
	`
CREATE TABLE IF NOT EXISTS trains_change (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    起点站 TEXT,
    车次1 TEXT,
    中转站 TEXT,
    车次2 TEXT,
    终点站 TEXT,
    从起点站出发时间 TEXT,
    历时1 TEXT,
    到达中转站时间 TEXT,
    从中转站出发时间 TEXT,
    历时2 TEXT,
    到达终点站时间 TEXT,
    总历时 TEXT
)
`
).run();
