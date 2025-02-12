import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal p-10 mt-10">
        <aside>
          <a className="text-2xl cursor-pointer font-bold text-purple-500 italic">
            <img className="w-30" src={logo} alt="logo" />
          </a>
        </aside>
        <nav>
          <h6 className="text-2xl text-white font-medium">Contact Us</h6>
          <a className="link link-hover text-gray-400">
            9300 SE 82nd Ave Orego, Happy <br /> Valley, United States
          </a>
          <a className="link link-hover text-gray-400">+88440-550-8763</a>
        </nav>
        <nav>
          <h6 className="text-2xl text-white font-medium">Quick Link</h6>
          <a className="link link-hover text-gray-400">Home</a>
          <a className="link link-hover text-gray-400">Adventures</a>
          <a className="link link-hover text-gray-400">Blogs</a>
        </nav>
        <nav>
          <h6 className="text-2xl text-white font-medium">Social Link</h6>
          <div className="flex gap-3 text-2xl">
            <p className="text-purple-500 cursor-pointer">
              <CiFacebook />
            </p>
            <p className="text-purple-500 cursor-pointer">
              <FaInstagram />
            </p>
            <p className="text-purple-500 cursor-pointer">
              <CiTwitter />
            </p>
            <p className="text-purple-500 cursor-pointer">
              <CiLinkedin />
            </p>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center  text-base-content p-4">
        <aside>
          <p>
            © Copyright {new Date().getFullYear()} - All right reserved by
            RiverVoyage
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
