import { CustomizeMain } from "../cmps/CustomizeMain";
import { PhonePreview } from "../cmps/PhonePreview";

export function LinkSharingIndex() {
     
    return (
        <div className="h-full w-full flex flex-row rounded-2xl gap-5">
            <PhonePreview />
            <CustomizeMain />
        </div>
    )
}