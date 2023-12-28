"use client";
import { Plate } from "@udecode/plate-common";
import { Editor } from "@/components/plate-ui/editor";

export default function Home() {
  return (
    <Plate initialValue={initialValue}>
      <Editor placeholder="Type..." />
    </Plate>
  );
}

const initialValue = [
  {
    type: "p",
    children: [
      {
        text: "This is editable plain text with react and history plugins, just like a <textarea>!",
      },
    ],
  },
];
