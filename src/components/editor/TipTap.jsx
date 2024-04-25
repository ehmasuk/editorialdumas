import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { AiOutlineItalic } from "react-icons/ai";
import { GoBold } from "react-icons/go";
import "./tiptap.css";

const content = ``;

function TipTap({ getEditorData }) {
    const handleTiptapData = () => {
        const html = editor.getHTML();
        getEditorData(html);
    };

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "Write something …",
            }),
        ],
    });

    if (!editor) {
        return null;
    }

    editor.on("update", () => {
        handleTiptapData();
    });

    return (
        <div className="editor">
            <div className="editor-panel">
                <div onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "is-active" : ""}>
                    <GoBold />
                </div>
                <div onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()} className={editor.isActive("italic") ? "is-active" : ""}>
                    <AiOutlineItalic />
                </div>
            </div>

            <div className="editor-body">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}

export default TipTap;
