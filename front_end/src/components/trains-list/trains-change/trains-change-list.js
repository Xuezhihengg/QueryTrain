import classes from './trains-change-list.module.css';
import { getTrainsChange } from '@/lib/trains';
import TrainsChangeItem from './train-change-item';

export default async function TrainsChangeList() {
	const trains = await getTrainsChange();
	return (
        <div>
            <h1>中转列车</h1>
			<ul className={classes.list}>
				{trains.map((train) => (
					<TrainsChangeItem
						key={train.ID}
						start_s={train['起点站']}
						train1={train['车次1']}
						change_s={train['中转站']}
						train2={train['车次2']}
						end_s={train['终点站']}
						start_t={train['从起点站出发时间']}
						duration1={train['历时1']}
						change_start_t={train['到达中转站时间']}
						change_end_t={train['从中转站出发时间']}
                        duration2={train['历时2']}
                        end_t={train['到达终点站时间']}
						total_duration={train['总历时']}
					/>
				))}
            </ul>
            <p>-------------------------------------------------------------------------------</p>
		</div>
	);
}
