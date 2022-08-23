import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItem from './pages/AddItem';
import AddNewStudent from './pages/AddNewStudent';
import EnrollSchool from './pages/EnrollSchool';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Panding from './pages/Panding';
import PaymentDetails from './pages/PaymentDetails';
import PaymentInformation from './pages/PaymentInformation';
import PaymentInfoTable from './pages/PaymentInfoTable';
import PaymentNowPage from './pages/PaymentNowPage';
import SchoolDashboard from './pages/SchoolDashboard';
import SchoolDashboardAmount from './pages/SchoolDashboardAmount';
import SchoolInformation from './pages/SchoolInformation';
import SellingItem from './pages/SellingItem';
import Registered from './pages/Registered';
import UpdateInfo from './pages/UpdateInfo';
import JoinSchool from './pages/JoinSchool';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enroll" element={<EnrollSchool />} />
        <Route path="/enroll/school-information" element={<SchoolInformation />} />
        <Route path="/enroll/payment-information" element={<PaymentInformation />} />
        <Route path="/registered" element={<Registered />} />
        <Route path="/panding" element={<Panding />} />
        
        <Route path="/join" element={<JoinSchool />} />
        
        <Route path="/update-information" element={<UpdateInfo />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/selling-item" element={<SellingItem />} />
        <Route path="/add-new-student" element={<AddNewStudent />} />
        <Route path="/school-dashboard" element={<SchoolDashboard />} />
        <Route path="/school-dashboard-amount" element={<SchoolDashboardAmount />} />
        <Route path="/payment-info-table" element={<PaymentInfoTable />} />
        <Route path="/payment" element={<PaymentNowPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;