import React, { useState, useContext } from 'react';
import { UserContext } from './Context/Context';

const Painel = () => {
   const {
      luz1,
      luz2,
      luz3,
      luz4,
      luz5,
      luz6,
      luz7,
      luz8,
      luz9,
      textoPainelState,
      setTextoPainelState,
      setLuz1,
      setLuz2,
      setLuz3,
      setLuz4,
      setLuz5,
      setLuz6,
      setLuz7,
      setLuz8,
      setLuz9,
   } = useContext(UserContext);
   console.log('Sou eu negro lindo');
   return (
      <div className="w-96 h-72  bg-black/30 shadow-md shadow-black border">
         <h1 className="bg-black text-white text-center flex items-center justify-center mt-2 mb-3 border rounded w-6/12 h-10 m-auto">
            Painel de Controle
         </h1>
         <div className=" m-auto w-8/12 grid grid-rows-3 grid-cols-3 gap-1 ">
            <input
               className={
                  luz1 === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="1"
               onClick={() => {
                  setLuz1(luz1 === false ? true : false);
               }}
            />
            <input
               className={
                  luz2 === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="2"
               onClick={() => {
                  setLuz2(luz2 === false ? true : false);
               }}
            />
            <input
               className={
                  luz3 === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="3"
               onClick={() => setLuz3(luz3 === false ? true : false)}
            />
            <input
               className={
                  luz4 === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="4"
               onClick={() => {
                  setLuz4(luz4 === false ? true : false);
               }}
            />
            <input
               className={
                  luz5 === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="5"
               onClick={() => {
                  setLuz5(luz5 === false ? true : false);
               }}
            />
            <input
               className={
                  luz6 === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="6"
               onClick={() => {
                  setLuz6(luz6 === false ? true : false);
               }}
            />
            <input
               className={
                  luz7 === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="7"
               onClick={() => {
                  setLuz7(luz7 === false ? true : false);
               }}
            />
            <input
               className={
                  luz8 === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="8"
               onClick={() => {
                  setLuz8(luz8 === false ? true : false);
               }}
            />
            <input
               className={
                  luz9 === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="9"
               onClick={() => {
                  setLuz9(luz9 === false ? true : false);
               }}
            />
         </div>
         <div className="flex items-center justify-center w-7/12 m-auto pt-5">
            <input
               className={
                  textoPainelState === false
                     ? 'w-16 h-10  m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer'
                     : 'w-16 h-10  m-auto border-2 border-blue-600 bg-blue-900  text-white font-bold rounded cursor-pointer'
               }
               type="button"
               value="PLACA"
               onClick={() => {
                  setTextoPainelState(
                     textoPainelState === false ? true : false
                  );
               }}
            />
         </div>
         <p className="text-center font-semibold text-sm">
            Use o painel para controlar as luzes do prédio
         </p>
      </div>
   );
};

export default Painel;
