"use client";

import Avatar from "@/components/Avatar";
import Chip from "@/components/Chip";
import Tooltip from "@/components/Tooltip";
import Button from "@/components/input/Button";
import Checkbox from "@/components/input/Checkbox";
import Input from "@/components/input/Input";
import Radio from "@/components/input/Radio";
import Switch from "@/components/input/Switch";
import Textarea from "@/components/input/Textarea";

export default function Page() {
  return (
    <div className="text-white p-4 h-screen w-full flex items-center justify-center bg-dark-400">
      <h1 className="text-heading-xl bg-2cg-4 text-transparent inline-block bg-clip-text">
        Hello, world!
      </h1>
      <Button label="test" type="button" />
      <Checkbox label="test" checked={true} onChange={() => {}} />
      <Input label="test" type="text" value="test" onChange={() => {}} />
      <Radio label="test" checked={true} onChange={() => {}} />
      <Switch label="test" checked={true} onChange={() => {}} />
      <Textarea label="test" value="test" onChange={() => {}} />
      <Avatar src="https://avatars.githubusercontent.com/u/472312" alt="test" />
      <Chip label="test" />
      <Tooltip label="test" />
    </div>
  );
}
