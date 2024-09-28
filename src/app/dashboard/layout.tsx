import MobileDashBoard from "./MobileDashBoard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MobileDashBoard />

      <div className="w-full h-screen bg-yellow-300 p-2 hidden md:block lg:block">
        <div className="bg-teal-800 flex w-full md:px-16 md:py-4 p-4 mb-20 h-full">
          <div className="bg-blue-900 hidden lg:block lg:w-[33%] md:w-[20%] p-2 overflow-y-auto max-h-screen mt-14 lg:text-lg md:text-md text-xs">
            <div className="flex flex-col gap-2 font-bold">
              <div className="bg-green-500 flex">
                <h2 className="bg-orange-100 text-right w-full pr-10 truncate">
                  From Layout: "Hello World"{" "}
                </h2>
              </div>
              {/* Example scrollable content */}
              <div className="space-y-4 bg-white text-right p-8 text-black">
                {[...Array(150)].map((_, index) => (
                  <div className="flex flex-row" key={index}>
                    <div className="bg-red-200 w-[33%]">hello?</div>

                    <p>Item {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="bg-orange-100 p-4 flex-grow overflow-y-auto max-h-screen mt-14">
            {children}
            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>

            <p>This is main content</p>
            <p>This is main content</p>
          </div>
        </div>
      </div>
    </>
  );
}
