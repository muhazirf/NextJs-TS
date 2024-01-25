import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });

// adding secondary font with ts weight 400
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400'] });