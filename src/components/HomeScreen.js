import React, { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import { Input, InputGroup, InputLeftAddon, } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { Select } from '@chakra-ui/react'
import { Button, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Container } from "@chakra-ui/react"


const HomeScreen = () => {
    return (
        <div>
            <div className='bg-[#243c5a10] items-center justify-center'>
                <div className="flex flex-col h-screen items-center text-slate-500">
                    <div className='p-4 pt-8 mt-2 mx-auto'>
                        <h1 className='text-2xl font-bold ml-10'>
                            Welcome to Creative Haven!
                        </h1>
                        <h2 className='text-xl font-semibold'>
                            Unlock Your Creative Potential, Recharge Your Inspiration</h2>
                    </div>
                    <div className='bg-white max-w-[85%] mt-3 p-3 rounded-md  shadow-md'>
                        <div className="flex flex-col justify-center px-5 p-4 mb-6 text-center">
                            <div className="mb-4 mx-auto max-w-[80%]">
                                <h2 className="text-2xl font-semibold mb-2">🌈 Are Academic Pressures Draining Your Creativity? 🎨</h2>
                                <h3 className="text-gray-700 text-lg">
                                    Juggling deadlines, unrealistic expectations, and a lack of support can dim the brightest creative sparks.
                                    At Creative Haven, we understand the struggles students in creative fields face, and we're
                                    here to help you reignite your passion!
                                </h3>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mt-5 items-center justify-between mx-auto p-8 max-w-[80%] min-h-[60%] bg-opacity-90 rounded-md">
                            <div className="mb-4 mr-8 md:mb-0">
                                <img
                                    src="https://imgs.search.brave.com/OIM_yZ4yZWl9uqmn1O_y2FfFjsEQhjBfQ06pZOq1nDc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kaWFn/cmFtLXN0cmVzcy1t/YW5hZ2VtZW50LW1h/bi1wcmVzZW50aW5n/LTg1NzQzMDYyLmpw/Zw"
                                    alt="stress management"
                                    className="rounded-lg shadow-md"
                                />
                            </div>

                            <div className="mb-4 mr-8 md:mb-0">
                                <img
                                    src="https://img.freepik.com/free-photo/person-playing-sudoku-game_23-2149072714.jpg?size=626&ext=jpg&ga=GA1.1.1458602147.1706429356&semt=sph"
                                    alt="stress management"
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                            <div className="mb-4 md:mb-0">
                                <img
                                    src="https://img.freepik.com/free-photo/concentrated-woman-meditating-nature_1098-1412.jpg?size=626&ext=jpg&ga=GA1.1.1458602147.1706429356&semt=sph"
                                    alt="stress management"
                                    className="rounded-lg shadow-md"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default HomeScreen;
