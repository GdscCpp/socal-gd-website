import Avatar from "@/components/Avatar";
import Chip, { CHIP_VARIANTS } from "@/components/Chip";
import Tooltip from "@/components/Tooltip";
import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
import Checkbox from "@/components/input/Checkbox";
import Input from "@/components/input/Input";
import Radio from "@/components/input/Radio";
import Switch from "@/components/input/Switch";
import Textarea from "@/components/input/Textarea";
import Tab, { orientation } from "@/components/Tab";

export default function Page() {
  return (
    <div className="text-white p-4 h-screen w-full flex items-center justify-center bg-dark-400">
      <h1 className="text-heading-xl bg-2cg-4 text-transparent inline-block bg-clip-text">
        Hello, world!
      </h1>

      {/* DIV oF TABS */}
      <div className="flex flex-col items-center space-y-3">
        {/* DEFAULT TABS */}
        <div className="flex flex-row space-x-3 pr-3">
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="LIGHT_01"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="LIGHT_01"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="LIGHT_02"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="LIGHT_02"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="LIGHT_03"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="LIGHT_03"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="LIGHT_04"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="LIGHT_04"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="LIGHT_05"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="LIGHT_05"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="LIGHT_06"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="LIGHT_06"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="DARK_07"
            rounded={true}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="DARK_07"
            rounded={true}
          />
        </div>
        <div className="flex flex-row space-x-3 pr-3">
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="DARK_01"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="DARK_01"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="DARK_02"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="DARK_02"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="DARK_03"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="DARK_03"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="DARK_04"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="DARK_04"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="DARK_05"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="DARK_05"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="DARK_06"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="DARK_06"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            style="DARK_07"
            rounded={false}
          />
          <Tab
            text="Tab"
            display={orientation.vertical}
            style="DARK_07"
            rounded={false}
          />
        </div>
        {/* NAV TABS */}
        <div className="flex items-center content-center rounded px-5 bg-white">
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="LIGHT_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="LIGHT_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="LIGHT_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="LIGHT_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="LIGHT_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="LIGHT_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="LIGHT_NAV"
          />
        </div>
        <div className="flex items-center content-center rounded">
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
          />
        </div>
        <div className="flex items-center content-center rounded px-5 bg-[#161616]">
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="DARK_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="DARK_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="DARK_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="DARK_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="DARK_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="DARK_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={true}
            style="DARK_NAV"
          />
        </div>
        <div className="flex items-center content-center rounded">
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
            className="pr-10"
          />
          <Tab
            text="Tab"
            display={orientation.horizontal}
            rounded={false}
            style="TRANS_NAV"
          />
        </div>
      </div>

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
