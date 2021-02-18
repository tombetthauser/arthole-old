import './css/Demo.css';
import Links from '../components/Links.js';
import React, { useEffect } from 'react';

const demoSet = [
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2021/02/xlarge-4eb77b6772a9e86d24053dfd15204fea-2048x1517.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2021/01/xlarge-2cf11786947602d2262b8b490fd14a70-2048x1535.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2021/02/xlarge-5063a1f5470d8717b389ff36d1818b9b-2048x1329.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/116-1600x1067.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/126-1600x1067.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/DSC1106-1600x1066.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/27-1-900x1260.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/30-1-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/07Karl_Isakson-900x1260.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/39Karl_Isakson-900x1260.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/P1390419-1-900x675.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/P1390410-900x675.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/P1390411-900x1200.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/P1390424-900x1200.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/51RH_WhitneyInstall2019_01-900x586.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/37RH_WhitneyInstall2019_55-900x626.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/14RH_WhitneyInstall2019_065-900x675.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/9charlie-rubin-9302-900x599.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/phg_AS_Untitled_2015-700x808.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/PHG_AS_10-23_001e-700x467.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/phg_AS_Einstein_Vertical-700x992.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/phg_AS_EasyRider_2016-700x1026.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/SAC.Press_.Image_.1-900x675.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/SAC.Press_.Image_.4-900x598.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/SAC.Images.Installation.7-900x675.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/2019_10_21_PARKER2892_1-copy-1-900x744.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/2019_10_21_PARKER3031-1-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/2019_10_21_PARKER3027-1-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/2019_10_21_PARKER2873-1-900x674.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/SLan054-900x681.jpg",
  "https://s3.amazonaws.com/contemporaryartgroup/wp-content/uploads/2019/12/SLan%40RJ_2019-0-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/SLan056-900x667.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/SLan071-900x685.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/144-900x1350.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/106-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/126-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/116-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/142-700x1050.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/92-700x1049.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/133-700x467.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/171-700x1050.jpg",
  "https://s3.amazonaws.com/contemporaryartgroup/wp-content/uploads/2019/12/StGR_EX-16_SP%C3%84TKAUFF_2019_05-1-900x675.jpg",
  "https://s3.amazonaws.com/contemporaryartgroup/wp-content/uploads/2019/12/StGR_EX-16_SP%C3%84TKAUFF_2019_11-1-900x675.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/StGR_P_57_Constitution_2019-1-900x702.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/113-700x1050.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/03-700x467.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/061-700x1050.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/103-700x1050.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/RM114-900x1057.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/20191112_NightGallery68080-900x674.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/RM113-900x1316.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/RM109-900x1268.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/GORDO46068-700x495.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/2019_Exh.View_Gordon_EPNY_08-700x495.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/unnamed-7-700x496.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/GORDO45940-700x394.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/20191114-_MG_8584-1-900x653.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/DSC3563-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/191121_Karma.Int_Sylvie_005-700x701.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/Annik-Wetter_2019-11-27_10137-900x675.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/Annik-Wetter_2019-11-27_10075-900x675.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/191121_Karma.Int_Sylvie_048-900x848.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/20191114-_MG_8562-900x1144.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/20191114-_MG_8540-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/20191114-_MG_8572-900x600.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/20191114-_MG_8588-900x653.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/CA_BOYD_2019_06-900x1179.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/CA_BOYD_2019_02-900x455.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/CA_BOYD_2019_10-900x1045.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/26-700x914.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/202-700x467.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/052-700x467.jpg",
  "https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2019/12/06-700x506.jpg",
]

const Demo = () => {
  let imageIdx = Math.floor(Math.random() * demoSet.length);

  const images = [];
  let img = null;
  let imgWrapper = null;

  const next = () => {
    img.style.opacity = 0;

    setTimeout(() => {
      imageIdx = (imageIdx + 3) % demoSet.length;
      img.src = demoSet[imageIdx];
      document.querySelector(".test").style.height = `${img.height}px`
    }, 750);

    setTimeout(() => { img.style.opacity = 1 }, 1150);
  }
  
  useEffect(() => {    // Update the document title using the browser API
    img = document.querySelector(".demo-img");
    imgWrapper = document.querySelector(".test");
    
    const newImg = new Image();
    newImg.src = demoSet[imageIdx];
    images.push(newImg);

    demoSet.forEach(url => {
      const newImg = new Image();
      newImg.src = url;
      images.push(newImg);
    })

    img.style.opacity = 0;

    setTimeout(() => {
      console.log(img.height)
      img.src = demoSet[imageIdx];
      if (img.height) imgWrapper.style.height = `${img.height}px`
    }, 1250);
    
    setTimeout(() => { 
      console.log(img.height)
      img.style.opacity = 1 
      if (img.height) imgWrapper.style.height = `${img.height}px`
    }, 1750);
  
    setTimeout(() => { 
      console.log(img.height)
      if (img.height) imgWrapper.style.height = `${img.height}px`
    }, 2250);
  });

  return (
    <div>
      <h1 className="demo-h1">ARTHOLE</h1>
      <div className="demo-wrapper">
        <div className="test">
          <img className="demo-img"/>
        </div>
        <br />
        <button className="demo-form__submit" type="submit" onClick={next}>No</button>
        <button className="demo-form__submit" type="submit" onClick={next}>Yes</button>
      </div>
      <Links />
    </div>
  )
}

export default Demo;