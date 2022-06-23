import { useContext } from 'react';
import { UserContext } from './Context/Context';
import NomePredio from './NomePredio';

const Predio = () => {
   //Context
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
   } = useContext(UserContext);

   return (
      <div className="flex flex-col mt-6 border w-72">
         <NomePredio />
         <div className="border border-black w-12/12 h-96 grid grid-rows-3 grid-cols-3 gap-10 p-2 bg-slate-400">
            <div
               className={
                  luz1 === false
                     ? 'border border-black bg-black text-white'
                     : 'border border-black/30 bg-yellow-300 text-white shadow-lg shadow-yellow-400'
               }
            >
               1
            </div>
            <div
               className={
                  luz2 === false
                     ? 'border border-black bg-black text-white'
                     : 'border border-black/30 bg-yellow-300 text-white shadow-lg shadow-yellow-400'
               }
            >
               2
            </div>
            <div
               className={
                  luz3 === false
                     ? 'border border-black bg-black text-white'
                     : 'border border-black/30 bg-yellow-300 text-white shadow-lg shadow-yellow-400'
               }
            >
               3
            </div>
            <div
               className={
                  luz4 === false
                     ? 'border border-black bg-black text-white'
                     : 'border border-black/30 bg-yellow-300 text-white shadow-lg shadow-yellow-400'
               }
            >
               4
            </div>
            <div
               className={
                  luz5 === false
                     ? 'border border-black bg-black text-white'
                     : 'border border-black/30 bg-yellow-300 text-white shadow-lg shadow-yellow-400'
               }
            >
               5
            </div>
            <div
               className={
                  luz6 === false
                     ? 'border border-black bg-black text-white'
                     : 'border border-black/30 bg-yellow-300 text-white shadow-lg shadow-yellow-400'
               }
            >
               6
            </div>
            <div
               className={
                  luz7 === false
                     ? 'border border-black bg-black text-white'
                     : 'border border-black/30 bg-yellow-300 text-white shadow-lg shadow-yellow-400'
               }
            >
               7
            </div>
            <div
               className={
                  luz8 === false
                     ? 'border border-black bg-black text-white'
                     : 'border border-black/30 bg-yellow-300 text-white shadow-lg shadow-yellow-400'
               }
            >
               8
            </div>
            <div
               className={
                  luz9 === false
                     ? 'border border-black bg-black text-white'
                     : 'border border-black/30 bg-yellow-300 text-white shadow-lg shadow-yellow-400'
               }
            >
               9
            </div>
         </div>
      </div>
   );
};

export default Predio;
