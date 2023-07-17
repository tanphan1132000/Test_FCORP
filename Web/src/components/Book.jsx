import { useState } from 'react'
import CommentSection from './CommentSection';
import Modal from 'react-modal';
import Button from './Button';
import BookInfor from './BookInfor';

Modal.setAppElement('#root')

const Book = ({ book }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '15px',
      width: '50%',
      height: '500px',
      position: 'relative',
    }
  };

  const bookStyle = 'flex flex-row shadow-xl rounded-md p-2 md:w-2/5 sm:w-full';
  const bookInModalStyle = 'flex flex-col w-full sm:flex-row'

  return (
    <>
      <BookInfor style={bookStyle} book={book} isFullDescription={true}>
        <Button func={() => openModal()}>
          <span className="font-semibold text-sky-500">
            Detail
          </span>
        </Button>
      </BookInfor>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='flex justify-end'>
          <button className='rounded-full bg-slate-500 text-white w-6 h-6' onClick={closeModal}>
            X
          </button>
        </div>

        <BookInfor style={bookInModalStyle} book={book} isFullDescription={false} />
        <CommentSection comments={comments} setComments={setComments} />
      </Modal>
    </>
  )
}

export default Book;
