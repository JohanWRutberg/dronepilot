"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col gap-x-8 gap-y-2 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mb-5">
          <Image src="/AdobeStock_654382929.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col mt-5 gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl lg:text-6xl font-bold">Drönarpiloten</h1>
          {/* DESC */}
          <p className="text-md lg:text-xl">
            Som UAS-operatör (drönarpilot) erbjuder jag skräddarsydda drönartjänster för diverse ändamål. Från
            kartläggning och inspektioner till imponerande luftfotograferingar och filmning, jag är här för att leverera
            högkvalitativa resultat med precision och professionalism.
          </p>
          <p className="text-md lg:text-xl">
            <Link href="/kontakt" className="text-red-500 font-semibold hover:underline">
              Kontakta mig
            </Link>{" "}
            idag för att diskutera hur jag kan optimera ditt projekt med mina skräddarsydda drönartjänster.
          </p>
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Knapp 1</button>
            <button className="p-4 rounded-lg ring-1 ring-black">Knapp 2</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
