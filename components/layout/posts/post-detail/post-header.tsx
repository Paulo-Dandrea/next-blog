import * as React from 'react';
import classes from './post-header.module.css'
import Image from 'next/image'
// TODO: better import system
import { PostHeaderProps } from '../../../../types/types';

export function PostHeader ({title, image}: PostHeaderProps) {
  
  return (
    <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={150} />

    </header>
  );
}

export default PostHeader