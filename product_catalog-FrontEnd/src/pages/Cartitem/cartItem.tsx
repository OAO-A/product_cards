import React from 'react';
import style from './cart.module.scss';
import img1 from '../../img/phones/apple-iphone-xs-max/spacegray/00.jpg';
import img2 from '../../img/phones/apple-iphone-xs-max/spacegray/01.jpg';
import img3 from '../../img/phones/apple-iphone-xs-max/spacegray/02.jpg';
import img4 from '../../img/phones/apple-iphone-xs-max/spacegray/03.jpg';
import img5 from '../../img/phones/apple-iphone-xs-max/spacegray/04.jpg';
import like from './like.svg';

export const CartItem = () => {
  return (
    <>
      <h2
        className={`${style.good_title} ${style.title} D--1-24 T--1-12 S--1-4`}
      >
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>
      <div className={`${style.good_images} S--1-4 T--1-7 D--1-11`}>

        <img
          src={img1}
          alt="main-img"
          className={`${style.main_img} D--4-12 S--1-4 T--3-6`}
        />

        <div className={`${style.secondary_images} S--1-4 T--1-2`}>
          <div className={`${style.good_wrapper} D--1-1`}>
            <img
              src={img2}
              alt="1"
              className={`${style.secondary_img} D--1-1`}
            />
          </div>
          <div className={`${style.good_wrapper} D--1-1`}>
            <img
              src={img3}
              alt="1"
              className={`${style.secondary_img} D--1-1`}
            />
          </div>
          <div className={`${style.good_wrapper} D--1-1`}>
            <img
              src={img4}
              alt="1"
              className={`${style.secondary_img} D--1-1`}
            />
          </div>
          <div className={`${style.good_wrapper} D--1-1`}>
            <img
              src={img5}
              alt="1"
              className={`${style.secondary_img} D--1-1`}
            />
          </div>
          <div className={`${style.good_availableColors} D--14-17`}></div>
        </div>
      </div>

      <div className={`${style.good_options} S--1-4 T--8-12 D--14-20`}>
        <div className={`${style.good_colors}`}>
          <div className={`${style.good_colors__bar}`}>
            <p>AVAILABLE COLORS</p>
            <div className={`${style.good_color}`}>
              <button
                autoFocus
                className={`${style.color_button} ${style.button_1}`}
              ></button>
            </div>
            <div className={`${style.good_color}`}>
              <button
                className={`${style.color_button} ${style.button_2}`}
              ></button>
            </div>
            <div className={`${style.good_color}`}>
              <button
                className={`${style.color_button} ${style.button_3}`}
              ></button>
            </div>
            <div className={`${style.good_color}`}>
              <button
                className={`${style.color_button} ${style.button_4}`}
              ></button>
            </div>
          </div>
          <p className={`${style.good_id} S--4-4`}>ID: 802390</p>
        </div>
        <div className={`${style.good_capacity} S--1-4 T--8-12 D--14-20`}>
          <p>Select capacity</p>
          <div>
            <button autoFocus className={`${style.capacity_selector}`}>
              64 GB
            </button>
            <button className={`${style.capacity_selector}`}>256 GB</button>
            <button className={`${style.capacity_selector}`}>512 GB</button>
          </div>
        </div>
        <div className={`${style.good_prices} S--1-4 T--8-12 D--14-20`}>
          <p className={`${style.good_prices_current}`}>$799</p>
          <p className={`${style.good_prices_previous}`}>$1199</p>
        </div>
        <div className={`${style.good_purchaise} S--1-4 T--8-12 D--14-20`}>
          <button className={`${style.purchaise_btn}`}>Add to cart</button>
          <button className={`${style.favorite_btn}`}>
            <img src={like} alt="like" />
          </button>
        </div>
        <div className={`${style.good_details} S--1-4 T--8-12 D--14-20`}>
          <div className={`${style.good_detail}`}>
            <p className={`${style.good_detail_1}`}>Screen</p>
            <p className={`${style.good_detail_2}`}>6.5” OLED</p>
          </div>
          <div className={`${style.good_detail}`}>
            <p className={`${style.good_detail_1}`}>Resolution</p>
            <p className={`${style.good_detail_2}`}>2688x1242</p>
          </div>
          <div className={`${style.good_detail}`}>
            <p className={`${style.good_detail_1}`}>Processor</p>
            <p className={`${style.good_detail_2}`}>Apple A12 Bionic</p>
          </div>
          <div className={`${style.good_detail}`}>
            <p className={`${style.good_detail_1}`}>RAM</p>
            <p className={`${style.good_detail_2}`}>3 GB</p>
          </div>
        </div>
      </div>

      <div className={`${style.good_about} S--1-4 T--1-12 D--1-12`}>
        <h3 className={`${style.good_about__title} ${style.title}`}>About</h3>
        <h4 className={`${style.about_title} ${style.title}`}>
          And then there was Pro
        </h4>
        <p className={`${style.about_content}`}>
          A transformative triple‑camera system that adds tons of capability
          without complexity. <br /> <br />
          An unprecedented leap in battery life. And a mind‑blowing chip that
          doubles down on machine learning and pushes the boundaries of what a
          smartphone can do. Welcome to the first iPhone powerful enough to be
          called Pro.
        </p>
        <h4 className={`${style.about_title} ${style.title}`}>Camera</h4>
        <p className={`${style.about_content}`}>
          Meet the first triple‑camera system to combine cutting‑edge technology
          with the legendary simplicity of iPhone. Capture up to four times more
          scene. Get beautiful images in drastically lower light. Shoot the
          highest‑quality video in a smartphone — then edit with the same tools
          you love for photos. You’ve never shot with anything like it.
        </p>
        <h4 className={`${style.about_title} ${style.title}`}>
          Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love
          it.
        </h4>
        <p className={`${style.about_content}`}>
          iPhone 11 Pro lets you capture videos that are beautifully true to
          life, with greater detail and smoother motion. Epic processing power
          means it can shoot 4K video with extended dynamic range and cinematic
          video stabilization — all at 60 fps. You get more creative control,
          too, with four times more scene and powerful new editing tools to play
          with.
        </p>
      </div>

      <div className={`${style.good_specs} S--1-4 T--1-12 D--13-24`}>
        <h3 className={`${style.specs_title} ${style.title}`}>Tech specs</h3>
        <div className={`${style.good_spec}`}>
          <p className={`${style.spec_title} ${style.text}`}>Screen</p>
          <p className={`${style.spec_content} ${style.text}`}>6.5” OLED</p>
        </div>
        <div className={`${style.good_spec}`}>
          <p className={`${style.spec_title} ${style.text}`}>Resolution</p>
          <p className={`${style.spec_content} ${style.text}`}>2688x1242</p>
        </div>
        <div className={`${style.good_spec}`}>
          <p className={`${style.spec_title} ${style.text}`}>Processor</p>
          <p className={`${style.spec_content} ${style.text}`}>
            Apple A12 Bionic
          </p>
        </div>
        <div className={`${style.good_spec}`}>
          <p className={`${style.spec_title} ${style.text}`}>RAM</p>
          <p className={`${style.spec_content} ${style.text}`}>3 GB</p>
        </div>
        <div className={`${style.good_spec}`}>
          <p className={`${style.spec_title} ${style.text}`}>Built in memory</p>
          <p className={`${style.spec_content} ${style.text}`}>64 GB</p>
        </div>
        <div className={`${style.good_spec}`}>
          <p className={`${style.spec_title} ${style.text}`}>Camera</p>
          <p className={`${style.spec_content} ${style.text}`}>
            12 Mp + 12 Mp + 12 Mp (Triple)
          </p>
        </div>
        <div className={`${style.good_spec}`}>
          <p className={`${style.spec_title} ${style.text}`}>Zoom</p>
          <p className={`${style.spec_content} ${style.text}`}>Optical, 2x</p>
        </div>
        <div className={`${style.good_spec}`}>
          <p className={`${style.spec_title} ${style.text}`}>Cell</p>
          <p className={`${style.spec_content} ${style.text}`}>
            GSM, LTE, UMTS
          </p>
        </div>
      </div>
    </>
  );
};
