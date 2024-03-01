"use client"; // This is required!

import {MDXRemote, type MDXRemoteSerializeResult} from "next-mdx-remote";
import 'github-markdown-css';

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

import type {MDXComponents} from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}

export default function MdxContent({source}: MdxContentProps) {
  return (
    <div className={'markdown-body'}>
      <MDXRemote {...source} components={useMDXComponents}/>
    </div>
  )
}