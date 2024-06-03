import classes from './train-change-item.module.css';

export default function TrainsChangeItem({
	start_s,
	train1,
	change_s,
	train2,
	end_s,
	start_t,
	duration1,
	change_start_t,
	change_end_t,
	duration2,
	end_t,
	total_duration,
}) {
	return (
		<li className={classes.item}>
			<div className={classes['card-container']}>
				<div className={classes.card}>
					<div className={['front-content']}>
						<div className={classes.train_id}>
							<h2>{train1}</h2>
							<h2>{train2}</h2>
						</div>
						<div className={classes.station}>
							<p>{start_s}</p>
							<p>{change_s}</p>
							<p>{end_s}</p>
						</div>
						<div className={classes.time}>
							<p>{start_t}</p>
							<p>{change_start_t}</p>
							<p>{change_end_t}</p>
							<p>{end_t}</p>
						</div>
					</div>
					<div className={classes.content}>
						<div className={classes.targets}>
							<div className={classes.duration}>
								<div>
									<p>历时</p>
									<p>{duration1}</p>
								</div>
								<div>
									<p>总历时</p>
									<p>{total_duration}</p>
								</div>
								<div>
									<p>历时</p>
									<p>{duration2}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}
