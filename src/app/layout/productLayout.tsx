"use client";
import React from 'react'
import styles from './productLayout.module.scss'


import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("@/components/TopBar/TopBar"), {
  ssr: false,
});

const TopBarWrapper= (

) => {
  return <TopBar/>
}

export default TopBarWrapper
