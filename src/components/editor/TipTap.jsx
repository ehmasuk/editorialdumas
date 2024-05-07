import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { GoBold } from "react-icons/go";
import "./tiptap.css";

import { Tooltip } from "antd";
import { GoListOrdered } from "react-icons/go";
import { PiListBullets } from "react-icons/pi";
import CharacterCount from "@tiptap/extension-character-count";

function TipTap({ getEditorData, defaultValue , maxCharacter }) {
    const handleTiptapData = () => {
        const html = editor.getHTML();
        getEditorData(html);
    };

    

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "Escribe algo …",
            }),
            CharacterCount.configure({
                limit: maxCharacter,
            })
        ],
        content: defaultValue || "",
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
                <Tooltip title="Negrita" mouseEnterDelay={1}>
                    <div
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        disabled={!editor.can().chain().focus().toggleBold().run()}
                        className={`single-button ${editor.isActive("bold") ? "is-active" : ""}`}
                    >
                        <GoBold />
                    </div>
                </Tooltip>
                <Tooltip title="Lista con viñetas" mouseEnterDelay={1}>
                    <div onClick={() => editor.chain().focus().toggleBulletList().run()} className={`single-button ${editor.isActive("bulletList") ? "is-active" : ""}`}>
                        <PiListBullets />
                    </div>
                </Tooltip>
                <Tooltip title="Lista ordenada" mouseEnterDelay={1}>
                    <div onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`single-button ${editor.isActive("orderedList") ? "is-active" : ""}`}>
                        <GoListOrdered />
                    </div>
                </Tooltip>

                <Tooltip title="Insertar emojis" mouseEnterDelay={1}>
                    <div className="emojies-button">
                        <div onClick={() => editor.chain().focus().insertContent("🙂").run()}>🙂</div>
                        <div onClick={() => editor.chain().focus().insertContent("❤️").run()}>❤️</div>
                        <div onClick={() => editor.chain().focus().insertContent("✅").run()}>✅</div>
                    </div>
                </Tooltip>
            </div>

            <div className="editor-body">
                <EditorContent editor={editor} />
            </div>
            <div className="editor-footer">
                <p className="total-character">Characters : <b>{editor.storage.characterCount.characters()}</b></p>
            </div>
        </div>
    );
}

export default TipTap;
