import "@payloadcms/next/css";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import configPromise from "@payload-config";
import React from "react";

// Import the auto-generated importMap
// @ts-ignore
import { importMap } from "./admin/importMap";

import "./custom.css";

type Args = {
  children: React.ReactNode;
};

const serverFunction = async function (args: any) {
  "use server";
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  });
};

const Layout = ({ children }: Args) => (
  <RootLayout
    config={configPromise}
    importMap={importMap}
    serverFunction={serverFunction}
  >
    {children}
  </RootLayout>
);

export default Layout;
