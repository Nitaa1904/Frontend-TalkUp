import { Textarea } from "flowbite-react";
import { InfoCircleOutlined } from "@ant-design/icons";

const CatatanKonselingForm = ({ catatanSiswa, catatanGuruBK, readOnly = false }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg space-y-6">
      <div className="flex flex-col space-y-2">
        <label htmlFor="catatanSiswa" className="font-medium">
          Catatan Siswa
        </label>
        <Textarea
          id="catatanSiswa"
          rows={4}
          color="primary"
          placeholder="Ketik disini untuk catatan siswa"
          defaultValue={catatanSiswa}
          readOnly={readOnly}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="catatanGuruBK" className="font-medium">
          Catatan Guru BK
        </label>
        <Textarea
          id="catatanGuruBK"
          rows={4}
          color="primary"
          placeholder="Ketik disini untuk catatan guru bk"
          defaultValue={catatanGuruBK}
          readOnly={readOnly}
        />
        {!readOnly && (
          <div className="flex flex-row gap-2 p-2 bg-blue-50 text-blue-500 rounded">
            <InfoCircleOutlined />
            <span>Catatan guru bk tidak akan di bagikan kepada siswa</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatatanKonselingForm;