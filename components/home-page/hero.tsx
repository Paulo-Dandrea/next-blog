import * as React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import proficePic from '../../public/images/site/eu_com_larissa.png'

export interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={proficePic}
          alt="default vercel"
          width={300}
          height={300}
        />
      </div>
        <h1>Hi, I&apos;m Paulo</h1>
        <p>I&apos;m a software engineer based in Brazil</p>
    </section>
  );
}
