import classes from './trains-direct-list.module.css';
import { getTrainsDirect } from '@/lib/trains';
import TrainsDirectItem from './train-direct-item';

export default async function TrainsDirectList() {
	const trains = await getTrainsDirect();
	return (
		<div>
			<h1>直达列车</h1>
			<ul className={classes.list}>
				{trains.map((train) => (
					<TrainsDirectItem
						key={train.ID}
						train_id={train['车次']}
						start_s={train['出发站']}
						end_s={train['到达站']}
						start_t={train['出发时间']}
						end_t={train['到达时间']}
						duration={train['历时']}
						business_seat={train['商务座']}
						first_class_seat={train['优选一等座']}
						first_class={train['一等座']}
						second_class={train['二等座']}
						advanced_soft_sleep={train['高级软卧']}
						soft_sleep={train['软卧']}
						hard_sleep={train['硬卧']}
						soft_seat={train['软座']}
						hard_seat={train['硬座']}
						no_seat={train['无座']}
					/>
				))}
      </ul>
      <p>-------------------------------------------------------------------------------</p>
		</div>
	);
}
