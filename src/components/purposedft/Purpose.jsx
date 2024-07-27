import React from "react";
import "../purposedft/purpose.css";
import one from "../../images/one.png";
import two from "../../images/two.png";
import founder from "../../images/founder.png";
const Purpose = () => {
  return (
    <>
      <section>
        <div className="full-width">
          <div className="main-content-1320">
            <div className="padding-dft"></div>
            <div className="title-purpose">
              <p className="maintitle">Purpose of DFT Alumni Association</p>
            </div>
            <div className="Among-Alumni">
              <div className="among-flex">
                <div className="among-left">
                  <div className="among-title">
                    <p className="alumni-p">Among Alumni</p>
                  </div>
                  <div className="establish">
                    <div className="para-flex">
                      <ol className="ol-width">
                        <div className="est-padding">
                          <li className="esta-width">
                            To establish a network among industries and alumni.
                          </li>
                          <li className="esta-width">
                            To improve the business network among alumni
                            entrepreneurs.
                          </li>
                          <li className="esta-width">
                            To update alumni about technological advancements in
                            the field of welding and fabrication.
                          </li>
                          <li className="esta-width">
                            To provide assistance to alumni who are seeking or
                            updating their job profiles.
                          </li>
                          <li className="esta-width">
                            To recognize and reward the achievements of alumni
                            in different fields.
                          </li>
                          <li className="esta-width">
                            Organize an annual alumni event/meeting to help the
                            association stay connected with the alma mater.
                          </li>
                        </div>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="among-right">
                  <div className="among-csr">
                    <div className="among-title">
                      <p className="alumni-p">
                        Conduct CSR Activities in association with Alumni’s
                        Venture
                      </p>
                    </div>
                    <div className="among-center">
                      <div className="am-padding">
                        <ol className="ol-width">
                          <li className="esta-width">
                            Organize an annual alumni event/meeting to help the
                            association stay connected with the alma mater.
                          </li>

                          <li className="esta-width">
                            Organize a hackathon by inviting proposals on the
                            following topics:
                          </li>
                          <li className="estas-width">
                              Reducing carbon footprints
                            </li>
                            <li className="estas-width  ">
                              Using eco-friendly products{" "}
                            </li>

                            <li className="estas-width">
                              Increasing non-traditional transportation (EV)
                            </li>
                          
                        </ol>
                        
                        {/* <div className="redbullet-padding">
                        
                          <ul className="red-bullets">
                            <li className="estas-width">
                              Reducing carbon footprints
                            </li>
                          </ul>

                          <ul className="red-bullets">
                            <li className="estas-width  padding">
                              Using eco-friendly products{" "}
                            </li>
                          </ul>

                          <ul className="red-bullets">
                            <li className="estas-width">
                              Increasing non-traditional transportation (EV)
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="amoung-padding">
                    <div className="among-dft">
                      <div className="among-title">
                        <p className="alumni-p">Alumni & DFT Aspirants</p>
                      </div>
                      <div className="aspirants-width">
                        <ol className="ol-width">
                          <div className="ol-padding">
                            <li className="esta-width">
                              Provide technical support, assistance, and
                              guidance to DFT aspirants through industry visits,
                              workshops, and expert sessions.
                            </li>

                            <li className="esta-width">
                              Create a bridge between DFT aspirants and alumni
                              for career opportunities and growth.
                            </li>

                            <li className="esta-width">
                              Motivate meritorious students by awarding gold
                              medals to final-year students.
                            </li>
                          </div>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="full-width">
          <div className="main-content-1320">
            <div className="padding-dft"></div>
            <div className="title">
              <p className="maintitle">From the Desk of the Founder</p>
            </div>
            <div className="founder-padding">
              <div className="founder-flex">
                <div className="founder-left">
                  <p className="Fabrication">
                    Welcome to the Fabrication Family! We're all about
                    continuous growth, a positive mindset, technological
                    advancement, sustainable living, and personal well-being.
                  </p>
                  <p className="Fabrication">
                    We constantly upgrade ourselves to stay ahead in the
                    industry, adopting innovative techniques and investing in
                    R&D. With a positive attitude, we embrace challenges, foster
                    collaboration, and celebrate achievements. Our success is
                    the result of our united efforts.
                  </p>
                  <p className="Fabrication">
                    Technology is at the heart of what we do. We keep up with
                    the latest advancements, ensuring we deliver cutting-edge
                    solutions to our clients. As Fabrication family members, we
                    quote ,
                    <span className="quality">
                      {" "}
                      "Never say CHALSE to quality"
                    </span>
                  </p>
                  <p className="Fabrication">
                    Learning is a lifelong journey, and we're committed to it.
                    Through training programs and knowledge sharing, we empower
                    our team to grow and excel. We care about your well-being,
                    promoting work-life balance and providing resources for
                    physical and mental health support.
                  </p>
                  <p className="Fabrication-p">
                    Join us as we embark on an exciting journey of growth,
                    innovation, and personal strength because{" "}
                    <span className="quality">
                      सर्व के शुभ में स्व शुभ समाया हुआ है।{" "}
                    </span>
                    Together, we'll shape a brighter future for the fabrication
                    industry.
                  </p>

                  <p className="Acharya"> - Dr. G. D. Acharya</p>
                </div>
                <div className="founder-right">
                  <div className="founder-img-bg">
                    <img
                      src={founder}
                      alt=""
                      srcset=""
                      className="founder-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>

      <section>
        <div className="full-width">
          <div className="main-content-1320">
            <div className="padding-dft"></div>
            <div className="down">
              <p className="immense">
                The countdown starts for the alumni meet! It is with immense
                pleasure that we announce the BPTI alumni meet, specifically for
                the Fabrication Technology students, scheduled for June 18,
                2023. It will be a great joy to witness the tide of emotions
                among old friends. We will have the pleasure of reliving many
                jovial moments from bygone times.
              </p>
              <p className="immense">
                The Alumni Association is a backbone for any institution,
                providing valuable support in areas such as placements,
                training, industrial visits, and more. Alumni can also adopt
                economically challenged students and offer financial assistance
                to help shape their careers. Industrialists among the alumni can
                contribute CSR funding to their alma mater (the mother
                institute) to enhance or upgrade technological infrastructure,
                making it unique.
              </p>
              <p className="immense">
                I extend my best wishes to all alumni who will gather at the
                Ahmedabad venue for this much-anticipated event. I anticipate a
                fruitful outcome for our beloved BPTI.
              </p>
            </div>
            <div className="family">
              <p className="im-family">
                On behalf of the BPTI family, I welcome you all with tons of
                love and affection.
              </p>
              <p className="pandya">Dr A S Pandya Principal, BPTI, Bhavnagr</p>
            </div>
          </div>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>

      <section>
        <div className="full-width">
          <div className="main-content-1320">
            <div className="padding-dft"></div>
            <p className="Head">Dear DFT alumni,</p>
            <p className="immensee">
              It is a great pleasure to address you all as the Head of the
              Fabrication Technology Department. I hope that you are all well.
              With the tremendous efforts of Dr. G. D. Acharya, Mr. Maheshbhai
              Patel, Mr. Hareshbhai Mandaliya, and all the alumni, we have
              finally arranged a grand meeting in Ahmedabad on June 18, 2023. As
              we all know, the Fabrication Technology Department is celebrating
              its 40th anniversary in 2023. We have had 36 successful graduating
              batches working both in India and abroad. We are all nurtured with
              the slogan “NEVER SAY ચાલશે TO QUALITY.” Our alumni are our brand
              ambassadors. The Fabrication Technology branch is renowned in
              various industries due to the extreme hard work, qualitative
              output, and positive attitude of our students. The legacy of
              Guru-Shishya and Indian culture is well maintained in the
              department even today. We have been rigorously trained by our
              teachers, especially Dr. G. D. Acharya.
            </p>
            <p className="immensee">
              I want to draw your kind attention to the fact that this year, the
              department has successfully placed all job-seeking students with
              very good starting packages of up to 3.3 lakh. Print media has
              also taken note of our achievements. We are all very aware of the
              current trend where students prefer to take admission in
              Information Technology and Computer branches. Every alumnus must
              promote our job-providing branch in society. Today, social media
              has become a powerful platform to convey messages, and the world
              has become a global village. Your achievements are highly valuable
              to the department. I hope that you will support our department
              through positive campaigning and spreading awareness about the
              Fabrication Technology branch. You can share your knowledge with
              current students by visiting the department or through online
              means. Together, we can better serve society. I congratulate all
              the alumni for the successful arrangement of this meeting. I hope
              that these golden memories will remain as a long-lasting blossom.
              God bless you all, and I invite you to visit our beloved institute
              and department at your convenience.
            </p>
            <p className="Head-p">
              Samirbhai Y. Merchant Head of Department (I/C) Fabrication
              Technology Department Sir Bhavsinhji Polytechnic institute,
              Bhavnagr - 364001
            </p>
          </div>
        </div>
      </section>

      <div className="hr-line">
        <hr />
      </div>

      <section>
        <div className="full-width">
          <div className="main-content-1320">
            <div className="padding-dft"></div>
            <p className="Head">Dear Alumni,</p>
            <p className="immensee">
              Warm greetings from Nilesh M. Bhangale, Lecturer in the
              Fabrication Technology Department and Training and Placement
              Officer at Sir Bhavsinhji Polytechnic Institute, Bhavnagar.
            </p>
            <p className="immensee">
              It gives us immense pleasure to announce that the long-awaited DFT
              Alumni Meet 2023 is just around the corner. As we prepare to
              reconnect with our remarkable alumni network, we want to take a
              moment to express our gratitude for the indelible mark you have
              left on our institution and the significant contributions you have
              made in your respective fields.
            </p>
            <p className="immensee">
              The Alumni Meet, scheduled for June 18, 2023, in Ahmedabad, will
              be a joyous occasion to celebrate memories, foster meaningful
              connections, and inspire the bright futures of our current
              students. This event will serve as a testament to the strong bonds
              we share as members of the Fabrication Technology family.
            </p>
            <p className="immensee">
              Fabrication Technology started in 1983, with the first batch
              graduating in 1987. Since then, students from the Fabrication
              Technology Department have secured placements in various esteemed
              organizations, and the department boasts a remarkable placement
              record.
            </p>
            <p className="immensee">
              With the support of our alumni and our branch’s unique one-year
              on-job training program, we are pleased to announce that the 2023
              graduating students achieved 100% placement.
            </p>
            <p className="immensee">
              Eager to meet you all at the alumni meet.
            </p>
            <p className="warm">With warm regards,</p>
            <p className="Head-p">
              Nilesh M. Bhangale Lecturer in Fabrication Technology Department
              Training and Placement Officer Sir Bhavsinhji Polytechnic
              Institute Bhavnagar Polytechnic institute, Bhavnagr - 364001
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purpose;
