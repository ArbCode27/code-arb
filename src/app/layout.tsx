import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button, Image, NextUIProvider, Tooltip } from "@nextui-org/react";
import {
  FaFileDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#000] text-white md:overflow-hidden overflow-x-hidden`}
      >
        <NextUIProvider>
          <div className="md:flex md:gap-6 md:p-4 md:max-h-[100vh]">
            <div className="hidden md:flex bg-black w-[60px] h-[70px] justify-center items-center fixed bottom-[8px] right-2 rounded-xl z-[10000]">
              <Tooltip color="primary" content="Descarga mi CV">
                <a href="/resume.pdf" download>
                  <Button href="" isIconOnly className="bg-none">
                    <FaFileDownload size={32} />
                  </Button>
                </a>
              </Tooltip>
            </div>

            <nav className="w-full px-4 flex items-center md:flex-col md:justify-between justify-center gap-6 glass rounded-xl py-4 md:w-fit md:relative fixed bottom-0 z-[100000]">
              <figure className="hidden md:block w-[60px]">
                <Image
                  isBlurred
                  width={60}
                  height={60}
                  src="https://nextui.org/images/card-example-4.jpeg"
                  alt="NextUI Album Cover"
                  className="p-1 w-full"
                />
              </figure>
              <ul className="flex md:flex-col gap-8">
                <li>
                  <a
                    href="https://linkedin.com/in/abraham-rojas-4a31b1298"
                    target="_blank"
                  >
                    <FaLinkedin size={"22px"} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ArbCode27" target="_blank">
                    <FaGithub size={"22px"} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/abraham.2712/"
                    target="_blank"
                  >
                    <FaInstagram size={"22px"} />
                  </a>
                </li>
              </ul>
              <div>
                <a
                  className="hidden md:block"
                  href="https://wa.link/kj7vtp"
                  target="_blank"
                >
                  <FaWhatsapp size={"32px"} />
                </a>
                <a
                  className="md:hidden"
                  href="https://wa.link/kj7vtp"
                  target="_blank"
                >
                  <FaWhatsapp size={"22px"} />
                </a>
              </div>
              <a className="md:hidden" href="/resume.pdf" download>
                <FaFileDownload size={22} />
                <p></p>
              </a>
            </nav>
            <div className="md:overflow-y-scroll  bg-[#171718] rounded-xl overflow-x-hidden">
              <div className="p-4">{children}</div>
            </div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
