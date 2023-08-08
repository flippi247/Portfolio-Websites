import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function ProjectModal({ isOpen, closeModal, project }) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 700);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Project Modal"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    zIndex: 100000000
                },
                content: {
                    top: '10%',
                    left: '10%',
                    right: '10%',
                    bottom: '10%',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '20px',
                    color: '#333',
                    backgroundColor: '#f4f4f4',
                    display: 'flex',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    overflow: 'hidden',
                }
            }}
        >
            <div style={{width: isSmallScreen ? '100%' : '50%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={project.image} alt={project.title} style={{maxWidth: '100%', maxHeight: '100%'}} />
            </div>
            <div style={{width: isSmallScreen ? '100%' : '50%', marginLeft: isSmallScreen ? '0' : '2%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflowY: 'auto', height: '80vh'}}>
                <div style={{}}>
                    <h5 className="title-left" style={{ marginBottom: '5%', fontSize: isSmallScreen ? '1rem' : 'initial' }}>{project.title}</h5>
                    <p className="lead" dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br />') }} style={{fontSize: isSmallScreen ? '0.8rem' : 'initial'}} />
                </div>
                <button
                    style={{
                        background: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '10px 20px',
                        fontSize: isSmallScreen ? '0.8rem' : '1rem',
                        cursor: 'pointer',
                        maxWidth: '200px',
                        margin: 'auto',
                        alignSelf: 'center'
                    }}
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </Modal>
    );
}

export default ProjectModal;
