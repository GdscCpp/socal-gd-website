import Avatar from "@/components/Avatar";
import Chip, { CHIP_VARIANTS } from "@/components/Chip";
import Tooltip from "@/components/Tooltip";
import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
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

      {/* just showing all the buttons here, delete later*/}
      <div className="flex flex-col space-y-3 pr-3">
        <Button
          label="Test"
          type="button"
          disabled={false}
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
          disabled={false}
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
          disabled={false}
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
          disabled={false}
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
          disabled={false}
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
          disabled={false}
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
      <Chip label="test" variant={CHIP_VARIANTS.TRANSPARENT} disabled={false} />
      <Chip label="test" variant={CHIP_VARIANTS.SOLID} disabled={false} />
      <Chip label="test" variant={CHIP_VARIANTS.TRANSPARENT} disabled={true} />
      <Chip label="test" variant={CHIP_VARIANTS.SOLID} disabled={true} />

      <Checkbox label="test" checked={true} onChange={() => {}} />
      <Input label="test" type="text" value="test" onChange={() => {}} />
      <Radio label="test" checked={true} onChange={() => {}} />
      <Switch label="test" checked={true} onChange={() => {}} />
      <Textarea label="test" value="test" onChange={() => {}} />
      <Avatar src="https://avatars.githubusercontent.com/u/472312" alt="test" />

      <Tooltip label="test" />
    </div>
  );
}
