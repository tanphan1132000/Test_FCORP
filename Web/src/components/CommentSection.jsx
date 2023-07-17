import { useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import Comment from "./Comment";

const CommentSection = ({ comments, setComments }) => {
    const commentInput = useRef(null);
    const [isComment, setIsComment] = useState(false);

    const addComment = (e) => {
        if (e.key === 'Enter') {
            if (commentInput && commentInput.current.value !== '') {
                let temp = {};
                temp[uuid().slice(0, 8)] = commentInput.current.value;
                temp['replies'] = {};
                setComments(prev => [temp, ...prev]);
                commentInput.current.value = '';
            }
        }
    }

    const addReply = (rootID, text) => {
        if (!text) return;
        let reply = {};
        reply[uuid().slice(0, 8)] = text;

        const updatedComments = comments.map(comment => {
            if (Object.keys(comment)[0] === rootID) {
                return {
                    ...comment,
                    replies: { ...reply, ...comment.replies }
                };
            }
            return comment;
        });
        setComments(updatedComments);
    }

    const updateComment = (id, text) => {
        if (!text) return;
        const updatedComment = comments.map(comment => {
            if (Object.keys(comment)[0] === id) {
                comment[id] = text;
                return comment;
            }
            return comment;
        });

        setComments(updatedComment);
    }

    const updateReply = (rootID, id, text) => {
        if (!text) return;
        const updatedReply = comments.map(comment => {
            if (Object.keys(comment)[0] === rootID) {
                comment.replies[id] = text;
                return comment;
            }
            return comment;
        });

        setComments(updatedReply);
    }

    const deleteComment = (id) => {
        const deletedComment = comments.filter(comment => Object.keys(comment)[0] !== id);
        setComments(deletedComment);
    }

    const deleteReply = (rootID, id) => {
        const deletedComment = comments.map(comment => {
            if (Object.keys(comment)[0] === rootID) {
                delete comment.replies[id];
                return comment;
            }
            return comment;
        })

        setComments(deletedComment);
    }


    return (
        <>
            <div className="h-px w-full bg-slate-300 my-2"></div>
            <div>
                <div className="flex relative w-full justify-center">
                    <input
                        className="border-2 rounded-full p-2 px-4 w-2/3 focus:outline-none"
                        ref={commentInput}
                        placeholder="Comment something..."
                        onKeyDown={addComment}
                    />
                </div>
                {comments?.map(comment => {
                    return (
                        <Comment
                            key={Object.keys(comment)[0]}
                            comment={comment}
                            addReply={addReply}
                            updateComment={updateComment}
                            deleteComment={deleteComment}
                            updateReply={updateReply}
                            deleteReply={deleteReply}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default CommentSection;