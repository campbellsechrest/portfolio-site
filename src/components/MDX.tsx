"use client";
import React from "react";

export const mdxComponents = {
  h2: (props: any) => <h2 className="mt-10 text-2xl font-semibold" {...props} />,
  h3: (props: any) => <h3 className="mt-8 text-xl font-semibold" {...props} />,
  p: (props: any) => <p className="leading-7 my-4" {...props} />,
  a: (props: any) => <a className="underline underline-offset-2" {...props} />,
  pre: (props: any) => (
    <pre className="rounded-xl p-4 overflow-x-auto bg-zinc-900 text-zinc-50 my-6" {...props} />
  ),
  code: (props: any) => <code className="px-1 py-0.5 rounded" {...props} />,
  table: (props: any) => (
    <table
      className="w-full border-collapse my-6
                 [&_th]:text-left [&_th]:font-medium
                 [&_*]:border [&_*]:border-zinc-200 dark:[&_*]:border-zinc-800
                 [&_*]:p-3"
      {...props}
    />
  ),
};
