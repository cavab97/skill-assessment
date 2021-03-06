import type { NextPage } from 'next'
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import TwcssDiv from '../components/div/tailwindcss'
import TwcssInput from '../components/input/tailwindcss'
import TwcssText from '../components/text/tailwindcss'

import TwcssButton from '../components/button/tailwindcss'
import ActiveButton from '../components/styleCondition/galleryButton'
import ActiveButtonCategory from '../components/styleCondition/galleryCategoryButton'
import ConditionActiveButton from '../components/styleCondition/ConditionButton'
//all text
import * as All from '../public/property/font'


import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { galleryDataState, categoryDataState } from "../module/galleryState";
import { ALL } from 'dns';
const Home: NextPage = () => {
  // const galleryButtons:[] = [{ name: "Image Gallery", active: false }, { name: "Preview", active: false }];

  //gallery data
  const [galleryButton, setGalleryButton] = useState<any>([{ name: "Image Gallery", active: true }, { name: "Preview", active: false }]);
  const [gallery, setGallery] = useState<any>(null);
  //category data
  const [categoryButton, setCategoryButton] = useState<any>([{ name: "Collectibles", active: true }, { name: "Accessories", active: false }, { name: "T-Shirts", active: false }]);
  //condition data
  const [conditionButton, setConditionButton] = useState<any>([{ name: "Bad", active: true }, { name: "Fair", active: false }, { name: "Good", active: false }, { name: "New", active: false }]);
  const [prevIndex, setPrevIndex] = useState<number>(-1)
  const [descriptionStringLength, setDescriptionStringLength] = useState<any>("")

  //image file ref
  const buttonRef: any = React.useRef();


  interface IStaticState {
    gallery: galleryDataState;
  }

  const onFileChangeCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*Selected files data can be collected here.*/

    if (e.target.files && e.target.files[0]) {
      setGallery(URL.createObjectURL(e.target.files[0]));
    }

  };

  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    buttonRef.current.click();
  }
  // reusable component for loop selectable button
  const buttonStyleUpdate = (tempData: any, index: number, setTempData: Dispatch<SetStateAction<any>>) => {
    let temp: any = tempData;
    temp.map((i: any, ind: number) => {
      if (ind == index) {
        i.active = true
      } else {
        i.active = false
      }
    })
    console.log(temp)
    setTempData([...temp])
  }


  return (
    <div className="grid desktopXL:grid-cols-8 desktop:grid-cols-8 laptop:grid-cols-8 mobile:grid-row-8 desktop:gap-3 desktopXL:gap-3  laptop:gap-3  mobile:gap-1  body desktopXL:fixed desktop:fixed laptop:fixed mobile:relative bg-white mobile:h-4/6" >
      {/* col for product's image gallery & preview */}
      <TwcssDiv className=" col-span-4 border-r-1 border-x-zinc-600 flex justify-center">
        {/* div for product's image gallery & preview */}
        <TwcssDiv className="text-center desktop:w-3/4 desktopXL:w-3/4 laptop:w-3/4 mobile:w-full ">
          <div className=" justify-start border-b-2	desktop:hidden desktopXL:hidden laptop:hidden mobile:flex pl-5 p-3">
            <text>
              Add a Product
            </text>
          </div>
          {/* div for product's image gallery & preview button Mobile*/}
          <TwcssDiv className="desktop:block desktopXL:block laptop:block mobile:flex place-content-center	">
            {/* div for product's image gallery & preview button */}
            <TwcssDiv className="flex justify-between  mobile:w-11/12">
              {galleryButton.map((i: galleryDataState, index: any) => {
                return <TwcssButton
                  onClick={() => buttonStyleUpdate(galleryButton, index, setGalleryButton)}
                  className={ActiveButton(i.active)} key={i.name}>
                  {i.name}
                </TwcssButton>
              })}
            </TwcssDiv>
          </TwcssDiv>
          {/* div for add image */}
          <TwcssDiv className="flex desktop:h-2/5 desktopXL:h-2/4 laptop:h-2/4 mobile:h-2/4 justify-center">
            <TwcssDiv className="bg-white p-1 w-full addImgContainer border-2	border-black desktop:h-full desktopXL:h-full laptop:h-full mobile:h-3/4 flex justify-center items-center mobile:w-2/6	desktopXL:w-full	 desktop:w-full laptop:w-full">
              {gallery != null ? <img src={gallery} className="w-2/12 " />
                : <TwcssDiv className="align-middle flex justify-center flex-col items-center ">
                  <img src="/image.svg " className="desktop:w-2/12 desktopXL:w-2/12 laptop:w-2/12 mobile:w-3/12 " />
                  <TwcssText className="text-sm mobile:pt-1">
                    {All.ADD_IMAGE}
                  </TwcssText>
                </TwcssDiv>}
            </TwcssDiv>
          </TwcssDiv>

          <TwcssDiv className="desktopXL:mt-12 desktop:mt-12 laptop:mt-12 mobile:mt-2 desktopXL:w-4/4 desktop:w-4/4 laptop:w-4/4 mobile:h-1/4 bg-white">
            <TwcssText className="text-xs text-gray-400">
              You may upload up to 5 images <span className=" desktopXL:contents desktop:contents laptop:contents mobile:hidden">(including thumbnail)</span>
              <br />           Supported file types:jepg,jpg,png
            </TwcssText>
          </TwcssDiv>
        </TwcssDiv>
      </TwcssDiv>

      {/* col for product's details */}
      <TwcssDiv className="bg-white col-span-4  desktop:mt-9 desktopXL:mt-9 laptop:mt-9 mobile:mt-0 desktopXL:border-l-4	 desktop:border-l-4 laptop:border-l-4 mobile:borderRightHidden  desktopXL:overflow-auto	desktop:overflow-auto laptop:overflow-auto mobile:unscrollable desktopXL:h-3/6	desktop:h-3/6	 laptop:h-3/6	 mobile:h-full">
        {/* div for product's input */}
        <TwcssDiv className="m flex justify-center items-center flex-col m-6	">
          {/* S product Name */}
          <TwcssDiv className="p-1 flex flex-col w-5/6">
            <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
              {All.PRODUCT_NAME} <text className="importantMark">*</text>
            </TwcssText>
            <TwcssInput className="textInput mt-4	placeholder:text-gray-500" placeholder="Name your listing. Keep it short and sweet" />
          </TwcssDiv>
          {/* Category and thumbnail*/}
          <TwcssDiv className="p-1 flex flex-row w-5/6 mt-8	">
            {/* S Category */}
            <TwcssDiv className=" flex flex-col  desktopXL:w-4/6	 desktop:w-4/6	 laptop:w-4/6	 mobile:w-full  ">
              <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
                {All.CATEGORY} <text className="importantMark">*</text>
              </TwcssText>
              <TwcssDiv className=" flex flex-row  justify-between bg-white mt-4" >
                {categoryButton.map((i: categoryDataState, index: number) => {
                  return <TwcssButton
                    onClick={() => buttonStyleUpdate(categoryButton, index, setCategoryButton)}
                    className={ActiveButtonCategory(i.active)} key={i.name}>
                    <TwcssText className="standardText">
                      {i.name.toString()}
                    </TwcssText>
                  </TwcssButton>

                })}
              </TwcssDiv>
            </TwcssDiv>
            {/* S Thumbnail for web  */}
            <TwcssDiv className="pl-8 flex flex-col w-3/6 desktopXL:block	 desktop:block	 laptop:block	 mobile:hidden ">
              <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
                {All.THUMBNAIL_IMAGE} <text className="importantMark">*</text>
              </TwcssText>
              <input type="file" ref={buttonRef} className="textAddHideInput " onChange={onFileChangeCapture}>

              </input>
              <button className="tablet:w-10/12 desktop:w-8/12 desktopXL:w-11/12 laptop:w-11/12" style={{ backgroundColor: "black", display: 'flex', justifyContent: "center", alignItems: "center", padding: 2, marginTop: 10 }}
                onClick={onBtnClick}>
                <img src="/imageWhite.svg " className="mobile:w-2/12 desktop:w-2/12 desktopXL:w-2/12 laptop:w-2/12  p-1 " />
                <TwcssText className="p-1 standardWhiteText">
                  {All.ADD_IMAGE}</TwcssText>
              </button>

            </TwcssDiv>
          </TwcssDiv>

          {/*S Brand (up to 2) */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8">
            <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
              {All.BRAND_UP} <text className="importantMark">*</text>
            </TwcssText>

            <div className="input-field">
              <input id="input-text-field" className="textInputBrand mt-4 w-full " type="text" placeholder=" "></input>
              <label htmlFor="input-text-field">
                <span className="first-letter standardTextPlaceholder">{All.BRAND_UP_PLACEHOLDER_1}</span>
                <span className="second-letter standardTextPlaceholder"> {All.BRAND_UP_PLACEHOLDER_2}</span>
              </label>
            </div>
            <TwcssDiv className="p-1 flex flex-row desktop:w-2/5 desktopXL:w-2/5 laptop:w-2/5 mobile:w-4/5">
              <TwcssText className="textBrandEg" >
                Eg.
              </TwcssText>
              <TwcssDiv className="justify-between flex flex-row ml-2 desktop:w-11/12 desktopXL:w-8/12	mobile:w-10/12">
                <TwcssDiv className="bg-white border-gray-500 border flex flex row justify-center items-center">
                  <TwcssText className="desktop:p-1 desktopXL:p-1 laptop:p-1 mobile:p-2 ml-2 text-xs text-gray-500" >
                    Popmart
                  </TwcssText>
                  <img src="/errorMark.svg " className="w-3 mr-2" />
                </TwcssDiv>
                <TwcssDiv className="bg-white border-gray-500 border flex flex row justify-center items-center">
                  <TwcssText className="desktop:p-1 desktopXL:p-1 laptop:p-1 mobile:p-2 ml-2 text-xs text-gray-500" >
                    Kaws
                  </TwcssText>
                  <img src="/errorMark.svg " className="w-3 mr-2 ml-2" />
                </TwcssDiv>
              </TwcssDiv>
            </TwcssDiv>
          </TwcssDiv>

          {/* S Thumbnail and Available Qty for mobile  */}
          <TwcssDiv className="p-1 flex flex-row w-5/6 mt-8 desktopXL:hidden	 desktop:hidden	 laptop:hidden	 mobile:flex">
            {/* S Thumbnail  for mobile */}
            <TwcssDiv className="flex flex-col w-3/6">
              <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
                {All.THUMBNAIL_IMAGE} <text className="importantMark">*</text>
              </TwcssText>
              <input type="file" ref={buttonRef} className="textAddHideInput" onChange={onFileChangeCapture}>
              </input>
              <button className="mobile:mt-2 mobile:w-11/12 tablet:w-10/12 w-11/12" style={{ backgroundColor: "black", display: 'flex', justifyContent: "center", alignItems: "center", padding: 5 }}
                onClick={onBtnClick}>
                <img src="/imageWhite.svg" className=" desktop:w-2/12 desktopXL:w-2/12 tablet:w-2/12 laptop:w-2/12 mobile:w-3/12 p-1 " />
                <TwcssText className="standardWhiteFontMobile">
                  {All.ADD_IMAGE}
                </TwcssText>
              </button>
            </TwcssDiv>

            {/*S Available Qty for mobile */}
            <TwcssDiv className="pl-1 flex flex-col w-3/6 ">
              <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
                {All.AVAILABLE_QTY}  <text className="importantMark">*</text></TwcssText>
              <TwcssInput className="textInput mt-4 placeholder:text-gray-500" placeholder="Enter available quantity" />
            </TwcssDiv>
          </TwcssDiv>

          {/*S Description */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8">
            <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm "} >
              {All.DESCRIPTION} <text className="importantMark">*</text>
            </TwcssText>
            <input className="textInput mt-4 placeholder:text-gray-500" placeholder={All.DESCRIPTION_PLACEHOLDER} onChange={(e: any) => setDescriptionStringLength(e.target.value)} value={descriptionStringLength} />
            <label className={"standardGreyText flex justify-end"}>{descriptionStringLength.length + "/200"}</label>
          </TwcssDiv>

          {/*S Available Qty for web*/}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8 desktopXL:block	 desktop:block	 laptop:block	 mobile:hidden">
            <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm placeholder:text-gray-400"} >
              {All.AVAILABLE_QTY}  <text className="importantMark">*</text></TwcssText>
            <TwcssInput className="textInput mt-4 placeholder:text-gray-500" placeholder={All.AVAILABLE_QTY_PLACEHOLDER} />
          </TwcssDiv>

          {/*S Condition */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8">
            <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
              {All.CONDITION} <text className="importantMark">*</text>
            </TwcssText>
            <TwcssDiv className="flex flex-row desktop:w-5/6 laptop:w-5/6 desktopXL:w-5/6 mobile:w-6/6 justify-between bg-white mt-4">
              {conditionButton.map((i: categoryDataState, index: any) => {
                return <TwcssButton
                  onClick={() => buttonStyleUpdate(conditionButton, index, setConditionButton)}
                  className={ConditionActiveButton(i.active)} key={i.name}>
                  <TwcssText className="standardText" >
                    {i.name}
                  </TwcssText>
                </TwcssButton>
              })}
            </TwcssDiv>
          </TwcssDiv>

          {/*  Season and Retail */}
          <TwcssDiv className="p-1 flex flex-row w-5/6	bg-white	mt-8">
            {/*  */}
            {/* 1 */}
            <TwcssDiv className=" flex flex-col w-5/6 ">
              {/* 2 */}
              <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
                {All.SEASON} <text className="importantMark">*</text>
              </TwcssText>
              <TwcssDiv className="p-1 flex flex-row w-3/6 justify-between bg-white">
                <input className="textInput mt-4 placeholder:text-gray-500" placeholder="SS20" />
              </TwcssDiv>
            </TwcssDiv>
            {/*S Retail  */}
            {/* 1 */}
            <TwcssDiv className=" flex flex-col w-3/6 ">
              {/* 2 */}
              <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
                {All.RETAIL} <text className="importantMark">*</text>
              </TwcssText>
              <TwcssDiv className="p-1 flex flex-row w-3/6 justify-between bg-white">
                <span className="textCurrency pt-4 bg-white mobile:absolute ">S$</span>
                <input className="textInput mt-4 placeholder:text-gray-500 mobile:pl-5" placeholder="400" />
                {/* <span className=" textInput mt-4">S$<input className="" type="text" name="currency" /></span> */}
              </TwcssDiv>
            </TwcssDiv>
          </TwcssDiv>
          {/*S Authenticity */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8">
            <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
              {All.AUTHENTICITY}
            </TwcssText>
            <TwcssText className="standardText mt-4">100%</TwcssText>
          </TwcssDiv>
          {/*S Declaration */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8 ">
            <TwcssText className={"font-bold mobile:text-xs	desktop:text-sm laptop:text-sm desktop:text-sm"} >
              {All.DECLARATION} <text className="importantMark">*</text>
            </TwcssText>
            <TwcssDiv className="standardText mt-4">
              <input type="checkbox" className="standardText "></input>
              <TwcssText className="standardText pl-1"> {All.DECLARATION_WORD}</TwcssText>
            </TwcssDiv>
          </TwcssDiv>

          {/*S inicates required */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 ">
            <TwcssDiv className="standardText flex mt-2 desktop:justify-start desktopXL:justify-start laptop:justify-start mobile:justify-end">
              <text className="importantMark">*</text><TwcssText className="standardText"> inicates required</TwcssText>
            </TwcssDiv>
          </TwcssDiv>

          {/*S Cancel and Publish button */}
          <TwcssDiv className="p-1 flex flex-col w-5/6">

            <TwcssDiv className='flex desktop:justify-end desktopXL:justify-end laptop:justify-end mobile:justify-center flex-row  '>
              <button className='p-1 cancelBtn mr-2 desktopXL:w-1/6 desktop:w-1/6 laptop:w-1/6 mobile:w-2/6'>
                <TwcssText className="standardText">
                  Cancel
                </TwcssText>
              </button>
              <button className='p-1 cancelBtn mr-2  desktopXL:w-1/6 desktop:w-1/6 laptop:w-1/6 mobile:w-2/6 publishBtn desktopXL:bg-slate-500 desktop:bg-slate-500 laptop:bg-slate-500 mobile:bg-black'>
                <TwcssText className="standardWhiteText">
                  Publish
                </TwcssText>
              </button>
            </TwcssDiv>
          </TwcssDiv>
        </TwcssDiv>
      </TwcssDiv>
    </div >
  )
}

export default Home
