import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Authentication/AuthProvider';



const Navbar = () => {
    let { loggedUser, logout } = useContext(AuthContext);
    let handleLogout = () => {
        logout()
            .then(() => {
                console.log("Signed Out Succesfully");
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className='p-4 rounded-lg bg-gray-100'>
                <Marquee className='text-[#403F3F] font-semibold'>
                    Welcome, স্বাগতম,    Bienvenido/a,      Bienvenue, Willkommen, Benvenuto/a,     Bem-vindo/a, Welkom, Добро пожаловать, 欢迎, ようこそ, 환영합니다, مرحباً, स्वागत है, Hoş geldiniz, Καλώς ήρθατε, Välkommen, Velkommen, Velkommen,      Tervetuloa, Velkominn, ברוך הבא, ยินดีต้อนรับ, Chào mừng, Karibu, أهلاً وسهلاً, Maligayang pagdating, خوش آمدید, Bine ați venit, Witamy, Vítejte.
                </Marquee>
            </div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-4'>
                <div className=''>

                </div>
                <div className="links flex gap-6 ml-0 md:ml-28">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold" : ""
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/career"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold" : ""
                        }
                    >
                        Career
                    </NavLink>
                </div>

                <div className="user flex gap-2">
                    {
                        loggedUser ? <img className='w-[40px] rounded-full' src={loggedUser?.photoURL}></img> : <FaUserCircle className='text-[40px]' />
                    }

                    {
                        loggedUser ?
                            (
                                <button onClick={handleLogout} className='px-4 py-2 bg-[#403F3F] text-white font-bold'>
                                    Log Out
                                </button>
                            )
                            :
                            (
                                <Link to="/login">
                                    <button className='px-4 py-2 bg-[#403F3F] text-white font-bold'>
                                        Login
                                    </button>
                                </Link>
                            )
                    }
                </div>

            </div>

        </div>
    );
};

export default Navbar;