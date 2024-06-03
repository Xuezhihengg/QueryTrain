import classes from './loading.module.css'

export default function Loader() {
    return <div className={classes.spinner}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
}