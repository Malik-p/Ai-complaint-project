import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api.js";

export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await api.post("/auth/signup", {
                name,
                email,
                password,
            });

            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Create Account
                </h1>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border px-4 py-2 rounded-lg"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border px-4 py-2 rounded-lg"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border px-4 py-2 rounded-lg"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={handleSignup}
                        type="button"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
