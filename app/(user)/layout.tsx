
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/globals.css";
import Head from "../head";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>

      <body className= "mx-auto">
        <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <Header />
        {/* {Header} */}
        <Banner />

        {/* BANNER */}
        {children}
        </div>
        
        <Footer/>
        
      </body>

      

    </html>
  )
}
