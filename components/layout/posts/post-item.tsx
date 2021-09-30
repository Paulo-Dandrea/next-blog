import * as React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";
import { Post } from "../../home-page/featured-posts";

export interface IPostItemProps {
  post: Post;
}

export function PostItem(props: IPostItemProps) {
  const { title, image, excerpt, date, slug } = props.post;

  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  console.log(imagePath);

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>July 14th 2022</time>
            <p>T{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
