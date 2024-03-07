
const Contact = () => {
    return(
        <>
        <div className="bg-gray-100 py-10 text-center">
                <h1 className=" text-md">HOME / <span className="font-medium">CONTACT</span></h1>
        </div>

        <div className="py-16 lg:px-24 md:px-5 px-1 flex gap-3 lg:flex-row flex-col">
            <div className="space-y-8 bg-gray-100 px-10 py-20 flex flex-col justify-center">

            <div className="flex items-center gap-5">
            <svg className="border-black border rounded-full p-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"/></svg>
            <div>
                <p >+91 43284239847</p>
                <p>+91 43284239347</p>
            </div>
            </div>

            <div className="flex items-center gap-5">
            <svg className="border-black border rounded-full p-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
            <div>
                <p >shopSizzle@gmail.com</p>
                <p>shopSizzle.com</p>
            </div>
            </div>

            <div className="flex items-center gap-5">
            <svg className="border-black border rounded-full p-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg>
            <div>
                <p>Address chennai,</p>
                <p>street, Crossroad 123.</p>
            </div>
            </div>

            </div>

            <div className="flex-1 bg-gray-100 p-10">
                <h1 className="text-xl mb-5 font-semibold">Get In Touch</h1>
                <form class="md:col-span-8 ">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        First Name
                    </label>
                    <input
                        class="appearance-none block w-full border-gray-500 bg-transparent text-gray-700 border rounded py-3 px-4 mb-3 leading-tight outline-none "
                        id="grid-first-name" type="text" placeholder="First Name" />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight outline-none"
                        id="grid-last-name" type="text" placeholder="Last Name" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Email Address
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight outline-none bg-transparent"
                        id="grid-email" type="email" placeholder="Email*" />
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Your Message
                    </label>
                    <textarea rows="10"
                        class="appearance-none block w-full border-gray-500 bg-transparent text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                </div>
                <div class="flex justify-between w-full px-3">
                    <div class="md:flex md:items-center">
                        <label class="block text-gray-500 font-bold">
                            <input class="mr-2 leading-tight" type="checkbox" />
                            <span class="text-sm">
                                Send me your newsletter!
                            </span>
                        </label>
                    </div>
                    <button
                        class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit">
                        Send Message
                    </button>
                </div>

            </div>

        </form>
            </div>
        </div>
        </>
    )
}

export default Contact