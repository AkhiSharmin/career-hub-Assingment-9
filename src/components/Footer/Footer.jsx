import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-200 text-black divide-y sm:w-full">
            <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 py-8 container-fluid px-4 mx-auto md:px-24 lg:px-8 lg:py-10">
                <div>
                    <div className="flex gap-2">
                       
                        <h1 class="font-extrabold text-2xl lg:text-3xl pb-4">
                            Job<span class="text-indigo-500">Finder</span>
                        </h1>
                    </div>
                    <p className="pb-6">A job Finder website is a platform that connects job seekers with employers, providing a range of tools and resources to aid in the job search process.</p>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4">Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4">Product</h1>
                    <ul>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4">Support</h1>
                    <ul>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                    
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 tracking-wide">Contact</h1>
                    <p>524 Broadway, NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>

            </section>
			
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-2 text-black-400 text-sm pb-4">
				<span className="text-center">@2023 PeakCareer. All Rights Reserved</span>
				<span className="text-center">Powered by PeakCareer</span>
				
			</div>
		</footer>
	);
};

export default Footer;