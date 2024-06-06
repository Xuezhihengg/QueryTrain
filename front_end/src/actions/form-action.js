'use server';
import { saveTrainChange, saveTrainsDirect } from '@/lib/trains';
import { revalidatePath } from 'next/cache';

export async function query(prevState, formData) {
	const start_s = formData.get('start_s');
	const end_s = formData.get('end_s');
	if (!start_s || !end_s || start_s === '' || end_s === '') {
		throw new Error('输入不能为空');
	}
	const start_s_url = encodeURIComponent(start_s);
	const end_s_url = encodeURIComponent(end_s);
	const date = formData.get('date');

	//检查输入合法性
	if (date === '') {
		throw new Error('输入不能为空');
	}
	//检查date格式是否为YYYY-MM-DD
	const dateReg = /^\d{4}-\d{2}-\d{2}$/;
	if (!dateReg.test(date)) {
		throw new Error('日期格式应遵循YYYY-MM-DD，例如2024-06-05');
	}

	//查询
	const url_direct = `http://127.0.0.1:8000/trains_direct?start_s=${start_s_url}&end_s=${end_s_url}&train_date=${date}`;
	const url_change = `http://127.0.0.1:8000/trains_change?start_s=${start_s_url}&end_s=${end_s_url}&train_date=${date}`;

	const response_direct = await fetch(url_direct);
	const response_change = await fetch(url_change);

	const data_direct = await response_direct.json();
	const data_change = await response_change.json();

	saveTrainsDirect(data_direct);
	saveTrainChange(data_change);

	revalidatePath('/');
	return {
		finish: prevState.finish + 1,
		data: {
			start_s: start_s,
			end_s: end_s,
			date: date,
		},
	};
}
