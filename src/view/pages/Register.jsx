import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : "password";

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const EyeIcon = showPassword ? EyeInvisibleOutlined : EyeOutlined;

  return (
    <section className="bg-white">
      <div
        className="grid max-w-screen-xl px-4 py-8 mx-auto 
        lg:gap-12 xl:gap-16 lg:py-16 lg:grid-cols-2 items-start"
      >
        <div className="flex justify-center items-center mb-8">
          <img
            src="/assets/images/hero.svg"
            alt="Register Illustration"
            className="w-full h-auto object-contain max-w-md"
          />
        </div>

        <div className="flex flex-col justify-start">
          <div className="flex flex-col w-full gap-5">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
              Selamat Datang 👋
            </h1>
            <p>
              Kami hadir untuk mendampingi siswa siswi dalam mengatasi masalah
              belajar, pribadi, dan karier.
            </p>
          </div>

          <form className="flex flex-col gap-4 mt-4">
            <div className="w-full">
              <label className="block mb-2 font-medium">Nama Lengkap</label>
              <TextInput
                color="primary"
                type="text"
                placeholder="Nama Lengkap"
                required
              />
            </div>

            <div className="w-full">
              <label className="block mb-2 font-medium">Kelas</label>
              <TextInput
                color="primary"
                type="text"
                placeholder="XI RPL 2"
                required
              />
            </div>

            <div className="w-full">
              <label className="block mb-2 font-medium">Email</label>
              <TextInput
                color="primary"
                type="email"
                placeholder="example@telkomstudent-pwt.ac.id"
                required
              />
            </div>

            <div className="w-full">
              <label className="block mb-2 font-medium">Password</label>
              <div className="relative">
                <TextInput
                  color="primary"
                  type={inputType}
                  placeholder="Password"
                  required
                />
                <div
                  onClick={toggleVisibility}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                >
                  <EyeIcon className="h-5 w-5" />
                </div>
              </div>
            </div>

            <Button color="primary" size="md" type="submit" className="mt-4">
              Register
            </Button>

            <p className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-red-700 font-medium hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
