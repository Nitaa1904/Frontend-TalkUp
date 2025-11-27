import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    nama_lengkap: "",
    kelas: "",
    email: "",
    password: "",
  });

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.nama_lengkap.trim()) {
      newErrors.nama_lengkap = "Nama lengkap wajib diisi";
    } else if (form.nama_lengkap.trim().length < 3) {
      newErrors.nama_lengkap = "Nama lengkap minimal 3 karakter";
    }

    if (!form.kelas.trim()) {
      newErrors.kelas = "Kelas wajib diisi";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!form.password) {
      newErrors.password = "Password wajib diisi";
    } else if (form.password.length < 8) {
      newErrors.password = "Password minimal 8 karakter";
    } else if (!/(?=.*[a-z])/.test(form.password)) {
      newErrors.password = "Password harus mengandung huruf kecil";
    } else if (!/(?=.*[A-Z])/.test(form.password)) {
      newErrors.password = "Password harus mengandung huruf besar";
    } else if (!/(?=.*\d)/.test(form.password)) {
      newErrors.password = "Password harus mengandung angka";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        nama_lengkap: form.nama_lengkap.trim(),
        kelas: form.kelas.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      };

      console.log("Payload yang dikirim:", payload);

      const response = await axios.post(`${API_URL}/auth/register`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response sukses:", response.data);
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch (err) {
      console.error("Error status:", err.response?.status);
      console.error("Error response data:", err.response?.data);

      if (err.response?.status === 400) {
        const apiErrors = err.response?.data?.errors;

        if (Array.isArray(apiErrors)) {
          const errorMap = {};
          apiErrors.forEach((error) => {
            if (error.includes("Nama lengkap")) {
              errorMap.nama_lengkap = error;
            } else if (error.includes("Kelas")) {
              errorMap.kelas = error;
            } else if (error.includes("Email") || error.includes("email")) {
              errorMap.email = error;
            } else if (error.includes("Password")) {
              errorMap.password = error;
            }
          });
          setErrors(errorMap);
          alert("Validasi input gagal. Periksa form Anda.");
        } else {
          alert(
            err.response?.data?.message ||
              "Data tidak valid. Periksa kembali form Anda."
          );
        }
      } else if (err.response?.status === 409) {
        setErrors({ email: "Email sudah terdaftar" });
        alert("Email sudah terdaftar. Gunakan email lain atau login.");
      } else {
        alert(
          err.response?.data?.message || "Registrasi gagal. Silakan coba lagi."
        );
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

          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <div className="w-full">
              <label className="block mb-2 font-medium">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <TextInput
                name="nama_lengkap"
                color={errors.nama_lengkap ? "failure" : "primary"}
                type="text"
                placeholder="Nama Lengkap"
                value={form.nama_lengkap}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.nama_lengkap && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nama_lengkap}
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-2 font-medium">
                Kelas <span className="text-red-500">*</span>
              </label>
              <TextInput
                name="kelas"
                color={errors.kelas ? "failure" : "primary"}
                type="text"
                placeholder="XI RPL 2"
                value={form.kelas}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.kelas && (
                <p className="text-red-500 text-sm mt-1">{errors.kelas}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-2 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <TextInput
                name="email"
                color={errors.email ? "failure" : "primary"}
                type="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-2 font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <TextInput
                  name="password"
                  color={errors.password ? "failure" : "primary"}
                  type={inputType}
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                />
                <div
                  onClick={toggleVisibility}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                >
                  <EyeIcon className="h-5 w-5" />
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
              <p className="text-gray-500 text-xs mt-1">
                Password minimal 8 karakter, mengandung huruf besar, huruf
                kecil, dan angka
              </p>
            </div>

            <Button
              color="primary"
              size="md"
              type="submit"
              className="mt-4"
              disabled={loading}
            >
              {loading ? "Memproses..." : "Register"}
            </Button>

            <p className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-red-700 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
