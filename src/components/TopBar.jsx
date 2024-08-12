import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import LogoutPopUp from "./LogoutPopUp"; // Import the LogoutPopUp component

function TopBar() {
	const [showLogoutPopUp, setShowLogoutPopUp] = useState(false);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setShowLogoutPopUp(false);
		// Redirect to login page or perform any other logout actions
		window.location.href = "/login";
	};

	const handleLogoutClick = () => {
		setShowLogoutPopUp(true);
	};

	const handleCancelLogout = () => {
		setShowLogoutPopUp(false);
	};

	return (
		<div className="h-16 w-screen bg-white dark:bg-[#1F1F1F] fixed px-14 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
			<b>Onebox</b>

			<div className="pr-10 flex items-center">
				<ThemeToggle /> &nbsp;
				<span
					className="cursor-pointer flex items-center"
					onClick={handleLogoutClick}
				>
					Tim&apos;s Workspace
					<MdOutlineKeyboardArrowDown className="text-3xl ml-3" />
				</span>
			</div>

			{showLogoutPopUp && (
				<LogoutPopUp onCancel={handleCancelLogout} onLogout={handleLogout} />
			)}
		</div>
	);
}

export default TopBar;
