import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./component/Nav";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from "./component/Footer";
config.autoAddCss = false;


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  
  title: "My Movie Website",
  description: "Generated by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <NavBar/>
       <br/>
        {children}
        <Footer/>
        </body>
   
   
  </html>

      
  );
}
