import { Tweet } from "react-tweet";
import { HomeScreen } from "@/components/screens/home-screen";

export default async function Page() {
  return (
    <HomeScreen
      tweet={<Tweet id="2008981588332433738" />}
    />
  );
}
