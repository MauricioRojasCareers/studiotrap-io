import DashboardCard from "./DashboardCard";

export default function page() {
  return (
    <div className="min-w-full ">
      <h2 className="bg-black text-white p-2 text-center fixed">
        Dashboard Items
      </h2>
      {[...Array(100)].map((_, index) => (
        <DashboardCard key={index}></DashboardCard>
      ))}
    </div>
  );
}
