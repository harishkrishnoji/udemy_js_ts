import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"

export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className="h-screen">
    <nav className="h-full flex flex-col bg-white border-r shadow-sm">
    <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className="w-32"
            alt=""
          />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <ChevronFirst />
          </button>
        </div>
    </nav>
    </aside>
  )
}
