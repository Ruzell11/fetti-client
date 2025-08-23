import Footer from "../modules/components/Footer";
import SupplierNavbar from "../modules/components/SupplierNavbar";
import HeaderSupplier from "./components/Header";
import SupplierTabs from "./components/Tabs";


export default function Suppliers() {
  return (
    <section className="min-h-screen flex flex-col px-12 gap-2">

      <SupplierNavbar />
      <HeaderSupplier />

      <SupplierTabs />

      <Footer />
    </section>
  );
}
