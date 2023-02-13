import React, {Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import RequireAuth from "../features/auth/RequireAuth";
import {LandingAsync} from "../pages/landing/Landing.async";
import {AboutAsync} from "../pages/about/About.async";
import {TermsOfUseAsync} from "../pages/about/TermsOfUse.async";
import {CreateNudeAsync} from "../pages/create-nude/CreateNude.async";
import {DepositAsync} from "../pages/deposit/Deposit.async";
import {PaginatedPhotosAsync} from "../pages/my-photos/PaginatedPhotos.async";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="landing/*" element={<LandingAsync />} />
          <Route path="about" element={<AboutAsync />} />
          <Route path="/about/privacy" element={<AboutAsync />} />
          <Route path="/about/terms-of-use" element={<TermsOfUseAsync />} />
          <Route element={<RequireAuth />}>
            <Route path="create-nude" element={<CreateNudeAsync />} />
            <Route path="deposit" element={<DepositAsync />} />
            <Route path="photos" element={<PaginatedPhotosAsync />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
