import React, { useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { GoSearch } from "react-icons/go";
import { MdApps } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react"; // dropdown
const Navbar = () => {
  // const [langOpen, setLangOpen] = useState(false);
  // const [userOpen, setUserOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const languages = [
    // India-focus
    { code: "en", label: "English", native: "English" },
    { code: "hi", label: "Hindi", native: "हिन्दी" },
    { code: "ta", label: "Tamil", native: "தமிழ்" },
    { code: "te", label: "Telugu", native: "తెలుగు" },
    { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
    { code: "ml", label: "Malayalam", native: "മലയാളം" },
    { code: "mr", label: "Marathi", native: "मराठी" },
    { code: "bn", label: "Bengali", native: "বাংলা" },
    { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
    { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
    { code: "or", label: "Odia", native: "ଓଡ଼ିଆ" },
    { code: "as", label: "Assamese", native: "অসমীয়া" },
    { code: "ur", label: "Urdu", native: "اُردُو" },

    // Global
    { code: "es", label: "Spanish", native: "Español" },
    { code: "fr", label: "French", native: "Français" },
    { code: "de", label: "German", native: "Deutsch" },
    { code: "it", label: "Italian", native: "Italiano" },
    { code: "pt", label: "Portuguese", native: "Português" },
    {
      code: "pt-BR",
      label: "Portuguese (Brazil)",
      native: "Português (Brasil)",
    },
    { code: "tr", label: "Turkish", native: "Türkçe" },
    { code: "ar", label: "Arabic", native: "العربية" },
    { code: "he", label: "Hebrew", native: "עברית" },
    { code: "ru", label: "Russian", native: "Русский" },
    { code: "pl", label: "Polish", native: "Polski" },
    { code: "ro", label: "Romanian", native: "Română" },
    { code: "cs", label: "Czech", native: "Čeština" },
    { code: "hu", label: "Hungarian", native: "Magyar" },
    { code: "el", label: "Greek", native: "Ελληνικά" },
    { code: "nl", label: "Dutch", native: "Nederlands" },
    { code: "sv", label: "Swedish", native: "Svenska" },
    { code: "da", label: "Danish", native: "Dansk" },
    { code: "no", label: "Norwegian", native: "Norsk" },
    { code: "fi", label: "Finnish", native: "Suomi" },
    { code: "id", label: "Indonesian", native: "Indonesia" },
    { code: "ms", label: "Malay", native: "Melayu" },
    { code: "fil", label: "Filipino (Tagalog)", native: "Filipino" },
    { code: "th", label: "Thai", native: "ไทย" },
    { code: "vi", label: "Vietnamese", native: "Tiếng Việt" },
    { code: "ko", label: "Korean", native: "한국어" },
    { code: "ja", label: "Japanese", native: "日本語" },
    { code: "zh-CN", label: "Chinese (Simplified)", native: "简体中文" },
    { code: "zh-TW", label: "Chinese (Traditional)", native: "繁體中文" },
  ];
  return (
    <nav
      className="bg-black text-white flex justify-between items-center p-4 fixed w-auto left-4 right-4 top-0 z-50
    rounded-xl"
    >
      <div className="flex flex-1">
        <ul className="flex space-x-4 ">
          {["Prime Video", "Home", "Movies", "TV Shows", "Live TV"].map(
            (item) => (
              <li
                className="p-2 flex items-center justify-center border border-transparent rounded-xl transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="w-px h-6 bg-red-400 mx-2" />

      <div className="flex flex-1 justify-between items-center">
        <div className="flex flex-1">
          <ul className="flex space-x-4">
            <li
              className="p-2 flex items-center justify-center border border-transparent rounded-2xl transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
            >
              <span className="mr-2">
                <TbCategoryPlus size={20} />
              </span>
              <h1>Subscription</h1>
            </li>
          </ul>
        </div>
        {/* Icons */}
        <div className="flex justify-end">
          <ul className="flex items-center space-x-4">
            <li
              className="p-2 flex items-center justify-center border border-transparent rounded-full transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
            >
              <GoSearch size={20} />
            </li>
            {/* Language Dropdown */}
            <li className="relative group">
              <button
                className="gap-1 px-3 py-2 flex items-center justify-center border border-transparent rounded-full transition-all duration-300 ease-in-out 
                  hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
              >
                {selectedLang.toUpperCase()}
                <span className="inline group-hover:hidden">
                  <ChevronDown size={16} />
                </span>
                <span className="hidden group-hover:inline">
                  <ChevronUp size={16} />
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-[50rem] bg-slate-700/50 text-white border border-gray-500/30 rounded-lg shadow-xl z-50 backdrop-blur-md hidden group-hover:block">
                <ul className="grid grid-cols-7 gap-6 p-4 text-sm">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      className="px-2 py-2 hover:bg-gray-200 hover:text-black cursor-pointer text-center rounded-sm"
                      onClick={() => setSelectedLang(lang.code)}
                    >
                      {lang.native}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li
              className="p-2 flex items-center justify-center border border-transparent rounded-full transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
            >
              <MdApps size={20} />
            </li>
            {/* User Dropdown */}
            <li className="relative group">
              <button
                className="p-2 flex items-center justify-center border border-transparent rounded-full transition-all duration-300 ease-in-out 
   hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
              >
                <span>
                  <FaUserCircle size={25} />
                </span>
                </button>
                <div className="absolute right-2 mt-2 w-48 bg-slate-800 text-white rounded-lg shadow-lg z-50 hidden group-hover:block">
                <ul className="flex flex-col">
                  <li className="px-4 py-2 hover:bg-slate-700 cursor-pointer text-gray-400 rounded-t-lg">
                    <a href="#">Your Account</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-slate-700 cursor-pointer rounded-t-lg">
                    <a href="#">Sign In</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
                    <a href="#">Help</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-slate-700 cursor-pointer rounded-b-lg">
                    <a href="#">Watch Anywhere</a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Join Prime Button */}
            <li className="p-2 px-4 flex items-center justify-center text-white bg-blue-800 hover:bg-blue-600 hover:font-medium transition-all duration-200 rounded-xl">
              Join Prime
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
