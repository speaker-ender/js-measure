import dynamic from "next/dynamic";
import Link from "next/link";
import * as React from "react";
import { useSiteState } from "../../hooks/useSiteState";
import Drawer from "../content/drawer";
import { RawInvertTheme } from "../invertTheme";
import {
  StyledNavGithub,
  StyledNavGithubLink,
  StyledNavigation,
  StyledNavigationContent,
  StyledNavigationContentWrapper,
  StyledNavigationFooter,
  StyledNavigationHeader,
  StyledNavigationLink,
} from "./navigation.styles";

const DynamicInvertTheme = dynamic(() => import("../invertTheme"), {
  ssr: false,
  loading: () => <RawInvertTheme />,
});

const DynamicGithub = dynamic(() => import("../../assets/github.svg"), {
  ssr: false,
});

interface INavigation {
  sidebarStyle?: boolean;
}

const Navigation: React.FC<INavigation> = (props) => {
  const { navOpen } = useSiteState();

  return (
    <StyledNavigation sidebarStyle={props.sidebarStyle} open={navOpen}>
      <StyledNavigationContent sidebarStyle={props.sidebarStyle} open={navOpen}>
        <StyledNavigationContentWrapper>
          <StyledNavigationHeader>Functions</StyledNavigationHeader>
          <StyledNavigationLink>
            <Link href={"/functions/documentHeight"}>documentHeight</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/windowHeight"}>windowHeight</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/windowWidth"}>windowWidth</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/scrollTopDistance"}>scrollTopDistance</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/scrollLeftDistance"}>
              scrollLeftDistance
            </Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/height"}>height</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/rawHeight"}>rawHeight</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/rawHeightWithMargin"}>
              rawHeightWithMargin
            </Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/width"}>width</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/rawWidth"}>rawWidth</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/rawWidthWithMargin"}>
              rawWidthWithMargin
            </Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/topEdgeDistance"}>topEdgeDistance</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/bottomEdgeDistance"}>
              bottomEdgeDistance
            </Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/leftEdgeDistance"}>leftEdgeDistance</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/rightEdgeDistance"}>rightEdgeDistance</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/inViewport"}>inViewport</Link>
          </StyledNavigationLink>
          <StyledNavigationLink>
            <Link href={"/functions/percentInViewport"}>percentInViewport</Link>
          </StyledNavigationLink>
        </StyledNavigationContentWrapper>
        <StyledNavigationFooter sidebarStyle={props.sidebarStyle}>
          <DynamicInvertTheme />
          <StyledNavGithub>
            <DynamicGithub />
            <StyledNavGithubLink
              href={"https://github.com/speaker-ender/js-measure"}
              target="_blank"
              rel="noreferrer"
            />
          </StyledNavGithub>
        </StyledNavigationFooter>
      </StyledNavigationContent>
    </StyledNavigation>
  );
};

export default Navigation;
