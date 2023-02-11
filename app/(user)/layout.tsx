
import Banner from "../../components/Banner";
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

      <body className="max-w-7xl mx-auto">

        {/* HEADER */}
        <Header />
        {/* {Header} */}
        <Banner/>

        {/* BANNER */}
        {children}
      </body>
    </html>
  )
}
