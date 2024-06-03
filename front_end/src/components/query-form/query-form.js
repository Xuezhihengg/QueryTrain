'use client';
import classes from './query-form.module.css';
import { query } from '@/actions/form-action';
import { useState, useEffect } from 'react';
import { useFormState } from 'react-dom';
import Loader from '../ui/loading';

export default function QueryForm() {
	const [isLoading, setIsLodading] = useState(false);
	const [formState, formAction] = useFormState(query, { finish: 0 });

	const sumbitHandler = () => {
		setIsLodading(true);
	};

	useEffect(() => {
		if (formState.finish) {
			setIsLodading(false);
		}
	}, [formState.finish]);

	return (
		<form className={classes.form} action={formAction} onSubmit={sumbitHandler}>
			<div className={classes.inputs}>
				<div className={classes.container}>
					<input
						required
						type="text"
						name="start_s"
						id="start_s"
						className={classes.input}
					/>
					<label className={classes.label} htmlFor="start_s">
						起点站
					</label>
				</div>
				<div className={classes.container}>
					<input required type="text" name="end_s" id="end_s" className={classes.input} />
					<label className={classes.label} htmlFor="end_s">
						终点站
					</label>
				</div>
				<div className={classes.container}>
					<input required type="text" name="date" id="date" className={classes.input} />
					<label className={classes.label} htmlFor="date">
						日期
					</label>
				</div>
			</div>
			<button className={isLoading ? classes.button_ban : classes.button} type="submit">
				查询
			</button>
			{isLoading && <Loader />}
			<p>-------------------------------------------------------------------------------</p>
		</form>
	);
}
