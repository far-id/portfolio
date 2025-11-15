import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  redirects() {
    return [
      {
        source: "/:locale/about",
        destination: "/:locale/about/personal.ts",
        permanent: true,
      },
      {
        source: "/:locale/about/personal",
        destination: "/:locale/about/personal.ts",
        permanent: true,
      },
      {
        source: "/:locale/about/skills",
        destination: "/:locale/about/skills.ts",
        permanent: true,
      }
    ];
  },
};


const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [
      ['rehype-pretty-code', {
        theme: {
          dark: "github-dark-dimmed",
          light: "github-light",
        },
        keepBackground: false,
      }],
    ],
  },
});


const withNextIntl = createNextIntlPlugin();
export default withMDX(withNextIntl(nextConfig));
