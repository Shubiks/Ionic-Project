import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar,IonCard,IonInput,IonCardContent,IonButton,IonIcon, IonButtons, IonBackButton, useIonRouter, IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { checkmarkDoneOutline } from 'ionicons/icons';

const Register: React.FC = () => {
    const router = useIonRouter();

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log("Register button clicked");
        router.goBack();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'secondary'}>
                    <IonButtons slot="start">
                            <IonBackButton defaultHref='/' text="Back"/>
                        </IonButtons>
                    <IonTitle>
                        Create Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonGrid fixed>
                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                            <IonCard>
                                <IonCardContent>
                                    <form onSubmit={doRegister}>
                                        <IonInput label='Email' type='email' placeholder='abcd@gmail.com' labelPlacement='floating' fill='outline'></IonInput>
                                        <IonInput className="ion-margin-top" label='Password' type='password' placeholder='abcd1234*' labelPlacement='floating' fill='outline'></IonInput>
                                        <IonButton expand="block" className='ion-margin-top' type='submit'>Create My Account
                                            <IonIcon icon={checkmarkDoneOutline} slot="end" />
                                        </IonButton>
                                    </form>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Register;