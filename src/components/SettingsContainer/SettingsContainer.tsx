import { FontColorSelection } from "./FontColorSelection"
import { FontSizeChanger } from "./FontSizeChanger"
import { FontStylesChanger } from "./FontStylesChanger"
import { HideImagesChanger } from "./HideImagesChanger"
import { LetterSpacingChanger } from "./LetterSpacingChanger"
import { LineHeightChanger } from "./LineHeightChanger"
import { LinkHighLighter } from "./LinkHighLighter"
import { Monochrome } from "./Monochrome"
import { TextCaseChanger } from "./TextCaseChanger"
import { TitlesHighLigther } from "./TitleHighLighter"

export const SettingsContainer = () => {
    return (
        <div className="flex flex-col gap-2">
            <FontColorSelection />
            <div className="border-b my-2"></div>
            <div className="grid gap-2 grid-cols-2 ">
                <FontSizeChanger />
                <LineHeightChanger />
            </div>
            <div className="border-b my-2"></div>
            <div className="grid gap-2 grid-cols-2 ">
                <LetterSpacingChanger />
                <TextCaseChanger />
            </div>

            <div className="border-b my-2"></div>
            <FontStylesChanger />

            <div className="border-b my-2"></div>

            <div className="grid gap-2 grid-cols-2 ">
                <LinkHighLighter />
                <TitlesHighLigther />

            </div>

            <div className="grid gap-2 grid-cols-2 ">
                <HideImagesChanger />
                <Monochrome />
            </div>





        </div>
    )
}
