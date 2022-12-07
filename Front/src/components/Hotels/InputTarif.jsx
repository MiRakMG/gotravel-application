import React, { useState } from "react";
import { Container } from "react-bootstrap";

function InputTarif() {
  const [inputList, setinputList]= useState([{firstName:'', categorie:''}]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);

  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, { typelogement:'', lastName:'', tarif:''}]);
  }
  return (
    <Container>
     <div >
       <div >   
            { 
            inputList.map( (x,i)=>{
              return(
              <div>
                <div className="py-4">
                    <label className="mt-3 h-6 text-sm font-normal leading-8 text-gray-500">Type de logements</label>
                        <div className="my-1 flex rounded border border-gray-200 bg-white p-1">
                            <input type="text"  name="typelogement" className="w-full appearance-none p-1 px-2 text-gray-800 outline-none" placeholder="Suites, Chambre Double..." onChange={ e=>handleinputchange(e,i)} />
                        </div>
               </div>
               <div>
                    <label className="mt-3 h-6 text-sm font-normal leading-8 text-gray-500">Catégorie</label>
                        <div className="my-1 flex rounded border border-gray-200 bg-white p-1">    
                            <input type="text"  name="categorie" className="w-full appearance-none p-1 px-2 text-gray-800 outline-none" placeholder="Single, Double..." onChange={ e=>handleinputchange(e,i) }/>
                        </div>
               </div>
               <div>
                    <label className="mt-3 h-6 text-sm font-normal leading-8 text-gray-500">Tarif</label>
                        <div className="my-1 flex rounded border border-gray-200 bg-white p-1">     
                            <input type="text"  name="tarif" className="w-full appearance-none p-1 px-2 text-gray-800 outline-none" onChange={ e=>handleinputchange(e,i) }/>
                        </div>
               </div>
               <div>
               {
                  inputList.length!==1 &&
                  <button className="cursor-pointer rounded-md py-2 px-5 mr-4 font-normal text-blue-900 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white" onClick={()=> handleremove(i)}>Effacer</button>
               }
               { inputList.length-1===i &&
               <button className="cursor-pointer rounded-md bg-blue-900 py-2 px-5 text-sm font-normal text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white" onClick={ handleaddclick}>+ Plus</button>
               }
               </div>
            </div>
              );
             } )} 

               
       </div>
     </div>
    </Container>
  );
}
export default InputTarif;