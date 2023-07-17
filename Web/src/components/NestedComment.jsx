import { useRef, useState } from "react";
import Button from "./Button";


const NestedComment = ({ rootID, replyID, reply, updateReply, deleteReply }) => {
    const [isChange, setIsChange] = useState(false)
    const changeInput = useRef(null)

    const ID = replyID;
    const RootID = rootID;

    const UpdateReply = (e, rootID, id, text) => {
        if (e.key === 'Enter') {
            updateReply(rootID, id, text);
            changeInput.current.value = '';
            setIsChange(!isChange);
        }

    }

    const DeleteReply = (rootID, id) => {
        deleteReply(rootID, id);
    }

    return (
        <>
                <div className="max-w-sm h-fit mt-2">
                    <p className="break-all bg-slate-300 rounded-lg p-2 max-w-xs">{reply}</p>
                    {
                        isChange ?
                            <>
                                <input
                                    ref={changeInput}
                                    className="border-b-2 p-2 w-full mt-2 focus:outline-none"
                                    placeholder="Change comment..."
                                    onKeyDown={(e) => UpdateReply(e, RootID, ID, changeInput?.current?.value)}
                                />
                            </> : null
                    }
                    <div className="flex justify-end space-x-2">
                        <Button func={() => setIsChange(!isChange)}>
                            <p className="text-sky-500 font-semibold text-xs">Modify</p>
                        </Button>
                        <Button func={() => DeleteReply(RootID, ID)}>
                            <p className="text-sky-500 font-semibold text-xs">Delete</p>
                        </Button>
                    </div>
                </div>
        </>
    )
}

export default NestedComment;