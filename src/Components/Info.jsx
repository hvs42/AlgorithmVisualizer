import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap';
import Infos from './Helper/InfoStore';
// import BubbleSortgif from '../Assets/BubbleSortgif.gif';

function Info(props) {
    const [show, setShow] = useState(false);
    const [iconShow, setIconShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    let popup = Infos[props.algorithm];

  return (
    <>
      <div >
        <i onClick={handleShow} onMouseOver={() => setIconShow(true)} onMouseOut={() => setIconShow(false)} className="fas fa-info-circle fa-2x info-icon"></i>
        <div id="fade-in" className={iconShow?"icon-div show":"icon-div"}>
           <strong> <span className="icon-span"> About {popup.title}  </span></strong>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
        <Modal.Header closeButton>
          <Modal.Title>{popup.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <h6>{popup.intro}</h6><br />

            {/* <img src={BubbleSortgif} alt="Bubble Sort" /> <br /> */}

            <h5><u>Complexity Analysis :- </u></h5> <br />
            {popup.complexity} <br />
            <h5> <u>Algorithm :- </u></h5>
            {popup.pseudoCode}

        </Modal.Body>
        <Modal.Footer>
            <a href={popup.readingLink} target="_blank" rel="noreferrer noopener">
                <Button variant="secondary">
                    Read More
                </Button>
            </a>

            <a href={popup.videoLink} target="_blank" rel="noreferrer noopener">
                <Button variant="primary">
                    Watch Video
                </Button>
            </a>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Info;
