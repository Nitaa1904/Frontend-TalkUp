import { useNavigate, useLocation } from "react-router-dom";
import { breadcrumbConfig } from "../../../utils/breadcrumbConfig";

const Breadcrumb = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const pathnames = location.pathname.split("/").filter((x) => x);
  
  const isNumeric = (str) => /^\d+$/.test(str);
  
  const getFilteredPathnames = () => {
    const filtered = [];
    
    for (let i = 0; i < pathnames.length; i++) {
      const segment = pathnames[i];
      if (segment === "dashboard") continue;
      
      if (segment === "superadmin") {
        const hasSubMenu = pathnames.includes("daftar-guru-bk") || pathnames.includes("daftar-siswa");
        
        if (!hasSubMenu) {
          filtered.push("dashboard");
        }
        continue;
      }
      if (isNumeric(segment)) {
        const prevSegment = pathnames[i - 1];
        if (prevSegment === "view" || prevSegment === "edit" || prevSegment === "add") {
          continue;
        } else {
          filtered.push("view");
          continue;
        }
      }
      
      filtered.push(segment);
    }
    
    return filtered;
  };
  
  const filteredPathnames = getFilteredPathnames();
  
  const handleClick = (index) => {
    const clickedSegment = filteredPathnames[index];
    
    if (clickedSegment === "dashboard") {
      navigate("/dashboard/superadmin");
      return;
    }
    
    if (clickedSegment === "daftar-guru-bk") {
      navigate("/dashboard/superadmin/daftar-guru-bk");
      return;
    }
    
    if (clickedSegment === "daftar-siswa") {
      navigate("/dashboard/superadmin/daftar-siswa");
      return;
    }
    
    if (clickedSegment === "konsultasi") {
      navigate("/dashboard/konsultasi");
      return;
    }
    
    if (clickedSegment === "riwayat") {
      navigate("/dashboard/riwayat");
      return;
    }
    const originalIndex = pathnames.indexOf(clickedSegment);
    if (originalIndex !== -1) {
      const path = `/${pathnames.slice(0, originalIndex + 1).join("/")}`;
      navigate(path);
    }
  };

  return (
    <nav className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {filteredPathnames.map((value, index) => {
          const isLast = index === filteredPathnames.length - 1;
          const label = breadcrumbConfig[value] || value;
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {isLast ? (
                <span className="font-semibold text-gray-900">{label}</span>
              ) : (
                <button
                  onClick={() => handleClick(index)}
                  className="hover:text-red-700 hover:underline"
                >
                  {label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;