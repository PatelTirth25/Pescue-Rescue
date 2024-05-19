import Navbar from "@/components/Navbar";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Pes-Res",
  description: "Animal rescue and adoption",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >

      <SessionProvider>
          <body className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
            <Navbar />
            {children}
            <Footer />
          </body>
      </SessionProvider>
    </html>
  );
}