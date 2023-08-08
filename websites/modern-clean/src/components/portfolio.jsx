import React from "react";
import ProjectModal from './ProjectModal';

// import images
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedProject: null
        };
        this.projects = [
            {
                image: stock4,
                title: 'Bayes Text Classifier from Scratch',
                tools: 'Python Sklearn NLTK',
                description: 'This project is a hands-on implementation of a Bayesian Text Classifier entirely from scratch. It demonstrates a deep understanding of the underlying principles of Bayesian classification and Natural Language Processing (NLP). The tool was developed using Python and libraries such as Sklearn and NLTK to aid in processing and classifying text data.\n' +
                    '\n' +
                    'The main goal was to create a reliable text classifier capable of accurately categorizing text into different predefined classes. This was achieved by developing a naive Bayes model and training it with a large dataset of text.\n' +
                    '\n' +
                    'The project serves as an essential tool in areas where sorting and categorizing large volumes of text data is needed. It finds potential application in spam filtering, sentiment analysis, and document categorization. It shows proficiency in key aspects of Machine Learning and NLP.\n'+
                    '\n',
                githubLink: 'https://github.com/flippi247/Bayes-Text-Classifier'
            },
            {
                image: stock,
                title: 'Snowcast Showdown Kaggle Challenge',
                tools: 'Python Tensorflow Pandas Numpy Sklearn Matplotlib',
                description: 'My team and I took part in the Snowcast Showdown Kaggle Challenge with a primary goal: to leverage machine learning and algorithmic skills to predict the snow water equivalent (SWE) in specific U.S regions troubled by water issues. These accurate SWE predictions are of critical importance in managing water resources, particularly in areas grappling with water scarcity.\n' +
                    '\n' +
                    'The challenge presented us with extensive satellite datasets, requiring a keen eye for detail and robust data handling and processing capabilities. In Python, we employed libraries such as TensorFlow, Pandas, Numpy, Sklearn, and Matplotlib to navigate this vast data landscape. Simultaneously, we crafted several algorithms from scratch to tailor our approach to the unique demands of the competition.\n' +
                    '\n' +
                    'Significantly, we used the K-Nearest Neighbors (KNN) imputing method to handle the substantial amount of missing values within the dataset. This strategy boosted the accuracy of our model by ensuring that our analyses and predictions relied on a more comprehensive data representation.\n' +
                    '\n' +
                    'Despite the academic responsibilities that occupied much of our time, we remained committed to the challenge. This dedication culminated in a place within the competition\'s top ten – a testament to our ability to combine academic pursuits with real-world problem-solving.\n' +
                    '\n' +
                    'The Snowcast Showdown Kaggle Challenge demonstrated our capability to apply machine learning technologies to help solve pressing environmental problems. It underscored the role of data analysis and predictive modeling in informing resource management strategies and contributing to efforts to address environmental challenges.\n' +
                    '\n',
                githubLink: 'https://github.com/flippi247/Snowcast-Showdown-Challenge'
            },
            {
                image: stock5,
                title: 'LSTM Intent Classification',
                tools: 'Python Pytorch Sklearn NLTK fasttext Matplotlib',
                description: 'This project showcases a sophisticated application of LSTM (Long Short-Term Memory) neural networks using the PyTorch framework. The primary objective of the project was to classify user inputs into different intents, a critical component in chatbot development and other Natural Language Processing (NLP) applications.\n' +
                    '\n' +
                    'One of the main highlights of the project was the utilization of word embeddings, transforming natural language into numerical data while preserving semantic relationships between words. The word embeddings were not just sourced from popular libraries but were also developed from scratch, thereby offering a deeper understanding of the technique.\n' +
                    '\n' +
                    'In addition, the project made use of t-SNE (t-Distributed Stochastic Neighbor Embedding) for high-dimensional data visualization. This allowed for intuitive exploration of the text data and enabled effective clustering based on semantic similarities. By offering an insightful visualization of the word embeddings, the project facilitated a more comprehensive understanding of the text data and its inherent patterns.\n' +
                    '\n' +
                    'This project stands as a testament to my advanced skills in NLP, deep learning with PyTorch, and data visualization techniques.\n' +
                    '\n',
                githubLink: 'https://github.com/flippi247/LSTM-Intent-Detection'
            },
            {
                image: stock1,
                title: 'Speech Emotion Recognition Research',
                tools: 'Python Pytorch Pandas Numpy Librosa Sklearn Matplotlib',
                description: 'This project aimed to explore the challenges of speech emotion recognition (SER), focusing on the differences between acted and semi-natural speech datasets. Acted emotional speech datasets, often used in SER research, are generally easier to create and tailor towards machine learning applications. However, their unnatural and exaggerated tones can be a limiting factor when applied to real-world scenarios.\n' +
                    '\n' +
                    'In this study, I assessed the capacity of a SER model trained on acted speech data, testing its performance on a semi-natural dataset. The results unveiled the inability of the model to effectively generalize to semi-natural speech, indicating the need for a careful choice of training datasets.\n' +
                    '\n' +
                    'A reverse experiment was also conducted, testing a model trained on semi-natural speech on an acted speech dataset. The intriguing results highlighted the influence of training data on a model\'s generalization ability and called for further research and discussions.\n' +
                    '\n' +
                    'This individual research project has contributed valuable insights to SER research, underlining the importance of using extensive and diverse datasets for more robust and adaptable models.\n'+
                    '\n',
                githubLink: 'https://github.com/flippi247/Speech-Emotion-Recognition'
            },
            {
                image: stock2,
                title: 'Cell Segmentation Challenge',
                tools: 'Python Pytorch Pandas Numpy Matplotlib',
                description: 'The primary objective of this challenge was to recognize and locate various cell classes in images using a notably limited dataset consisting of three labeled images. One of the main hurdles was the small dataset size.\n' +
                    '\n' +
                    'To address this, we used a technique known as \'image cropping\', dividing each image into smaller sections of the same size, which expanded the dataset significantly. Our approach involved using a U-Net segmentation model to segment the different classes within the images. The resulting segmentation masks were then used to calculate bounding boxes.\n' +
                    '\n' +
                    'Our model achieved a mean average precision of 52% on the validation image, providing a promising solution to the cell segmentation problem despite the constraints of the small dataset. This project underscored the potential of employing innovative techniques like \'image cropping\' and segmentation models in tackling data limitation challenges in machine learning.\n'+
                    '\n',
                githubLink: 'https://github.com/flippi247/Cancer-Cell-Segmentation-Challenge'
            },
            {
                image: stock3,
                title: 'Adaptive HMI Concept',
                tools: 'Java Apache-Tinkerpop Gremlin Janusgraph Maven',
                description: 'This project, a collaboration with the Silicon Valley-based SRI and fellow students from San Jose State University, California, focused on developing an adaptive Human-Machine Interface (HMI) concept.\n' +
                    '\n' +
                    'The primary objective was to design and develop a graph-based system that can support a dynamic and adaptive user interface. This involved incorporating and adapting various optimization techniques drawn from the realm of deep learning theory. The end result was an HMI concept that could adjust and respond to user interactions in a fluid and intuitive manner, ' +
                    'showcasing the potential of leveraging graph-based systems and deep learning methodologies in interface design.\n'+
                    '\n',
                githubLink: 'https://github.com/flippi247/DroneZoneRepo'
            }
        ];
    }

    handleImageClick = (project) => {
        this.setState({
            selectedProject: project,
            showModal: true
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            selectedProject: null
        });
    }

    render() {
        return (
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Portfolio</h3>
                                <p className="subtitle-a">
                                    Explore my projects and see how I use technology to solve problems.
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.projects.map((project, index) => (
                            <div key={index} className="col-md-4">
                                <div className="work-box">
                                    <div className="work-img">
                                        <img
                                            src={project.image}
                                            alt=""
                                            className="img-fluid"
                                            style={{
                                                width: '100%',
                                                height: '300px',
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            onClick={() => this.handleImageClick(project)}
                                        />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">{project.title}</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">{project.tools}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like" onClick={() => window.open(project.githubLink, "_blank")}>
                                                    <span className="ion-social-github"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {this.state.selectedProject &&
                    <ProjectModal
                        isOpen={this.state.showModal}
                        closeModal={this.closeModal}
                        project={this.state.selectedProject}
                    />
                }
            </section>
        );
    }
}

export default Portfolio;