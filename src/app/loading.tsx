import Spinner from "./components/Navbar/Spinner";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Spinner width={100} height={100} />
    </div>
  );
}
