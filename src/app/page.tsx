import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LogoButtonsGroup from "@/components/home/LogoButtonsGroup";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundImage: "url(/hogwarts-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoButtonsGroup />
      </main>
      <Footer />
    </div>
  );
}
