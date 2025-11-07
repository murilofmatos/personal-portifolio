import AppIcon from "@/components/AppIcon";
import CustomCursor from "@/components/CustomCursor";
import Device from "@/components/Device";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <main
      className="w-full h-screen bg-[#202020] flex justify-center items-ceter lg:p-20 cursor-none"
      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
    >
      <CustomCursor />
      <Device>
        <div className="w-full h-full flex flex-col items-center relative">
          <StatusBar />
          <div className="grid w-full py-5 px-14 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 grid-rows-4">
            <AppIcon
              icon="/instagram-icon.png"
              alt="Ícone do Instagram"
              name="Instagram"
            />
            <AppIcon
              icon="/github-icon.png"
              alt="Ícone do GitHub"
              name="GitHub"
            />
            <AppIcon
              icon="/linkedin-icon.png"
              alt="Ícone do LinkedIn"
              name="LinkedIn"
            />
          </div>
          <div className="w-[60%] flex bg-slate-500/40 rounded-4xl backdrop-blur justify-between p-4 mt-auto mb-4">
            <AppIcon icon="/instagram-icon.png" alt="Ícone do Instagram" />
            <AppIcon icon="/github-icon.png" alt="Ícone do GitHub" />
            <AppIcon icon="/linkedin-icon.png" alt="Ícone do LinkedIn" />
            <AppIcon icon="/instagram-icon.png" alt="Ícone do Instagram" />
            <AppIcon icon="/github-icon.png" alt="Ícone do GitHub" />
            <AppIcon icon="/linkedin-icon.png" alt="Ícone do LinkedIn" />
            <AppIcon icon="/linkedin-icon.png" alt="Ícone do LinkedIn" />
          </div>
        </div>
      </Device>
    </main>
  );
}
