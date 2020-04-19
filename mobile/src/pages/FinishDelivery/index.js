import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';

import api from '~/services/api';

import Container from '~/components/DeliveryScreensLayout';

import { CameraView, Camera, CameraButton, SendImageButton } from './styles';

import { setDeliveriesRequest } from '~/store/modules/deliveries/actions';

export default function FinishDelivery() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const delivery = useSelector((state) => state.delivery.delivery);

  const [Photo, setPhoto] = useState(null);
  async function takePicture(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    setPhoto(data);
  }

  async function handleSubmitImage() {
    const data = new FormData();

    data.append('file', {
      name: `${delivery.product}#${delivery.id}.jpg`,
      type: 'image/jpeg',
      uri: Photo.uri,
    });

    const signatureImage = await api.post('signatures', data);
    console.tron.log(signatureImage);
    await api.put(
      `/deliveryman/${delivery.deliveryman_id}/deliveries/${delivery.id}/finish`,
      {
        signature_id: signatureImage.data.id,
      }
    );

    dispatch(setDeliveriesRequest(delivery.deliveryman_id));

    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <>
        <CameraView>
          {Photo && (
            <Image
              source={Photo}
              ImageResizeMode
              style={{
                flexGrow: 1,
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          )}

          {!Photo && (
            <Camera
              type={Camera.Constants.Type.back}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
            >
              {({ camera }) => {
                return (
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <CameraButton onPress={() => takePicture(camera)}>
                      <Icon name="camera-alt" color="#fff" size={40} />
                    </CameraButton>
                  </View>
                );
              }}
            </Camera>
          )}
        </CameraView>
        {Photo && (
          <SendImageButton onPress={() => handleSubmitImage()}>
            Enviar
          </SendImageButton>
        )}
      </>
    </Container>
  );
}
