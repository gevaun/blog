// import Link from 'next/link'
// import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
// import { highlight } from 'sugar-high'
import React from 'react'

// interface TableProps {
//   data: {
//     headers: string[];
//     rows: string[][];
//   };
// }

// function Table({ data }: TableProps) {
//   let headers = data.headers.map((header, index) => (
//     <th key={index}>{header}</th>
//   ))
//   let rows = data.rows.map((row, index) => (
//     <tr key={index}>
//       {row.map((cell, cellIndex) => (
//         <td key={cellIndex}>{cell}</td>
//       ))}
//     </tr>
//   ))

//   return (
//     <table>
//       <thead>
//         <tr>{headers}</tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   )
// }

// import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

// function CustomLink(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
//   let href = props.href

//   if (href.startsWith('/')) {
//     return (
//       <Link href={href} {...props}>
//         {props.children}
//       </Link>
//     )
//   }

//   if (href.startsWith('#')) {
//     return <a {...props} />
//   }

//   return <a target="_blank" rel="noopener noreferrer" {...props} />
// }

// function RoundedImage(props) {
//   return <Image alt={props.alt} className="rounded-lg" {...props} />
// }

// function Code({ children, ...props }) {
//   let codeHTML = highlight(children)
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
// }

interface Slugify {
    (str: string): string;
}

const slugify: Slugify = (str) => {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
};

interface HeadingProps {
    children: React.ReactNode;
}

function createHeading(level: number) {
    const Heading: React.FC<HeadingProps> = ({ children }) => {
        const slug = slugify(children as string);
        return React.createElement(
            `h${level}`,
            { id: slug },
            [
                React.createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor',
                }),
            ],
            children
        );
    };

    Heading.displayName = `Heading${level}`;

    return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
//   Image: RoundedImage,
//   a: CustomLink,
//   code: Code,
//   Table,
}

import { MDXRemoteProps } from 'next-mdx-remote/rsc';

interface CustomMDXProps extends MDXRemoteProps {}

export function CustomMDX(props: CustomMDXProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}
