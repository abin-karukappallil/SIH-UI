'use client'
import React from 'react';
import { useSearchParams } from "next/navigation";
import axios from 'axios';
import './page.module.css'

const Page = () => {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");

    const [score, setScore] = React.useState<number | null>(null);
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const fetchData = async () => {
            if (username) {
                try {
                    const url = `http://localhost:8080/instagram?username=${username}`;
                    const response = await axios.get(url);
                    setScore(response.data.score);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setError('Error fetching data');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [username]);

    return (
        <section className="loading-container">
            {/* {loading ? (
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <div className="result">
                    <h2 className="title">Fake <span className="highlight">Hunter</span></h2>
                    <h3 className='score'>Fraud Score = {score}</h3>
                </div>
            )} */}
            <div className="result flex flex-col items-center justify-between">
                <h2 className="text-center text-4xl mt-6  uppercase md:text-5xl overflow-y-hidden font-bold text-slate-100 glow-effect dark:text-white">
                    Fake <span className="text-[#b59958]">Hunter</span>
                </h2>
                <h3 className='font-extrabold text-4xl mt-80 score'>Fraud Score = {score}null</h3>
            </div>
        </section>
    );
};

export default Page;
