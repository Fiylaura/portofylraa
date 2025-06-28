
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const AdminLoginPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple login validation (in real app, this would be server-side)
    if (formData.name && formData.phoneNumber && formData.password) {
      // Store login state (in real app, use proper auth)
      localStorage.setItem('adminLoggedIn', 'true');
      // Redirect to dashboard
      window.location.href = "/admin/dashboard";
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleForgotPassword = () => {
    // Navigate to reset password page
    window.location.href = "/admin/reset-password";
  };

  return (
    <div className="bg-[#fbebe3] flex flex-row justify-center w-full">
      <div className="bg-[#fbebe3] w-[1440px] h-[810px] relative">
        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="absolute w-[350px] h-[50px] top-[252px] left-[300px]">
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full h-full bg-[#d9d9d9] border-none rounded-none font-normal text-[#000000] text-base px-[42px] placeholder:text-[#00000080]"
              placeholder="Name"
            />
          </div>

          {/* Phone Number Input */}
          <div className="absolute w-[350px] h-[50px] top-[326px] left-[300px]">
            <Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full h-full bg-[#d9d9d9] border-none rounded-none font-normal text-[#000000] text-base px-[42px] placeholder:text-[#00000080]"
              placeholder="Phone Number"
              type="tel"
            />
          </div>

          {/* Password Input */}
          <div className="absolute w-[350px] h-[50px] top-[400px] left-[300px]">
            <Input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full h-full bg-[#d9d9d9] border-none rounded-none font-normal text-[#000000] text-base px-[42px] placeholder:text-[#00000080]"
              placeholder="Password"
              type="password"
            />
          </div>

          {/* Forgot Password Link */}
          <button
            type="button"
            onClick={handleForgotPassword}
            className="absolute top-[455px] left-[300px] font-normal text-[#e56815] text-base tracking-[0] leading-[normal] whitespace-nowrap bg-transparent border-none cursor-pointer"
          >
            Lupa Password?
          </button>

          {/* Login Button */}
          <div className="absolute w-[352px] h-[50px] top-[507px] left-[300px]">
            <Button
              type="submit"
              className="relative w-[350px] h-[50px] bg-[#e56815] hover:bg-[#d45a0f] border-none rounded-none font-normal text-white text-base text-center tracking-[0] leading-[normal]"
            >
              Login
            </Button>
          </div>
        </form>

        {/* Profile Image Section */}
        <div className="absolute w-[338px] h-[463px] top-[169px] left-[802px]">
          <div className="relative h-[463px]">
            <div className="absolute w-[300px] h-[421px] top-0 left-[38px] bg-[#e56815] rounded-[15px]"></div>
            <img
              className="absolute w-[300px] h-[421px] top-[42px] left-0 object-cover"
              alt="Admin profile"
              src="/figmaAssets/whatsapp-image-2025-06-27-at-10-17-52.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
