import React, {useState, useEffect, createRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  FlatList,
  Keyboard,
  Alert,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {postData} from '../../connectivity/FetchNodeServices';
import AppTextInput from '../../components/AppTextInput';
import COLORS from '../../components/Colors';
import Button from '../../components/Button';
import {ButtonGroup} from '../../components/ButtonGroup';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SignatureCapture from 'react-native-signature-capture';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const {width, height} = Dimensions.get('window');
import FilePicker, {types} from 'react-native-document-picker';
import {TextInput} from 'react-native-paper';
import Logo from '../../assets/logo.png';
import Footer from '../../assets/footer.png';
import Header from '../../assets/header.png';
const CreateData = props => {
  var navigation = useNavigation();
  const [date, setDate] = useState('');
  const [name_of_product, setName_of_product] = useState('');
  const [batch_size, setBatch_size] = useState('');
  const [batch_number, setBatch_number] = useState('');
  const [premix_number, setPremix_number] = useState('');
  const [water_premix_kg, setWater_premix_kg] = useState('');
  const [oil_premix_kg, setOil_premix_kg] = useState('');
  const [batch_start_time, setBatch_start_time] = useState('');
  const [pasteurization_time_from, setPasteurization_time_from] = useState('');
  const [pasteurization_time_to, setPasteurization_time_to] = useState('');
  const [pasteurization_temp, setPasteurization_temp] = useState('');
  const [
    magnetic_filtration_checked_at_time,
    setMagnetic_filtration_checked_at_time,
  ] = useState('');
  const [
    magnetic_filtration_magnet_present,
    setMagnetic_filtration_magnet_present,
  ] = useState('');
  const [
    magnetic_filtration_strainer_condition,
    setMagnetic_filtration_strainer_condition,
  ] = useState('');
  const [homogenization_start_time, setHomogenization_start_time] =
    useState('');
  const [homogenization_end_time, setHomogenization_end_time] = useState('');
  const [homogenization_pressure, setHomogenization_pressure] = useState('');
  const [ageing_tank_number, setAgeing_tank_number] = useState('');
  const [ageing_temp, setAgeing_temp] = useState('');
  const [chilling_temp, setChilling_temp] = useState('');
  const [filling_temp, setFilling_temp] = useState('');
  const [filling_start_time, setFilling_start_time] = useState('');
  const [filling_start_temp, setFilling_start_temp] = useState('');
  const [weight_of_box, setWeight_of_box] = useState('');
  const [top_sealing_heater_temp, setTop_sealing_heater_temp] = useState('');
  const [bottom_sealing_heater_temp, setBottom_sealing_heater_temp] =
    useState('');
  const [filling_end_time, setFilling_end_time] = useState('');
  const [filling_end_temp, setFilling_end_temp] = useState('');
  const [total_packing_time, setTotal_packing_time] = useState('');
  const [
    ccp_02_metal_detector_checked_at_time,
    setCcp_02_metal_detector_checked_at_time,
  ] = useState('');
  const [ccp_02_metal_detector_ss, setCcp_02_metal_detector_ss] = useState('');
  const [
    ccp_02_metal_detector_non_ferous,
    setCcp_02_metal_detector_non_ferous,
  ] = useState('');
  const [ccp_02_metal_detector_ferous, setCcp_02_metal_detector_ferous] =
    useState('');
  const [total_damage, setTotal_damage] = useState('');
  const [
    blast_freezing_blast_room_number,
    setBlast_freezing_blast_room_number,
  ] = useState('');
  const [
    blast_freezing_loading_start_time,
    setBlast_freezing_loading_start_time,
  ] = useState('');
  const [blast_freezing_loading_end_time, setBlast_freezing_loading_end_time] =
    useState('');
  const [blast_freezing_oprp_2_time, setBlast_freezing_oprp_2_time] =
    useState('');
  const [
    blast_freezing_oprp_2_product_core_temp,
    setBlast_freezing_oprp_2_product_core_temp,
  ] = useState('');
  const [blast_freezing_cartoon_packed, setBlast_freezing_cartoon_packed] =
    useState('');
  const [blast_freezing_total_kg, setBlast_freezing_total_kg] = useState('');
  const [blast_freezing_reference_sample, setBlast_freezing_reference_sample] =
    useState('');
  const [blast_freezing_total_recovery, setBlast_freezing_total_recovery] =
    useState('');
  const [blast_freezing_supervisor_sign, setBlast_freezing_supervisor_sign] =
    useState({});
  const [blast_freezing_remarks, setBlast_freezing_remarks] = useState('');
  // const [signature, setSignature] = useState({})
  const handleSubmit = async () => {
    var formData = new FormData();
    if (validate()) {
      formData.append('date', inputs.date);
      formData.append('name_of_product', inputs.name_of_product);
      formData.append('batch_size', inputs.batch_size);
      formData.append('batch_number', inputs.batch_number);
      formData.append('premix_number', inputs.premix_number);
      formData.append('water_premix_kg', inputs.water_premix_kg);
      formData.append('oil_premix_kg', inputs.oil_premix_kg);
      formData.append('batch_start_time', inputs.batch_start_time);
      formData.append(
        'pasteurization_time_from',
        inputs.pasteurization_time_from,
      );
      formData.append('pasteurization_time_to', inputs.pasteurization_time_to);
      formData.append('pasteurization_temp', inputs.pasteurization_temp);
      formData.append(
        'magnetic_filtration_checked_at_time',
        inputs.magnetic_filtration_checked_at_time,
      );
      formData.append(
        'magnetic_filtration_magnet_present',
        inputs.magnetic_filtration_magnet_present,
      );
      formData.append(
        'magnetic_filtration_strainer_condition',
        inputs.magnetic_filtration_strainer_condition,
      );
      formData.append(
        'homogenization_start_time',
        inputs.homogenization_start_time,
      );
      formData.append(
        'homogenization_end_time',
        inputs.homogenization_end_time,
      );
      formData.append(
        'homogenization_pressure',
        inputs.homogenization_pressure,
      );
      formData.append('ageing_tank_number', inputs.ageing_tank_number);
      formData.append('ageing_temp', inputs.ageing_temp);
      formData.append('chilling_temp', inputs.chilling_temp);
      formData.append('filling_temp', inputs.filling_temp);
      formData.append('filling_start_time', inputs.filling_start_time);
      formData.append('filling_start_temp', inputs.filling_start_temp);
      formData.append('weight_of_box', inputs.weight_of_box);
      formData.append(
        'top_sealing_heater_temp',
        inputs.top_sealing_heater_temp,
      );
      formData.append(
        'bottom_sealing_heater_temp',
        inputs.bottom_sealing_heater_temp,
      );
      formData.append('filling_end_time', inputs.filling_end_time);
      formData.append('filling_end_temp', inputs.filling_end_temp);
      formData.append('total_packing_time', inputs.total_packing_time);
      formData.append(
        'ccp_02_metal_detector_checked_at_time',
        inputs.ccp_02_metal_detector_checked_at_time,
      );
      formData.append(
        'ccp_02_metal_detector_ss',
        inputs.ccp_02_metal_detector_ss,
      );
      formData.append(
        'ccp_02_metal_detector_non_ferous',
        inputs.ccp_02_metal_detector_non_ferous,
      );
      formData.append(
        'ccp_02_metal_detector_ferous',
        inputs.ccp_02_metal_detector_ferous,
      );
      formData.append('total_damage', inputs.total_damage);
      formData.append(
        'blast_freezing_blast_room_number',
        inputs.blast_freezing_blast_room_number,
      );
      formData.append(
        'blast_freezing_loading_start_time',
        inputs.blast_freezing_loading_start_time,
      );
      formData.append(
        'blast_freezing_loading_end_time',
        inputs.blast_freezing_loading_end_time,
      );
      formData.append(
        'blast_freezing_oprp_2_time',
        inputs.blast_freezing_oprp_2_time,
      );
      formData.append(
        'blast_freezing_oprp_2_product_core_temp',
        inputs.blast_freezing_oprp_2_product_core_temp,
      );
      formData.append(
        'blast_freezing_cartoon_packed',
        inputs.blast_freezing_cartoon_packed,
      );
      formData.append(
        'blast_freezing_total_kg',
        inputs.blast_freezing_total_kg,
      );
      formData.append(
        'blast_freezing_reference_sample',
        inputs.blast_freezing_reference_sample,
      );
      formData.append(
        'blast_freezing_total_recovery',
        inputs.blast_freezing_total_recovery,
      );
      //  formData.append('blast_freezing_supervisor_sign', inputs.blast_freezing_supervisor_sign)
      formData.append('blast_freezing_remarks', inputs.blast_freezing_remarks);
      
      imageUri.map((item, i) => {
        console.log(item);
        formData.append('pictures', {
          name: item.name,
          type: item.type,
          uri: item.uri,
        });
      });
      fileData.map(item => {
        formData.append('attachments', {
          ...item,
        });
      });
      if (blast_freezing_supervisor_sign) {
        formData.append(
          'blast_freezing_supervisor_sign',
          blast_freezing_supervisor_sign,
        );
      }
      const body = {key: 1, key2: 2};
      var result = await postData('data/add', formData);
      if (result.status) {
        // ToastAndroid.showWithGravityAndOffset(
        //     "Created Suceessfully",
        //     ToastAndroid.LONG,
        //     ToastAndroid.BOTTOM,
        //     25,
        //     50
        // );
        navigation.push('Success');
      } else {
        ToastAndroid.showWithGravityAndOffset(
          'Invalid username/password',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      }
    } else {
      Alert.alert('Error!!');
    }
  };
  const printButtonLabel = item => {
    console.log(item);
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisibleMagnet, setTimePickerVisibilityMagnet] =
    useState(false);
  const [isTimePickerVisibleMetal, setTimePickerVisibilityMetal] =
    useState(false);
  const [pasturetime, setPasturetime] = useState(false);
  const [pasturetimeto, setPasturetimeto] = useState(false);
  const [homogenationtimestart, setHomogenationstart] = useState(false);
  const [homogenationtimeend, setHomogenationtimeend] = useState(false);
  const [fillingtimestart, setFillingtimestart] = useState(false);
  const [fillingtimeend, setFillingtimeend] = useState(false);
  const [oprptimestart, setOprptimestart] = useState(false);
  const [oprptimeend, setOprptimeend] = useState(false);
  const [batchstarttime, setBatchstarttime] = useState(false);
  const [batchtimeend, setBatchtimeend] = useState(false);
  const [blaststarttime, setBlaststarttime] = useState(false);
  const [blasttimeend, setBlasttimeend] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = () => {
    setDate(date);
    hideDatePicker();
  };

  const showTimePickerMagnet = () => {
    setTimePickerVisibilityMagnet(true);
  };

  const hideTimePickerMagnet = () => {
    setTimePickerVisibilityMagnet(false);
  };

  const showTimePickerMetal = () => {
    setTimePickerVisibilityMetal(true);
  };

  const hideTimePickerMetal = () => {
    setTimePickerVisibilityMetal(false);
  };

  const handleConfirmMetal = () => {
    setCcp_02_metal_detector_checked_at_time(
      ccp_02_metal_detector_checked_at_time,
    );
    hideTimePickerMetal();
  };

  const showPasturetime = () => {
    setPasturetime(true);
  };

  const hidePasturetime = () => {
    setPasturetime(false);
  };

  const handleConfirmPasturetime = () => {
    setPasteurization_time_from(date);
    hidePasturetime();
  };

  const showPasturetimeto = () => {
    setPasturetimeto(true);
  };

  const hidePasturetimeto = () => {
    setPasturetimeto(false);
  };

  const handleConfirmPasturetimeto = () => {
    setPasturetimeto(pasturetimeto);
    hidePasturetimeto();
  };

  const showHomotimestart = () => {
    setHomogenationstart(true);
  };

  const hideHomotimestart = () => {
    setHomogenationstart(false);
  };

  const handleConfirmHomotimestart = () => {
    setHomogenationstart(homogenationtimestart);
    hideHomotimeend();
  };

  const showHomotimeend = () => {
    setHomogenationtimeend(true);
  };

  const hideHomotimeend = () => {
    setHomogenationtimeend(false);
  };

  const handleConfirmHomotimeend = () => {
    setHomogenationtimeend(homogenationtimeend);
    hideHomotimeend();
  };

  const showFillingtimestart = () => {
    setFillingtimestart(true);
  };

  const hideFillingtimestart = () => {
    setFillingtimestart(false);
  };

  const handleConfirmFillingtimestart = () => {
    setFillingtimestart(fillingtimestart);
    hideFillingtimestart();
  };

  const showFillingtimeend = () => {
    setFillingtimeend(true);
  };

  const hideFillingtimeend = () => {
    setFillingtimeend(false);
  };

  const handleConfirmFillingtimeend = () => {
    setFillingtimeend(fillingtimeend);
    hideFillingtimeend();
  };

  const showOprptimestart = () => {
    setOprptimestart(true);
  };

  const hideOprptimestart = () => {
    setOprptimestart(false);
  };

  const handleConfirmOprptimestart = () => {
    setOprptimestart(oprptimestart);
    hideOprptimestart();
  };

  const showOprptimeend = () => {
    setOprptimeend(true);
  };

  const hideOprptimeend = () => {
    setOprptimeend(false);
  };

  const handleConfirmOprptimeend = () => {
    setOprptimeend(oprptimeend);
    hideOprptimeend();
  };

  const showbatchtimestart = () => {
    setBatchstarttime(true);
  };

  const hidebatchtimestart = () => {
    setBatchstarttime(false);
  };

  const handleConfirmBatchtimestart = () => {
    setBatchstarttime(batchstarttime);
    hidebatchtimestart();
  };

  const showBatchtimeend = () => {
    setBatchtimeend(true);
  };

  const hideBatchtimeend = () => {
    setBatchtimeend(false);
  };

  const handleConfirmBatchtimeend = () => {
    setBatchtimeend(batchtimeend);
    hideBatchtimeend();
  };

  const showblasttimestart = () => {
    setBlaststarttime(true);
  };

  const hideblasttimestart = () => {
    setBlaststarttime(false);
  };

  const handleConfirmBlasttimestart = () => {
    setBlaststarttime(blaststarttime);
    hideblasttimestart();
  };

  const showBlasttimeend = () => {
    setBlasttimeend(true);
  };

  const hideBlasttimeend = () => {
    setBlasttimeend(false);
  };

  const handleConfirmBlasttimeend = () => {
    setBlasttimeend(blasttimeend);
    hideBlasttimeend();
  };

  const sign = createRef();
  const saveSign = () => {
    sign.current.saveImage();
  };

  const resetSign = () => {
    sign.current.resetImage();
  };

  const _onSaveEvent = result => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result.encoded);
    setBlast_freezing_supervisor_sign({
      name: 'signature' + Date.now() + '.png',
      type: 'image/png',
      uri: 'data:image/jpeg;base64,' + result.encoded,
    });
  };
  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
  };

  const [imageUri, setImageUri] = useState([]);
  const openCamera = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      console.log('Response', response);
      if (response.didCancel) {
        console.log('User Cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button', response.customButton);
      } else {
        const source = {
          base64: 'data:image/jpeg;base64,' + response.assets[0].base64,
          name: response.assets[0].fileName,
          type: response.assets[0].type,
          uri: response.assets[0].uri,
        };
        setImageUri([...imageUri, source]);
      }
    });
  };
  const openGallery = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response', response);
      if (response.didCancel) {
        console.log('User Cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button', response.customButton);
      } else {
        const source = {
          base64: 'data:image/jpeg;base64,' + response.assets[0].base64,
          name: response.assets[0].fileName,
          type: response.assets[0].type,
          uri: response.assets[0].uri,
        };
        setImageUri([...imageUri, source]);
      }
    });
  };
  
  const [fileData, setFileData] = useState([]);
  const handleFilePicker = async () => {
    try {
      const response = await FilePicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        type: [types.images, types.video, types.pdf],
      });
      setFileData(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const [inputs, setInputs] = useState({
    date: new Date().toUTCString(),
    name_of_product: '',
    batch_size: '',
    batch_number: '',
    premix_number: '',
    water_premix_kg: '',
    oil_premix_kg: '',
    batch_start_time: new Date().toUTCString(),
    pasteurization_time_from: new Date().toUTCString(),
    pasteurization_time_to: new Date().toUTCString(),
    pasteurization_temp: '',
    magnetic_filtration_checked_at_time: new Date().toUTCString(),
    magnetic_filtration_magnet_present: 'Yes',
    magnetic_filtration_strainer_condition: 'OK',
    homogenization_start_time: new Date().toUTCString(),
    homogenization_end_time: new Date().toUTCString(),
    homogenization_pressure: '',
    ageing_tank_number: '',
    ageing_temp: '',
    chilling_temp: '',
    filling_temp: '',
    filling_start_time: new Date().toUTCString(),
    filling_start_temp: '',
    weight_of_box: '',
    top_sealing_heater_temp: '',
    bottom_sealing_heater_temp: '',
    filling_end_time: new Date().toUTCString(),
    filling_end_temp: '',
    total_packing_time: '',
    ccp_02_metal_detector_checked_at_time: new Date().toUTCString(),
    ccp_02_metal_detector_ss: '',
    ccp_02_metal_detector_non_ferous: '',
    ccp_02_metal_detector_ferous: '',
    total_damage: '',
    blast_freezing_blast_room_number: '',
    blast_freezing_loading_start_time: new Date().toUTCString(),
    blast_freezing_loading_end_time: new Date().toUTCString(),
    blast_freezing_oprp_2_time: '',
    blast_freezing_oprp_2_product_core_temp: '',
    blast_freezing_cartoon_packed: '',
    blast_freezing_total_kg: '',
    blast_freezing_reference_sample: '',
    blast_freezing_total_recovery: '',
    blast_freezing_supervisor_sign: '',
    blast_freezing_remarks: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.name_of_product) {
      handleError('Please input name of product', 'name_of_product');
      isValid = false;
    }
    console.log('1', isValid);

    if (!inputs.batch_size) {
      handleError('Please input batch size', 'batch_size');
      isValid = false;
    }
    console.log('2', isValid);

    if (!inputs.batch_number) {
      handleError('Please input batch number', 'batch_number');
      isValid = false;
    }
    console.log('3', isValid);

    if (!inputs.premix_number) {
      handleError('Please input premix number', 'premix_number');
      isValid = false;
    }
    console.log('4', isValid);
    if (!inputs.water_premix_kg) {
      handleError('Please input water premix kg', 'water_premix_kg');
      isValid = false;
    }
    console.log('5', isValid);
    if (!inputs.oil_premix_kg) {
      handleError('Please input oil premix kg', 'oil_premix_kg');
      isValid = false;
    }
    console.log('6', isValid);
    if (!inputs.batch_start_time) {
      handleError('Please input batch start time', 'batch_start_time');
      isValid = false;
    }
    console.log('7', isValid);
    if (!inputs.pasteurization_time_from) {
      handleError(
        'Please input pasterurization time from',
        'pasteurization_time_from',
      );
      isValid = false;
    }
    console.log('8', isValid);
    if (!inputs.pasteurization_time_to) {
      handleError(
        'Please input pasteurization time to',
        'pasteurization_time_to',
      );
      isValid = false;
    }
    console.log('9', isValid);
    if (!inputs.pasteurization_temp) {
      handleError('Please input pasteurization temp', 'pasteurization_temp');
      isValid = false;
    }
    console.log('10', isValid);
    if (!inputs.magnetic_filtration_checked_at_time) {
      handleError(
        'Please input checked at time',
        'magnetic_filtration_checked_at_time',
      );
      isValid = false;
    }
    console.log('11', isValid);
    if (!inputs.magnetic_filtration_magnet_present) {
      handleError(
        'Please input filtration magnet present',
        'magnetic_filtration_magnet_present',
      );
      isValid = false;
    }
    console.log('12', isValid);
    //   if (!inputs.oil_premix_kg) {
    //     handleError('Please input oil premix kg', 'oil_premix_kg');
    //     isValid = false;
    //   }
    if (!inputs.homogenization_start_time) {
      handleError(
        'Please input homogenization start time',
        'homogenization_start_time',
      );
      isValid = false;
    }
    console.log('13', isValid);
    if (!inputs.homogenization_end_time) {
      handleError(
        'Please input homogenization end time',
        'homogenization_end_time',
      );
      isValid = false;
    }
    console.log('14', isValid);
    if (!inputs.homogenization_pressure) {
      handleError(
        'Please input homogenization pressure',
        'homogenization_pressure',
      );
      isValid = false;
    }
    console.log('15', isValid);
    if (!inputs.ageing_tank_number) {
      handleError('Please input ageing tank number', 'ageing_tank_number');
      isValid = false;
    }
    console.log('16', isValid);
    if (!inputs.ageing_temp) {
      handleError('Please input ageing temp', 'ageing_temp');
      isValid = false;
    }
    console.log('17', isValid);
    if (!inputs.chilling_temp) {
      handleError('Please input chilling temperature', 'chilling_temp');
      isValid = false;
    }
    console.log('18', isValid);
    if (!inputs.filling_temp) {
      handleError('Please input filling temperature', 'filling_temp');
      isValid = false;
    }
    console.log('19', isValid);
    if (!inputs.filling_start_time) {
      handleError('Please input filling start time', 'filling_start_time');
      isValid = false;
    }
    console.log('20', isValid);
    if (!inputs.filling_start_temp) {
      handleError(
        'Please input filling start temperature',
        'filling_start_temp',
      );
      isValid = false;
    }
    console.log('21', isValid);
    if (!inputs.weight_of_box) {
      handleError('Please input weight of box', 'weight_of_box');
      isValid = false;
    }
    console.log('22', isValid);
    if (!inputs.top_sealing_heater_temp) {
      handleError(
        'Please input top sealing heater temperature',
        'top_sealing_heater_temp',
      );
      isValid = false;
    }
    console.log('23', isValid);
    if (!inputs.bottom_sealing_heater_temp) {
      handleError(
        'Please input bottom sealing heater temperature',
        'bottom_sealing_heater_temp',
      );
      isValid = false;
    }
    console.log('24', isValid);
    if (!inputs.filling_end_time) {
      handleError('Please input filling end time', 'filling_end_time');
      isValid = false;
    }
    console.log('25', isValid);
    if (!inputs.total_packing_time) {
      handleError('Please input total packing time', 'total_packing_time');
      isValid = false;
    }
    console.log('26', isValid);
    if (!inputs.ccp_02_metal_detector_checked_at_time) {
      handleError(
        'Please input ccp_02_metal_detector_checked_at_time',
        'ccp_02_metal_detector_checked_at_time',
      );
      isValid = false;
    }
    console.log('27', isValid);
    if (!inputs.ccp_02_metal_detector_ss) {
      handleError(
        'Please input ccp_02_metal_detector_ss',
        'ccp_02_metal_detector_ss',
      );
      isValid = false;
    }
    console.log('28', isValid);
    if (!inputs.ccp_02_metal_detector_non_ferous) {
      handleError(
        'Please input ccp_02_metal_detector_non_ferous',
        'ccp_02_metal_detector_non_ferous',
      );
      isValid = false;
    }
    console.log('29', isValid);
    if (!inputs.ccp_02_metal_detector_ferous) {
      handleError(
        'Please input ccp_02_metal_detector_ferous',
        'ccp_02_metal_detector_ferous',
      );
      isValid = false;
    }
    console.log('30', isValid);
    if (!inputs.total_damage) {
      handleError('Please input total_damage', 'total_damage');
      isValid = false;
    }
    console.log('31', isValid);
    if (!inputs.blast_freezing_blast_room_number) {
      handleError(
        'Please input blast_freezing_blast_room_number',
        'blast_freezing_blast_room_number',
      );
      isValid = false;
    }
    console.log('32', isValid);
    if (!inputs.blast_freezing_loading_start_time) {
      handleError(
        'Please input blast_freezing_loading_start_time',
        'blast_freezing_loading_start_time',
      );
      isValid = false;
    }
    console.log('33', isValid);

    if (!inputs.blast_freezing_loading_end_time) {
      handleError(
        'Please input blast_freezing_loading_end_time',
        'blast_freezing_loading_end_time',
      );
      isValid = false;
    }
    console.log('34', isValid);
    if (!inputs.blast_freezing_oprp_2_time) {
      handleError(
        'Please input blast_freezing_oprp_2_time',
        'blast_freezing_oprp_2_time',
      );
      isValid = false;
    }
    console.log('35', isValid);
    if (!inputs.blast_freezing_oprp_2_product_core_temp) {
      handleError(
        'Please input blast_freezing_oprp_2_product_core_temp',
        'blast_freezing_oprp_2_product_core_temp',
      );
      isValid = false;
    }
    console.log('36', isValid);
    if (!inputs.blast_freezing_cartoon_packed) {
      handleError(
        'Please input blast_freezing_cartoon_packed',
        'blast_freezing_cartoon_packed',
      );
      isValid = false;
    }
    console.log('37', isValid);
    if (!inputs.blast_freezing_total_kg) {
      handleError(
        'Please input blast_freezing_total_kg',
        'blast_freezing_total_kg',
      );
      isValid = false;
    }
    console.log('38', isValid);
    if (!inputs.blast_freezing_reference_sample) {
      handleError(
        'Please input blast_freezing_reference_sample',
        'blast_freezing_reference_sample',
      );
      isValid = false;
    }
    console.log('39', isValid);
    if (!inputs.blast_freezing_total_recovery) {
      handleError(
        'Please input blast_freezing_total_recovery',
        'blast_freezing_total_recovery',
      );
      isValid = false;
    }
    console.log('40', isValid);
    if (!blast_freezing_supervisor_sign) {
      handleError(
        'Please input blast_freezing_supervisor_sign',
        'blast_freezing_supervisor_sign',
      );
      isValid = false;
    }
    console.log('41', isValid);
    if (!inputs.blast_freezing_remarks) {
      handleError('Please input remarks', 'blast_freezing_remarks');
      isValid = false;
    }
    console.log('42', isValid);
    console.log(isValid);
    return isValid;
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}> ADD PROCESS MONITORING RECORD</Text> */}
      <View styles={styles.subcontainer}>
        <ScrollView>
          <View>
            <Image
              source={Header}
              style={{width: '100%', height: 99, backgroundColor: 'red'}}
            />
          </View>
          <Text style={styles.productbox}>Product Details</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <TouchableOpacity onPress={() => showDatePicker()}>
                <View pointerEvents="none">
                  <TextInput
                    label="Date"
                    mode="outlined"
                    theme={{
                      colors: {
                        placeholder: '#E49972',
                        primary: '#E49972',
                        underlineColor: 'transparent',
                        background: '#003489',
                      },
                    }}
                    style={styles.textbox}
                    onFocus={() => handleError(null, 'date')}
                    value={new Date(inputs.date).toLocaleDateString('en-GB')}
                    error={errors.date}
                    //  error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'batch_size')}
                  />
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onChange={text => {
                  console.log(text);
                  handleOnchange(text, 'date');
                }}
                onConfirm={text => {
                  console.log(text);
                  handleOnchange(text, 'date');
                  hideDatePicker();
                }}
                onCancel={hideDatePicker}
              />
              <TextInput
                label="Name Of Product"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text => handleOnchange(text, 'name_of_product')}
                onFocus={() => handleError(null, 'name_of_product')}
                value={inputs.name_of_product}
                error={errors.name_of_product}
              />
              <TextInput
                label="Batch Number"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text => handleOnchange(text, 'batch_number')}
                onFocus={() => handleError(null, 'batch_number')}
                value={inputs.batch_number}
                error={errors.batch_number}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TextInput
                  label="Batch Size"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{backgroundColor: 'white', width: '49%', height: 45}}
                  onChangeText={text => handleOnchange(text, 'batch_size')}
                  onFocus={() => handleError(null, 'batch_size')}
                  value={inputs.batch_size}
                  error={errors.batch_size}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
                <TextInput
                  label="Premix No."
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text => handleOnchange(text, 'premix_number')}
                  onFocus={() => handleError(null, 'premix_number')}
                  value={inputs.premix_number}
                  error={errors.premix_number}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TextInput
                  label="Water Premix Kg"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{backgroundColor: 'white', width: '49%', height: 45}}
                  onChangeText={text => handleOnchange(text, 'water_premix_kg')}
                  onFocus={() => handleError(null, 'water_premix_kg')}
                  value={inputs.water_premix_kg}
                  error={errors.water_premix_kg}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
                <TextInput
                  label=" Oil Premix Kg."
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text => handleOnchange(text, 'oil_premix_kg')}
                  onFocus={() => handleError(null, 'oil_premix_kg')}
                  value={inputs.oil_premix_kg}
                  error={errors.oil_premix_kg}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>
              <TouchableOpacity onPress={() => showbatchtimestart()}>
                <View pointerEvents="none">
                  <TextInput
                    label="Batch Start Time"
                    mode="outlined"
                    // value={batch_start_time}
                    theme={{
                      colors: {
                        placeholder: '#E49972',
                        primary: '#E49972',
                        underlineColor: 'transparent',
                        background: '#003489',
                      },
                    }}
                    style={styles.textbox}
                    onFocus={() => handleError(null, 'batch_start_time')}
                    value={new Date(inputs.batch_start_time)
                      .toTimeString()
                      .slice(0, 9)}
                    error={errors.batch_start_time}
                  />
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={batchstarttime}
                mode="time"
                onChange={text => {
                  console.log(text);
                  handleOnchange(text, 'batch_start_time');
                }}
                onConfirm={text => {
                  console.log(text);
                  handleOnchange(text, 'batch_start_time');
                  hidebatchtimestart();
                }}
                onCancel={hidebatchtimestart}
              />
            </View>
          </View>

          <Text style={styles.productbox}>Pasterurization</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => showPasturetime()}>
                  <View pointerEvents="none">
                    <TextInput
                      label="From"
                      mode="outlined"
                      theme={{
                        colors: {
                          primary: '#E49972',
                          placeholder: '#E49972',
                          underlineColor: 'transparent',
                          background: '#003489',
                        },
                      }}
                      style={{backgroundColor: 'white', height: 45}}
                      onChangeText={text =>
                        handleOnchange(text, 'pasteurization_time_from')
                      }
                      onFocus={() =>
                        handleError(null, 'pasteurization_time_from')
                      }
                      value={new Date(inputs.pasteurization_time_from)
                        .toTimeString()
                        .slice(0, 9)}
                      error={errors.pasteurization_time_from}
                      //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{width: '49%', marginLeft: 3}}
                  onPress={() => showPasturetimeto()}>
                  <View pointerEvents="none">
                    <TextInput
                      label="To"
                      mode="outlined"
                      theme={{
                        colors: {
                          primary: '#E49972',
                          placeholder: '#E49972',
                          underlineColor: 'transparent',
                          background: '#003489',
                        },
                      }}
                      style={{backgroundColor: 'white', height: 45}}
                      onChangeText={text =>
                        handleOnchange(text, 'pasteurization_time_to')
                      }
                      onFocus={() =>
                        handleError(null, 'pasteurization_time_to')
                      }
                      value={new Date(inputs.pasteurization_time_to)
                        .toTimeString()
                        .slice(0, 9)}
                      error={errors.pasteurization_time_to}
                      //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <TextInput
                label="Temp"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text =>
                  handleOnchange(text, 'pasteurization_temp')
                }
                onFocus={() => handleError(null, 'pasteurization_temp')}
                value={inputs.pasteurization_temp}
                error={errors.pasteurization_temp}
              />
            </View>
            <DateTimePickerModal
              isVisible={pasturetime}
              mode="time"
              onChange={text => {
                console.log(text);
                handleOnchange(text, 'pasteurization_time_from');
              }}
              onConfirm={text => {
                console.log(text);
                handleOnchange(text, 'pasteurization_time_from');
                hidePasturetime();
              }}
              onCancel={hidePasturetime}
            />
            <DateTimePickerModal
              isVisible={pasturetimeto}
              mode="time"
              onChange={text => {
                console.log(text);
                handleOnchange(text, 'pasteurization_time_to');
              }}
              onConfirm={text => {
                console.log(text);
                handleOnchange(text, 'pasteurization_time_to');
                hidePasturetimeto();
              }}
              onCancel={hidePasturetimeto}
            />
          </View>

          <Text style={styles.productbox}>Magnetic Filteration</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <TouchableOpacity onPress={() => showTimePickerMagnet()}>
              <View pointerEvents="none">
                <TextInput
                  label="Checked at"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={styles.textbox}
                  onChangeText={text =>
                    handleOnchange(text, 'magnetic_filtration_checked_at_time')
                  }
                  onFocus={() =>
                    handleError(null, 'magnetic_filtration_checked_at_time')
                  }
                  value={new Date(inputs.magnetic_filtration_checked_at_time)
                    .toTimeString()
                    .slice(0, 9)}
                  error={errors.magnetic_filtration_checked_at_time}
                />
              </View>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisibleMagnet}
              mode="time"
              onChange={text => {
                console.log(text);
                handleOnchange(text, 'magnetic_filtration_checked_at_time');
              }}
              onConfirm={text => {
                console.log(text);
                handleOnchange(text, 'magnetic_filtration_checked_at_time');
                hideTimePickerMagnet();
              }}
              onCancel={hidePasturetime}
            />
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Magnet Present
              </Text>
              <ButtonGroup
                buttons={['Yes', 'No']}
                doSomethingAfterClick={item =>
                  handleOnchange(item, 'magnetic_filtration_magnet_present')
                }
              />
            </View>
          </View>
          <Text style={styles.productbox}>Strainer Condition</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <ButtonGroup
              buttons={['Ok', 'Not Ok']}
              doSomethingAfterClick={item =>
                handleOnchange(item, 'magnetic_filtration_strainer_condition')
              }
            />
          </View>
          <Text style={styles.productbox}>Homogenation</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => showHomotimestart()}>
                  <View pointerEvents="none">
                    <TextInput
                      label="Start time"
                      mode="outlined"
                      theme={{
                        colors: {
                          primary: '#E49972',
                          placeholder: '#E49972',
                          underlineColor: 'transparent',
                          background: '#003489',
                        },
                      }}
                      style={{backgroundColor: 'white', height: 45}}
                      onChangeText={text =>
                        handleOnchange(text, 'homogenization_start_time')
                      }
                      onFocus={() =>
                        handleError(null, 'homogenization_start_time')
                      }
                      value={new Date(inputs.homogenization_start_time)
                        .toTimeString()
                        .slice(0, 9)}
                      error={errors.homogenization_start_time}
                      //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                    />
                  </View>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={homogenationtimestart}
                  mode="time"
                  onChange={text => {
                    console.log(text);
                    handleOnchange(text, 'homogenization_start_time');
                  }}
                  onConfirm={text => {
                    console.log(text);
                    handleOnchange(text, 'homogenization_start_time');
                    hideHomotimestart();
                  }}
                  onCancel={hideHomotimestart}
                />
                <TouchableOpacity
                  style={{width: '49%', marginLeft: 3}}
                  onPress={() => showHomotimeend()}>
                  <View pointerEvents="none">
                    <TextInput
                      label="End time"
                      mode="outlined"
                      theme={{
                        colors: {
                          primary: '#E49972',
                          placeholder: '#E49972',
                          underlineColor: 'transparent',
                          background: '#003489',
                        },
                      }}
                      style={{backgroundColor: 'white', height: 45}}
                      onChangeText={text =>
                        handleOnchange(text, 'homogenization_end_time')
                      }
                      onFocus={() =>
                        handleError(null, 'homogenization_end_time')
                      }
                      value={new Date(inputs.homogenization_end_time)
                        .toTimeString()
                        .slice(0, 9)}
                      error={errors.homogenization_end_time}
                      //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                    />
                  </View>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={homogenationtimeend}
                  mode="time"
                  onChange={text => {
                    console.log(text);
                    handleOnchange(text, 'homogenization_end_time');
                  }}
                  onConfirm={text => {
                    console.log(text);
                    handleOnchange(text, 'homogenization_end_time');
                    hideHomotimeend();
                  }}
                  onCancel={hideHomotimeend}
                />
              </View>
              <TextInput
                label="Pressure"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text =>
                  handleOnchange(text, 'homogenization_pressure')
                }
                onFocus={() => handleError(null, 'homogenization_pressure')}
                value={inputs.homogenization_pressure}
                error={errors.homogenization_pressure}
              />
            </View>
          </View>

          <Text style={styles.productbox}>Ageing</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TextInput
                  label="Tank No."
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{backgroundColor: 'white', width: '49%', height: 45}}
                  onChangeText={text =>
                    handleOnchange(text, 'ageing_tank_number')
                  }
                  onFocus={() => handleError(null, 'ageing_tank_number')}
                  value={inputs.ageing_tank_number}
                  error={errors.ageing_tank_number}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
                <TextInput
                  label="Temp"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text => handleOnchange(text, 'ageing_temp')}
                  onFocus={() => handleError(null, 'ageing_temp')}
                  value={inputs.ageing_temp}
                  error={errors.ageing_temp}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TextInput
                  label="Chilling Temp"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{backgroundColor: 'white', width: '49%', height: 45}}
                  onChangeText={text => handleOnchange(text, 'chilling_temp')}
                  onFocus={() => handleError(null, 'chilling_temp')}
                  value={inputs.chilling_temp}
                  error={errors.chilling_temp}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
                <TextInput
                  label="Filling Temp"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text => handleOnchange(text, 'filling_temp')}
                  onFocus={() => handleError(null, 'filling_temp')}
                  value={inputs.filling_temp}
                  error={errors.filling_temp}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>
            </View>
          </View>

          <Text style={styles.productbox}>Filling Start</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => showFillingtimestart()}>
                  <View pointerEvents="none">
                    <TextInput
                      label="Time"
                      mode="outlined"
                      theme={{
                        colors: {
                          primary: '#E49972',
                          placeholder: '#E49972',
                          underlineColor: 'transparent',
                          background: '#003489',
                        },
                      }}
                      style={{backgroundColor: 'white', height: 45}}
                      onChangeText={text =>
                        handleOnchange(text, 'filling_start_time')
                      }
                      onFocus={() => handleError(null, 'filling_start_time')}
                      value={new Date(inputs.filling_start_time)
                        .toTimeString()
                        .slice(0, 9)}
                      error={errors.filling_start_time}
                      //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                    />
                  </View>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={fillingtimestart}
                  mode="time"
                  onChange={text => {
                    console.log(text);
                    handleOnchange(text, 'filling_start_time');
                  }}
                  onConfirm={text => {
                    console.log(text);
                    handleOnchange(text, 'filling_start_time');
                    hideFillingtimestart();
                  }}
                  onCancel={hideFillingtimestart}
                />
                <TextInput
                  label="Temp"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text =>
                    handleOnchange(text, 'filling_start_temp')
                  }
                  onFocus={() => handleError(null, 'filling_start_temp')}
                  value={inputs.filling_start_temp}
                  error={errors.filling_start_temp}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>
              <TextInput
                label="Weight Of Box"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text => handleOnchange(text, 'weight_of_box')}
                onFocus={() => handleError(null, 'weight_of_box')}
                value={inputs.weight_of_box}
                error={errors.weight_of_box}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TextInput
                  label="Top Temp"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{backgroundColor: 'white', width: '49%', height: 45}}
                  onChangeText={text =>
                    handleOnchange(text, 'top_sealing_heater_temp')
                  }
                  onFocus={() => handleError(null, 'top_sealing_heater_temp')}
                  value={inputs.top_sealing_heater_temp}
                  error={errors.top_sealing_heater_temp}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
                <TextInput
                  label="Bottom Temp"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text =>
                    handleOnchange(text, 'bottom_sealing_heater_temp')
                  }
                  onFocus={() =>
                    handleError(null, 'bottom_sealing_heater_temp')
                  }
                  value={inputs.bottom_sealing_heater_temp}
                  error={errors.bottom_sealing_heater_temp}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>
            </View>
          </View>

          <Text style={styles.productbox}>Filling End</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => showFillingtimeend()}>
                  <View pointerEvents="none">
                    <TextInput
                      label="End Time"
                      mode="outlined"
                      theme={{
                        colors: {
                          primary: '#E49972',
                          placeholder: '#E49972',
                          underlineColor: 'transparent',
                          background: '#003489',
                        },
                      }}
                      style={{backgroundColor: 'white', height: 45}}
                      onChangeText={text =>
                        handleOnchange(text, 'filling_end_time')
                      }
                      onFocus={() => handleError(null, 'filling_end_time')}
                      value={new Date(inputs.filling_end_time)
                        .toTimeString()
                        .slice(0, 9)}
                      error={errors.filling_end_time}
                      //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                    />
                  </View>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={fillingtimeend}
                  mode="time"
                  onChange={text => {
                    console.log(text);
                    handleOnchange(text, 'filling_end_time');
                  }}
                  onConfirm={text => {
                    console.log(text);
                    handleOnchange(text, 'filling_end_time');
                    hideFillingtimeend();
                  }}
                  onCancel={hideFillingtimeend}
                />
                <TextInput
                  label="End Temp"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text =>
                    handleOnchange(text, 'filling_end_temp')
                  }
                  onFocus={() => handleError(null, 'filling_end_temp')}
                  value={inputs.filling_end_temp}
                  error={errors.filling_end_temp}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>
              <TextInput
                label="Total Packing Time"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text =>
                  handleOnchange(text, 'total_packing_time')
                }
                onFocus={() => handleError(null, 'total_packing_time')}
                value={inputs.total_packing_time}
                error={errors.total_packing_time}
              />
              {/* <View style={{ flexDirection: 'row', width: '96%', alignSelf: 'center' }}>
                                <TextInput
                                    label="Top Temp"
                                    mode="outlined"

                                    theme={{
                                        colors: {
                                            primary: '#E49972', placeholder: '#E49972',
                                            underlineColor: 'transparent', background: '#003489'
                                        }
                                    }}
                                    style={{ backgroundColor: 'white', width: '49%', height: 45 }}
                                    onChangeText={text => handleOnchange(text, 'top_sealing_heater_temp')}
                                    onFocus={() => handleError(null, 'top_sealing_heater_temp')}
                                    value={inputs.top_sealing_heater_temp}
                                    error={errors.top_sealing_heater_temp}
                                //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}

                                />
                                <TextInput
                                    label="Bottom Temp"
                                    mode="outlined"

                                    theme={{
                                        colors: {
                                            primary: '#E49972', placeholder: '#E49972',
                                            underlineColor: 'transparent', background: '#003489'
                                        }
                                    }}
                                    style={{ backgroundColor: 'white', width: '49%', marginLeft: 5, height: 45 }}
                                    onChangeText={text => handleOnchange(text, 'bottom_sealing_heater_temp')}
                                    onFocus={() => handleError(null, 'bottom_sealing_heater_temp')}
                                    value={inputs.bottom_sealing_heater_temp}
                                    error={errors.bottom_sealing_heater_temp}
                                //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}

                                />
                            </View> */}
            </View>
          </View>

          <Text style={styles.productbox}>Metal Detector</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => showTimePickerMetal()}>
                  <View pointerEvents="none">
                    <TextInput
                      label="Checked at"
                      mode="outlined"
                      theme={{
                        colors: {
                          primary: '#E49972',
                          placeholder: '#E49972',
                          underlineColor: 'transparent',
                          background: '#003489',
                        },
                      }}
                      style={{backgroundColor: 'white', height: 45}}
                      onChangeText={text =>
                        handleOnchange(
                          text,
                          'ccp_02_metal_detector_checked_at_time',
                        )
                      }
                      onFocus={() =>
                        handleError(
                          null,
                          'ccp_02_metal_detector_checked_at_time',
                        )
                      }
                      value={new Date(
                        inputs.ccp_02_metal_detector_checked_at_time,
                      )
                        .toTimeString()
                        .slice(0, 9)}
                      error={errors.ccp_02_metal_detector_checked_at_time}
                      //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                    />
                  </View>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isTimePickerVisibleMetal}
                  mode="time"
                  onChange={text => {
                    console.log(text);
                    handleOnchange(
                      text,
                      'ccp_02_metal_detector_checked_at_time',
                    );
                  }}
                  onConfirm={text => {
                    console.log(text);
                    handleOnchange(
                      text,
                      'ccp_02_metal_detector_checked_at_time',
                    );
                    hideTimePickerMetal();
                  }}
                  onCancel={hideTimePickerMetal}
                />
                <TextInput
                  label="SS"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text =>
                    handleOnchange(text, 'ccp_02_metal_detector_ss')
                  }
                  onFocus={() => handleError(null, 'ccp_02_metal_detector_ss')}
                  value={inputs.ccp_02_metal_detector_ss}
                  error={errors.ccp_02_metal_detector_ss}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TextInput
                  label="Non Ferous"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{backgroundColor: 'white', width: '49%', height: 45}}
                  onChangeText={text =>
                    handleOnchange(text, 'ccp_02_metal_detector_non_ferous')
                  }
                  onFocus={() =>
                    handleError(null, 'ccp_02_metal_detector_non_ferous')
                  }
                  value={inputs.ccp_02_metal_detector_non_ferous}
                  error={errors.ccp_02_metal_detector_non_ferous}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
                <TextInput
                  label="Ferous"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text =>
                    handleOnchange(text, 'ccp_02_metal_detector_ferous')
                  }
                  onFocus={() =>
                    handleError(null, 'ccp_02_metal_detector_ferous')
                  }
                  value={inputs.ccp_02_metal_detector_ferous}
                  error={errors.ccp_02_metal_detector_ferous}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>
              <TextInput
                label="Total Damage"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text => handleOnchange(text, 'total_damage')}
                onFocus={() => handleError(null, 'total_damage')}
                value={inputs.total_damage}
                error={errors.total_damage}
              />
            </View>
          </View>

          <Text style={styles.productbox}>Blast Freezing</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <TextInput
                label="Blast Room No."
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text =>
                  handleOnchange(text, 'blast_freezing_blast_room_number')
                }
                onFocus={() =>
                  handleError(null, 'blast_freezing_blast_room_number')
                }
                value={inputs.blast_freezing_blast_room_number}
                error={errors.blast_freezing_blast_room_number}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => showblasttimestart()}>
                  <View pointerEvents="none">
                    <TextInput
                      label="Start Time"
                      mode="outlined"
                      theme={{
                        colors: {
                          primary: '#E49972',
                          placeholder: '#E49972',
                          underlineColor: 'transparent',
                          background: '#003489',
                        },
                      }}
                      style={{backgroundColor: 'white', height: 45}}
                      onChangeText={text =>
                        handleOnchange(
                          text,
                          'blast_freezing_loading_start_time',
                        )
                      }
                      onFocus={() =>
                        handleError(null, 'blast_freezing_loading_start_time')
                      }
                      value={new Date(inputs.blast_freezing_loading_start_time)
                        .toTimeString()
                        .slice(0, 9)}
                      error={errors.blast_freezing_loading_start_time}
                      //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                    />
                  </View>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={blaststarttime}
                  mode="time"
                  onChange={text => {
                    console.log(text);
                    handleOnchange(text, 'blast_freezing_loading_start_time');
                  }}
                  onConfirm={text => {
                    console.log(text);
                    handleOnchange(text, 'blast_freezing_loading_start_time');
                    hideblasttimestart();
                  }}
                  onCancel={hideblasttimestart}
                />

                <TouchableOpacity
                  style={{width: '49%', marginLeft: 3}}
                  onPress={() => showBlasttimeend()}>
                  <View pointerEvents="none">
                    <TextInput
                      label="End Time"
                      mode="outlined"
                      theme={{
                        colors: {
                          primary: '#E49972',
                          placeholder: '#E49972',
                          underlineColor: 'transparent',
                          background: '#003489',
                        },
                      }}
                      style={{backgroundColor: 'white', height: 45}}
                      onChangeText={text =>
                        handleOnchange(text, 'blast_freezing_loading_end_time')
                      }
                      onFocus={() =>
                        handleError(null, 'blast_freezing_loading_end_time')
                      }
                      value={new Date(inputs.blast_freezing_loading_end_time)
                        .toTimeString()
                        .slice(0, 9)}
                      error={errors.blast_freezing_loading_end_time}
                      //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                    />
                  </View>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={blasttimeend}
                  mode="time"
                  onChange={text => {
                    console.log(text);
                    handleOnchange(text, 'blast_freezing_loading_end_time');
                  }}
                  onConfirm={text => {
                    console.log(text);
                    handleOnchange(text, 'blast_freezing_loading_end_time');
                    hideBlasttimeend();
                  }}
                  onCancel={hideBlasttimeend}
                />
              </View>
            </View>
          </View>

          <Text style={styles.productbox}>OPRP-2</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <TextInput
                label="Time"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text =>
                  handleOnchange(text, 'blast_freezing_oprp_2_time')
                }
                onFocus={() => handleError(null, 'blast_freezing_oprp_2_time')}
                value={inputs.blast_freezing_oprp_2_time}
                error={errors.blast_freezing_oprp_2_time}
              />
              <TextInput
                label="Product Core Temperature"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text =>
                  handleOnchange(
                    text,
                    'blast_freezing_oprp_2_product_core_temp',
                  )
                }
                onFocus={() =>
                  handleError(null, 'blast_freezing_oprp_2_product_core_temp')
                }
                value={inputs.blast_freezing_oprp_2_product_core_temp}
                error={errors.blast_freezing_oprp_2_product_core_temp}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                }}>
                <TextInput
                  label="Cartoon Packed"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{backgroundColor: 'white', width: '49%', height: 45}}
                  onChangeText={text =>
                    handleOnchange(text, 'blast_freezing_cartoon_packed')
                  }
                  onFocus={() =>
                    handleError(null, 'blast_freezing_cartoon_packed')
                  }
                  value={inputs.blast_freezing_cartoon_packed}
                  error={errors.blast_freezing_cartoon_packed}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />

                <TextInput
                  label="Total Kg"
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: '#E49972',
                      placeholder: '#E49972',
                      underlineColor: 'transparent',
                      background: '#003489',
                    },
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '49%',
                    marginLeft: 5,
                    height: 45,
                  }}
                  onChangeText={text =>
                    handleOnchange(text, 'blast_freezing_total_kg')
                  }
                  onFocus={() => handleError(null, 'blast_freezing_total_kg')}
                  value={inputs.blast_freezing_total_kg}
                  error={errors.blast_freezing_total_kg}
                  //   error={errors.name_of_product} onChangeText={text => handleOnchange(text, 'name_of_product')}
                />
              </View>

              <TextInput
                label="Reference Sample"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text =>
                  handleOnchange(text, 'blast_freezing_reference_sample')
                }
                onFocus={() =>
                  handleError(null, 'blast_freezing_reference_sample')
                }
                value={inputs.blast_freezing_reference_sample}
                error={errors.blast_freezing_reference_sample}
              />
              <TextInput
                label="Total Recovery"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text =>
                  handleOnchange(text, 'blast_freezing_total_recovery')
                }
                onFocus={() =>
                  handleError(null, 'blast_freezing_total_recovery')
                }
                value={inputs.blast_freezing_total_recovery}
                error={errors.blast_freezing_total_recovery}
              />

              <TextInput
                label="Remarks"
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#E49972',
                    placeholder: '#E49972',
                    underlineColor: 'transparent',
                    background: '#003489',
                  },
                }}
                style={styles.textbox}
                onChangeText={text =>
                  handleOnchange(text, 'blast_freezing_remarks')
                }
                onFocus={() => handleError(null, 'blast_freezing_remarks')}
                value={inputs.blast_freezing_remarks}
                error={errors.blast_freezing_remarks}
              />
            </View>
          </View>

          <Text style={styles.productbox}>Upload Image...</Text>
          <View style={{flexDirection: 'row', flex: 1}}>
            {imageUri.map((item, index) => {
              // console.log(item)
              return (
                <Image
                  source={{uri: item.base64}}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginRight: (index + 1) % 4 == 0 ? 0 : 28,
                    marginTop: index + 1 > 4 == 0 ? 0 : 28,
                  }}
                />
              );
            })}
          </View>
          <View style={[styles.card, styles.shadowProp]}>
            <View style={{flex: 1, flexDirection: 'row', width: '50%'}}>
              <Button
                title="Take"
                onPress={() => openCamera()}
                style={{width: 50}}
              />
              <Button
                title="Gallery"
                onPress={() => openGallery()}
                style={{width: 50, marginRight: 20}}
              />
            </View>
          </View>

          <Text style={styles.productbox}>Signature Here...</Text>
          <View style={[styles.card, styles.shadowProp]}>
            <View style={{borderWidth: 5, width: '95%', marginLeft: 10}}>
              <SignatureCapture
                style={styles.signature}
                ref={sign}
                onSaveEvent={_onSaveEvent}
                onDragEvent={_onDragEvent}
                showNativeButtons={false}
                showTitleLabel={false}
                backgroundColor="#ffffff"
                strokeColor="#000000"
                minStrokeWidth={4}
                maxStrokeWidth={4}
                viewMode={'portrait'}
              />

              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    saveSign();
                  }}>
                  <Text
                    style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                    Save
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    resetSign();
                  }}>
                  <Text
                    style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                    Reset
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.card, styles.shadowProp]}>
            <View style={{width: '100%'}}>
              {fileData.length > 0
                ? fileData.map((ls, index) => {
                    // console.log(ls)
                    return (
                      <View key={index}>
                        <Text style={styles.input}>Name:{ls.name}</Text>
                      </View>
                    );
                  })
                : null}
              <Button title="Attachment" onPress={() => handleFilePicker()} />
            </View>
          </View>
          <View style={[styles.card, styles.shadowProp]}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subcontainer: {
    // display: 'flex',
    // padding: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    margin: 4,
    color: COLORS.blue,
  },
  input: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    padding: 5,
  },
  TextInput: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: '95%',
    marginLeft: 10,
  },
  signature: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 5,
    width: '100%',
    height: 350,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#922E31',
    margin: 10,
    borderColor: COLORS.black,
    borderRadius: 5,
  },
  head: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  details: {
    backgroundColor: 'red',
    width: '94%',
    height: '50%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    // paddingVertical: 45,
    // paddingHorizontal: 25,
    width: '95%',
    // height:'60%',
    marginVertical: 10,
    alignSelf: 'center',
    padding: 5,
    paddingBottom: 8,
  },
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    // shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 7,
    shadowColor: '#52006A',
    elevation: 5,
  },
  productbox: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textbox: {
    width: '96%',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 45,
  },
});
export default CreateData;
