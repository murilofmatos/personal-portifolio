import Device from "@/components/Device";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#202020] flex justify-center items-ceter lg:p-20">
      <Device>
        <StatusBar />
      </Device>
    </main>
  );
}

