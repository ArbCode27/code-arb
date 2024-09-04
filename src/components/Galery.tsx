"use client";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Galery = () => {
  return (
    <div>
      <h3 className="md:hidden text-center font-semibold text-xl uppercase mb-4">
        Proyectos
      </h3>
      <div className="md:h-[600px] gap-6 md:gap-2 grid grid-cols-12 md:grid-rows-2">
        <a
          className="col-span-12 sm:col-span-4 h-[300px]"
          href="https://rick-and-morty-r3grgsm4g-abraham-rojas-projects.vercel.app/"
        >
          <Card className="w-full h-full">
            <Image
              isZoomed
              removeWrapper
              width={300}
              height={300}
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/rickAndMorty.webp"
            />
            <CardFooter className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-end justify-between">
                <div className="flex flex-col">
                  <p className="text-md font-semibold text-white">
                    Rick and morty
                  </p>
                </div>
                <FaExternalLinkAlt size={14} color="#00A8CC" />
              </div>
            </CardFooter>
          </Card>
        </a>

        <a
          className="col-span-12 sm:col-span-4 h-[300px]"
          href="https://nelmarglobals.com/"
        >
          <Card className="w-full h-full">
            <Image
              width={300}
              height={300}
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/nelmar.webp"
            />
            <CardFooter className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-end justify-between">
                <div className="flex flex-col">
                  <p className="text-md font-semibold text-white">
                    Nelmar Globals
                  </p>
                </div>
                <FaExternalLinkAlt size={14} color="#00A8CC" />
              </div>
            </CardFooter>
          </Card>
        </a>

        <a
          className="hidden md:block col-span-12 sm:col-span-4 h-[300px]"
          href="https://www.jakera.com/"
        >
          <Card className="w-full h-full">
            <Image
              isZoomed
              width={300}
              height={300}
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/jakera.webp"
            />
            <CardFooter className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-end justify-between">
                <div className="flex flex-col">
                  <p className="text-md font-semibold text-white">Jakera</p>
                </div>
                <FaExternalLinkAlt size={14} color="#00A8CC" />
              </div>
            </CardFooter>
          </Card>
        </a>

        <a
          className="hidden md:block w-full h-[300px] col-span-12 sm:col-span-5"
          href=""
        >
          <Card className="w-full h-full" isFooterBlurred>
            <Image
              isZoomed
              width={300}
              height={300}
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full -translate-y-6 object-cover"
              src="/weebo.webp"
            />
            <CardFooter className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-end justify-between">
                <div className="flex flex-col">
                  <p className="text-md font-semibold text-white">Weebo</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </a>

        <a className="w-full h-[300px] col-span-12 sm:col-span-7" href="">
          <Card isFooterBlurred className="w-full h-full">
            <Image
              isZoomed
              width={300}
              height={300}
              removeWrapper
              alt="Relaxwebp app background"
              className="z-0 w-full h-full object-cover"
              src="/aqomi.webp"
            />
            <CardFooter className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-end justify-between">
                <div className="flex flex-col">
                  <p className="text-md font-semibold text-white">Aqomi</p>
                </div>
                <FaExternalLinkAlt size={14} color="#00A8CC" />
              </div>
            </CardFooter>
          </Card>
        </a>
      </div>
    </div>
  );
};
