import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import {CreateNude} from "../pages/create-nude";
import TermsOfUse from "../pages/about/TermsOfUse";
import {Deposit} from "../pages/deposit";
import RequireAuth from "../features/auth/RequireAuth";
import PaginatedPhotos from "../pages/my-photos/PaginatedPhotos";

const AppRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="landing/*" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="/about/privacy" element={<About />} />
        <Route path="/about/terms-of-use" element={<TermsOfUse />} />
        <Route element={<RequireAuth />}>
          <Route path="create-nude" element={<CreateNude />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="photos" element={<PaginatedPhotos />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
