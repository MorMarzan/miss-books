import { Home } from './pages/Home.jsx'

const { useState } = React

export function App() {

    const [page, setPage] = useState('home')

    return (
        <section className="app main-layout">

            <header className="app-header full main-layout">
                <section>
                    <h1>Miss Books</h1>
                    <nav className="app-nav">
                        <a onClick={() => setPage('home')} href="#">Home</a>
                        {/* <a onClick={() => setPage('about')} href="#">About</a>
                        <a onClick={() => setPage('books')} href="#">Books</a> */}
                    </nav>
                </section>
            </header>

            <main>
                {page === 'home' && <Home />}
                {/* {page === 'about' && <About />}
                {page === 'cars' && <CarIndex />} */}
            </main>

        </section>
    )
}