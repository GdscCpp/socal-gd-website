"use client";

import Avatar from "@/components/Avatar";
import Chip, { CHIP_VARIANTS } from "@/components/Chip";
import Tooltip from "@/components/Tooltip";
import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
import Checkbox, { CHECKBOX_VARIANTS } from "@/components/input/Checkbox";
import Input from "@/components/input/Input";
import Radio, { RADIO_VARIANTS } from "@/components/input/Radio";
import Switch from "@/components/input/Switch";
import Textarea from "@/components/input/Textarea";

export default function Page() {
  return (
    <div className="text-white p-4 h-screen w-full flex items-center justify-center bg-dark-400">
      <h1 className="text-heading-xl bg-2cg-4 text-transparent inline-block bg-clip-text">
        Hello, world!
      </h1>

      {/* just showing all the buttons here, delete later*/}
      <div className="flex flex-col space-y-3 pr-3">
        <Button
          label="Test"
          type="button"
          variant={BUTTON_VARIANTS.PRIMARY_LG}
        />
        <Button
          label="Test"
          type="button"
          disabled={true}
          variant={BUTTON_VARIANTS.PRIMARY_LG}
        />
      </div>
      <div className="flex flex-col space-y-3 pr-3">
        <Button
          label="Test"
          type="button"
          variant={BUTTON_VARIANTS.SUCCESS_LG}
        />
        <Button
          label="Test"
          type="button"
          disabled={true}
          variant={BUTTON_VARIANTS.SUCCESS_LG}
        />
      </div>
      <div className="flex flex-col space-y-3 pr-3">
        <Button
          label="Test"
          type="button"
          variant={BUTTON_VARIANTS.DANGER_LG}
        />
        <Button
          label="Test"
          type="button"
          disabled={true}
          variant={BUTTON_VARIANTS.DANGER_LG}
        />
      </div>
      <div className="flex flex-col space-y-3 pr-3">
        <Button
          label="Test"
          type="button"
          variant={BUTTON_VARIANTS.WARNING_LG}
        />
        <Button
          label="Test"
          type="button"
          disabled={true}
          variant={BUTTON_VARIANTS.WARNING_LG}
        />
      </div>
      <div className="flex flex-col space-y-3 pr-3">
        <Button
          label="Test"
          type="button"
          variant={BUTTON_VARIANTS.GRADIENT_1_LG}
        />
        <Button
          label="Test"
          type="button"
          disabled={true}
          variant={BUTTON_VARIANTS.GRADIENT_1_LG}
        />
      </div>
      <div className="flex flex-col space-y-3 pr-3">
        <Button
          label="Test"
          type="button"
          variant={BUTTON_VARIANTS.GRADIENT_2_LG}
        />
        <Button
          label="Test"
          type="button"
          disabled={true}
          variant={BUTTON_VARIANTS.GRADIENT_2_LG}
        />
      </div>

      {/* showing all chips, delete later */}
      <Chip label="test" variant={CHIP_VARIANTS.TRANSPARENT} />
      <Chip label="test" variant={CHIP_VARIANTS.SOLID} />
      <Chip label="test" variant={CHIP_VARIANTS.TRANSPARENT} disabled={true} />
      <Chip label="test" variant={CHIP_VARIANTS.SOLID} disabled={true} />

      <div className="flex flex-col space-y-3 pr-3">
        <Checkbox
          label="Option1"
          checked
          onChange={() => {}}
          variant={CHECKBOX_VARIANTS.CHECKBOX_PADDING_ON_LG}
          disabled={false}
        />
        {/* <Checkbox
          label="Option2"
          checked
          onChange={() => {}}
          variant={CHECKBOX_VARIANTS.CHECKBOX_PADDING_OFF_LG}
          disabled={false}
        />
        <Checkbox
          label="Option3"
          checked
          onChange={() => {}}
          variant={CHECKBOX_VARIANTS.CHECKBOX_DISABLED_LG}
          disabled={true}
        />
        <Checkbox
          label="Option3"
          checked={true}
          onChange={() => {}}
          variant={CHECKBOX_VARIANTS.CHECKBOX_DISABLED_LG}
          disabled={true}
        /> */}
      </div>

      <Input label="test" type="text" value="test" onChange={() => {}} />

      {/* showing all radio, delete later */}
      <div className="flex flex-col space-y-3 pr-3">
        <Radio
          label="Option1"
          checked
          onChange={() => {}}
          variant={RADIO_VARIANTS.RADIO_PADDING_ON_LG}
          disabled={false}
        />
        <Radio
          label="Option2"
          checked
          onChange={() => {}}
          variant={RADIO_VARIANTS.RADIO_PADDING_OFF_LG}
          disabled={false}
        />
        <Radio
          label="Option3"
          checked
          onChange={() => {}}
          variant={RADIO_VARIANTS.RADIO_DISABLED}
          disabled={true}
        />
        <Radio
          label="Option3"
          checked
          onChange={() => {}}
          variant={RADIO_VARIANTS.RADIO_DISABLED}
          disabled={true}
        />
      </div>

      <Switch label="test" checked={true} onChange={() => {}} />
      <Textarea label="test" value="test" onChange={() => {}} />
      <Avatar src="https://avatars.githubusercontent.com/u/472312" alt="test" />

      <Tooltip label="test" />
    </div>
  );
}
