import type { NextPage } from 'next'
import TwcssDiv from '../components/div/tailwindcss'
import TwcssInput from '../components/input/tailwindcss'
import TwcssText from '../components/text/tailwindcss'

import TwcssButton from '../components/button/tailwindcss'
import ActiveButton from '../components/styleCondition/galleryButton'
import ActiveButtonCategory from '../components/styleCondition/galleryCategoryButton'
import ConditionActiveButton from '../components/styleCondition/conditionButton'
import { textFont, textBrandFont } from '../components/text/tailwindcss/secondColFontStyle'

import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';



import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { galleryDataState, categoryDataState } from "../models/galleryState";
const Home: NextPage = () => {
  // const galleryButtons:[] = [{ name: "Image Gallery", active: false }, { name: "Preview", active: false }];

  const [galleryButton, setGalleryButton] = useState<any>([{ name: "Image Gallery", active: true }, { name: "Preview", active: false }]);
  const [gallery, setGallery] = useState<any>(null);

  const [categoryButton, setCategoryButton] = useState<any>([{ name: "Collectibles", active: true }, { name: "Accessories", active: false }, { name: "T-Shirts", active: false }]);

  const [conditionButton, setConditionButton] = useState<any>([{ name: "Bad", active: true }, { name: "Fair", active: false }, { name: "Good", active: false }, { name: "New", active: false }]);
  const [prevIndex, setPrevIndex] = useState<number>(-1)
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
    <div className="grid grid-cols-8 gap-3 body md:h-screen fixed " >
      {/* col for product's image gallery & preview */}
      <TwcssDiv className=" col-span-4 border-r-1 border-x-zinc-600 flex justify-center ">
        {/* div for product's image gallery & preview */}
        <TwcssDiv className="text-center w-3/4  ">
          {/* div for product's image gallery & preview button */}
          <TwcssDiv className="bg-slate-800	flex justify-between ">
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
          <TwcssDiv className="bg-white p-1 w-full addImgContainer border-2	border-black h-2/4 flex justify-center items-center	">
            {gallery != null ? <img src={gallery} className="w-2/12 " />
              : <TwcssDiv className="align-middle flex justify-center flex-col items-center ">
                <img src="/image.svg " className="w-2/12 " />
                <TwcssText className="text-sm	">
                  Add Image
                </TwcssText>
              </TwcssDiv>}

          </TwcssDiv>
          <TwcssDiv className="mt-12">
            <TwcssText className="text-xs ">
              You May Upload up to 5 images (including thumbnail)
              <br />           Supported file types:jepg,jpg,png
            </TwcssText>
          </TwcssDiv>

        </TwcssDiv>

      </TwcssDiv>
      {/* col for product's details */}
      <TwcssDiv className="bg-white col-span-4 scrollable mt-9 borderRight">
        {/* div for product's input */}
        <TwcssDiv className="m flex justify-center items-center flex-col m-6	">
          {/* S product Name */}
          <TwcssDiv className="p-1 flex flex-col w-5/6">
            <TwcssText className={textFont} >
              Product Name <text className="importantMark">*</text>
            </TwcssText>
            <TwcssInput className="textInput mt-4	" placeholder="Name your listing. Keep it short and sweet" />
          </TwcssDiv>
          {/* Category and thumbnail*/}
          <TwcssDiv className="p-1 flex flex-row w-5/6 mt-8	">
            {/* S Category */}
            <TwcssDiv className=" flex flex-col w-4/6 ">
              <TwcssText className={textFont} >
                Category <text className="importantMark">*</text>
              </TwcssText>
              <TwcssDiv className=" flex flex-row  justify-between bg-white mt-4" >
                {categoryButton.map((i: categoryDataState, index: number) => {

                  return <TwcssButton
                    onClick={() => buttonStyleUpdate(categoryButton, index, setCategoryButton)}
                    className={ActiveButtonCategory(i.active)}>
                    <TwcssText className="standardText">
                      {i.name.toString()}
                    </TwcssText>
                  </TwcssButton>

                })}
              </TwcssDiv>
            </TwcssDiv>
            {/* S Thumbnail  */}
            <TwcssDiv className="pl-8 flex flex-col w-3/6 ">
              <TwcssText className={textFont} >
                Thumbnail Image <text className="importantMark">*</text>
              </TwcssText>
              <input type="file" ref={buttonRef} className="textAddHideInput" onChange={onFileChangeCapture}>

              </input>
              <button className="textAddImageBtn mt-4"
                onClick={onBtnClick}>
                <TwcssText className="textFontAddImageBtn">
                  Add Image
                </TwcssText>
              </button>

            </TwcssDiv>
          </TwcssDiv>

          {/*S Brand (up to 2) */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8">
            <TwcssText className={textFont} >
              Brand (up to 2) <text className="importantMark">*</text>
            </TwcssText>

            <div className="input-field">
              <input id="input-text-field" className="textInputBrand mt-4" type="text" placeholder=" "></input>
              <label for="input-text-field">
                <span className="first-letter standardText">Add a keyword and press</span>
                <span className="second-letter standardText"> Enter</span>

              </label>
            </div>
            <TwcssDiv className="p-1 flex flex-row brandEgDiv ">
              <TwcssText className="textBrandEg" >
                Eg.
              </TwcssText>
              <TwcssDiv className="justify-between flex flex row ml-2 brandEgPlaceholderBoxDiv">
                <TwcssDiv className="bg-gray-50	border-gray-500 border flex flex row justify-center items-center">
                  <TwcssText className="textBrandOption" >
                    Popmart
                  </TwcssText>
                  <img src="/errorMark.svg " className="w-3 ml-2" />

                </TwcssDiv>

                <TwcssDiv className="bg-gray-50	border-gray-500 border flex flex row justify-center items-center">
                  <TwcssText className="textBrandOption" >
                    Kaws
                  </TwcssText>
                  <img src="/errorMark.svg " className="w-3 ml-2" />

                </TwcssDiv>
              </TwcssDiv>
            </TwcssDiv>

          </TwcssDiv>
          {/*S Description */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8">
            <TwcssText className={textFont} >
              Description<text className="importantMark">*</text>
            </TwcssText>
            <TwcssInput className="textInput mt-4" placeholder="Add more information about the product" />
          </TwcssDiv>
          {/*S Available Qty*/}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8">
            <TwcssText className={textFont} >
              Available Qty  <text className="importantMark">*</text></TwcssText>
            <TwcssInput className="textInput mt-4" placeholder="Enter available quantity" />
          </TwcssDiv>
          {/*S Condition */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8">
            <TwcssText className={textFont} >
              Condition <text className="importantMark">*</text>
            </TwcssText>
            <TwcssDiv className="flex flex-row w-5/6 justify-between bg-white mt-4">
              {conditionButton.map((i: categoryDataState, index: any) => {
                return <TwcssButton
                  onClick={() => buttonStyleUpdate(conditionButton, index, setConditionButton)}
                  className={ConditionActiveButton(i.active)}>
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
            <TwcssDiv className=" flex flex-col w-5/6 ">
              <TwcssText className={textFont} >
                Season <text className="importantMark">*</text>
              </TwcssText>
              <TwcssDiv className="p-1 flex flex-row w-3/6 justify-between bg-white">

                <input className="textInput mt-4">

                </input>
              </TwcssDiv>

            </TwcssDiv>
            {/*S Retail  */}
            <TwcssDiv className=" flex flex-col w-3/6 ">
              <TwcssText className={textFont} >
                Retail <text className="importantMark">*</text>
              </TwcssText>
              <input className="textInput mt-4">

              </input>

            </TwcssDiv>
          </TwcssDiv>
          {/*S Authenticity */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8">
            <TwcssText className={textFont} >
              Authenticity
            </TwcssText>
            <TwcssText className="standardText mt-4">100%</TwcssText>
          </TwcssDiv>
          {/*S Declaration */}
          <TwcssDiv className="p-1 flex flex-col w-5/6 mt-8 ">
            <TwcssText className={textFont} >
              Declaration <text className="importantMark">*</text>
            </TwcssText>
            <TwcssDiv className="standardText mt-4">
              <input type="checkbox" className="standardText"></input>
              <TwcssText className="standardText pl-1"> I hereby declare that my item is 100% authentic and in the original packaging. In the event that any information given in this application proves to be false or incorrect, I shall be responsible for the consequences.</TwcssText>
            </TwcssDiv>
          </TwcssDiv>

          {/*S inicates required */}
          <TwcssDiv className="p-1 flex flex-col w-5/6">

            <TwcssDiv className="standardText mt-2">
              <text className="importantMark">*</text><TwcssText className="standardText"> inicates required</TwcssText>
            </TwcssDiv>
          </TwcssDiv>

          {/*S Cancel and Publish button */}
          <TwcssDiv className="p-1 flex flex-col w-5/6">

            <TwcssDiv className='flex justify-end flex-row  '>
              <button className='p-1 cancelBtn mr-2 w-1/6'>
                <TwcssText className="standardText">
                  Cancel
                </TwcssText>
              </button>
              <button className='p-1 cancelBtn mr-2 w-1/6 publishBtn'>
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
