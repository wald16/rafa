"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    return (
        <div className="bg-gray-800 shadow rounded p-6 max-w-lg mx-auto mt-10">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-gray-700 bg-gray-900 text-gray-300 rounded p-2 mt-1"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-gray-700 bg-gray-900 text-gray-300 rounded p-2 mt-1"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-300">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border-gray-700 bg-gray-900 text-gray-300 rounded p-2 mt-1"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-gray-100 py-2 rounded hover:bg-blue-700 transition-all duration-300"
                    disabled={status === "loading"}
                >
                    {status === "loading" ? "Sending..." : "Send"}
                </button>
                {status === "success" && (
                    <p className="text-green-300 mt-4">Message sent successfully!</p>
                )}
                {status === "error" && (
                    <p className="text-red-300 mt-4">Failed to send the message. Please try again.</p>
                )}
            </form>
        </div>
    );
}
