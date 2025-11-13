import Image from "next/image";
import { Metadata } from "next";
import './style.css';


export const metadata: Metadata = {
    title: "GlobalHDRI",
    description: "GlobalHDRI - Blender Addon",
  };


export default function Home() {
  return (
    <div className="container-wrapper">
      {/* <!-- Hero Container Start --> */}
      <div className="hero-container">
        <div className="hero-container-bg">
          <img src="include/images/hero/Hero.gif"/>
        </div>
        <div className="hero-container-content">
          <div className="hero-white-logo">
            <img src="include/images/hero/Logo.png" alt=""/>
          </div>
          <div className="hcc-upper">
            <h1>Global Hair, All Styles. Just a Few Clicks.</h1>
            <p>
                Global Hair is the ultimate hairstyle library for Blender,
                featuring <strong>180 presets fully editable</strong> through <strong>Geometry Nodes</strong>,
                to restyle, refine and apply hair in <strong>just a few clicks.</strong>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Hero Container End   --> */}

      {/* <!-- Features container start --> */}
      <div className="content-container pb-0 features-container">
        <div className="toolkit-heading">
          <p>Explore the <span className='bolder'>180 Presets,</span> Female, Male, Stylized & Beards.</p>
        </div>
        <div className="features-list">
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/Female-Box.gif" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/Male-Box.gif" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/Stylized-Box.gif" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/Beards-Box.gif" alt=""/>
              </div>
            </div>
          </div>
          <div className="inAction-heading">
            <p>Explore the <span className='bolder'>features.</span></p>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-alt">
              <div className="features-box-bg">
                <img src="include/images/features/features-1.jpg" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Same preset, Diferent Styles.</strong><br></br>
                  <span className="smaller-text">
                  One hairstyle can easily transform <br></br>
                  into dozens of variations, shorter, longer, wet, or slicked <br></br>
                  back all editable through Geometry Nodes and with the hair guides.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-alt">
              <div className="features-box-bg">
                <img src="include/images/features/features-quality.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Set the Exact Level of Detail You Need.</strong><br></br>
                  <span className="smaller-text">
                  Through Geometry Nodes, you can fine-tune <br></br>
                  the complexity of every strand from fast, optimized previews <br></br>
                  to full-quality hair built for cinematic renders.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver">
              <div className="features-box-bg">
                <img src="include/images/features/features-workflow.jpg" alt=""/>
              </div>
              <div className="features-box-text-alt-ver">
                <p>
                  <strong>Non-Destructive Workflow.</strong><br></br>
                  <span className="smaller-text">
                  Comb guides, tweak detail, freeze <br></br>
                  hair for render. Geometry Nodes <br></br>
                  keep every change <br></br>
                  procedural and reversible.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver">
              <div className="features-box-bg">
                <img src="include/images/features/features-anychar.gif" alt=""/>
              </div>
              <div className="features-box-text-alt-ver">
                <p>
                  <strong>Works with Any Character.</strong><br></br>
                  <span className="smaller-text">
                  Simply add a scalp with <br></br>
                  your chosen style, fit it to <br></br>
                  your character, and apply <br></br>
                  Skin Wrap everything’s ready <br></br>
                  to start styling and editing the hair.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-alt-s">
              <div className="features-box-bg">
                <img src="include/images/features/features-paint.gif" alt=""/>
              </div>
              <div className="features-box-text-alt-s">
                <p>
                  <strong>Paint to Grow Hair.</strong><br></br>
                  <span className="smaller-text">
                  All hair is generated through a scalp mask, <br></br>
                  letting you use Texture Paint to control exactly where the hair grows.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-alt-s">
              <div className="features-box-bg">
                <img src="include/images/features/features-comb.gif" alt=""/>
              </div>
              <div className="features-box-text-alt-s">
                <p>
                  <strong>Style the Guides, Not the Hair.</strong><br></br>
                  <span className="smaller-text">
                  You style only the guides, not every strand <br></br>
                  giving you full artistic control while keeping performance smooth.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="inAction-heading">
            <p>Let’s See Some <span className='bolder'>Use Cases.</span></p>
            <p>
              <span className="smaller-text-2">
              Watch real workflows and design examples showing how Global Hair <br></br>
              performs inside Blender, from setup to final render.
              </span>
            </p>
          </div>
          <div className="features-item">
            <div className="features-box-video">
              <div className="features-box-bg">
                <a href="https://youtu.be/jjnxjt6o_Ks" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-case1.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-video">
              <div className="features-box-bg">
                <a href="https://youtu.be/CfUTjgdZynY" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-case2.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-video">
              <div className="features-box-bg">
                <a href="https://youtu.be/0xu8XQAfgcc" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-case3.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-video">
              <div className="features-box-bg">
                <a href="https://youtu.be/IwZMi_jAi-s" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-case4.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-video">
              <div className="features-box-bg">
                <a href="https://youtu.be/oPVOA0tnV2g" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-case5.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-video">
              <div className="features-box-bg">
                <a href="https://youtu.be/d6c2dLzPEkk" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-case6.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-video">
              <div className="features-box-bg">
                <a href="https://youtu.be/sxF0UWYj_JQ" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-case7.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-video">
              <div className="features-box-bg">
                <a href="https://youtu.be/A9yoyuB701Y" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-case8.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-video-2">
              <div className="features-box-bg">
                <a href="https://youtu.be/KNgRPon8VKo" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-case9.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="inAction-heading">
            <p>Powered by the <span className='bolder'>Global Addons.</span></p>
            <p>
              <span className="smaller-text-2">
              A collection of renders showcasing the combined power of <br></br>
              <strong>Global Hair, Global Skin, and Global HDRI</strong> inside Blender.
              </span>
            </p>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-video-3">
              <div className="features-box-bg">
                <a href="https://superhivemarket.com/products/globalskin-ultimate-skin-shader" className="" target="_blank">
                    <img className="case-img" src="include/images/features/features-Boton-GS.gif" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-video-3">
              <div className="features-box-bg">
                <a href="https://superhivemarket.com/products/globalhdri-masters-the-light" className="" target="_blank">
                    <span className="sale-text">
                    <strong>On sale 77%</strong>
                    </span>
                    <img className="case-img" src="include/images/features/features-Boton-GH.gif" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end1.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end2.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end3.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end4.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end5.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end6.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end7.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end8.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end9.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-alt-ver-2">
              <div className="features-box-bg">
                <img src="include/images/features/features-end10.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-footer">
              <div className="footer-bg">
                <div className="icons">
                  <div className="blendify-icon">
                    <span className="footer-text">
                        <p>Tool's by <strong>Blendify </strong></p>
                    </span>
                    <a href="https://superhivemarket.com/creators/blendify" className="footer-logo" target="_blank">
                      <img src="include/images/footer/Blendify Icon.png" alt=""/>
                    </a>
                  </div>
                  <div className="other-icons">
                    <a href="https://superhivemarket.com/creator/products/global-hair" className="globalhair-icon" target="_blank">
                      <img src="include/images/footer/GlobalHair Boton.png" alt=""/>
                    </a>
                    <a href="https://superhivemarket.com/products/globalskin-ultimate-skin-shader" className="globalhair-icon" target="_blank">
                      <img src="include/images/footer/Globalskin Boton.png" alt=""/>
                    </a>
                    <a href="https://superhivemarket.com/products/globalhdri-masters-the-light" className="globalhair-icon" target="_blank">
                      <img src="include/images/footer/GlobalHDRI Boton.png" alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inAction-heading-2">
            <p>
              <span className="smaller-text-3">
              <strong>Thanks</strong> for watching, <br></br>
              and have fun creating in blender :)
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Features container end   --> */}
    </div>
  );
}
