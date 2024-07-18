import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PageLoader from "../Loader/PageLoader";
import "./BaseLayout.css";
import Header from "../Header/Header";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
}
