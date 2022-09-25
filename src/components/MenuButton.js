import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MenuButton({ openMenu }) {
	return (
		<div className="side-navbar-button">
			<button type="button" title="Open the side navigation!" className="menu-button" onClick={openMenu}>
				<FontAwesomeIcon className="menu-icon" icon={faBars} />
			</button>
		</div>
	);
}

export default MenuButton;
