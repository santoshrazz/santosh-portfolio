"use client";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  ImageIcon,
  Heading1,
  Heading2,
  Undo,
  Redo,
  X,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [mainThumbnail, setmainThumbnail] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
    ],
    content: "<p>Start writing your blog post here...</p>",
    immediatelyRender: false,
  });

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleThumbnailChange = async (e) => {
    const file = e.target.files?.[0];
    try {
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setThumbnail(event.target?.result);
        };
        reader.readAsDataURL(file);
        const formData = new FormData();
        formData.append("file", file);
        const { data } = await axios.post("/api/upload", formData);
        console.log("data", data);
        if (data?.success) {
          setmainThumbnail(data?.imageUrl);
        } else if (!data?.success) {
          toast.error(data?.Message || "Error while uploading thumbnail");
          setmainThumbnail("");
          setThumbnail("");
        }
      }
    } catch (error) {
      toast.error("Error while uploading thumbnail");
    }
  };

  const addImage = () => {
    const url = window.prompt("Enter the URL of the image:");
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const uploadImage = async (e) => {
    const file = e.target.files?.[0];
    if (file && editor) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const { data } = await axios.post("/api/upload", formData);
        console.log("data", data);
        if (data?.success) {
          editor.chain().focus().setImage({ src: data?.imageUrl }).run();
        }
      } catch (error) {}
    }
  };

  const handleAddBlog = async () => {
    try {
      const dataToSend = {
        title,
        description: editor.getHTML(),
        thumbnail: mainThumbnail,
        tags,
        category,
      };
      const { data } = await axios.post("/api/blog", dataToSend);
      console.log("data", data);
      if (data?.success) {
        toast.success("Blog Added SuccessFully");
        setTitle("");
        setCategory("");
        setTags([]);
        setCurrentTag("");
        setThumbnail("");
        setmainThumbnail("");
      } else {
        toast.error(data.message || "Error while adding blog");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Error while adding blog");
    }
  };
  return (
    <div className="dark min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>

          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-700 border-gray-600"
              />
            </div>

            {/* Description - Tiptap Editor */}
            <div className="space-y-2">
              <Label>Description</Label>
              <div className="border border-gray-700 rounded-md overflow-hidden">
                <div className="bg-gray-700 p-2 flex flex-wrap gap-2 border-b border-gray-600">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    className={editor?.isActive("bold") ? "bg-gray-600" : ""}
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    className={editor?.isActive("italic") ? "bg-gray-600" : ""}
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      editor?.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className={
                      editor?.isActive("heading", { level: 1 })
                        ? "bg-gray-600"
                        : ""
                    }
                  >
                    <Heading1 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      editor?.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className={
                      editor?.isActive("heading", { level: 2 })
                        ? "bg-gray-600"
                        : ""
                    }
                  >
                    <Heading2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      editor?.chain().focus().toggleBulletList().run()
                    }
                    className={
                      editor?.isActive("bulletList") ? "bg-gray-600" : ""
                    }
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      editor?.chain().focus().toggleOrderedList().run()
                    }
                    className={
                      editor?.isActive("orderedList") ? "bg-gray-600" : ""
                    }
                  >
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={addImage}>
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                  <label>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="cursor-pointer"
                      onClick={() =>
                        document.getElementById("inline-image-upload")?.click()
                      }
                    >
                      Upload Image
                    </Button>
                    <input
                      id="inline-image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={uploadImage}
                    />
                  </label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => editor?.chain().focus().undo().run()}
                  >
                    <Undo className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => editor?.chain().focus().redo().run()}
                  >
                    <Redo className="h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gray-700 min-h-[200px] p-4">
                  <EditorContent
                    editor={editor}
                    className="prose prose-invert max-w-none"
                  />
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <div className="flex gap-2">
                <Input
                  id="tags"
                  placeholder="Add a tag"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTag()}
                  className="bg-gray-700 border-gray-600"
                />
                <Button onClick={addTag}>Add</Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {tag}
                    <button onClick={() => removeTag(tag)} className="ml-1">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Thumbnail */}
            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail</Label>
              <div className="flex flex-col gap-2">
                <Input
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="bg-gray-700 border-gray-600"
                />
                {thumbnail && (
                  <div className="relative mt-2 w-full max-w-xs">
                    <img
                      src={thumbnail || "/placeholder.svg"}
                      alt="Thumbnail preview"
                      className="rounded-md max-h-40 object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setThumbnail(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full" onClick={handleAddBlog}>
              Publish Blog Post
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
