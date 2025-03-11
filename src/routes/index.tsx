import DashboardLayout from "@/layouts/dashboard-layout";
import RootLayout from "@/layouts/root-layout";
import DashboardHomePage from "@/pages/dashboard/home";
import HomePage from "@/pages/home-page";
import MainHomePage from "@/pages/main-home";
import UserProfile from "@/pages/profile/Index";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainHomePage />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
        <Route path="search" element={<HomePage />} />
        <Route path="ask-ai" element={<HomePage />} />
        <Route path="inbox" element={<HomePage />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
    </Route>
  )
);

export default Router;
