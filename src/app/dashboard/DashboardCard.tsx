import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/app/components/ui/card";
import Spinner from "../components/Navbar/Spinner";

export default async function DashboardCard() {
  return (
    <div className="space-y-4 bg-white text-right p-6    text-black">
      {[...Array(150)].map((_, index) => (
        <Card>
          <CardHeader>
            <CardTitle>
              <h2>Dashboard Item</h2>
            </CardTitle>
            <CardDescription>{/* <Spinner /> */}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <p>Coming Soon...</p>
              <Spinner />
            </div>
          </CardContent>
          <CardFooter>{/* <Spinner /> */}</CardFooter>
        </Card>
      ))}
    </div>
  );
}
