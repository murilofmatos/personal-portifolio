import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";

function StatusBar() {
  return (
    <div className="w-full p-1 px-4 flex text-white text-md font-semibold items-center">
      <p className="mr-5">12:34</p>
      <p className="mr-auto">Sexta-feira 03 de outubro</p>
      <IoIosWifi size={24} />
      <p className="ml-3">100%</p>
      <IoIosBatteryFull size={24} className="ml-1" />
    </div>
  );
}

export default StatusBar;

