import { useRef, useState } from "react";
import NestedComment from "./NestedComment";
import Button from "./Button";

const Comment = ({ comment, addReply, updateComment, deleteComment, updateReply, deleteReply }) => {
    const [isReply, setIsReply] = useState(false)
    const [isChange, setIsChange] = useState(false)
    const replyInput = useRef(null)
    const changeInput = useRef(null)

    const ID = Object.keys(comment)[0];

    const AddReply = (e, id, text) => {
        if (e.key === 'Enter') {
            addReply(id, text);
            replyInput.current.value = '';
            setIsReply(!isReply);
        }
    }

    const UpdateComment = (e, id, text) => {
        if (e.key === 'Enter') {
            updateComment(id, text);
            changeInput.current.value = '';
            setIsChange(!isChange);
        }
    }

    const DeleteComment = (id) => {
        deleteComment(id);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="max-w-sm h-fit mt-2">
                    <p className="break-all bg-slate-300 rounded-lg p-2">{comment[ID]}</p>
                    {
                        isChange ?
                            <>
                                <input 
                                    ref={changeInput}
                                    className="border-b-2 p-2 w-full mt-2 focus:outline-none"
                                    placeholder="Change comment..."
                                    onKeyDown={(e) => UpdateComment(e, ID, changeInput?.current?.value)}
                                />
                            </> : null
                    }
                    <div className="flex justify-end space-x-2">
                        <Button func={() => setIsChange(!isChange)}>
                            <p className="text-sky-500 font-semibold text-xs">Modify</p>
                        </Button>
                        <Button func={() => setIsReply(!isReply)}>
                            <p className="text-sky-500 font-semibold text-xs">Reply</p>
                        </Button>
                        <Button func={() => DeleteComment(ID)}>
                            <p className="text-sky-500 font-semibold text-xs">Delete</p>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    {
                        isReply ? <div>
                            <input
                                ref={replyInput}
                                className="w-full border-b-2 p-2 mt-2 focus:outline-none"
                                placeholder="Reply something..."
                                onKeyDown={(e) => AddReply(e, ID, replyInput?.current?.value)}
                            />
                        </div> : null
                    }
                    <div>
                        {
                            Object.keys(comment.replies).map(replyID => {
                                return (
                                    <NestedComment
                                        key={replyID}
                                        rootID={ID}
                                        replyID={replyID}
                                        reply={comment.replies[replyID]}
                                        updateReply={updateReply}
                                        deleteReply={deleteReply}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Comment;