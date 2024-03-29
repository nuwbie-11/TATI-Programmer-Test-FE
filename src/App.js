import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import Layout from './layout';
import Loading from './components/loading';


const LandingPage = lazy(()=>import('./pages/LandingPage'))
const HelloWorldPage = lazy(()=>import('./pages/HelloWorld'))
const PredikatKerja = lazy(()=>import('./pages/PredikatKerja'))
const Provinsi = lazy(()=>import('./pages/Provinsi'))
const EditProvinsi = lazy(()=>import('./pages/Provinsi/EditProvinsi'))
const Login = lazy(()=>import('./pages/HarianLog/index'))
const DailyLogTable = lazy(()=>import('./pages/HarianLog/HarianLogTable'))
const DailyLogStaff = lazy(()=>import('./pages/HarianLog/HarianLogTableStaff'))

function App() {
  const location = useLocation();

  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(false)
  },[])


  return isLoading ? null: (
    <Layout>
      <Routes>
        <Route path="/" element={ <Suspense fallback={<Loading/>} ><LandingPage/></Suspense> } />
        <Route path="/hello-world" element={ <Suspense fallback={<Loading/>} ><HelloWorldPage/></Suspense> } />
        <Route path="/predikat-kerja" element={ <Suspense fallback={<Loading/>} ><PredikatKerja/></Suspense> } />
        <Route path="/provinsi" element={ <Suspense fallback={<Loading/>} ><Provinsi/></Suspense> } />
        <Route path="/provinsi/edit/:id" element={ <Suspense fallback={<Loading/>} ><EditProvinsi/></Suspense> } />
        <Route path="/provinsi/create" element={ <Suspense fallback={<Loading/>} ><EditProvinsi/></Suspense> } />

        <Route path="/daily-log/" element={ <Suspense fallback={<Loading/>} ><DailyLogTable/></Suspense> } />
        <Route path="/daily-log/staff" element={ <Suspense fallback={<Loading/>} ><DailyLogStaff/></Suspense> } />
        <Route path="/daily-log/login" element={ <Suspense fallback={<Loading/>} ><Login/></Suspense> } />
      </Routes>
    </Layout>
  )
}

export default App;
