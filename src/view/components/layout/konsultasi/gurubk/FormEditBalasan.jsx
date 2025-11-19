import { InfoCircleOutlined } from "@ant-design/icons";
import { TextInput, Select, Textarea } from "flowbite-react";

const FormEditBalasan = ({ data }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h1 className="text-base font-semibold mb-6">Edit Balasan</h1>

      <div className="w-full space-y-6">
        <div className="flex flex-row gap-8">
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="tanggalKonseling">Tanggal Konseling</label>
            <TextInput
              color="primary"
              type="date"
              id="tanggalKonseling"
              defaultValue={data.tanggalKonseling}
              required
            />
          </div>

          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="statusPengajuan">Status Pengajuan</label>
            <Select id="statusPengajuan" color="primary" defaultValue={data.status} required>
              <option value="">Pilih Status</option>
              <option value="Diterima">Diterima</option>
              <option value="Ditolak">Ditolak</option>
            </Select>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <label htmlFor="linkGoogleMeet">Link Google Meet</label>
          <TextInput
            color="primary"
            type="text"
            id="linkGoogleMeet"
            placeholder="Google meet"
            defaultValue={data.linkGoogleMeet}
          />
          <div className="flex flex-row gap-2 p-2 bg-blue-50 text-blue-500 rounded">
            <InfoCircleOutlined />
            <span>Cantumkan link google meet jika siswa memilih konseling secara daring</span>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <label htmlFor="tulisBalasan">Tulis Balasan Siswa</label>
          <Textarea
            id="tulisBalasan"
            rows={4}
            color="primary"
            placeholder="Ketik disini untuk balasan siswa"
            defaultValue={data.deskripsi}
            required
          />
          <div className="flex flex-row gap-2 p-2 bg-blue-50 text-blue-500 rounded">
            <InfoCircleOutlined />
            <span>Balasan akan di kirim ke email siswa secara otomatis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditBalasan;