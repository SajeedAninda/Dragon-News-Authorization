import { BiLogoGoogle } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { AuthContext } from './Authentication/AuthProvider';
import React, { useContext } from 'react';

const SocialLogin = () => {
    let { googleLogin } = useContext(AuthContext);
    let { githubLogin } = useContext(AuthContext);

    let handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });

    }

    let handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <div className='space-y-2'>
                <div onClick={handleGoogleLogin} className='p-2 w-full flex items-center border-2 cursor-pointer font-semibold border-blue-400 text-blue-500 gap-2 rounded-xl'>
                    <BiLogoGoogle className='text-lg'></BiLogoGoogle>
                    <p>Login With Google</p>
                </div>
                <div onClick={handleGithubLogin} className='p-2 w-full flex items-center border-2 cursor-pointer font-semibold border-gray-700 text-gray-700 gap-2 rounded-xl'>
                    <AiFillGithub className='text-lg'></AiFillGithub>
                    <p>Login With Github</p>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;