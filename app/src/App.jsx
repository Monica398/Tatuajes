import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { EventPage } from './pages/EventsPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <NavBar />
      <main className='flex-1 max-w-5x1 mx-auto p-4'>
        <HomePage />
        <EventPage />
      </main>
      <Footer />
    </div>
  )
}

