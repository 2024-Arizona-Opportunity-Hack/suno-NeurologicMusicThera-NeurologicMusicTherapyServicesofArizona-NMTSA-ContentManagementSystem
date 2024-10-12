import { React, useEffect, useState } from 'react'
import { getAuth, sendPasswordResetEmail, signOut } from 'firebase/auth'
import { getFirestore, collection, getDocs, doc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Student = () => {
  

  return (
    <div className='text-black mt-4 text-xl pt-12'>
      <div className="mb-4">
       
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Roles</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
         THIS IS STUDENT ACCESS
        </tbody>
      </table>
    </div>
  )
}

export default Student
