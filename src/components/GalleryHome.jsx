import { Link } from "react-router-dom"
import { School } from "lucide-react"

const schools = [
  { id: "JNVAnini", name: "JNV Anini" },
  { id: "JNVAnjaw", name: "JNV Anjaw" },
  { id: "JnvKokrajhar", name: "JNV Kokrajhar" },
  { id: "JnvRothak", name: "JNV Rothak" },
  { id: "JnvMednipur", name: "JNV Mednipur" },
  { id: "KKCollege", name: "KK College" },
]

function GalleryHome() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white p-10">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-cyan-400 to-purple-400 text-transparent bg-clip-text">
          Select a School
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school) => (
            <Link
              key={school.id}
              to={`/gallery/${school.id}`}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-cyan-500/30"
            >
              <div className="absolute inset-0 bg-blue-600 opacity-80 transition-all duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-blue-700/90"></div>

              <div className="relative flex flex-col items-center justify-center h-40 p-6 z-10">
                <School className="w-10 h-10 mb-3 opacity-80 group-hover:opacity-100 transition-all duration-300" />
                <span className="text-xl font-semibold text-center">{school.name}</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>

              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryHome
