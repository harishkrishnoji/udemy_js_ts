import brandLogo from "@/assets/fiserv_logo_orange_rgb.png";
import "@/styles/Logo.css";

const Logo = ({ collapsed }) => (
  <div className="flex items-center justify-center h-16 shadow-sm">
    {collapsed ? (
      <div className="w-6 h-6 bg-orange-500 square-full" />
    ) : (
      <>
      {/* <div className="flex w-8 h-8 bg-orange-500 square-full" /> */}
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-orange-500 square-full" />
        <img src={brandLogo} className="logo"/>
      </div>
      </>
    )}
  </div>
)

export default Logo
