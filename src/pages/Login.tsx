import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect } from 'react';
import {useState} from 'react';
import {logInOutline, personCircleOutline} from 'ionicons/icons';
import LOGO from '../assets/logo.png';
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro_seen';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introseen, setIntroSeen] = useState(false);
    const [present, dismiss] = useIonLoading();

    useEffect(() => {
            const checkStorage = async () => {
                const seen = await Preferences.get({ key: INTRO_KEY });
                setIntroSeen(seen.value === 'true');
            }
        checkStorage();
        }, [])

    const doLogin = async (event: any)=>{
        event.preventDefault();
        console.log("Login button clicked");
        await present('Logging in...');
        setTimeout(async () => {
            dismiss();
            router.push('/app','root');
        }, 1000);
    }
    const finishintro = async()=>{
        console.log("Intro finished");
        setIntroSeen(true);
        Preferences.set({ key: INTRO_KEY, value: 'true' });
    };
    const seeIntroAgain = ()=>{
        setIntroSeen(false);
        Preferences.remove({ key: INTRO_KEY });
    };
    return (
        <>
            {
                !introseen 
                ?( 
                    <Intro onFinish={finishintro}/>
                )
                :(
                    <IonPage>
                        <IonHeader>
                            <IonToolbar color={'secondary'}>
                                <IonTitle>Title</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent scrollY={false} className='ion-padding'>
                            <IonGrid fixed>
                                <IonRow class='ion-justify-content-center'>
                                    <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                        <div className="ion-text-center ion-padding">
                                            <img src={LOGO} alt='logo' width={'50%'} />
                                        </div>
                                    </IonCol>
                                </IonRow>
                                <IonRow class='ion-justify-content-center'>
                                    <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                        <IonCard>
                                            <IonCardContent>
                                                <form onSubmit={doLogin}>
                                                    <IonInput label='Email' type='email' placeholder='abcd@gmail.com' labelPlacement='floating' fill='outline'></IonInput>
                                                    <IonInput className="ion-margin-top" label='Password' type='password' placeholder='abcd1234*' labelPlacement='floating' fill='outline'></IonInput>
                                                    <IonButton expand="block" className='ion-margin-top' type='submit'>Login 
                                                        <IonIcon icon={logInOutline} slot="end" />
                                                    </IonButton>

                                                    <IonButton expand="block" color={'secondary'} className='ion-margin-top' type='button' routerLink="/register">Register
                                                        <IonIcon icon={personCircleOutline} slot="end" />
                                                    </IonButton>

                                                    <IonButton onClick={seeIntroAgain} size='small' color={'medium'} className='ion-margin-top' type='button' expand='block'>Watch Intro Again
                                                        <IonIcon icon={personCircleOutline} slot="end" />
                                                    </IonButton>    
                                                </form>
                                            </IonCardContent>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>    
                        </IonContent>
                    </IonPage>
                )
            }
        </>
    );
};

export default Login;