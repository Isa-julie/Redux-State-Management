import Counter from './components/Counter'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.pageShell}>
      <header className={styles.masthead}>
        <span className={styles.brandMark} aria-hidden="true">RS</span>
        <span>Redux State Management</span>
        <span className={styles.activityNumber}>ACTIVITY 01</span>
      </header>
      <section className={styles.counterSection} aria-labelledby="page-title">
        <p className={styles.eyebrow}>MANUAL REDUX / TYPESCRIPT</p>
        <h1 id="page-title">Counter</h1>
        <Counter />
      </section>
    </main>
  )
}

export default App
