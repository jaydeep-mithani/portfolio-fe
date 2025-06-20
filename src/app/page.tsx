import {
  About,
  Contact,
  Experience,
  Hero,
  Languages,
  Projects,
} from "@/sections";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Languages />
      <Projects />
      <Experience />
      <Contact />
    </Fragment>
  );
}
