import StudioCard from "~/app/components/StudioCard"; // Adjust the path as needed

export default function ListingsPage() {
  const studios = [
    {
      id: 1,
      image: "/homestudio.jpg",
      title: "Modern Recording Studio",
      rating: "4.9",
      details: "Professional studio · 2 hours minimum",
      price: "$50",
    },
    {
      id: 2,
      image: "/homestudio.jpg",
      title: "Cozy Home Studio",
      rating: "4.7",
      details: "Home studio · Flexible hours",
      price: "$30",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
    {
      id: 3,
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
  ];

  return (
    <section className="w-full bg-white p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto px-4">
        {studios.map((studio) => (
          <StudioCard key={studio.id} {...studio} />
        ))}
      </div>
    </section>
    // <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff] text-white pt-8">
    //   <div className="container mx-auto px-4">
    //     <h1 className="text-4xl font-bold mb-8">Available Studios</h1>
    //     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    //       {studios.map((studio) => (
    //         <StudioCard key={studio.id} {...studio} />
    //       ))}
    //     </div>
    //   </div>
    // </main>
  );
}
