import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  // pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// const withMDX = createMDX({
//   extension: /\.(md|mdx)$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [
//       rehypeSlug,
//       rehypeAutolinkHeadings,
//       [
//         rehypePrettyCode,
//         {
//           theme: {
//             dark: "github-dark-dimmed",
//             light: "github-light",
//           },
//           keepBackground: false,
//         },
//       ],
//     ],
//   },
// });

// export default withMDX(nextConfig);

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
