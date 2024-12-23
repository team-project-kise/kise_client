import { Routes, Route } from "react-router-dom";
import LovingLocal from "./pages/1-loving-local-page/LovingLocal";
import LocalTrip from "./pages/2-local-trip-page/LocalTrip";
import Component from "./components/common/ComponentExample";
import SelectProduct from "./pages/4-select-product-page/SelectProduct";
import SelectDetail from "./pages/5-select-detail-page/SelectDetail";
import TravelerAgree from "./pages/6-traveler-agree-page/TravelerAgree";
import TravelerInfo from "./pages/7-traveler-info/TravelerInfo";
import CompleteProduct from "./pages/8-complete-product/CompleteProduct";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<LovingLocal />} />
        <Route path="/localtrip" element={<LocalTrip />} />
        <Route path="/selectproduct" element={<SelectProduct />} />
        <Route path="/selectdetail" element={<SelectDetail />} />
        <Route path="/traveleragree" element={<TravelerAgree />} />
        <Route path="/travelerinfo" element={<TravelerInfo />} />
        <Route path="/completeproduct" element={<CompleteProduct />} />
      </Routes>
    </div>
  );
}

export default App;
