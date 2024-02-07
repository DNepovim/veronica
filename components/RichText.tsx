import React from "react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { A, H1, H2, H3, Strong } from "./Typography";

export const RichText: React.FC<{ content: TinaMarkdownContent }> = ({ content }) => (
  <TinaMarkdown
    components={{
      h1: (props) => <H1 {...props} />,
      h2: (props) => <H2 {...props} />,
      h3: (props) => <H3 {...props} />,
      h4: (props) => <H3 {...props} />,
      h5: (props) => <H3 {...props} />,
      h6: (props) => <H3 {...props} />,
      a: (props) => <A {...props} href={props?.url} />,
      strong: (props) => <Strong {...props} />,
    }}
    content={content}
  />
);
