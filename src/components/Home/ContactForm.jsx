import { RiCheckLine } from '@remixicon/react';
import React, { useState } from 'react'
import MainBtn from '../buttons/MainBtn';
import { toast, ToastContainer } from 'react-toastify';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });
    const [selectedDays, setSelectedDays] = useState([]);
    const [updates, setUpdates] = useState([]);
    const [channel, setChannel] = useState("");
    const [consent, setConsent] = useState(false);
    const [loading, setLoading] = useState(false);

    const days = [
        { label: "Sun 21", value: "sun21" },
        { label: "Mon 22", value: "mon22" },
        { label: "Tue 23", value: "tue23" },
        { label: "Wed 24", value: "wed24" },
        { label: "Thu 25", value: "thu25" },
        { label: "Fri 26", value: "fri26" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.fullName || !formData.email || !formData.phone || !updates.length || !channel || !consent) {
            toast.error("Please fill all required fields.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/submitEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, selectedDays, updates, channel, consent }),
            });

            const data = await res.json();
            if (res.ok) {
                toast.success("Form Submitted Successfully", { position: "top-center" });
                setFormData({ fullName: "", email: "", phone: "" });
                setSelectedDays([]);
                setUpdates([]);
                setChannel("");
                setConsent(false);
            } else {
                toast.error(data.error || "Submission failed");
            }
        } catch (err) {
            toast.error("Error submitting form.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div id='contact'>
            <ToastContainer />
            <div className="w-full lg:h-screen  bg_img  my-[5vw] flex flex-col lg:flex-row   px-[4vw]  ">
                <div className=" w-full lg:w-1/2 h-full center">
                    <div className="">
                        <h2 className=' text-3xl lg:text-5xl'>Stay Connected</h2>
                        <p className=' text-sm lg:text-base leading-none  mt-3   '>Public viewing days are open to all. RSVP if you'd like event reminders and exclusive invitations to future
                            Enduring Legacies exhibitions.</p>
                        <div className="w-full">
                            <form onSubmit={handleSubmit} method='POST' className="mt-6 space-y-6">
                                {/* Full Name */}
                                <div className="w-full relative">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="border-b w-full text-lg outline-none"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                    <h2 className='absolute right-0 top-1/2 -translate-y-1/2 text-[#EB8529] text-2xl'>*</h2>
                                </div>

                                {/* Email + Phone */}
                                <div className="flex gap-6">
                                    <div className=" relative w-1/2">

                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="border-b w-full text-lg outline-none"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        <h2 className='absolute right-0 top-1/2 -translate-y-1/2 text-[#EB8529] text-2xl'>*</h2>
                                    </div>
                                    <div className=" w-1/2 relative">

                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            className="border-b w-full  text-lg outline-none"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                        <h2 className='absolute right-0 top-1/2 -translate-y-1/2 text-[#EB8529] text-2xl'>*</h2>
                                    </div>
                                </div>

                                {/* Days */}
                                <div>
                                    <p className="text-lg">I plan to visit on <span className='text-[#EB8529] text-sm'> (Optional)</span></p>
                                    <div className="flex flex-wrap text-sm lg:text-base gap-4 mt-2">
                                        {days.map((d) => (
                                            <label
                                                onClick={() =>
                                                    setSelectedDays((prev) =>
                                                        prev.includes(d.value) ? prev.filter((x) => x !== d.value) : [...prev, d.value]
                                                    )
                                                }
                                                key={d.value} className="flex items-center gap-2 cursor-pointer">
                                                <div
                                                    className={`size-3 lg:size-4 border flex items-center justify-center transition ${selectedDays.includes(d.value) ? "bg-[#EB8529]  border-[#EB8529]  text-white" : "border-black-400"
                                                        }`}
                                                >
                                                    {selectedDays.includes(d.value) && <RiCheckLine />}
                                                </div>
                                                {d.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Updates */}
                                <div>
                                    <p className="text-lg">Updates I'd like to receive <span className='text-[#EB8529]' >*</span></p>
                                    {[
                                        { label: "Reminders for Timeless Frames", value: "reminders" },
                                        { label: "News about future Enduring Legacies shows", value: "news" },
                                    ].map((u) => (
                                        <label
                                            onClick={() =>
                                                setUpdates((prev) => (prev.includes(u.value) ? prev.filter((x) => x !== u.value) : [...prev, u.value]))
                                            }
                                            key={u.value} className="flex text-sm lg:text-base w-fit items-center gap-2 cursor-pointer mt-2">
                                            <div
                                                className={`size-3 lg:size-4 border flex items-center justify-center transition ${updates.includes(u.value) ? "bg-[#EB8529]  border-[#EB8529]  text-white" : "border-black-400"
                                                    }`}
                                            >
                                                {updates.includes(u.value) && <RiCheckLine />}
                                            </div>
                                            {u.label}
                                        </label>
                                    ))}
                                </div>

                                {/* Channel */}
                                <div>
                                    <p className="text-lg">Preferred Channel <span className='text-[#EB8529]' >*</span></p>
                                    <div className="flex gap-5">

                                        {["Email", "WhatsApp", "Both"].map((opt) => (
                                            <label
                                                onClick={() => setChannel(opt)}
                                                key={opt} className="flex text-sm lg:text-base items-center gap-2 cursor-pointer mt-2">
                                                <div
                                                    className={`size-3 lg:size-4 border flex items-center justify-center transition ${channel === opt ? "bg-[#EB8529]  border-[#EB8529]  text-white" : "border-black-400"
                                                        }`}
                                                >
                                                    {channel === opt && <RiCheckLine />}
                                                </div>
                                                {opt}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Consent */}
                                <label
                                    onClick={() => setConsent(!consent)}
                                    className="flex  text-sm lg:text-base w-fit items-center gap-2 cursor-pointer">
                                    <div
                                        className={`size-3 lg:size-4 border flex items-center justify-center transition ${consent ? "bg-[#EB8529]  border-[#EB8529]  text-white" : "border-black-400"
                                            }`}
                                    >
                                        {consent && <RiCheckLine />}
                                    </div>
                                    I agree to receive updates from SDAF Culture. <span className='text-[#EB8529]' >*</span>
                                </label>

                                {/* Submit */}
                                <div>
                                    <MainBtn txt={loading ? "Submitting..." : "Submit"} disabled={loading} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=" mt-10 lg:mt-0 w-full lg:w-1/2 h-full flex flex-col-reverse lg:flex-col justify-center lg:pl-20">
                    <div className="w-full h-[50vh] lg:h-[55%]   mt-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.1368620643657!2d72.8173092752016!3d18.925335282248497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d12123ed5519%3A0xcc78e92c4db0967e!2sNational%20Centre%20for%20Performing%20Arts%20(NCPA)%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1756878016879!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className=" border"
                        ></iframe>
                    </div>
                    <div className=" mt-5">
                        <h2 className='text-3xl'>Find Your Way to the Exhibition</h2>
                        <p className=' text-sm lg:text-base leading-none  mt-3 '>
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