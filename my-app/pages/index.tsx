import type { NextPage } from 'next'
import TwcssDiv from '../components/div/tailwindcss'
import TwcssButton from '../components/button/tailwindcss'
import ActiveButton from '../components/styleCondition/galleryButton'
import React, { useEffect, useState } from 'react';

import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { galleryDataState } from "../models/galleryState";
const Home: NextPage = () => {
  // const galleryButtons:[] = [{ name: "Image Gallery", active: false }, { name: "Preview", active: false }];

  const [galleryButton, setGalleryButton] = useState<any>([{ name: "Image Gallery", active: true }, { name: "Preview", active: false }]);
  const [prevIndex, setPrevIndex] = useState<number>(-1)
  interface IStaticState {
    gallery: galleryDataState;
  }

  useEffect(() => {
    console.log(galleryButton)
  }, [galleryButton])
  return (
    <div className="grid grid-cols-6 gap-3 body md:h-screen">
      {/* col for product's image gallery & preview */}

      <TwcssDiv className=" col-span-3 border-r-1 border-x-zinc-600 flex justify-center">
        {/* div for product's image gallery & preview */}
        <TwcssDiv className="text-center w-3/4 ">
          {/* div for product's image gallery & preview button */}
          <TwcssDiv className="bg-slate-800	flex justify-between">
            {galleryButton.map((i: galleryDataState, index: any) => {
              return <TwcssButton onClick={() => {
                let temp = [...galleryButton];
                if (prevIndex == -1) {
                  if (index == 0) {
                    temp[0].active = true;
                    temp[1].active = false;
                  } else {
                    temp[1].active = true;
                    temp[0].active = false;
                  }
                }
                else if (prevIndex != index) {
                  temp[index].active = true;
                  temp[prevIndex].active = false;
                }


                setPrevIndex(index)
                setGalleryButton(temp)
              }} className={ActiveButton(i.active)}>
                {i.name}
              </TwcssButton>
            })}
          </TwcssDiv>
          {/* div for add image */}
          <TwcssDiv className="bg-white p-1 w-full addImgContainer border-2	border-black h-2/3 flex justify-center items-center	">
            <TwcssDiv className="align-middle flex justify-center flex-col items-center ">
              <img src="/image.svg " className="w-2/12 " />
              <text>
                Add Image
              </text>

            </TwcssDiv>
          </TwcssDiv>

        </TwcssDiv>

      </TwcssDiv>
      {/* col for product's details */}
      <TwcssDiv className="bg-blue-100 col-span-3">2st col</TwcssDiv>
    </div>
  )
}

export default Home
