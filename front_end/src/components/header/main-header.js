import classes from './main-header.module.css';

export default function MainHeader() {
    return (
        <header className={classes.header}>
        <h1 className={classes.title}>Query Train</h1>
        </header>
    );
}