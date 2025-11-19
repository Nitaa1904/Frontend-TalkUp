export const guruBKData = [
  {
    id: 1,
    nama: "Ibu bk",
    role: "Guru BK",
    jabatan: "Guru BK",
    email: "gurubk@Gmail.com"
  },
  {
    id: 2,
    nama: "Ibu bk",
    role: "Guru BK",
    jabatan: "Guru BK",
    email: "gurubk@Gmail.com"
  },
  {
    id: 3,
    nama: "Bapak bk",
    role: "Guru BK",
    jabatan: "Guru BK",
    email: "gurubk@Gmail.com"
  },
  {
    id: 4,
    nama: "Bapak bk",
    role: "Guru BK",
    jabatan: "Guru BK",
    email: "gurubk@Gmail.com"
  },
  {
    id: 5,
    nama: "Ibu Siti Nurhaliza",
    role: "Guru BK",
    jabatan: "Guru BK",
    email: "siti.bk@Gmail.com"
  },
  {
    id: 6,
    nama: "Pak Ahmad Dahlan",
    role: "Guru BK",
    jabatan: "Guru BK",
    email: "ahmad.bk@Gmail.com"
  },
  {
    id: 7,
    nama: "Ibu Rina Wijaya",
    role: "Guru BK",
    jabatan: "Guru BK",
    email: "rina.bk@Gmail.com"
  },
  {
    id: 8,
    nama: "Pak Budi Santoso",
    role: "Guru BK",
    jabatan: "Guru BK",
    email: "budi.bk@Gmail.com"
  }
];

let dataStore = [...guruBKData];

export const getAll = () => {
  return [...dataStore];
};

export const getById = (id) => {
  return dataStore.find(guru => guru.id === id);
};

export const add = (newGuru) => {
  const id = dataStore.length > 0 ? Math.max(...dataStore.map(g => g.id)) + 1 : 1;
  const guru = { id, ...newGuru };
  dataStore.push(guru);
  return guru;
};

export const update = (id, updatedData) => {
  const index = dataStore.findIndex(guru => guru.id === id);
  if (index !== -1) {
    dataStore[index] = { ...dataStore[index], ...updatedData };
    return dataStore[index];
  }
  return null;
};

export const remove = (id) => {
  const index = dataStore.findIndex(guru => guru.id === id);
  if (index !== -1) {
    dataStore.splice(index, 1);
    return true;
  }
  return false;
};