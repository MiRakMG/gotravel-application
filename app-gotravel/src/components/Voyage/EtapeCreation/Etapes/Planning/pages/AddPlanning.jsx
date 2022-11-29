import React, { useState } from 'react'
import useClickOutside from '../../../../../../Personalisation/ClickOutside'
import styles from './AddPlanning.module.scss'


export default function AddPlanning() {

  const [isPlanningOpen,setisPlanningOpen] = useState(false);
  let domNode = useClickOutside(() => { setisPlanningOpen(false);
   });

  return (
    <div>
        <button onClick={() => setisPlanningOpen(true)} className='border border-slate-300 p-2 rounded-lg text-slate-500 hover:text-slate-900 active:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300'>+ Ajouter un planning</button>
      <div
        className={`${styles.submenu_container} ${
          isPlanningOpen ? styles.submenu_container_active : ""
        }`}
      >
        <div 
          ref={domNode}
          className={`${styles.submenu} ${
            isPlanningOpen ? styles.submenu_active : ""
          }`}
        >
          <div>
            
          </div>
        </div>

      </div>

    </div>
  )
}
