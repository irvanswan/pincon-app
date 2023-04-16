import Navbar from './navbar';
import Menu from './menu';

const Layout = ({title, children}) => {
  return (
    <main className='container'>
      <Navbar title={title} />
      <div className='container-content'>
        {children}
      </div>
      <Menu />
    </main>
  )
}

export default Layout