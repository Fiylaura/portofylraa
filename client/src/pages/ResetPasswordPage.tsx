
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ResetPasswordPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    newPassword: "",
    confirmPassword: "",
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
    
    // Basic validation
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    if (formData.newPassword.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
    
    // Handle reset password logic here
    console.log("Reset password attempt:", {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      newPassword: formData.newPassword
    });
  };

  return (
    <div className="bg-[#fbebe3] flex flex-row justify-center w-full">
      <div className="bg-[#fbebe3] w-[1440px] h-[810px] relative">
        {/* Reset Password Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="absolute w-[350px] h-[50px] top-[231px] left-[300px]">
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full h-full bg-[#d9d9d9] border-none rounded-none font-normal text-[#000000] text-base px-[42px] placeholder:text-[#00000080]"
              placeholder="Name"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="absolute w-[350px] h-[50px] top-[305px] left-[300px]">
            <Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full h-full bg-[#d9d9d9] border-none rounded-none font-normal text-[#000000] text-base px-[42px] placeholder:text-[#00000080]"
              placeholder="Phone Number"
              type="tel"
              required
            />
          </div>

          {/* New Password Input */}
          <div className="absolute w-[350px] h-[50px] top-[379px] left-[300px]">
            <Input
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full h-full bg-[#d9d9d9] border-none rounded-none font-normal text-[#000000] text-base px-[42px] placeholder:text-[#00000080]"
              placeholder="New Password"
              type="password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="absolute w-[350px] h-[50px] top-[453px] left-[300px]">
            <Input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full h-full bg-[#d9d9d9] border-none rounded-none font-normal text-[#000000] text-base px-[42px] placeholder:text-[#00000080]"
              placeholder="Confirm Password"
              type="password"
              required
            />
          </div>

          {/* Reset Button */}
          <div className="absolute w-[352px] h-[50px] top-[533px] left-[300px]">
            <Button
              type="submit"
              className="relative w-[350px] h-[50px] bg-[#e56815] hover:bg-[#d45a0f] border-none rounded-none font-normal text-white text-base text-center tracking-[0] leading-[normal]"
            >
              Reset
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
