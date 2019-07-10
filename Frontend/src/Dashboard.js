import React, { Component } from 'react';
import logo from './assets/img/fluent-logo.png';
import homeImg from './assets/img/home.png';
import lesson from './assets/img/mockup/lesson-mockup.png';
import practice from './assets/img/mockup/practice-mockup.png';
import speak from './assets/img/mockup/speak-mockup.png';
import simple from './assets/img/value/simple.svg';
import standard from './assets/img/value/standard.svg';
import direct from './assets/img/value/direct.svg';
import objective from './assets/img/value/objective.svg';
import data from './assets/img/data.svg';
import ai from './assets/img/icon/ai.svg';
import analyst from './assets/img/icon/analyst.svg';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <section className="sectionStyle home center">
          <div className="menu sectionStyle">
            <div>
              <img className="logoStyle" src={logo} />
            </div>
            <a href="/app">
              <div className="signin-button">
                <p>Sign In</p>
              </div>
            </a>
          </div>
          <div className="center content">
            <div className="center">
              <div className="title">
                <div className="stripe">
                </div>
                <div className="content-stripe">
                  <h1>Inspiring English Future Speaker</h1>
                  <a href="/app">
                    <div className="join-button">
                      <p>Join Us</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img src={homeImg} />
            </div>
          </div>
        </section>
        <section className="sectionStyle feature center">
          <div>
            <h1>Feature Overview</h1>
          </div>
          <div className="feature-content">
            <div>
              <img src={lesson} />
              <div className="feature-box center">
                <h2>Lesson</h2>
                <p>
                  Finish comprehensive lessons everyday. Earn badges, point, and level up!
                </p>
                <a href="/app#/lesson">
                  <p>
                    Learn More
                    <i class="fa fa-angle-double-right"></i>
                  </p>
                </a>
              </div>
            </div>
            <div className="right">
              <div className="feature-box center">
                <h2>Practice</h2>
                <p>
                  Prepare for your speech, interview, or anything! Type in the box, and start
                  recording yourself. Fluent will help you review and improve it with our
                  cutting edge AI.
                </p>
                <a href="/app#/practice">
                  <p>
                    Learn More
                    <i class="fa fa-angle-double-right"></i>
                  </p>
                </a>
              </div>
              <img src={practice} />
            </div>
            <div>
              <img src={speak} />
              <div className="feature-box center">
                <h2>Speak</h2>
                <p>
                  Choose the topic, and practice your speaking with stranger, and score each
                  other. It's fun!
                </p>
                <a href="/app#/speak">
                  <p>
                    Learn More
                    <i class="fa fa-angle-double-right"></i>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="value sectionStyle center">
          <div className="value-wrapper center">
            <div>
              <img src={simple} />
              <div>
                <h2>Simple</h2>
                <p>
                  Aplikasi menggunakan UI yang sederhana. Dengan menerapkan 3x Click System
                  Rule yaitu hanya diperlukan maksimum 3x klik untuk mengakses fitur pada
                  aplikasi.
                </p>
              </div>
            </div>
            <div>
              <img src={direct} />
              <div>
                <h2>Direct Communication Learning</h2>
                <p>
                  Fluent memfasilitasi penggunanya untuk belajar bahasa Inggris melalui
                  komunikasi secara langsung dengan menggunakan Matchmaking System dengan
                  pengguna lain secara acak.
                </p>
              </div>
            </div>
            <div>
              <img src={objective} />
              <div>
                <h2>Objective Evaluation</h2>
                <p>
                  Fluent meningkatkan kemampuan verbal penggunanya dengan memberikan
                  penilaian objektif sebagai bahan evaluasi penggunanya.
                </p>
              </div>
            </div>
            <div>
              <img src={standard} />
              <div>
                <h2>Standardized Curriculum</h2>
                <p>
                  Fluent menyediakan kurikulum belajar yang komprehensif, terstandarisasi dan
                  tersertifikasi.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="tech sectionStyle center">
          <img src={data} />
          <div className="tech-content">
            <div className="tech-content-left">
              <div className="tech-title">
                <img src={ai} />
                <h2>
                  Artificial Intelligence sebagai Evaluator
                </h2>
              </div>
              <div>
                <p>
                  Dengan menggunakan kemampuan Machine Learning dalam hal Speech Recognition dan
                  Natural Language Processing (NLP) milik Google, menjadikan sistem penilaian
                  evaluasi yang dimiliki Fluent dapat menjadi sangat presisi.
                </p>
              </div>
            </div>
            <div>
              <div className="tech-title">
                <img src={analyst} />
                <h2>
                  Data Analytics sebagai Reviewer
                </h2>
              </div>
              <div>
                <p>
                  Digunakan untuk mengetahui tingkat perkembangan kemampuan berbicara bahasa
                  Inggris pribadi nya danmembandingkan dengan orang-orang lain, apakah ia sudah
                  cukup baik diantara orang lain atau masih memerlukan latihan lebih banyak.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;