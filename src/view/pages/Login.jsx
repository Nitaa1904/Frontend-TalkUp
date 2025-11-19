import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from "axios";

export default function Login() { 
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : "password";

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://40.117.43.104/api/v1/auth/login",
        form,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const token = response.data.token;

      if (!token) {
        alert("Token tidak ditemukan di response!");
        return;
      }

      localStorage.setItem("token", token);

      alert("Login berhasil!");
      console.log("Token:", token);

    } catch (err) {
      console.error(err.response?.data || err);
      alert("Login gagal! Periksa email atau password.");
    }
  };

  const EyeIcon = showPassword ? EyeInvisibleOutlined : EyeOutlined;

  return (
    <section className="bg-white">
      <div
        className="grid max-w-screen-xl px-4 py-8 mx-auto 
        lg:gap-12 xl:gap-16 lg:py-16 lg:grid-cols-2 items-start"
      >
        <div className="flex justify-center items-center mb-8 ">
          <img
            src="/assets/images/hero.svg"
            alt="Hero TalkUp"
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
          <form
            action=""
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <label htmlFor="email" className="block mb-2 font-medium" />
              Email
              <label />
              <TextInput
                name="email"
                color={"primary"}
                type="email"
                placeholder="email@gmail.com"
                className=""
                required
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="block mb-2 font-medium" />
              Passowrd
              <label />
              <div className="relative">
                <TextInput
                  name="password"
                  color={"primary"}
                  type={inputType}
                  placeholder="password"
                  className=""
                  required
                  onChange={handleChange}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={toggleVisibility}
                >
                  <EyeIcon className="h-5 w-5 " />
                </div>
              </div>
            </div>

            <Button color={"primary"} size="md" type="submit" className="mt-4">
              Login
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
