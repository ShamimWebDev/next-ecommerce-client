"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import api from "../../lib/api";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); 
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  Regex validation
  const validatePassword = (password) => {
  //  more than character ,  1 uppercase, 1 lowercase, 1 number, 1 special char
  const regex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{7,}$/;

  if (!regex.test(password)) {
    return "Password must be more than 6 characters, include uppercase, lowercase, number & special character";
  }
  return null;
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validatePassword(form.password);
    if (error) {
      toast.error(error);
      return;
    }

    try {
      await api.post("/auth/register", form);
      toast.success("🎉 Registered successfully! Please login.");
      router.push("/login");
    } catch (err) {
      toast.error(err?.response?.data?.error || "❌ Failed to register");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Create Account
        </h2>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        {/*  Password field with toggle */}
        <div className="relative mb-6">
          <input
            name="password"
            type={showPassword ? "text" : "password"} // toggle type
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-slate-600 hover:text-slate-800"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Register
        </button>

        <div className="my-6 text-center text-slate-500">OR</div>

        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 border border-slate-300 py-2 rounded-lg hover:bg-slate-100"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </form>
    </div>
  );
}
