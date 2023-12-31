const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookAdd } from './pages/BookAdd.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'


export function App() {

    return (
        <Router>
            <section className="app main-layout">
                <AppHeader />
                <main>
                    <Routes>
                        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        {/* <Route path="/about/team" element={<Team />} /> */}
                        {/* <Route path="/about/vision" element={<Vision />} /> */}
                        {/* </Route> */}
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                        <Route path="/book/add" element={<BookAdd />} />
                    </Routes>
                </main>
                <UserMsg />
            </section>
        </Router>
    )
}