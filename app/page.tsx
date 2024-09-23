"use client";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../components/ui/animated-modal";
import { useState } from "react";


export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleShort = async (e:React.FormEvent) => {
    e.preventDefault();
  
    if (username) {
      router.push(`/details?username=${username}`);
    }
  };

  return (
    <section className="overflow-x-hidden overflow-y-hidden overflow-clip flex flex-col justify-center items-center">
      <div className='flex flex-col justify-center items-center h-screen gap-16'>
      <h2 className="text-center text-4xl mt-9 uppercase md:text-5xl overflow-y-hidden font-bold text-black glow-effect dark:text-white">
        Fake <span className="text-[#b59958]">Hunter</span>
      </h2>
        <div className="flex items-center justify-center ">
          <div>
          <Modal>
            <ModalTrigger className="bg-gray-900 dark:bg-white rounded-xl dark:text-black text-white flex justify-center group/modal-btn">
              <span className="font-bold group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                Get started
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                🚀
              </div>
              
            </ModalTrigger>
          
            <ModalBody>
              <ModalContent className="bg-slate-600 border-none">
                <form onSubmit={handleShort} className="flex flex-col justify-center items-center">
                  <h4 className=" text-lg md:text-2xl text-white dark:text-neutral-100 font-bold text-center mb-8">
                    Enter the username
                  </h4>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username "
                    className="mt-20 bg-slate-600 opacity-75 font-semibold p-2 border rounded-xl text-white shadow-lg"
                  />
                  {/* <div className="text-white mb-6">
                    <br />
                    <p className="mb-2">Select your platform:</p>
                    <label className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" /> Instagram
                    </label>
                    <label className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" /> Facebook
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> Twitter
                    </label>
                  </div> */}
                 <div className="mt-32 flex flex-row gap-x-7">
                 <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="px-2 py-1 rounded-xl bg-black text-white dark:bg-black dark:border-black dark:text-white border border-gray-300 text-sm w-28"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gray-200 rounded-xl text-black dark:bg-white dark:text-black text-sm px-2 py-1 border border-black w-28"
                  >
                    Continue
                  </button>
                 </div>
                 
                </form>
              </ModalContent>
            </ModalBody>
          </Modal>
          </div>
          </div>
        </div>
    </section>
  );
}