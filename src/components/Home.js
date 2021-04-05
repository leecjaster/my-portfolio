import React from "react"
import image from "../img/fiddle-fig.jpg";

export default function Home() {
  return (
    <main>
      <img src={image} alt="fiddle-fig" className="absolute object-cover w-full h-full"/>
      <section>
        <h1>Howdy, I'm Lee.</h1>
      </section>
    </main>
  )
}