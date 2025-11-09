
import '../../globals.css'
import QueryProvider from "@/app/provider/QueryProvider";
import ProductSideBar from "@/components/user/productsPage/ProductSideBar";

export default function RootLayout({ children }) {
  return (
    <div className="lg:flex lg:gap-x-4">
        <div className="lg:w-[20vw]">
        <ProductSideBar/>
        </div>
        <div className="w-full lg:w-[80vw] border h-full">
        <QueryProvider>{children}</QueryProvider>
        </div>
        </div>
  );
}
