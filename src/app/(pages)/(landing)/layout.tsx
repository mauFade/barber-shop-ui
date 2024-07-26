"use client";

import Page from "@/components/shared/Page";
import React from "react";

const Layout = (props: any) => {
  return <Page>{props.children}</Page>;
};

export default Layout;
