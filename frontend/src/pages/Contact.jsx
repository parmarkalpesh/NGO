import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
          const res = await fetch("http://localhost:5000/contact", {
            
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      alert("Failed to connect to 5server.");
      console.error("Submit error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4">We would love to hear from you!</p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            className="border border-gray-300 p-2 w-full rounded-lg"
            type="text"
            value={form.name}
            onChange={handleChange}
            id="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            className="border border-gray-300 p-2 w-full rounded-lg"
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            className="border border-gray-300 p-2 w-full rounded-lg"
            id="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          className="bg-[#004B8D] text-white px-4 py-2 rounded-lg"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
