import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store/store'
import { decrement, increment, reset } from '../store/actions/counterActions'
import styles from './Counter.module.css'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className={styles.counter}>
      <p className={styles.label}>Current value</p>
      <output className={styles.value} aria-live="polite">{count}</output>
      <div className={styles.controls}>
        <button
          className={styles.stepButton}
          type="button"
          aria-label="Decrease counter"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className={styles.resetButton}
          type="button"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          className={styles.stepButton}
          type="button"
          aria-label="Increase counter"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter