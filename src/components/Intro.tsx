import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Intro1png from '../assets/1-intro.png';
import Intro2png from '../assets/2-intro.png';   
import Intro3png from '../assets/3-intro.png';
import './Intro.css';
import { useSwiper } from 'swiper/react';

interface ContainerProps {  // Define any props if needed
    onFinish: () => void; // Callback when intro is finished
}

const SwiperButtonNext = ({ children }: { children: React.ReactNode }) => {
    const swiper = useSwiper();
    return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};
const Intro: React.FC<ContainerProps> = ({onFinish}) => {

    return (
        <Swiper>
            <SwiperSlide>
                <img src={Intro1png} alt="Intro 1" />
                <IonText>
                    <h3>Welcome Board!</h3>
                </IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Intro2png} alt="Intro 2" />
                <IonText>
                    <h3>A Big Hello to you</h3>
                </IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Intro3png} alt="Intro 2" />
                <IonText>
                    <h3>Grateful for downloading the apps</h3>
                </IonText>
                <IonButton onClick={()=> onFinish()}>Finish</IonButton>
            </SwiperSlide>
        </Swiper>

    );
};

export default Intro;