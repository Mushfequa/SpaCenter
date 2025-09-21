
import './App.css'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      {/*//http://loacalhost:3000*/}
      <Route path='/' element={<ListEmployeeComponent/>}></Route>
      {/*//http://loacalhost:3000/employees*/}
      <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
      {/*//http://loacalhost:3000/add-employee*/}
      <Route path='/add-employee' element={<EmployeeComponenet/>}></Route>
      

    
    </Routes>
    <ListEmployeeComponent/>
    <FooterComponent/>
    </BrowserRouter>
</>
  
  )
}

export default App
