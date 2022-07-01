import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import big from "../../images/big.png";
import img1 from "../../images/bottol1.png";
import img2 from "../../images/brand.png";
import "./ShowProductBanner.css";
const ShowProductBanner = () => {
  return (
    <div className="show-banner-container">
      <div className="margin-container">
        <div className="row">


          <div className="col-md-8">
         

        <div className="row p_1">
       
                <div className="img-div col-md-6">
                    <img src={img1} alt="" />
                </div>
                <div className="text-div col-md-6">
                <div className="P_name"> Pyridoxine Vitamin B6</div> 
              <div className="P_category"> Pyridoxine Vitamin B6 ut I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</div>
           
              <a href="/products">
                <button className="p_button">
                  Buy Now <ChevronRightIcon />
                </button>
              </a> </div>  
       
        </div>
     
        <div className="row p_2 mt-5">
       
                <div className="img-div col-md-6">
                    <img src={img2} alt="" />
                </div>
                <div className="text-div col-md-6">
                <div className="P_name"> Brand Pyridoxine Vitamin B6</div> 
              <div className="P_category"> Pyridoxine Vitamin B6 ut I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</div>
           
              <a href="/products">
                <button className="p_button">
                  Buy Now <ChevronRightIcon />
                </button>
              </a> </div>  
       
        </div>
     

                
           </div>
          <div className="col-md-4 big-photo-part">
            <div className="text-div">
              <span className="p_percent"> big sale 65% off </span>
              <div className="P_category"> Pyridoxine Vitamin B6</div>
              <div className="P_name"> Pyridoxine Vitamin B6</div>
              <a href="/products">
                <button className="p_button">
                  Buy Now <ChevronRightIcon />
                </button>
              </a>
            </div>
            <div className="image-div">
              <img className="p_img" src={big} alt="" />
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default ShowProductBanner;
