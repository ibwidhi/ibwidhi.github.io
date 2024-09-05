import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="font-roboto">Hello World</div>
        <div>
          <Image src={`./github.png`} alt="github" width="64" height="64" />
        </div>
      </div>
    </main>
  );
}
