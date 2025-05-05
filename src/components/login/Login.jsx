"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut } from "next-auth/react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Github,
  Twitter,
  ChromeIcon as Google,
  Sun,
  Moon,
  Facebook,
} from "lucide-react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Simulate login process
    setIsLoading(true);

    try {
      // Simulate API call
      const loginResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (loginResponse?.error) {
        setError(loginResponse.error);
        setSuccess(false);
        setIsLoading(false);
        return;
      }
      // Simulate successful login
      setSuccess(true);
      setIsLoading(false);

      // Reset form after success animation completes
      setTimeout(() => {
        setEmail("");
        setPassword("");
      }, 1000);
    } catch (err) {
      setError("Login failed. Please try again.");
      setIsLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.97 },
  };

  const socialButtonVariants = {
    hover: {
      y: -3,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    tap: { y: 0, boxShadow: "none" },
  };

  const errorVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto" },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Dark mode toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 z-20"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>

        {success ? (
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            className="p-8 flex flex-col items-center justify-center min-h-[500px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2,
              }}
              className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6"
            >
              <svg
                className="w-10 h-10 text-green-500 dark:text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
            >
              Login Successful!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-gray-600 dark:text-gray-300 text-center"
            >
              You are being redirected to your dashboard...
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSuccess(false)}
              className="mt-8 px-6 py-2 bg-purple-500 text-white rounded-lg font-medium"
            >
              Back to Login
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-8 my-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                Welcome Back
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Sign in to your account
              </p>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence>
                {error && (
                  <motion.div
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <p className="text-red-600 dark:text-red-300 text-sm">
                      {error}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div variants={itemVariants} className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <motion.div
                    whileFocus={{ scale: 1.05 }}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <Mail size={18} />
                  </motion.div>
                  <motion.input
                    whileFocus={{
                      boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.3)",
                    }}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-500/30 focus:border-transparent transition-all text-gray-800 dark:text-gray-200"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <motion.div
                    whileFocus={{ scale: 1.05 }}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <Lock size={18} />
                  </motion.div>
                  <motion.input
                    whileFocus={{
                      boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.3)",
                    }}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-500/30 focus:border-transparent transition-all text-gray-800 dark:text-gray-200"
                    required
                  />
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </motion.button>
                </div>
                <div className="flex justify-end mt-1">
                  <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Forgot password?
                  </motion.a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all ${
                    isLoading ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </motion.button>
              </motion.div>
            </form>

            <motion.div variants={itemVariants} className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <motion.button
                  variants={socialButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() =>
                    signIn("google", { redirect: true, callbackUrl: "/" })
                  }
                  type="button"
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/70"
                >
                  <Google size={20} />
                </motion.button>
                <motion.button
                  variants={socialButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() =>
                    signIn("github", { redirect: true, callbackUrl: "/" })
                  }
                  type="button"
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/70"
                >
                  <Github size={20} />
                </motion.button>
                <motion.button
                  variants={socialButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  type="button"
                  onClick={() =>
                    signIn("facebook", { redirect: true, callbackUrl: "/" })
                  }
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/70"
                >
                  <Facebook size={20} />
                </motion.button>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400"
            >
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-purple-600 dark:text-purple-400 hover:underline"
              >
                Sign up
              </Link>
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
