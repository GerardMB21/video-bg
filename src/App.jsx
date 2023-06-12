import './App.css';
import Header from './components/Header';
import SectionStack from './components/SectionStack';
import SectionVideo from './components/SectionVideo';

function App() {
  return (
    <>
      <main className='relative w-full h-screen overflow-auto'>
        <Header />
        <SectionVideo />
        <SectionStack />
      </main>
    </>
  )
}

export default App
