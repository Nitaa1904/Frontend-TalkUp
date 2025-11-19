import { add } from '../models/GuruModel';

export const validateForm = (formData) => {
  const { email, idRef, tanggalDaftar } = formData;
  
  if (!email || !idRef || !tanggalDaftar) {
    return { valid: false, message: "Semua field harus diisi" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Format email tidak valid" };
  }

  return { valid: true };
};

export const submitGuru = (formData, callbacks) => {
  const validation = validateForm(formData);
  
  if (!validation.valid) {
    callbacks.onError(validation.message);
    return null;
  }

  const newGuru = {
    nama: formData.email.split('@')[0],
    role: formData.role,
    jabatan: formData.role,
    email: formData.email,
    idRef: formData.idRef,
    tanggalDaftar: formData.tanggalDaftar
  };

  const result = add(newGuru);
  callbacks.onSuccess("Data guru berhasil ditambahkan");
  
  return result;
};