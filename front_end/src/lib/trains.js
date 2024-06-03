import sql from 'better-sqlite3';
const db = sql('trains.db');

export async function saveTrainsDirect(data) {
	//覆盖掉数据库中原有的数据
	db.prepare('DELETE FROM trains_direct').run();
	data.map((train) => {
		db.prepare(
			`INSERT INTO trains_direct 
        (车次,出发站,到达站,出发时间,到达时间,历时,商务座,优选一等座,一等座,二等座,高级软卧,软卧,硬卧,软座,硬座,无座) 
        VALUES (
            @车次,
            @出发站,
            @到达站,
            @出发时间,
            @到达时间,
            @历时,
            @商务座,
            @优选一等座,
            @一等座,
            @二等座,
            @高级软卧,
            @软卧,
            @硬卧,
            @软座,
            @硬座,
            @无座
        )
`
		).run(train);
	});
}

export async function saveTrainChange(data) {
    	//覆盖掉数据库中原有的数据
	db.prepare('DELETE FROM trains_change').run();
	data.map((train) => {
		db.prepare(
			`INSERT INTO trains_change 
        (起点站,车次1,中转站,车次2,终点站,从起点站出发时间,历时1,到达中转站时间,从中转站出发时间,历时2,到达终点站时间,总历时) 
        VALUES (
            @起点站,
            @车次1,
            @中转站,
            @车次2,
            @终点站,
            @从起点站出发时间,
            @历时1,
            @到达中转站时间,
            @从中转站出发时间,
            @历时2,
            @到达终点站时间,
            @总历时
        )
`
		).run(train);
	});
}

export async function getTrainsDirect(data) {
    return db.prepare('SELECT * FROM trains_direct').all();
}

export async function getTrainsChange(data) {
    return db.prepare('SELECT * FROM trains_change').all();
}
