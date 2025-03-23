import { Banner } from "../components/Banner";
import { Communication } from "../components/Communication";
import { Found } from "../components/Found";
import Header from "../components/Header";
import { HowItWorks } from "../components/HowItWorks";
import { Lost } from "../components/Lost";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <HowItWorks/>
    <Lost />
    <Found />
    <Communication />
    </>
  );
}
