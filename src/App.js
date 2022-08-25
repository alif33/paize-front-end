import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewItem from './pages/AddNewItem';
import EnrollSchool from './pages/EnrollSchool';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Panding from './components/Panding';
import PaymentDetails from './pages/PaymentDetails';
import PaymentInformation from './pages/PaymentInformation';
import PaymentInfoTable from './pages/PaymentInfoTable';
import PaymentNowPage from './pages/PaymentNowPage';
import SchoolDashboard from './pages/SchoolDashboard';
import SchoolDashboardAmount from './pages/SchoolDashboardAmount';
import SchoolInformation from './pages/SchoolInformation';
import BuyingItem from './pages/BuyingItem';
import Registered from './pages/Registered';
import UpdateInfo from './pages/UpdateInfo';
import JoinSchool from './pages/JoinSchool';
import JoinSchoolInfo from './pages/JoinSchoolInfo';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRoute from './auth/AdminRoute';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/enroll/register" element={<EnrollSchool />} /> 
        <Route path="/enroll/school-information" element={<SchoolInformation />} />
        <Route path="/enroll/payment-information" element={<PaymentInformation />} />
        <Route path="/registered" element={<Registered />} /> 
        {/* <Route path="/panding" element={<Panding />} /> */}
        <Route path="/join/register" element={<JoinSchool />} />
        {/* <Route path="/join/register" element={<JoinSchool />} /> */}
        <Route path="/enroll" element={<EnrollSchool />} />
        <Route path="/enroll/school-information" element={<SchoolInformation />} />
        <Route path="/enroll/payment-information" element={<PaymentInformation />} />
        <Route path="/registered" element={<Registered />} />

        <Route path="/join" element={<JoinSchool />} />
        <Route path="/join/school-information" element={<JoinSchoolInfo />} />

        <Route path="/update-information" element={<UpdateInfo />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<BuyingItem />} />
        <Route path="/add-new-item" element={<AddNewItem />} />

        <Route path="/school" element={<SchoolDashboard />} />
        <Route path="/school-dashboard-amount" element={<SchoolDashboardAmount />} />
        
        <Route path="/payment-info-table" element={<PaymentInfoTable />} />
        <Route path="/payment" element={<PaymentNowPage />} />



        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;