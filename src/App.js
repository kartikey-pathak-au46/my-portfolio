import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Kartikey Pathak",
    location: "Gurugram, HR",
    email: "kartikey963@gmail.com",
    availability: "Open for work",
    brand:
      "Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions. Proven experience developing consumer-focused websites using HTML, CSS, PHP and JavaScript. Good knowledge of the best practices for web design, user experience, and speed.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
