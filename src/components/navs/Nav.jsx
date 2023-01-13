import React from 'react'
import ContactUs from '../buttons/ContactUs'
import Logo from "../../assets/icons/logo1.png"
const Nav = () => {
  return (
    <nav className="relative w-full flex items-center justify-center bg-gray-100 hover:text-[#39374d]  py-[20px]">
        <div className="w-full flex items-center justify-between max-w-[1170px]">

            <div className="flex items-center relative mr-auto text-[14px]">
                <a className=" flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
                <img src={Logo} alt="" className='w-[171px] h-[45px]'
                    loading="lazy" />
                </a>
            </div>

            <div className="flex items-center relative font-semibold text-[16px]">
                <div className="dropdown relative">
                        <a className=" text-[#39374d] hover:text-[#39374d]  dropdown-toggle hidden-arrow flex items-center" href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                            </svg>
                        </a>
                        <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-[#39374d] hover:bg-gray-100" href="#">Action</a>
                            </li>
                            <li>
                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-[#39374d] hover:bg-gray-100" href="#">Another action</a>
                            </li>
                            <li>
                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-[#39374d] hover:bg-gray-100" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>


                <a href="#" className="pl-[25px]">
                    <div>About</div>
                </a>
                <a href="#" className="pl-[25px]">
                    <div>Services</div>
                </a>
                <a href="#" className="pl-[25px]">
                    <div>Pricing</div>
                </a>
                <a href="#" className="pl-[25px]">
                    <div>Products</div>
                </a>
                <a href="#" className="pl-[25px]">
                    <div>News</div>
                </a>

                <div className="flex items-center relative">
                    <div className="dropdown relative pl-[25px]">
                        <a className=" text-[#39374d] hover:text-[#39374d]  dropdown-toggle hidden-arrow flex items-center" href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
                                className="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                                </path>
                            </svg>
                            <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span>
                        </a>
                        <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-[#39374d] hover:bg-gray-100" href="#">Action</a>
                            </li>
                            <li>
                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-[#39374d] hover:bg-gray-100" href="#">Another action</a>
                            </li>
                            <li>
                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-[#39374d] hover:bg-gray-100" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                    <a className="text-[#39374d] hover:text-[#39374d]  pl-[25px]" href="#">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </a>
                    <div className='pl-[25px]'>
                        <ContactUs/>
                    </div>
                </div>
            </div>
        </div> 
    </nav>
  )
}

export default Nav