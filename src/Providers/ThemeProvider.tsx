"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/* to solve the error ThemeProvider dont accept children, do this */
/* it will get all related component props and it will add the properties children, then will be assign to new type name */
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider> & {
  children: React.ReactNode;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}