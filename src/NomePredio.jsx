import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './Context/Context';

const NomePredio = () => {
   const [painelColor, setPainelColor] = useState(false);

   useEffect(() => {
      setInterval(() => {
         changeColor();
      }, 1000);
   }, []);

   const { textoPainelState } = useContext(UserContext);

   function sorteiaNum(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
   }

   const changeColor = () => {
      switch (sorteiaNum(1, 6)) {
         case 1:
            setPainelColor('#a2d6f9');
            break;
         case 2:
            setPainelColor('#5c0099');
            break;
         case 3:
            setPainelColor('#03071e');
            break;
         case 4:
            setPainelColor('#fe6a86');
            break;
         case 5:
            setPainelColor('#28947f');
            break;
         default:
            setPainelColor('#630304');
      }
   };

   return (
      <div
         style={
            textoPainelState === true ? { backgroundColor: painelColor } : {}
         }
         className="w-full h-20 flex items-center justify-center text-2xl "
      >
         <h1
            className={
               textoPainelState === true
                  ? 'font-bold uppercase border border-black rounded p-1 bg-black  text-[#ffc600] drop-shadow-2xl'
                  : 'font-bold uppercase  rounded p-1 bg-black/30  text-black'
            }
         >
            Edifício Context
         </h1>
      </div>
   );
};

export default NomePredio;
