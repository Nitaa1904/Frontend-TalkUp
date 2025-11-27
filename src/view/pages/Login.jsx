import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        {
          email: form.email.trim().toLowerCase(),
          password: form.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response sukses:", response.data);

      // PERBAIKAN: Sesuaikan dengan struktur response API
      const { token, data: user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userRole", user.role);

      alert("Login berhasil!");

      if (user.role === "super_admin") {
        navigate("/dashboard/superadmin");
      } else if (user.role === "guru_bk") {
        navigate("/dashboard/gurubk");
      } else if (user.role === "siswa") {
        navigate("/dashboard/konsultasi");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Error status:", err.response?.status);
      console.error("Error response data:", err.response?.data);

      if (err.response?.status === 401) {
        alert("Email atau password salah");
      } else if (err.response?.status === 404) {
        alert("User tidak ditemukan");
      } else {
        alert(err.response?.data?.message || "Login gagal. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  const inputType = showPassword ? "text" : "password";
  const EyeIcon = showPassword ? EyeInvisibleOutlined : EyeOutlined;

  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-16 lg:py-16 lg:grid-cols-2 items-start">
        <div className="flex justify-center items-center mb-8">
          <img
            src="/assets/images/hero.svg"
            alt="Login Illustration"
            className="w-full h-auto object-contain max-w-md"
          />
        </div>

        <div className="flex flex-col justify-start">
          <div className="flex flex-col w-full gap-5">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
              Selamat Datang Kembali 👋
            </h1>
            <p>
              Masuk ke akun Anda untuk melanjutkan konsultasi dan mendapatkan
              dukungan dari guru BK kami.
            </p>
          </div>

          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <div className="w-full">
              <label className="block mb-2 font-medium">Email</label>
              <TextInput
                name="email"
                color="primary"
                type="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="w-full">
              <label className="block mb-2 font-medium">Password</label>
              <div className="relative">
                <TextInput
                  name="password"
                  color="primary"
                  type={inputType}
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <div
                  onClick={toggleVisibility}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                >
                  <EyeIcon className="h-5 w-5" />
                </div>
              </div>
            </div>

            <Button
              color="primary"
              size="md"
              type="submit"
              className="mt-4"
              disabled={loading}
            >
              {loading ? "Memproses..." : "Login"}
            </Button>

            <p className="text-sm text-gray-600">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="text-red-700 font-medium hover:underline"
              >
                Daftar
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
