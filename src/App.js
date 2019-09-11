import React from 'react';
import logo from './images/logo.png';
import airb from './images/airbnb-logo.png';
import bloomberg from './images/bloomberg-logo.png';
import facebook from './images/facebook-logo.png';
import google from './images/google-logo.png';
import ibm from './images/ibm-logo.png';
import nasa from './images/nasa-logo.png';
import node from './images/node-logo.png';
import paypal from './images/paypal-logo.png';
import sap from './images/sap-logo.png';
import spotify from './images/spotify-logo.png';
import swift from './images/swift-logo.png';
import walmart from './images/walmart-logo.png';
import robo from './images/robo.svg';
import hero from './images/hero.jpg';
import nw from './images/nw_hero.jpg';
import sap6 from './images/sap6.jpg';
import spotifyhero from './images/spotifyhero.jpg';
import business from './images/home-illo-business.png';
import slack from './images/slackhq.png'
import zen from './images/zenhubio.png';
import travis from './images/travis-ci.png';
import atom from './images/atom.png';
import circle from './images/circleci.png'
import code from './images/codeclimate.png';
import hero1 from './images/hero1.jpg';
import hero2 from './images/hero2.jpg';
import hero3 from './images/hero3.jpg';
import hero4 from './images/hero4.jpg';

import './App.css';
function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="leftContent">
          <ul>
            <li><img src={logo}></img></li>
            <li>Why GitHub</li>
            <li>Enterprise</li>
            <li>Explore</li>
            <li>Market Place</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="rightContent">
          <ul>
            <li><input type="text" placeholder="Search GiHub" /></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>
      </div>
      <div className="firstPortion">
        <div className="leftContent">
          <h1>Built for developers</h1>
          <h6>GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 40 million developers.</h6>
        </div>
        <div className="rightContent">
          <div>
            <div>
              <label for="name"> User Name</label>
            </div>
            <input type="text" id="name" />
          </div>
          <div>
            <div>
              <label for="mail"> EMail</label>
            </div>
            <input type="email" id="mail" />
          </div>
          <div>
            <div>
              <label for="pwd">Password</label>
            </div>
            <input type="password" id="pwd" />
          </div>
          <div>
            <p>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.</p>
          </div>
          <div>
            <button>Sign up for GiHub</button>
          </div>
          <div>
            <p>By clicking “Sign up for GitHub”, you agree to our Terms of Service and Privacy Statement. We’ll occasionally send you account related emails.</p>
          </div>
        </div>
      </div>
      <div className="secondPortion">
        <h1>Get started with GitHub Enterprise</h1>
        <p>Take collaboration to the next level with security and administrative features built for businesses.</p>
        <button>Contact Sales</button>
        <a href="#">Or start a free trial of Enterprise Server →</a>
      </div>
      <div className="thirdPortion">
        <h1>Introducing GitHub Actions with CI/CD</h1>
        <p>Automate any workflow with GitHub Actions.See the latest updates announced at our HQ reveal.</p>
        <a href="#">Check it out →</a>
      </div>
      <div className="fourthPortion">
        <h4>More than 2.1 million businesses and orgnization use GitHub</h4>
        <div className="topImages">
          <img src={airb}></img>
          <img src={sap}></img>
          <img src={ibm}></img>
          <img src={google}></img>
          <img src={paypal}></img>
          <img src={bloomberg}></img>
        </div>
        <div className="bottomImages">
          <img src={spotify}></img>
          <img src={swift}></img>
          <img src={facebook}></img>
          <img src={node}></img>
          <img src={nasa}></img>
          <img src={walmart}></img>
        </div>
      </div>
      <div className="fifthPortion">
        <p>GitHub for teams</p>
        <h1>A better way to work together</h1>
        <h6>GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.</h6>
        <a href="#">Sign up your team</a>
      </div>
      <div className="sixthportion">
        <img src={robo}></img>
        <div className="innerSixthPortion">
          <div calssName="innerSixthPortionContent">
            <h4>Write better code</h4>
            <p>collaboration make Perfect.The conversation and code reviews that happen in pull requests help your team share the weight of your work and improve the software you build.<a href="#">Learn about code review.</a></p>
          </div>
          <div calssName="innerSixthPortionContent">
            <h4>Manage your choas</h4>
            <p>Take a deep breath.On GitHub,project mangment happen in issue and the project boards,right alongside your code. All you have to do is mention a teammate to get them involved.<a href="#">Learn about project mangment.</a></p>
          </div>
          <div calssName="innerSixthPortionContent">
            <h4>Find the right tools</h4>
            <p>Browse and buy apps from GiHub Marketplace with yoyr GiHub account.Find the tools you like or discover new favorites--then start using them in minutes.<a href="#">Learn about integration</a></p>
          </div>
        </div>
      </div>
      <div className="seventhPortion">
        <h4>See how the world's leading companies use GitHub Enterprise.</h4>
        <div>
          <img src={hero} />
          <img src={nw} />
          <img src={sap6} />
          <img src={spotifyhero} />
        </div>
      </div>
      <div className="eightPortion">
        <h4 id="top">Security and administration</h4>
        <h1>Your business needs, met</h1>
        <h2>From flexible hosting to granular access controls, we’ve got your security requirements covered.</h2>
        <a id="link" href="#">Learn how GitHub Enterprise Work</a>
        <div className="eightPortionInner">
          <div>
            <h4>Code security</h4>
            <p>Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code.</p>
            <h4>Access controlled</h4>
            <p>Encourage teams to work together while limiting access to those who need it with granular permissions and authentication through SAML/SSO and LDAP.</p>
          </div>
          <div>
            <img src={business} />
          </div>
        </div>
        <div className="innereightPortion">
          <h6>Hosted where you need it</h6>
          <p>Securely and reliably host your work on GitHub using GitHub Enterprise Cloud. Or deploy GitHub Enterprise Server in your own data centers or in a private cloud using Amazon Web Services, Azure, or Google Cloud Platform.</p>
          <a href="#">Comapre plans</a>
          <p><a href="#">Contact Sales for more information</a></p>
        </div>
      </div>
      <div className="ninthPortion">
        <p>Integrations</p>
        <h1>Build on GitHub</h1>
        <p>Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.</p>
        <a href="#">Learn about Integration</a>
        <div className="innerNinthPortion">
          <img src={slack} />
          <img src={zen} />
          <img src={travis} />
          <img src={atom} />
          <img src={circle} />
          <img src={google} />
          <img src={code} />
        </div>
        <p>Sometimes, there’s more than one tool for the job. Why not try something new?</p>
        <a href="#" id="link2">Browse GitHub Marketplace →</a>
      </div>
      <div className="tenthPortion">
        <p>Community</p>
        <h1>Welcome home, developers</h1>
        <p>GitHub is home to the world’s largest community of developers and their projects...</p>
      </div>
      <div className="infoMain">
        <div className="infoPortion">
          <img src={hero1} />
          <h4>Russell Keith-Magee</h4>
          <p> Russell Keith-Magee created BeeWare to fill a gap in his own processs. Today, BeeWare is the go-to project for supporting Python on every platform</p>
        </div>
        <div className="infoPortion">
          <img src={hero2} />
          <h4>Russell Keith-Magee</h4>
          <p> Russell Keith-Magee created BeeWare to fill a gap in his own processs. Today, BeeWare is the go-to project for supporting Python on every platform</p>
        </div>
        <div className="infoPortion">
          <img src={hero3} />
          <h4>Russell Keith-Magee</h4>
          <p> Russell Keith-Magee created BeeWare to fill a gap in his own processs. Today, BeeWare is the go-to project for supporting Python on every platform</p>
        </div>
        <div className="infoPortion">
          <img src={hero4} />
          <h4>Russell Keith-Magee</h4>
          <p> Russell Keith-Magee created BeeWare to fill a gap in his own processs. Today, BeeWare is the go-to project for supporting Python on every platform</p>
        </div>
      </div>
      <div className="eleventhPortion">
        <h4>...whether you’re making your first commit or sending a Rover to Mars, there’s room for you here, too.</h4>
      </div>
      <div className="thirteenPortion">
        <h1>Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.</h1>
        <div className="innerThirteen">
          <div>
            <div><label>UserName</label></div>
            <input type="text" />
          </div>
          <div>
            <div><label>EMail</label></div>
            <input type="email" />
          </div>
          <div>
            <div><label>password</label></div>
            <input type="password" />
          </div>
          <div>
            <button>Sign up for GiHub</button>
          </div>
        </div>
        <p>By clicking “Sign up for GitHub”, you agree to our <a href="#">terms of service</a> and <a href="#">privacy statement</a>. We’ll occasionally send you account related emails.</p>
      </div>
      <div className="fourteenPortion">
        <div>
          <h1>GitHub</h1>
        </div>
        <div>
        <table>
          <tr>
            <td>Product</td>
            <td>Platform</td>
            <td>Support</td>
            <td>Company</td>
          </tr>
          <tr>
            <td>Features</td>
            <td>Developer API</td>
            <td>Help</td>
            <td>About</td>
          </tr>
          <tr>
            <td>Security</td>
            <td>Partner</td>
            <td>Community Forum</td>
            <td>Blog</td>
          </tr>
          <tr>
            <td>Enterprise</td>
            <td>Atom</td>
            <td>Training</td>
            <td>Careers</td>
          </tr>
          <tr>
            <td>Customer Stories</td>
            <td>Electron</td>
            <td>status</td>
            <td>Press</td>
          </tr>
          <tr>
            <td>Pricing</td>
            <td>GiHub Desktop</td>
            <td>Contact GiHub</td>
            <td>Shop</td>
          </tr>
          <tr>
            <td>Resources</td>
          </tr>
        </table>
        </div>
      </div>
      <div className="footer">
        <ul>
          <li>© 2019 GitHub, Inc.</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
    </div>
  );
}

export default App;
