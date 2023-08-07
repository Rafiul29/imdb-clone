"use client";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted,setMounted]=useState(false)

  useEffect(()=>{
    setMounted(true)
  },[])

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && (currentTheme === "dark" ? (
        <MdLightMode onClick={() => setTheme("light")} className="text-xl cursor-pointer hover:text-amber-400" />
      ) : (
        <BsFillMoonStarsFill onClick={() => setTheme("dark")}  className="text-xl cursor-pointer hover:text-amber-400" />
      ))}
    </>
  );
};

export default DarkModeSwitch;
