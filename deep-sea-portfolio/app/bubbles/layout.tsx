"use client";//Framer motion and navigation 
import React from "react";
import Link from "next/link";
import './bubbleLab.css'
import { MotionConfig, motion } from "framer-motion";

// This is the layout object for any bubble lab
// It has an entry effect, a link to nav back to the main page and visual adjustments 
const GizmoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionConfig transition={{ duration: 3 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="oceanBg ">
        <div className=" flex flex-col items-center min-h-screen bubbleEffect bubbleLabsBG ">
          <div className="flex flex-row min-w-full justify-center mt-10">
            <div className="gizmoTittle text-center text-6xl">
              Bubble Labs
            </div>

          </div>
          <div className="text-center text flex items-center p-6 mr-2">
              <Link href="/" className="text-slate-950 hover:text-teal-800 hover:text-2xl text-xl">
                Back to the sea
              </Link>
            </div>
          <div className=" w-56 min-w-max min-h-min m-12">
            {children}
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
};

export default GizmoLayout;
