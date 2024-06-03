'use client'

import classes from './error.module.css'

export default function RootError({error}) {
	return (
        <div className={classes.error}>
            <p>-------------------------------------------------------</p>
            <h1>Oops!</h1>
            <h3>发生了一些错误，请重新加载一下试试。</h3>
            <p>{error.message}</p>
		</div>
	);
}
