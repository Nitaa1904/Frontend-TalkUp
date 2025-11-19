import { InfoCircleOutlined } from "@ant-design/icons";
import { TextInput, Button, Select, Textarea } from "flowbite-react";

const FormBalasanKonseling = ({ onSubmit, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h1 className="text-base font-semibold mb-6">Balas Ajuan Konseling</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-8">
        <div className="flex flex-row gap-8">
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="tanggal">Tanggal Konseling</label>
            <TextInput color="primary" type="date" id="tanggal" required />
          </div>

          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="status">Status Pengajuan</label>
            <Select id="status" color="primary" required>
              <option value="">Pilih Status Pengajuan</option>
              <option value="disetujui">Disetujui</option>
              <option value="ditolak">Ditolak</option>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="link">Link Google Meet</label>
            <TextInput
              color="primary"
              type="text"
              id="link"
              placeholder="Link google meet"
            />
            <div className="flex flex-row gap-2 p-2 bg-blue-50 text-blue-500 rounded">
              <InfoCircleOutlined /> 
              <span>Cantumkan link google meet jika siswa memilih konseling secara daring</span>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="balasan">Tulis Balasan Untuk Siswa</label>
            <Textarea
              id="balasan"
              rows={4}
              color="primary"
              placeholder="Tulis balasan untuk siswa..."
              required
            />
            <div className="flex flex-row gap-2 p-2 bg-blue-50 text-blue-500 rounded">
              <InfoCircleOutlined />
              <span>Balasan akan dikirim ke email siswa secara otomatis</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <Button color="secondary" size="md" type="button" onClick={onCancel} className="mt-4">
            Batal
          </Button>
          <Button color="primary" size="md" type="submit" className="mt-4">
            Kirim
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormBalasanKonseling;