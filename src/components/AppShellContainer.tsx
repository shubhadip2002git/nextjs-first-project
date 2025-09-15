import {
  AppShell,
  AppShellMain,
  AppShellHeader,
  AppShellFooter,
} from "@mantine/core";

import Header from "@/components/header";
import Footer from "@/components/footer";
import MainContainer from "./MainContainer";

export function AppShellContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      header={{ height: 65 }}
      footer={{ height: 65 }}
      withBorder={false}
    >
      <AppShellHeader>
        <Header />
      </AppShellHeader>

      <AppShellMain>
        <MainContainer>{children}</MainContainer>
      </AppShellMain>

      <AppShellFooter>
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
}
