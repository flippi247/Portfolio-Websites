import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "As a student on the verge of completing my Bachelor's degree in Artificial Intelligence at the Technische Hochschule Ingolstadt, " +
            "I am part of a pioneering and " +
            "groundbreaking study program that offers an enormous range of possibilities for the future. This pioneering role in a " +
            "rapidly developing field has stimulated my ability to understand and apply complex concepts as well as my passion for " +
            "continuous learning."
        },
        {
          id: "second-p-about",
          content:
            "So far in my career, I have been able to gain valuable experiences through various roles and projects. This includes a " +
            "practical semester at BMW, where I worked as a Computer Vision Engineer, as well as intercultural projects, e.g. with the Stanford Research " +
            "Institute. I have also gained valuable experience in the role of a Master Data Manager, which has given me a deeper insight " +
            "into data analysis."
        },
        {
          id: "third-p-about",
          content:
            "With a mix of passion and commitment, I am striving to make a positive impact on the world of Artificial " +
            "Intelligence in a challenging and innovative environment and to further develop my skills."
        }
      ]
    };
  }

  render() {
    return (
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">About Me</h5>
                        </div>
                        {this.state.about_me.map(content => {
                          return (
                              <p className="lead" key={content.id}>
                                {content.content}
                              </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default About;
