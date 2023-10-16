import React, { useMemo } from 'react';
import Code from "@/app/mini elements/CodeDiv";
import ReactDOMServer from "react-dom/server";
import PostHead from "../Post Components/PostHead";
import PostReactions from "../Post Components/PostReactions";

function replaceCodeTagsWithComponentHtml(html, component) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const codeElements = doc.querySelectorAll('code');

  codeElements.forEach((codeElement, index) => {
    const codeInnerHTML = codeElement.innerHTML;
    const componentHtml = ReactDOMServer.renderToStaticMarkup(
      React.cloneElement(component, { key: index, contentHtml: codeInnerHTML })
    );

    codeElement.outerHTML = componentHtml;
    codeElement.classList.add("not-prose");
  });

  return doc.body.innerHTML;
}

export default function PostText({contentHtml, isDemo, isFull}) {
  const replacedHtml = useMemo(() => {
    return (
      replaceCodeTagsWithComponentHtml(contentHtml, <Code />)
    );
  }, [contentHtml]);

    return (
        <div className={`w-full ${isFull ? "border-themeMain" : "rounded-md"} p-3 dark:bg-dark-themeBackground/90 bg-white/90 backdrop-blur-md flex flex-col gap-3`}>
            <PostHead />
            {!isDemo && <article className="text-sm px-2 py-1 line-clamp-5">
                If you really just want to filter out the first n character of a file, the tool you want is dd whuch alloes you to specify the number of blocks to skip. If you want a block size of 1, specify that with bs.
            </article>}
            {isDemo && <section className="text-sm px-2 py-1 line-clamp-none whitespace-pre-wrap prose dark:prose-invert prose-img:rounded prose-img:max-w-full prose-img:mx-auto prose-img:max-h-96 prose-h3:mb-0 prose-h2:mb-0 prose-h1:mb-0 prose-h3:leading-none prose-h3:mt-0 prose-p:not-prose prose-h2:leading-none prose-h2:mt-0 prose-h1:leading-none prose-h1:mt-0 prose-a:text-themeMain prose-img:my-0 prose-p:my-0 prose-blockquote:my-0 prose-li:my-0 prose-ul:my-0 prose-li:mb-0 prose-code:p-0 prose-pre:p-0 prose-pre:my-0 prose-code:m-0 prose-code:whitespace-pre-wrap prose-section:m-0" dangerouslySetInnerHTML={{ __html: replacedHtml ? replacedHtml : "<span>Use markdown to create post</span>"  }} />}
            <PostReactions />
        </div>
    )
}