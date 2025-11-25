"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      //   send form data to backend, will use in the future if needed
      console.log("Form submitted:", form);
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Have questions or feedback? Fill out the form below and we’ll get back to you.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-8"
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Feedback messages */}
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-12 text-center text-slate-600">
        <p>Email: Shamim.ct17@gmail.com</p>
        <p>Phone: +8801963912757</p>
        <p>Address: Dhaka, Bangladesh</p>
      </div>
    </div>
  );
}
