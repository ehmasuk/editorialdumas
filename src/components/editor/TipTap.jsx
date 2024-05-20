import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { GoBold } from "react-icons/go";
import "./tiptap.css";

import CharacterCount from "@tiptap/extension-character-count";
import TextAlign from "@tiptap/extension-text-align";
import { Tooltip } from "antd";
import { CiAlignCenterH, CiAlignLeft, CiAlignRight, CiTextAlignJustify } from "react-icons/ci";
import { GoListOrdered } from "react-icons/go";
import { PiListBullets, PiTextItalic } from "react-icons/pi";

function TipTap({ getEditorData, defaultValue, maxCharacter }) {
    const handleTiptapData = () => {
        const html = editor.getHTML();
        getEditorData(html);
    };

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                defaultAlignment: "left",
                types: ["heading", "paragraph"],
            }),
            Placeholder.configure({
                placeholder: "Escribe algo …",
            }),
            CharacterCount.configure({
                limit: maxCharacter,
            }),
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
                <Tooltip title="Itálica" mouseEnterDelay={1}>
                    <div
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        disabled={!editor.can().chain().focus().toggleItalic().run()}
                        className={`single-button ${editor.isActive("italic") ? "is-active" : ""}`}
                    >
                        <PiTextItalic />
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

                {/* alignments */}

                <Tooltip title="Alinear el texto que queda" mouseEnterDelay={1}>
                    <div
                        onClick={() => editor.chain().focus().setTextAlign("left").run()}
                        disabled={!editor.can().chain().focus().setTextAlign("left").run()}
                        className={`single-button ${editor.isActive("left") ? "is-active" : ""}`}
                    >
                        <CiAlignLeft />
                    </div>
                </Tooltip>
                <Tooltip title="Alinear el centro de texto" mouseEnterDelay={1}>
                    <div
                        onClick={() => editor.chain().focus().setTextAlign("center").run()}
                        disabled={!editor.can().chain().focus().setTextAlign("center").run()}
                        className={`single-button ${editor.isActive("center") ? "is-active" : ""}`}
                    >
                        <CiAlignCenterH />
                    </div>
                </Tooltip>
                <Tooltip title="Alinear el texto correcto" mouseEnterDelay={1}>
                    <div
                        onClick={() => editor.chain().focus().setTextAlign("right").run()}
                        disabled={!editor.can().chain().focus().setTextAlign("right").run()}
                        className={`single-button ${editor.isActive("right") ? "is-active" : ""}`}
                    >
                        <CiAlignRight />
                    </div>
                </Tooltip>
                <Tooltip title="Alinear el texto justificar" mouseEnterDelay={1}>
                    <div
                        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
                        disabled={!editor.can().chain().focus().setTextAlign("justify").run()}
                        className={`single-button ${editor.isActive("justify") ? "is-active" : ""}`}
                    >
                        <CiTextAlignJustify />
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
                <p className="total-character">
                    Characters : <b>{editor.storage.characterCount.characters()}</b>
                </p>
            </div>
        </div>
    );
}

export default TipTap;
