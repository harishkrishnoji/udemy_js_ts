import { 
  HomeIcon,
  CogIcon,
  LinkIcon,
  Square3Stack3DIcon,
  TableCellsIcon,
  CodeBracketIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

const iconComponents = {
  HomeIcon,
  CogIcon,
  LinkIcon,
  Square3Stack3DIcon,
  TableCellsIcon,
  CodeBracketIcon,
  ArrowPathRoundedSquareIcon,
};

export const Icon = ({name, className="h-5 w-5"}) => {
  console.log("Icon", name);
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.error(`Icon ${name} not found`);
    return <div className={`${className} bg-gray-300 rounded`}></div>;
  }
  // In a real app, you would import and use actual icons
  // return <div className="w-5 h-5 bg-gray-300 rounded"></div>;
  return <IconComponent className={className} />;
};