"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { useEffect, useState } from "react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link2,
  Image as ImageIcon,
  Heading1,
  Heading2,
  Heading3,
  Table as TableIcon,
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TextStyle,
      Color,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4",
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return <div className="border rounded p-4 min-h-[300px] bg-gray-50">Loading editor...</div>;
  }

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = () => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const insertTable = () => {
    if (editor && tableRows > 0 && tableCols > 0) {
      editor.chain().focus().insertTable({ rows: tableRows, cols: tableCols, withHeaderRow: true }).run();
      setShowTableDialog(false);
      setTableRows(3);
      setTableCols(3);
    }
  };

  return (
    <div className="border border-gray-300 rounded-md bg-white">
      {/* Toolbar */}
      <div className="border-b border-gray-300 p-2 flex flex-wrap gap-1 bg-gray-50">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("heading", { level: 1 }) ? "bg-gray-300" : ""
          }`}
          title="Heading 1"
        >
          <Heading1 size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""
          }`}
          title="Heading 2"
        >
          <Heading2 size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("heading", { level: 3 }) ? "bg-gray-300" : ""
          }`}
          title="Heading 3"
        >
          <Heading3 size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("bold") ? "bg-gray-300" : ""
          }`}
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("italic") ? "bg-gray-300" : ""
          }`}
          title="Italic"
        >
          <Italic size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("bulletList") ? "bg-gray-300" : ""
          }`}
          title="Bullet List"
        >
          <List size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("orderedList") ? "bg-gray-300" : ""
          }`}
          title="Numbered List"
        >
          <ListOrdered size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("blockquote") ? "bg-gray-300" : ""
          }`}
          title="Quote"
        >
          <Quote size={18} />
        </button>

        <button
          type="button"
          onClick={addLink}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("link") ? "bg-gray-300" : ""
          }`}
          title="Add Link"
        >
          <Link2 size={18} />
        </button>

        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded hover:bg-gray-200"
          title="Add Image"
        >
          <ImageIcon size={18} />
        </button>

        <button
          type="button"
          onClick={() => setShowTableDialog(true)}
          className={`p-2 rounded hover:bg-gray-200 ${
            editor.isActive("table") ? "bg-gray-300" : ""
          }`}
          title="Insert Table"
        >
          <TableIcon size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 rounded hover:bg-gray-200"
          title="Undo"
        >
          <Undo size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 rounded hover:bg-gray-200"
          title="Redo"
        >
          <Redo size={18} />
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />

      {/* Table Dialog */}
      {showTableDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Insert Table</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Rows
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={tableRows}
                  onChange={(e) => setTableRows(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Columns
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={tableCols}
                  onChange={(e) => setTableCols(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={insertTable}
                className="flex-1 bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#AA2526] hover:to-[#EA2525] text-white font-semibold py-2 px-4 rounded-md transition-all"
              >
                Create Table
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowTableDialog(false);
                  setTableRows(3);
                  setTableCols(3);
                }}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table Controls (shown when cursor is in a table) */}
      {editor.isActive("table") && (
        <div className="border-t border-gray-300 p-2 flex flex-wrap gap-1 bg-gray-50">
          <button
            type="button"
            onClick={() => editor.chain().focus().addColumnBefore().run()}
            className="px-3 py-1 text-sm rounded hover:bg-gray-200"
            title="Add Column Before"
          >
            + Col Before
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().addColumnAfter().run()}
            className="px-3 py-1 text-sm rounded hover:bg-gray-200"
            title="Add Column After"
          >
            + Col After
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().deleteColumn().run()}
            className="px-3 py-1 text-sm rounded hover:bg-gray-200"
            title="Delete Column"
          >
            - Column
          </button>

          <div className="w-px h-6 bg-gray-300 mx-1" />

          <button
            type="button"
            onClick={() => editor.chain().focus().addRowBefore().run()}
            className="px-3 py-1 text-sm rounded hover:bg-gray-200"
            title="Add Row Before"
          >
            + Row Before
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().addRowAfter().run()}
            className="px-3 py-1 text-sm rounded hover:bg-gray-200"
            title="Add Row After"
          >
            + Row After
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().deleteRow().run()}
            className="px-3 py-1 text-sm rounded hover:bg-gray-200"
            title="Delete Row"
          >
            - Row
          </button>

          <div className="w-px h-6 bg-gray-300 mx-1" />

          <button
            type="button"
            onClick={() => editor.chain().focus().deleteTable().run()}
            className="px-3 py-1 text-sm rounded hover:bg-red-200 text-red-700"
            title="Delete Table"
          >
            Delete Table
          </button>
        </div>
      )}
    </div>
  );
}
