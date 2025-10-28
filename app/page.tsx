import Image from "next/image";
import Hello from "./components/Hello";

export default function Home() {
  console.log("hello");
  
  return (
    <div>
      <Hello />
      <h1 className="text-3xl font-bold">Welcome to My Next App</h1>
    </div>
  );
}
