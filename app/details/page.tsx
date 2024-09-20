'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import './page.module.css';
import LoadingCircle from '../../components/ui/LoadingCircle';
import { BackgroundGradient } from "../../components/ui/background-gradient";
import Image from "next/image";
 


interface ApiResponse {
    status: string;
    response: {
      score: string;
      full_name: string;
      profile_pic_url: string;
      followers: string;
      followees: string;
      mediacount: string;
      bio: string;
    };
  }
  

const Page = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!username) {
        setError('No username provided');
        setLoading(false);
        return;
      }

      try {
        const url = `http://192.168.232.146:8000/instagram?username=${encodeURIComponent(username)}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: ApiResponse = await response.json();
        setApiResponse(data);
        
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl mb-4">Loading...</h1>
          <LoadingCircle />
        </div>
      );
    }

    if (error) {
      return <p className="error">{error}</p>;
    }

    if (!apiResponse) {
      return <p className="error">No data available</p>;
    }

    return (
      <div className="result flex flex-col justify-center items-center">
        <h2 className="text-center text-4xl mt-2 uppercase md:text-5xl overflow-y-hidden font-bold text-slate-100 glow-effect dark:text-white">
          Fake <span className="text-[#b59958]">Hunter</span>
        </h2>
        {apiResponse.status !== 'failed' ? (
          <h3 className='score mt-10 text-4xl font-extrabold'>
             <BackgroundGradient className="rounded-[22px] max-w-md p-2 sm:p-10 bg-zinc-900 dark:bg-zinc-900">
        <Image
          src={apiResponse.response.profile_pic_url}
          alt="profilePic"
          height="400"
          width="400"
          className="object-contain rounded-3xl"
        />
      {apiResponse?.response && (
  <div className="text-md flex flex-col gap-2 sm:text-xl text-netural-200 mt-4 mb-2 dark:text-neutral-200">
<h1
  className={`uppercase text-2xl ${
    parseInt(apiResponse.response.score) >= 80
      ? 'text-green-500'
      : parseInt(apiResponse.response.score) <= 45
      ? 'text-red-500'
      : 'text-yellow-500'
  }`}
>
  genuinity: {apiResponse.response.score ?? 'N/A'}
</h1>
    <h2>Name: {apiResponse.response.full_name !== '.' ? apiResponse.response.full_name : 'N/A'}</h2>
    <h3>Followers: {apiResponse.response.followers ?? 'N/A'}</h3>
    <h3>Following: {apiResponse.response.followees ?? 'N/A'}</h3>
    <h3>Posts: {apiResponse.response.mediacount ?? 'N/A'}</h3>
    <h3>Bio: {apiResponse.response.bio ?? 'N/A'}</h3>
  </div>
)}
      </BackgroundGradient>
          </h3>
        ) : (
          <p className="error mt-72 font-semibold text-red-700 text-5xl ">User Not Found</p>
        )}
      </div>
    );
  };

  return <section className="loading-container">{renderContent()}</section>;
};

export default Page;