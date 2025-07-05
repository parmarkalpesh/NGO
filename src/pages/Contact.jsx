function Contact(){

    return(<>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg mb-4">We would love to hear from you!</p>
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input className="border border-gray-300 p-2 w-full rounded-lg" type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input className="border border-gray-300 p-2 w-full rounded-lg" type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea className="border border-gray-300 p-2 w-full rounded-lg" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button className="bg-[#004B8D] text-white px-4 py-2 rounded-lg" type="submit">Send Message</button>
            </form>
        </div>
    </>)
}

export default Contact;