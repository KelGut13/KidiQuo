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
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { person, mail, lockClosed, eye, eyeOff, call } from 'ionicons/icons';
import './Register.css';

const Register: React.FC = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegister = async () => {
    // Validaciones
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setToastMessage('Por favor, completa todos los campos obligatorios');
      setShowToast(true);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setToastMessage('Por favor, ingresa un email válido');
      setShowToast(true);
      return;
    }

    if (formData.password.length < 6) {
      setToastMessage('La contraseña debe tener al menos 6 caracteres');
      setShowToast(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setToastMessage('Las contraseñas no coinciden');
      setShowToast(true);
      return;
    }

    if (!acceptTerms) {
      setToastMessage('Debes aceptar los términos y condiciones');
      setShowToast(true);
      return;
    }

    // Aquí irá la lógica de registro
    try {
      // Simulación de registro exitoso
      setToastMessage('¡Registro exitoso! Bienvenido a KidiQuo');
      setShowToast(true);
      
      setTimeout(() => {
        history.push('/home');
      }, 2000);
    } catch (error) {
      setToastMessage('Error al crear la cuenta. Inténtalo nuevamente.');
      setShowToast(true);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const navigateToLogin = () => {
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/welcome" />
          </IonButtons>
          <IonTitle>Crear Cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="register-content">
        <IonGrid className="register-grid">
          <IonRow className="register-header">
            <IonCol size="12" className="ion-text-center">
              <IonText>
                <h1 className="register-title">¡Únete a KidiQuo!</h1>
              </IonText>
              <IonText>
                <p className="register-subtitle">
                  Crea tu cuenta y comienza a cuidar de tus pequeños
                </p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow className="register-form">
            <IonCol size="12" size-md="8" size-lg="6" className="form-container">
              <div className="name-row">
                <IonItem className="form-item name-item">
                  <IonIcon icon={person} slot="start" className="input-icon" />
                  <IonLabel position="stacked">Nombre *</IonLabel>
                  <IonInput
                    type="text"
                    value={formData.firstName}
                    onIonInput={(e) => updateFormData('firstName', e.detail.value!)}
                    placeholder="Tu nombre"
                    className="form-input"
                  />
                </IonItem>

                <IonItem className="form-item name-item">
                  <IonLabel position="stacked">Apellido *</IonLabel>
                  <IonInput
                    type="text"
                    value={formData.lastName}
                    onIonInput={(e) => updateFormData('lastName', e.detail.value!)}
                    placeholder="Tu apellido"
                    className="form-input"
                  />
                </IonItem>
              </div>

              <IonItem className="form-item">
                <IonIcon icon={mail} slot="start" className="input-icon" />
                <IonLabel position="stacked">Email *</IonLabel>
                <IonInput
                  type="email"
                  value={formData.email}
                  onIonInput={(e) => updateFormData('email', e.detail.value!)}
                  placeholder="tu@email.com"
                  className="form-input"
                />
              </IonItem>

              <IonItem className="form-item">
                <IonIcon icon={call} slot="start" className="input-icon" />
                <IonLabel position="stacked">Teléfono (opcional)</IonLabel>
                <IonInput
                  type="tel"
                  value={formData.phone}
                  onIonInput={(e) => updateFormData('phone', e.detail.value!)}
                  placeholder="+52 123 456 7890"
                  className="form-input"
                />
              </IonItem>

              <IonItem className="form-item">
                <IonIcon icon={lockClosed} slot="start" className="input-icon" />
                <IonLabel position="stacked">Contraseña *</IonLabel>
                <IonInput
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onIonInput={(e) => updateFormData('password', e.detail.value!)}
                  placeholder="Mínimo 6 caracteres"
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

              <IonItem className="form-item">
                <IonIcon icon={lockClosed} slot="start" className="input-icon" />
                <IonLabel position="stacked">Confirmar Contraseña *</IonLabel>
                <IonInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onIonInput={(e) => updateFormData('confirmPassword', e.detail.value!)}
                  placeholder="Repite tu contraseña"
                  className="form-input"
                />
                <IonButton
                  fill="clear"
                  slot="end"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="password-toggle"
                >
                  <IonIcon icon={showConfirmPassword ? eyeOff : eye} />
                </IonButton>
              </IonItem>

              <div className="terms-section">
                <IonItem lines="none" className="terms-item">
                  <IonCheckbox
                    checked={acceptTerms}
                    onIonChange={e => setAcceptTerms(e.detail.checked)}
                    slot="start"
                  />
                  <IonLabel className="terms-label">
                    Acepto los{' '}
                    <span className="link-text">términos y condiciones</span>
                    {' '}y la{' '}
                    <span className="link-text">política de privacidad</span>
                  </IonLabel>
                </IonItem>
              </div>

              <IonButton
                expand="block"
                size="large"
                onClick={handleRegister}
                className="register-submit-button"
              >
                Crear Cuenta
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
                Registrarse con Google
              </IonButton>

              <IonButton
                expand="block"
                fill="outline"
                size="large"
                className="social-button facebook-button"
              >
                <IonIcon name="logo-facebook" slot="start" />
                Registrarse con Facebook
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="register-footer">
            <IonCol size="12" className="ion-text-center">
              <IonText color="medium">
                <p>
                  ¿Ya tienes cuenta?{' '}
                  <span className="link-text" onClick={navigateToLogin}>
                    Inicia sesión aquí
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

export default Register;