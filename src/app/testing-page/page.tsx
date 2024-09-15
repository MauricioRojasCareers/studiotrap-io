import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/app/components/ui/resizable";

export default function ResizableDemo() {
  return (
    <>
      <nav className="bg-red-300 min-w-full p-4 flex justify-between">
        <p>Navbar</p>
        <p> Menu</p>
      </nav>
      <div>Hello world</div>
    </>
  );
}
