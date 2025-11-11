import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

// layout file  is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
	return children;
}
