import * as React from 'react';
import classes from './logo.module.css'


export interface ILogoProps {
}

export function Logo (props: ILogoProps) {
  return (
<div className={classes.logo}>Paulo's Next Blog</div>
  );
}
