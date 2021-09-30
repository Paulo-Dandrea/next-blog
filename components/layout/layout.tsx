import { Fragment } from "react";
import { MainNavigation } from "./main-navigation";

export interface ILayoutProps {
    children: React.ReactNode;
}

export function Layout(props: ILayoutProps) {
  return (
    <Fragment>
      <MainNavigation />
      <main>
          {props.children}
      </main>
    </Fragment>
  );
}
