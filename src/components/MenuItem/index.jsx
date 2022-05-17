import React from "react";
import { useHistory } from "react-router-dom";
import { LinkArea, LinkIcon } from './styled';

export default ({ icon, link }) => {
    const history = useHistory();

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push( link );
    }

    return (
        <LinkArea href={link} onClick >
            <LinkIcon src={icon} />
        </LinkArea>
    );
}