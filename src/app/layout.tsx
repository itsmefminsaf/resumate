import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resumate",
	description:
		"Resumate is a Free AI powered CV generator that created for KendoReact Free components challenge.",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
