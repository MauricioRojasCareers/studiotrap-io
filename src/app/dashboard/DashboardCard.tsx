import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/app/components/ui/card";
import DashboardSpinner from "./DashboardSpinner";

export default async function DashboardCard() {
  return (
    <>
      {/* Main Panel Content */}
      <div className="lg:block w-[100%] p-2 overflow-y-auto max-h-screen">
        <div className="flex flex-col gap-2 font-bold">
          <Card>
            <CardHeader className="flex flex-row justify-around">
              <CardTitle>Dashboard Item...</CardTitle>
              <DashboardSpinner width={50} height={50}></DashboardSpinner>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around">
                <p>Coming Soon...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
