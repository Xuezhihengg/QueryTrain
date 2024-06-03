import classes from './train-direct-item.module.css';

export default function TrainsDirectItem({
	train_id,
	start_s,
	end_s,
	start_t,
	end_t,
	duration,
	business_seat,
	first_class_seat,
	first_class,
	second_class,
	advanced_soft_sleep,
	soft_sleep,
	hard_sleep,
	soft_seat,
	hard_seat,
	no_seat,
}) {
	return (
		<li className={classes.item}>
			<div className={classes['card-container']}>
				<div className={classes.card}>
					<div className={['front-content']}>
						<h2>{train_id}</h2>
						<div className={classes.station}>
							<p>{start_s}</p>
							<p>{end_s}</p>
						</div>
						<div className={classes.time}>
							<p>{start_t}</p>
                            <div>
                                <p>历时</p>
								<p>{duration}</p>
							</div>
							<p>{end_t}</p>
						</div>
					</div>
					<div className={classes.content}>
						<p className={classes.heading}>票务信息</p>
                        <div className={classes.targets}>
                            <div className={classes.target_info}>
                                <p>商务座</p>
                                <p>{business_seat}</p>
                            </div>
                            <div className={classes.target_info}>
                                <p>优选一等座</p>
                                <p>{first_class_seat}</p>
                            </div>
                            <div className={classes.target_info}>
                                <p>一等座</p>
                                <p>{first_class}</p>
                            </div>
                            <div className={classes.target_info}>
                                <p>二等座</p>
                                <p>{second_class}</p>
                            </div>
                            <div className={classes.target_info}>
                                <p>高级软卧</p>
                                <p>{advanced_soft_sleep}</p>
                            </div>
                            <div className={classes.target_info}>
                                <p>软卧</p>
                                <p>{soft_sleep}</p>
                            </div>
                            <div className={classes.target_info}>
                                <p>硬卧</p>
                                <p>{hard_sleep}</p>
                            </div>
                            <div className={classes.target_info}>
                                <p>软座</p>
                                <p>{soft_seat}</p>
                            </div>
                            <div className={classes.target_info}>
                                <p>硬座</p>
                                <p>{hard_seat}</p>
                            </div>
                            <div className={classes.target_info}>
                                <p>无座</p>
                                <p>{business_seat}</p>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</li>
	);
}
