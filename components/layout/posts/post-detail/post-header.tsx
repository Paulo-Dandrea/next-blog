import * as React from 'react';
import classes from './post-header.module.css'
import Image from 'next/image'

export interface PostHeaderPros {
    title: string,
    image: string
}

export function PostHeader ({title, image}: PostHeaderPros) {
  return (
    <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={150} />

    </header>
  );
}
