import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewItem from "./pages/AddNewItem";
import EnrollSchool from "./pages/EnrollSchool";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import PaymentDetails from "./pages/PaymentDetails";
import PaymentInformation from "./pages/PaymentInformation";
import StudentDashboard from "./pages/StudentDashboard";
import PaymentNowPage from "./pages/PaymentNowPage";
import SchoolDashboard from "./pages/SchoolDashboard";
import SchoolDashboardAmount from "./pages/SchoolDashboardAmount";
import SchoolInformation from "./pages/SchoolInformation";
import BuyingItem from "./pages/BuyingItem";
import Registered from "./pages/Registered";
import UpdateInfo from "./pages/UpdateInfo";
import JoinSchool from "./pages/JoinSchool";
import JoinSchoolInfo from "./pages/JoinSchoolInfo";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import Admin from "./auth/__Admin";
import Auth from "./auth/__Auth";
import Joined from "./pages/Joined";
import UpdateItem from "./components/UpdateItem/UpdateItem";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ConfirmPassword from "./pages/ConfirmPassword/ConfirmPassword";
import Contactus from "./pages/admin/Contactus/Contactus";
import History from "./pages/History/History";

const App = () => {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enroll/register" element={<EnrollSchool />} />
        <Route
          path="/enroll/school-information"
          element={<SchoolInformation />}
        />
        <Route
          path="/enroll/payment-information"
          element={<PaymentInformation />}
        />
        <Route path="/registered" element={<Registered />} />
        {/* <Route path="/panding" element={<Panding />} /> */}
        <Route path="/join/register" element={<JoinSchool />} />
        {/* <Route path="/join/register" element={<JoinSchool />} /> */}
        <Route path="/enroll" element={<EnrollSchool />} />
        <Route
          path="/enroll/school-information"
          element={<SchoolInformation />}
        />
        <Route
          path="/enroll/payment-information"
          element={<PaymentInformation />}
        />
        <Route path="/registered" element={<Registered />} />
        <Route path="/joined" element={<Joined />} />

        <Route path="/join" element={<JoinSchool />} />
        <Route path="/join/school-information" element={<JoinSchoolInfo />} />

        <Route path="/update-information" element={<UpdateInfo />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/update-password/:status/:token"
          element={<ConfirmPassword />}
        />
        <Route path="/items" element={
          <Auth role="AUTHOR">
            <BuyingItem />
          </Auth>
        }/>
        <Route path="/add-new-item" element={
          <Auth role="AUTHOR">
            <AddNewItem />
          </Auth>
        }/>
        <Route path="/update-item/:id" element={<UpdateItem />} />
        <Route path="/history" element={<History />} />

        <Route path="/school" element={
          <Auth role="AUTHOR">
            <SchoolDashboard />
          </Auth>
        }/>
        <Route
          path="/school-dashboard-amount"
          element={<SchoolDashboardAmount />}
        />

        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/payment" element={<PaymentNowPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admin/contact-us" element={
          <Admin>
            <Contactus />
          </Admin>
        }/>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
            <Admin>
              <AdminDashboard />
            </Admin>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
