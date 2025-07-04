import Sidebar from '../components/Sidebar';
import './globals.css';
import Footer from '../components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="https://hackclub.com/"
          className="fixed top-0 right-10 z-[999] w-32" >
          <img
            src="https://assets.hackclub.com/flag-orpheus-top.svg"
            alt="Hack Club"
            className="w-full border-0" />
        </a>
        <div className="flex">
          <main className="">{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
