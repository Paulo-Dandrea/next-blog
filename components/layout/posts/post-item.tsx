import * as React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";
import { TPost } from "../../../types/types";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface Props {
  post: TPost;
  key: string;
}

export function PostItem(props:Props) {
  const { title, image, excerpt, date, slug } = props.post;
  const {key} = props;

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post} key={key}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatDate(date)}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
