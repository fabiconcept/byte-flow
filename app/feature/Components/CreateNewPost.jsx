"use client"
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaH, FaQuoteLeft } from "react-icons/fa6";
import { FeedPageContext } from "../FeedPage";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import "./styles/progressSvg.css";
import { FiImage, FiBold, FiCode, FiItalic, FiLink } from "react-icons/fi";
import { isValidUrl } from "@/lib/FunctionsDictionary";
import Post from "@/app/feature component/Post Design/Post/Post";

const LocalContext = React.createContext();

export default function CreateNewPost() {
    const [characterCount, setCharacterCount] = useState(0);
    const [editText, setEditText] = useState("")
    const textareaRef = useRef(null);

    return (
        <LocalContext.Provider value={{ characterCount, setCharacterCount, textareaRef, editText, setEditText }}>
            <section className="h-full grid grid-rows-[55px_auto_60px] dark:text-white text-sm">
                <HeadPart />
                <WritePost />
                <ButtonPart />
            </section>
        </LocalContext.Provider>
    )
}

function HeadPart() {
    const { handleBack } = useContext(FeedPageContext);
    return (
        <div className="w-full grid grid-cols-[32px_auto_80px] border-b p-2 dark:bg-dark-themeBackground/20 bg-light-themeBackground/20">
            <div title="Go back" className="p-2 rounded-lg active:scale-90 dark:bg-white/10 bg-black/10 hover:dark:bg-white/20 hover:bg-black/20 cursor-pointer grid place-items-center" onClick={handleBack}>
                <FaAngleLeft />
            </div>

            <div className="grid place-items-center font-semibold">Create post</div>

            <div title="Publish post" className="p-2 rounded-lg active:scale-90 bg-themeMain/90 text-white hover:bg-themeMain font-semibold cursor-pointer grid place-items-center">
                Publish
            </div>
        </div>
    );
}

function WritePost() {
    const [textContent, setTextContent] = useState('');
    const [remarkText, setRemarkText] = useState('');

    const { setCharacterCount, textareaRef, editText } = useContext(LocalContext);

    const textWithoutSpaces = textContent.replace(/\s+/g, '');
    const numberOfCharacters = textWithoutSpaces.length;

    useEffect(() => {
        async function processText() {
            const matterResult = matter(textContent);
            const processedResult = await remark().use(remarkHtml).process(matterResult.content);

            const htmlContent = processedResult.toString();
            setRemarkText(htmlContent);
        }

        processText();
    }, [textContent]);

    useEffect(() => {
        if(editText === "") return;
        setTextContent(editText);
    }, [editText]);

    useEffect(() => {
        if (textareaRef) {
            const textAreaText = textareaRef.current.value;
            if (textAreaText === textContent) return;
            setTextContent(textAreaText);
        }
    }, [textareaRef, textContent]);

    useEffect(() => {
        textareaRef?.current?.focus();
    }, [textareaRef]);

    const handleKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();

            const textarea = textareaRef.current;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            // Insert a tab character at the cursor position
            const tab = '    '; // You can adjust the number of spaces
            const newText = textarea.value.substring(0, start) + tab + textarea.value.substring(end);

            // Update the textarea value and cursor position
            handleEditText(newText);
            textarea.selectionStart = textarea.selectionEnd = start + tab.length;
        }
        if (event.key === 'Backspace') {
            if (numberOfCharacters >= 280) {
                // Remove a character and update state
                const newTextContent = textContent.slice(0, -1);
                setTextContent(newTextContent);
                setCharacterCount(numberOfCharacters - 1);
            }
        }
    };

    const handleEditText = (text) =>{
        if (numberOfCharacters >= 280){
            return;
        }
        setTextContent(text);
        setCharacterCount(numberOfCharacters);
    }

    return (
        <section className="w-full h-full overflow-hidden p-2 pb-0 flex flex-col">
            <div className="rounded-lg overflow-hidden h-fit border-x-2 border-themeMain">
                <textarea
                    cols="40"
                    ref={textareaRef}
                    rows="10"
                    placeholder="Enter Markdown Syntax"
                    value={textContent}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => handleEditText(e.target.value)}
                    className="bg-transparent w-full p-2 dark:bg-dark-themeBackground bg-light-themeBackground resize-none whitespace-pre-wrap border-none outline-none"
                ></textarea>
            </div>
            <div className="rounded-lg overflow-y-auto w-full p-2 flex-1">
                <Post content={remarkText} isDemo={true} />
            </div>
        </section>
    );
}

function ButtonPart() {
    const { characterCount, textareaRef, setEditText } = useContext(LocalContext);
    const percentage = 100 - (characterCount / 280) * 100;
    
    const progressBarStyle = {
        strokeDashoffset: percentage > 0 ? percentage : 0
    };

    const addLink = () =>{
        function modify() {
            const textArea = textareaRef?.current
            const { selectionStart, selectionEnd } = textArea;
            const text = textArea.value;
            const selectedText = text.substring(selectionStart, selectionEnd);

            if (selectedText) {
                // Wrap the selected text with modification
                let modifiedText;
                if (isValidUrl(selectedText)) {
                    modifiedText = text.substring(0, selectionStart) + "[" + "Link Text" + "]" + `(${isValidUrl(selectedText)})` +  text.substring(selectionEnd);   
                }else{
                    modifiedText = text.substring(0, selectionStart) + "[" + selectedText + "]" + "(https://url)" +  text.substring(selectionEnd);   
                }
                setEditText(modifiedText);
                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionEnd + 6;
            } else {

                const modifiedText = text.substring(0, selectionStart) + "[" + "Link Text" + "]" + "(https://url)" + text.substring(selectionStart);
                setEditText(modifiedText);

                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionStart + 3;
            }
            const changeEvent = new Event('change', { bubbles: true });
            textArea.dispatchEvent(changeEvent);
        }
        modify();
    }

    const addImage = () =>{
        function modify() {
            const textArea = textareaRef?.current
            const { selectionStart, selectionEnd } = textArea;
            const text = textArea.value;
            const selectedText = text.substring(selectionStart, selectionEnd);

            if (selectedText) {
                // Wrap the selected text with modification
                const modifiedText = text.substring(0, selectionStart) + "![" + selectedText + "]" + "(https://imgurl)" +  text.substring(selectionEnd);
                setEditText(modifiedText);
                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionEnd + 6;
            } else {

                const modifiedText = text.substring(0, selectionStart) + "![" + "Alt Text" + "]" + "(https://imgurl)" + text.substring(selectionStart);
                setEditText(modifiedText);

                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionStart + 3;
            }
            const changeEvent = new Event('change', { bubbles: true });
            textArea.dispatchEvent(changeEvent);
        }
        modify();
    }

    const addheader = () =>{
        function modify(modification) {
            const textArea = textareaRef?.current
            const { selectionStart, selectionEnd } = textArea;
            const text = textArea.value;
            const selectedText = text.substring(selectionStart, selectionEnd);

            if (selectedText) {
                // Wrap the selected text with modification
                const modifiedText = text.substring(0, selectionStart) + modification + selectedText +  text.substring(selectionEnd);
                setEditText(modifiedText);
                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionEnd + 6;
            } else {

                const modifiedText = text.substring(0, selectionStart) + modification + "text"  + text.substring(selectionStart);
                setEditText(modifiedText);

                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionStart + 3;
            }
            const changeEvent = new Event('change', { bubbles: true });
            textArea.dispatchEvent(changeEvent);
        }
        modify("## ");
    }

    const addQuote = () =>{
        function modify(modification) {
            const textArea = textareaRef?.current
            const { selectionStart, selectionEnd } = textArea;
            const text = textArea.value;
            const selectedText = text.substring(selectionStart, selectionEnd);

            if (selectedText) {
                // Wrap the selected text with modification
                const modifiedText = text.substring(0, selectionStart) + modification + selectedText +  text.substring(selectionEnd);
                setEditText(modifiedText);
                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionEnd + 6;
            } else {

                const modifiedText = text.substring(0, selectionStart) + modification + "text"  + text.substring(selectionStart);
                setEditText(modifiedText);

                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionStart + 3;
            }
            const changeEvent = new Event('change', { bubbles: true });
            textArea.dispatchEvent(changeEvent);
        }
        modify(">");
    }

    const addBold = () =>{
        function modify(modification) {
            const textArea = textareaRef?.current
            const { selectionStart, selectionEnd } = textArea;
            const text = textArea.value;
            const selectedText = text.substring(selectionStart, selectionEnd);

            if (selectedText) {
                // Wrap the selected text with modification
                const modifiedText = text.substring(0, selectionStart) + modification + selectedText + modification + text.substring(selectionEnd);
                setEditText(modifiedText);
                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionEnd + 6;
            } else {

                const modifiedText = text.substring(0, selectionStart) + modification + "text" + modification + text.substring(selectionStart);
                setEditText(modifiedText);

                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionStart + 3;
            }
            const changeEvent = new Event('change', { bubbles: true });
            textArea.dispatchEvent(changeEvent);
        }
        modify("**");
    }

    const addItalic = () =>{
        function modify(modification) {
            const textArea = textareaRef?.current
            const { selectionStart, selectionEnd } = textArea;
            const text = textArea.value;
            const selectedText = text.substring(selectionStart, selectionEnd);

            if (selectedText) {
                // Wrap the selected text with modification
                const modifiedText = text.substring(0, selectionStart) + modification + selectedText + modification + text.substring(selectionEnd);
                setEditText(modifiedText);
                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionEnd + 6;
            } else {

                const modifiedText = text.substring(0, selectionStart) + modification + "text" + modification + text.substring(selectionStart);
                setEditText(modifiedText);

                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionStart + 3;
            }
            const changeEvent = new Event('change', { bubbles: true });
            textArea.dispatchEvent(changeEvent);
        }
        modify("_");
    }

    const addCode = () =>{
        function modify(modification) {
            const textArea = textareaRef?.current
            const { selectionStart, selectionEnd } = textArea;
            const text = textArea.value;
            const selectedText = text.substring(selectionStart, selectionEnd);

            if (selectedText) {
                // Wrap the selected text with modification
                const modifiedText = text.substring(0, selectionStart) + `${modification}\n` + selectedText + `\n${modification}` + text.substring(selectionEnd);
                setEditText(modifiedText);
                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionEnd + 6;
            } else {

                const modifiedText = text.substring(0, selectionStart) + '```\n' + "// code here" + '\n```' + text.substring(selectionStart);
                setEditText(modifiedText);

                // Adjust the cursor position
                textArea.selectionStart = selectionStart + 3;
                textArea.selectionEnd = selectionStart + 3;
            }
            const changeEvent = new Event('change', { bubbles: true });
            textArea.dispatchEvent(changeEvent);
        }
        modify("```");
    }

    return (
        <section className="w-full flex gap-3 border-t rounded-b-lg border-slate-300/50 items-center sticky bottom-0 px-3 bg-dark-themeBackground/20 dark:bg-light-themeBackground/20">
            <div className="flex-1 flex gap-3 items-center dark:text-white text-lg">
                <div onClick={addLink} title="Insert link" className="p-1 rounded-md border-2 dark:border-dark-themeBackground border-light-themeBackground hover:bg-themeMain hover:text-white hover:scale-110 active:scale-90 cursor-pointer bg-light-themeBackground/50 dark:bg-dark-themeBackground/50">
                    <FiLink />
                </div>
                <div onClick={addCode} title={`insert code block`} className="p-1 rounded-md border-2 dark:border-dark-themeBackground border-light-themeBackground hover:bg-themeMain hover:text-white hover:scale-110 active:scale-90 cursor-pointer bg-light-themeBackground/50 dark:bg-dark-themeBackground/50">
                    <FiCode />
                </div>
                <div onClick={addImage} title="Insert image" className="p-1 rounded-md border-2 dark:border-dark-themeBackground border-light-themeBackground hover:bg-themeMain hover:text-white hover:scale-110 active:scale-90 cursor-pointer bg-light-themeBackground/50 dark:bg-dark-themeBackground/50">
                    <FiImage />
                </div>
                <div onClick={addQuote} title="Insert a qoute" className="p-1 rounded-md border-2 dark:border-dark-themeBackground border-light-themeBackground hover:bg-themeMain hover:text-white hover:scale-110 active:scale-90 cursor-pointer bg-light-themeBackground/50 dark:bg-dark-themeBackground/50">
                    <FaQuoteLeft />
                </div>
                <div onClick={addBold} title="Make bold" className="p-1 rounded-md border-2 dark:border-dark-themeBackground border-light-themeBackground hover:bg-themeMain hover:text-white hover:scale-110 active:scale-90 cursor-pointer bg-light-themeBackground/50 dark:bg-dark-themeBackground/50">
                    <FiBold />
                </div>
                <div onClick={addheader} title="Insert header" className="p-1 rounded-md border-2 dark:border-dark-themeBackground border-light-themeBackground hover:bg-themeMain hover:text-white hover:scale-110 active:scale-90 cursor-pointer bg-light-themeBackground/50 dark:bg-dark-themeBackground/50">
                    <FaH />
                </div>
                <div onClick={addItalic}  title="Make italic" className="p-1 rounded-md border-2 dark:border-dark-themeBackground border-light-themeBackground hover:bg-themeMain hover:text-white hover:scale-110 active:scale-90 cursor-pointer bg-light-themeBackground/50 dark:bg-dark-themeBackground/50">
                    <FiItalic />
                </div>
            </div>
            <div className="relative grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 -rotate-90" viewBox="-1 -1 40 40">

                    <circle cx="20" cy="20" r="15.9155" className="progress-bar__background dark:stroke-dark-themeBackground stroke-light-themeBackground" />

                    <circle cx="20" cy="20" r="15.9155" style={progressBarStyle} className={`progress-bar__progress ${percentage < 0 ? "stroke-red-500" : percentage < 30 ? "stroke-yellow-500" : "stroke-themeMain"}`} />
                </svg>
                {percentage < 70 && <span className={`text-xs absolute ${percentage < 0 ? "text-red-500" : percentage < 30 ? "text-yellow-500" : "text-white"}`}>{280 - characterCount}</span>}
            </div>
        </section>
    );
}