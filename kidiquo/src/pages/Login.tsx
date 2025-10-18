import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonBackButton,
  IonButtons,
  IonCheckbox,
  IonToast,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { mail, lockClosed, eye, eyeOff } from 'ionicons/icons';
import './Login.css';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setToastMessage('Por favor, completa todos los campos');
      setShowToast(true);
      return;
    }

    if (!isValidEmail(email)) {
      setToastMessage('Por favor, ingresa un email válido');
      setShowToast(true);
      return;
    }

    // Aquí irá la lógica de autenticación
    try {
      // Simulación de login exitoso
      setToastMessage('¡Inicio de sesión exitoso!');
      setShowToast(true);
      
      setTimeout(() => {
        history.push('/home');
      }, 1500);
    } catch (error) {
      setToastMessage('Error al iniciar sesión. Verifica tus credenciales.');
      setShowToast(true);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const navigateToRegister = () => {
    history.push('/register');
  };

  const navigateToForgotPassword = () => {
    setToastMessage('Función de recuperación de contraseña próximamente');
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/welcome" />
          </IonButtons>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="login-content">
        <IonGrid className="login-grid">
          <IonRow className="login-header">
            <IonCol size="12" className="ion-text-center">
              <IonText>
                <h1 className="login-title">¡Bienvenido de vuelta!</h1>
              </IonText>
              <IonText>
                <p className="login-subtitle">
                  Inicia sesión para continuar con KidiQuo
                </p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow className="login-form">
            <IonCol size="12" size-md="8" size-lg="6" className="form-container">
              <IonItem className="form-item">
                <IonIcon icon={mail} slot="start" className="input-icon" />
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonInput={(e) => setEmail(e.detail.value!)}
                  placeholder="tu@email.com"
                  className="form-input"
                />
              </IonItem>

              <IonItem className="form-item">
                <IonIcon icon={lockClosed} slot="start" className="input-icon" />
                <IonLabel position="stacked">Contraseña</IonLabel>
                <IonInput
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onIonInput={(e) => setPassword(e.detail.value!)}
                  placeholder="Tu contraseña"
                  className="form-input"
                />
                <IonButton
                  fill="clear"
                  slot="end"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  <IonIcon icon={showPassword ? eyeOff : eye} />
                </IonButton>
              </IonItem>

              <div className="form-options">
                <IonItem lines="none" className="remember-item">
                  <IonCheckbox
                    checked={rememberMe}
                    onIonChange={e => setRememberMe(e.detail.checked)}
                    slot="start"
                  />
                  <IonLabel className="remember-label">Recordarme</IonLabel>
                </IonItem>
                
                <IonText 
                  className="forgot-password" 
                  onClick={navigateToForgotPassword}
                >
                  ¿Olvidaste tu contraseña?
                </IonText>
              </div>

              <IonButton
                expand="block"
                size="large"
                onClick={handleLogin}
                className="login-submit-button"
              >
                Iniciar Sesión
              </IonButton>

              <div className="divider">
                <span>o</span>
              </div>

              <IonButton
                expand="block"
                fill="outline"
                size="large"
                className="social-button google-button"
              >
                <IonIcon name="logo-google" slot="start" />
                Continuar con Google
              </IonButton>

              <IonButton
                expand="block"
                fill="outline"
                size="large"
                className="social-button facebook-button"
              >
                <IonIcon name="logo-facebook" slot="start" />
                Continuar con Facebook
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="login-footer">
            <IonCol size="12" className="ion-text-center">
              <IonText color="medium">
                <p>
                  ¿No tienes cuenta?{' '}
                  <span className="link-text" onClick={navigateToRegister}>
                    Regístrate aquí
                  </span>
                </p>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
          position="top"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;