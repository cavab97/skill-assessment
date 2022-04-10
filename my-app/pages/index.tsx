import type { NextPage } from 'next'
import TwcssDiv from '../components/div/tailwindcss'
import TwcssInput from '../components/input/tailwindcss'
import TwcssText from '../components/text/tailwindcss'

import TwcssButton from '../components/button/tailwindcss'
import ActiveButton from '../components/styleCondition/galleryButton'
import ActiveButtonCategory from '../components/styleCondition/galleryCategoryButton'

import { textFont, textBrandFont } from '../components/text/tailwindcss/secondColFontStyle'

import React, { useEffect, useState } from 'react';

import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { galleryDataState, categoryDataState } from "../models/galleryState";
const Home: NextPage = () => {
  // const galleryButtons:[] = [{ name: "Image Gallery", active: false }, { name: "Preview", active: false }];

  const [galleryButton, setGalleryButton] = useState<any>([{ name: "Image Gallery", active: true }, { name: "Preview", active: false }]);
  const [gallery, setGallery] = useState<any>(null);

  const [categoryButton, setCategoryButton] = useState<any>([{ name: "Collectibles", active: true }, { name: "Accessories", active: false }, { name: "Accessories", active: false }]);

  const [conditionButton, setConditionButton] = useState<any>([{ name: "Bad", active: true }, { name: "Fair", active: false }, { name: "Good", active: false }, { name: "New", active: false }]);
  const [prevIndex, setPrevIndex] = useState<number>(-1)
  const [prevCategoryIndex, setPrevCategoryIndex] = useState<number>(-1)

  const [prevConditionIndex, setPrevConditionIndex] = useState<number>(-1)
  const buttonRef: any = React.useRef();
  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

  interface IStaticState {
    gallery: galleryDataState;
  }
  // const handleChange = (e: any) => {
  //   // let formData = new FormData();
  //   // // formData.append("data", JSON.stringify(content));
  //   // formData.append("profile_picture", e.target.files[0]);
  //   // console.log(e)
  //   console.log(e.target.files);

  // };
  const onFileChangeCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*Selected files data can be collected here.*/
    let formData = new FileReader();

    // formData.append("profile_picture", e.target.files[0]);
    // formData.onload = (e) => {
    //   setGallery({ image: e.target.result });
    // };
    // formData.readAsDataURL(event.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setGallery(URL.createObjectURL(e.target.files[0]));
    }
    // formData.readAsDataURL(e.target.files[0]);
    // console.log(formData);
  };

  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    buttonRef.current.click();
  }
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
            {gallery != null ? <img src={gallery} className="w-2/12 " />
              : <TwcssDiv className="align-middle flex justify-center flex-col items-center ">
                <img src="/image.svg " className="w-2/12 " />
                <TwcssText className="text-sm	">
                  Add Image
                </TwcssText>
              </TwcssDiv>}

          </TwcssDiv>
          <TwcssText className="text-xs	">
            You May Upload up to 5 images (including thumbnail)
            <br />           Supported file types:jepg,jpg,png
          </TwcssText>
        </TwcssDiv>

      </TwcssDiv>
      {/* col for product's details */}
      <TwcssDiv className="bg-white col-span-3">
        {/* div for product's input */}
        <TwcssDiv className="m flex justify-center items-center flex-col m-7	">
          {/* product Name */}
          <TwcssDiv className="p-1 flex flex-col w-4/6">
            <TwcssText className={textFont} >
              Product Name <text className="importantMark">*</text>
            </TwcssText>
            <TwcssInput className="textInput" placeholder="Name your listing. Keep it short and sweet" />
          </TwcssDiv>
          {/* Category and thumbnail*/}
          <TwcssDiv className="p-1 flex flex-row w-4/6	bg-white	">
            {/* Category */}
            <TwcssDiv className=" flex flex-col w-4/6 ">
              <TwcssText className={textFont} >
                Category<text className="importantMark">*</text>
              </TwcssText>
              <TwcssDiv className="p-1 flex flex-row w-3/6 justify-between bg-white">
                {categoryButton.map((i: categoryDataState, index: any) => {
                  return <TwcssButton onClick={() => {
                    let temp = [...categoryButton];
                    if (prevCategoryIndex == -1) {
                      if (index == 0) {
                        temp[0].active = true;
                        temp[1].active = false;
                      } else {
                        temp[1].active = true;
                        temp[0].active = false;
                      }
                    }
                    else if (prevCategoryIndex != index) {
                      temp[index].active = true;
                      temp[prevCategoryIndex].active = false;
                    }
                    setPrevCategoryIndex(index)
                    setCategoryButton(temp)
                  }} className={ActiveButtonCategory(i.active)}>
                    {i.name}
                  </TwcssButton>
                })}

              </TwcssDiv>

            </TwcssDiv>
            {/* Thumbnail  */}
            <TwcssDiv className=" flex flex-col w-3/6 ">
              <TwcssText className={textFont} >
                Thumbnail Image<text className="importantMark">*</text>
              </TwcssText>
              <input type="file" ref={buttonRef} className="textAddHideInput" onChange={onFileChangeCapture}>

              </input>
              <button className="textAddImageBtn"
                onClick={onBtnClick}>
                <TwcssText className="textFontAddImageBtn">
                  Add Image
                </TwcssText>
              </button>

            </TwcssDiv>
          </TwcssDiv>

          {/* Brand (up to 2) */}
          <TwcssDiv className="p-1 flex flex-col w-4/6">
            <TwcssText className={textFont} >
              Brand (up to 2)    <text className="importantMark">*</text>        </TwcssText>
            <TwcssInput className="textInputBrand" placeholder="Add a keyword and press Enter" />

            <TwcssDiv className="p-1 flex flex-row brandEgDiv justify-between">
              <TwcssText className="textBrandEg" >
                Eg.
              </TwcssText>
              <TwcssDiv className="bg-gray-50	border-gray-500 border">

                <TwcssText className="textBrandEg" >
                  Popmart
                </TwcssText>
                <TwcssText className="textBrandEg" >
                  x                </TwcssText>
              </TwcssDiv>
              <TwcssDiv className="bg-gray-50	border-gray-500 border">
                <TwcssText className="textBrandEg" >
                  Kaws
                </TwcssText>
                <TwcssText className="textBrandEg" >
                  x                </TwcssText>
              </TwcssDiv>
            </TwcssDiv>

          </TwcssDiv>
          {/* Description */}
          <TwcssDiv className="p-1 flex flex-col w-4/6">
            <TwcssText className={textFont} >
              Description<text className="importantMark">*</text>
            </TwcssText>
            <TwcssInput className="textInput" placeholder="Name your listing. Keep it short and sweet" />
          </TwcssDiv>
          {/* Available Qty*/}
          <TwcssDiv className="p-1 flex flex-col w-4/6">
            <TwcssText className={textFont} >
              Available Qty  <text className="importantMark">*</text>          </TwcssText>
            <TwcssInput className="textInput" placeholder="Name your listing. Keep it short and sweet" />
          </TwcssDiv>
          {/* Condition */}
          <TwcssDiv className="p-1 flex flex-col w-4/6 ">
            <TwcssText className={textFont} >
              Condition<text className="importantMark">*</text>
            </TwcssText>
            <TwcssDiv className="flex flex-row w-3/6 justify-between bg-white">
              {conditionButton.map((i: categoryDataState, index: any) => {
                return <TwcssButton onClick={() => {
                  let temp = [...conditionButton];
                  if (prevConditionIndex == -1) {
                    if (index == 0) {
                      temp[0].active = true;
                      temp[1].active = false;
                    } else {
                      temp[1].active = true;
                      temp[0].active = false;
                    }
                  }
                  else if (prevConditionIndex != index) {
                    temp[index].active = true;
                    temp[prevConditionIndex].active = false;
                  }
                  setPrevConditionIndex(index)
                  setConditionButton(temp)
                }} className={ActiveButtonCategory(i.active)}>
                  {i.name}
                </TwcssButton>
              })}

            </TwcssDiv>

          </TwcssDiv>
          {/*  Season and */}
          <TwcssDiv className="p-1 flex flex-row w-4/6	bg-white	">
            {/*  */}
            <TwcssDiv className=" flex flex-col w-4/6 ">
              <TwcssText className={textFont} >
                Season<text className="importantMark">*</text>
              </TwcssText>
              <TwcssDiv className="p-1 flex flex-row w-3/6 justify-between bg-white">

                <input className="textInput">

                </input>
              </TwcssDiv>

            </TwcssDiv>
            {/* Retail  */}
            <TwcssDiv className=" flex flex-col w-3/6 ">
              <TwcssText className={textFont} >
                Retail<text className="importantMark">*</text>
              </TwcssText>
              <input className="textInput">

              </input>

            </TwcssDiv>
          </TwcssDiv>
          {/* product Name */}
          <TwcssDiv className="p-1 flex flex-col w-4/6">
            <TwcssText className={textFont} >
              Authenticity
            </TwcssText>
            <TwcssText className={textFont}>100%</TwcssText>
          </TwcssDiv>
        </TwcssDiv>
      </TwcssDiv>
    </div>
  )
}

export default Home
