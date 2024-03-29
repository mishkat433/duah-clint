import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/DuahLogo.png";
import profile from "../../public/assets/avatar.png";

const Navbar = () => {
    return (
        <div className="shadow-md py-[6px] bg-main content-center h-[68px] z-20 ">
            <div className="w-11/12 mx-auto grid grid-cols-5 content-center ">

                <div className="col-span-1 lg:ml-14">
                    <Link href='/' className=""><Image src={logo} alt="logo" height={50} width={55} /></Link>
                </div>

                <div className="form-control col-span-3 mt-[2px] ">
                    <input type="text" placeholder="খুজুন..." className="input input-bordered w-full md:w-auto placeholder:text-sm" />
                </div>

                <div className="dropdown dropdown-end col-span-1 flex justify-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image alt="profile" src={profile} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-12 z-[1] p-2 shadow menu menu-sm dropdown-content bg-green-50 rounded-box w-52">
                        <li> <a className="justify-between"> Profile</a> </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;