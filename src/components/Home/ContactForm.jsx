import { RiCheckLine } from '@remixicon/react';
import React, { useState } from 'react'
import MainBtn from '../buttons/MainBtn';

const ContactForm = () => {
    const [selectedDays, setSelectedDays] = useState([]);

    const [updates, setUpdates] = useState([]);
    const [channel, setChannel] = useState("");
    const [consent, setConsent] = useState(false);

    const toggleUpdate = (value) => {
        setUpdates((prev) =>
            prev.includes(value)
                ? prev.filter((u) => u !== value)
                : [...prev, value]
        );
    };

    const days = [
        { label: "Sun 21", value: "sun21" },
        { label: "Mon 22", value: "mon22" },
        { label: "Tue 23", value: "tue23" },
        { label: "Wed 24", value: "wed24" },
        { label: "Thu 25", value: "thu25" },
        { label: "Fri 26", value: "fri26" },
    ];

    const toggleDay = (value) => {
        setSelectedDays((prev) =>
            prev.includes(value)
                ? prev.filter((d) => d !== value)
                : [...prev, value]
        );
    };

    return (
        <div id='contact'>
            <div className="w-full h-screen my-[5vw] flex   px-[5.5vw]  ">
                <div className="w-1/2 h-full center">
                    <div className="">
                        <h2 className='text-5xl'>Stay Connected</h2>
                        <p className=' leading-none pp_light mt-3 opacity-60 '>Public viewing days are open to all. RSVP if you'd like event reminders and exclusive invitations to future
                            Enduring Legacies exhibitions.</p>
                        <div className="w-full">
                            <form action="" className='w-full '>
                                <div className="relative w-full mt-10">
                                    <input className=' border-b w-full text-xl ivy_thin border-white  outline-none h-8' type="text" placeholder='Full Name' name="" id="" />
                                    <h2 className='absolute text-xl top-1/2 -translate-y-1/2 right-0 text-[#EB8529] '>*</h2>
                                </div>
                                <div className="relative w-full flex gap-10 mt-5">
                                    <div className="w-1/2 relative">
                                        <input className=' border-b w-full text-xl ivy_thin border-white  outline-none h-8' type="text" placeholder='Your Email' name="" id="" />
                                        <h2 className='absolute text-xl top-1/2 -translate-y-1/2 right-0 text-[#EB8529] '>*</h2>

                                    </div>
                                    <div className="w-1/2 relative">
                                        <input className=' border-b w-full text-xl ivy_thin border-white  outline-none h-8' type="text" placeholder='Whatsapp Number' name="" id="" />
                                        <h2 className='absolute text-xl top-1/2 -translate-y-1/2 right-0 text-[#EB8529] '>*</h2>
                                    </div>
                                </div>
                                <div className="relative w-full mt-8">
                                    <h2 className="text-xl">
                                        I plan to visit on{" "}
                                        <span className="text-sm text-[#EB8529]">(Optional)</span>
                                    </h2>

                                    <div className="flex flex-wrap gap-x-6 mt-3">
                                        {days.map((day) => (
                                            <label
                                                key={day.value}
                                                className='flex items-center opacity-80 cursor-pointer gap-2'
                                            >
                                                <div className={`cursor-pointer center text-black  size-3 border transition 
              ${selectedDays.includes(day.value)
                                                        ? "bg-[#EB8529]  border-[#EB8529]"
                                                        : "  border-gray-300"
                                                    }`}><RiCheckLine /></div>
                                                <input
                                                    type="checkbox"
                                                    value={day.value}
                                                    checked={selectedDays.includes(day.value)}
                                                    onChange={() => toggleDay(day.value)}
                                                    className="hidden"
                                                />
                                                <h2 className=''>
                                                    {day.label}
                                                </h2>

                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative w-full mt-8">
                                    <h2 className="text-xl flex gap-2">Updates I'd like to receive  <span><h2 className='text-xl text-[#EB8529] '>*</h2></span></h2>

                                    {/* Updates checkboxes */}
                                    <div className="flex flex-col gap-3 opacity-80 mt-3">
                                        {[
                                            { label: "Reminders for Timeless Frames", value: "reminders" },
                                            {
                                                label: "News about future Enduring Legacies shows",
                                                value: "news",
                                            },
                                        ].map((opt) => (
                                            <label
                                                key={opt.value}
                                                className="flex items-center opacity-80 cursor-pointer gap-2"
                                            >
                                                <div
                                                    className={`size-3 center text-black border transition ${updates.includes(opt.value)
                                                        ? "bg-[#EB8529] border-[#EB8529]"
                                                        : "border-gray-300"
                                                        }`}
                                                >
                                                    <RiCheckLine />
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    value={opt.value}
                                                    checked={updates.includes(opt.value)}
                                                    onChange={() => toggleUpdate(opt.value)}
                                                    className="hidden"
                                                />
                                                <h2 className="">{opt.label}</h2>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Preferred channel (radio) */}
                                    <h2 className="text-xl mt-6">Preferred Channel:</h2>
                                    <div className="flex flex-wrap gap-6 mt-3 opacity-80">
                                        {["Email", "WhatsApp", "Both"].map((opt) => (
                                            <label
                                                key={opt}
                                                className="flex items-center opacity-80 cursor-pointer gap-2"
                                            >
                                                <div
                                                    className={`size-3 center text-black  border transition ${channel === opt
                                                        ? "bg-[#EB8529] border-[#EB8529]"
                                                        : "border-gray-300"
                                                        }`}
                                                > <RiCheckLine /></div>
                                                <input
                                                    type="radio"
                                                    name="channel"
                                                    value={opt}
                                                    checked={channel === opt}
                                                    onChange={() => setChannel(opt)}
                                                    className="hidden"
                                                />
                                                <h2 className="">{opt}</h2>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Consent checkbox */}
                                    <div className="mt-6">
                                        <label className="flex items-center opacity-80 cursor-pointer gap-2">
                                            <div
                                                className={`size-3 center text-black border transition ${consent ? "bg-[#EB8529] border-[#EB8529]" : "border-gray-300"
                                                    }`}
                                            > <RiCheckLine /></div>
                                            <input
                                                type="checkbox"
                                                checked={consent}
                                                onChange={() => setConsent(!consent)}
                                                className="hidden"
                                            />
                                            <h2 className="">
                                                I agree to receive periodic updates from SDAF Culture. I can opt out
                                                anytime.
                                            </h2>
                                        </label>
                                    </div>
                                    <div className="mt-10">
                                        <MainBtn txt="Submit" />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center pl-20">
                    <div className="w-full h-[55%] opacity-80  mt-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.1368620643657!2d72.8173092752016!3d18.925335282248497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d12123ed5519%3A0xcc78e92c4db0967e!2sNational%20Centre%20for%20Performing%20Arts%20(NCPA)%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1756878016879!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className=" border"
                        ></iframe>
                    </div>                    <div className=" mt-5">
                        <h2 className='text-2xl'>Find Your Way to the Exhibition</h2>
                        <p className=' mt-3 pp_light opacity-60'>
                            Piramal NCPA Gallery National Centre for the Performing Arts, Nariman Point, Mumbai, Maharashtra
                            400021
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm