import { Link } from "react-router-dom";

export default function Signup() {
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
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border px-4 py-2 rounded-lg"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border px-4 py-2 rounded-lg"
                    />

                    <button
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
