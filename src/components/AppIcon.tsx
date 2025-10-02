import Image from "next/image";

function AppIcon({
  icon,
  alt,
  name,
}: {
  icon: string;
  alt: string;
  name?: string;
}) {
  return (
    <div className="w-fit mx-auto">
      <Image
        src={icon}
        alt={alt}
        width={70}
        height={70}
        className="rounded-xl"
      />
      {name && <p className="text-white mt-1 text-sm text-center">{name}</p>}
    </div>
  );
}

export default AppIcon;

