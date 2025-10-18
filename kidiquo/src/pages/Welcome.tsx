import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/react';
import { calendar, heart, people } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './Welcome.css';

const Welcome: React.FC = () => {
  const history = useHistory();

  const navigateToLogin = () => {
    history.push('/login');
  };

  const navigateToRegister = () => {
    history.push('/register');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>KidiQuo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="welcome-content">
        <IonGrid className="welcome-grid">
          <IonRow className="welcome-header">
            <IonCol size="12" className="ion-text-center">
              <div className="logo-container">
                <IonImg 
                  src="/assets/logo.png" 
                  alt="KidiQuo Logo"
                  className="welcome-logo"
                />
              </div>
              <IonText>
                <h1 className="welcome-title">¡Bienvenido a KidiQuo!</h1>
              </IonText>
              <IonText>
                <p className="welcome-subtitle">
                  La aplicación perfecta para el cuidado y seguimiento de tus pequeños
                </p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow className="features-section">
            <IonCol size="12" size-md="4" className="feature-item">
              <div className="feature-icon">
                <IonIcon icon={calendar} size="large" />
              </div>
              <IonText>
                <h3>Seguimiento</h3>
                <p>Lleva un registro completo del crecimiento y desarrollo</p>
              </IonText>
            </IonCol>
            
            <IonCol size="12" size-md="4" className="feature-item">
              <div className="feature-icon">
                <IonIcon icon={heart} size="large" />
              </div>
              <IonText>
                <h3>Cuidado</h3>
                <p>Recordatorios y consejos para el bienestar infantil</p>
              </IonText>
            </IonCol>
            
            <IonCol size="12" size-md="4" className="feature-item">
              <div className="feature-icon">
                <IonIcon icon={people} size="large" />
              </div>
              <IonText>
                <h3>Comunidad</h3>
                <p>Conecta con otros padres y comparte experiencias</p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow className="welcome-actions">
            <IonCol size="12" size-md="6" className="ion-padding-bottom">
              <IonButton 
                expand="block" 
                fill="solid" 
                size="large"
                onClick={navigateToLogin}
                className="login-button"
              >
                Iniciar Sesión
              </IonButton>
            </IonCol>
            
            <IonCol size="12" size-md="6">
              <IonButton 
                expand="block" 
                fill="outline" 
                size="large"
                onClick={navigateToRegister}
                className="register-button"
              >
                Crear Cuenta
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="welcome-footer">
            <IonCol size="12" className="ion-text-center">
              <IonText color="medium">
                <p>¿Ya tienes una cuenta? <span className="link-text" onClick={navigateToLogin}>Inicia sesión aquí</span></p>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;