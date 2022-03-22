import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as React from "react";
import { useSiteState } from '../../hooks/useSiteState';
import Drawer from '../content/drawer';
import { RawInvertTheme } from '../invertTheme';
import { StyledNavigation, StyledNavigationContent, StyledNavigationFooter, StyledNavigationHeader, StyledNavigationLink } from './navigation.styles';

const DynamicInvertTheme = dynamic(() => import('../invertTheme'), {
    ssr: false,
    loading: () => <RawInvertTheme />
});

interface INavigation {
    sidebarStyle?: boolean;
}

const Navigation: React.FC<INavigation> = (props) => {
    const { navOpen } = useSiteState();

    return (
        <StyledNavigation sidebarStyle={props.sidebarStyle} open={navOpen}>
            <StyledNavigationContent sidebarStyle={props.sidebarStyle} open={navOpen}>
                <div>
                    <StyledNavigationLink>
                        <Link href={'/demo'}>Demo</Link>
                    </StyledNavigationLink>
                    <StyledNavigationHeader>Functions</StyledNavigationHeader>
                    <StyledNavigationLink>
                        <Link href={'/functions/documentHeight'}>documentHeight()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/windowHeight'}>windowHeight()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/windowWidth'}>windowWidth()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/scrollTopDistance'}>scrollTopDistance()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/scrollLeftDistance'}>scrollLeftDistance()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/height'}>height()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/width'}>width()
                        </Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/topEdgeDistance'}>topEdgeDistance()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/bottomEdgeDistance'}>bottomEdgeDistance()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/leftEdgeDistance'}>leftEdgeDistance()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/rightEdgeDistance'}>rightEdgeDistance()</Link>
                    </StyledNavigationLink>
                    <StyledNavigationLink>
                        <Link href={'/functions/inViewport'}>inViewport()</Link>
                    </StyledNavigationLink>
                </div>
                <StyledNavigationFooter sidebarStyle={props.sidebarStyle}>
                    <DynamicInvertTheme />
                </StyledNavigationFooter>
            </StyledNavigationContent>
        </StyledNavigation>
    )
}

export default Navigation;