import Carousel from 'react-bootstrap/Carousel'
import '../../../styles/carousel.scss'
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {HomeContent} from "../content/HomeContent";
import {Advertisement} from "./advertisement/Advertisement";


export const HomeCarousel = () =>  {
    return (
        <div className='carousel__wrapper'>
            <div className='carousel__custom'>
                <Carousel controls={false} >
                    <Carousel.Item>
                        <Advertisement page={1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Advertisement page={2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Advertisement page={3} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Advertisement page={4} />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="carousel__fixed">
                <Header />
            </div>
            <div className="carousel__fixed">
                <HomeContent />
            </div>
            <div className="carousel__fixed-footer">
                <Footer />
            </div>
        </div>
    );
}

